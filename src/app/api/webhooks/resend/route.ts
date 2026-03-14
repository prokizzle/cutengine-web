import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Webhook } from "svix";
import { storeInboundEmail } from "@/lib/dynamo";

const resend = new Resend(process.env.RESEND_API_KEY);
const webhookSecret = process.env.RESEND_WEBHOOK_SECRET!;
const PROJECT = "cutengine";

interface ReceivedEmailData {
  email_id: string;
  created_at: string;
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  message_id: string;
  attachments: Array<{
    id: string;
    filename: string;
    content_type: string;
  }>;
}

interface WebhookEvent {
  type: string;
  created_at: string;
  data: ReceivedEmailData;
}

export async function POST(req: NextRequest) {
  const payload = await req.text();

  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: "Missing svix headers" }, { status: 400 });
  }

  let event: WebhookEvent;
  try {
    const wh = new Webhook(webhookSecret);
    event = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch {
    console.error("Webhook verification failed");
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 });
  }

  if (event.type === "email.received") {
    const { email_id, from, to, subject } = event.data;

    // Retrieve full email content from Resend API
    let body: string | undefined;
    try {
      const email = await resend.emails.get(email_id);
      body = JSON.stringify(email);
    } catch (err) {
      console.error("Failed to retrieve email content:", err);
    }

    // Store in DynamoDB
    try {
      await storeInboundEmail(PROJECT, {
        email_id,
        from,
        to,
        subject,
        received_at: event.created_at,
        body,
      });
    } catch (err) {
      console.error("Failed to store inbound email:", err);
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
