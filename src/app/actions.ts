"use server";

import { Resend } from "resend";
import { addWaitlistEntry } from "@/lib/dynamo";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID!;
const PROJECT = "cutengine";

export async function joinWaitlist(
  _prev: { success: boolean; message: string } | null,
  formData: FormData,
): Promise<{ success: boolean; message: string }> {
  const email = formData.get("email");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // Write to both Resend Audiences and DynamoDB in parallel
  const results = await Promise.allSettled([
    resend.contacts.create({ email, audienceId }),
    addWaitlistEntry(PROJECT, email),
  ]);

  const resendResult = results[0];
  const dynamoResult = results[1];

  // Check if both failed
  if (resendResult.status === "rejected" && dynamoResult.status === "rejected") {
    const resendErr = resendResult.reason;
    // Still handle "already exists" as success
    if (resendErr instanceof Error && resendErr.message?.includes("already exists")) {
      return { success: true, message: "You're already on the list! We'll be in touch." };
    }
    console.error("Waitlist error:", resendErr, dynamoResult.reason);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  // DynamoDB ConditionalCheckFailedException means duplicate — that's fine
  if (dynamoResult.status === "rejected") {
    const err = dynamoResult.reason as Error;
    if (!err.name?.includes("ConditionalCheckFailed")) {
      console.error("DynamoDB error (non-blocking):", err);
    }
  }

  return { success: true, message: "You're on the list! We'll email you when CutEngine launches." };
}
