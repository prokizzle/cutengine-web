"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID!;

export async function joinWaitlist(
  _prev: { success: boolean; message: string } | null,
  formData: FormData,
): Promise<{ success: boolean; message: string }> {
  const email = formData.get("email");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    await resend.contacts.create({
      email,
      audienceId,
    });

    return { success: true, message: "You're on the list! We'll email you when CutEngine launches." };
  } catch (error: unknown) {
    // Resend returns 409 if the contact already exists
    if (error instanceof Error && error.message?.includes("already exists")) {
      return { success: true, message: "You're already on the list! We'll be in touch." };
    }

    console.error("Resend error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
