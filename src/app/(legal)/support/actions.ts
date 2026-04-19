"use server";

import { Resend } from "resend";

export async function submitContactForm(
  _prev: { success: boolean; message: string } | null,
  formData: FormData,
): Promise<{ success: boolean; message: string }> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { success: false, message: "Please enter your name." };
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return { success: false, message: "Please enter a message." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "CutEngine Support <noreply@feelingmindful.com>",
      to: "help@feelingmindful.com",
      replyTo: email.trim(),
      subject: `Support request from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    });
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  return { success: true, message: "Message sent! We'll get back to you soon." };
}
