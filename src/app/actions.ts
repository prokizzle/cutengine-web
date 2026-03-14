"use server";

import { Resend } from "resend";

const PROJECT = "cutengine";

export async function joinWaitlist(
  _prev: { success: boolean; message: string } | null,
  formData: FormData,
): Promise<{ success: boolean; message: string }> {
  const email = formData.get("email");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    // Resend Audiences — primary backend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });
  } catch (error: unknown) {
    if (error instanceof Error && error.message?.includes("already exists")) {
      return { success: true, message: "You're already on the list! We'll be in touch." };
    }
    console.error("Resend error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  // DynamoDB — best-effort, don't block the response
  try {
    const { addWaitlistEntry } = await import("@/lib/dynamo");
    await addWaitlistEntry(PROJECT, email);
  } catch (err) {
    const error = err as Error;
    if (!error.name?.includes("ConditionalCheckFailed")) {
      console.error("DynamoDB error (non-blocking):", error.message);
    }
  }

  return { success: true, message: "You're on the list! We'll email you when CutEngine launches." };
}
