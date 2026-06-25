import { NextResponse } from "next/server";
import { z } from "zod";
import { getResendClient } from "@/lib/resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short").max(2000),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid input" },
        { status: 400 },
      );
    }

    const { name, email, message, website } = parsed.data;

    if (website) {
      return NextResponse.json({ success: true });
    }

    const resend = getResendClient();
    const contactEmail = process.env.CONTACT_EMAIL || "shrinetaadi@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    if (!resend) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please set RESEND_API_KEY.",
        },
        { status: 503 },
      );
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h2>New message from shrinetaadi.in</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
