import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, date, type, message } = body as {
    name?: string;
    email?: string;
    date?: string;
    type?: string;
    message?: string;
  };

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "hello@mamasbbq.com";

  const eventTypeLabel: Record<string, string> = {
    birthday: "Birthday Party",
    corporate: "Corporate Event",
    wedding: "Wedding",
    other: "Other",
  };

  try {
    await resend.emails.send({
      from: "Mama's BBQ Website <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New Booking Inquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #1e130b; color: #f5ede0;">
          <h1 style="font-size: 28px; font-style: italic; color: #e07a30; margin-bottom: 8px;">New Booking Inquiry</h1>
          <p style="color: #8a6e58; margin-bottom: 32px; font-size: 14px;">Via the Mama's BBQ website contact form</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #3f2a1a; color: #8a6e58; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #3f2a1a; color: #fdf8f2;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #3f2a1a; color: #8a6e58; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #3f2a1a; color: #fdf8f2;">${escapeHtml(email)}</td>
            </tr>
            ${
              date
                ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #3f2a1a; color: #8a6e58; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em;">Event Date</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #3f2a1a; color: #fdf8f2;">${escapeHtml(date)}</td>
            </tr>`
                : ""
            }
            ${
              type
                ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #3f2a1a; color: #8a6e58; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em;">Event Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #3f2a1a; color: #fdf8f2;">${escapeHtml(eventTypeLabel[type] ?? type)}</td>
            </tr>`
                : ""
            }
          </table>

          ${
            message
              ? `<div style="margin-top: 24px;">
            <p style="color: #8a6e58; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 12px;">Message</p>
            <p style="color: #f5ede0; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>`
              : ""
          }

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #3f2a1a;">
            <p style="color: #8a6e58; font-size: 12px;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
