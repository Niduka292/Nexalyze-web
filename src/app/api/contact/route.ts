import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Receives the contact form payload and sends an email notification.
 *
 * ── To connect Resend (recommended — already used in HiveBliss) ────────────
 *
 *   1. npm install resend
 *   2. Add RESEND_API_KEY to .env.local
 *   3. Uncomment the Resend block below and remove the mock response.
 *
 * ── To connect Formspree (zero-backend option) ─────────────────────────────
 *   Replace the fetch URL in Contact.tsx with your Formspree endpoint and
 *   remove this API route entirely.
 */

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // ── Validation ────────────────────────────────────────────────────────
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── Resend integration (uncomment to activate) ─────────────────────────
    /*
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from:    "Nexora Website <noreply@nexorasolutions.lk>",
      to:      ["hello@nexorasolutions.lk"],
      replyTo: body.email,
      subject: `New enquiry from ${body.name} — ${body.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td><strong>Name</strong></td><td>${body.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${body.email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${body.phone ?? "—"}</td></tr>
          <tr><td><strong>Service</strong></td><td>${body.service}</td></tr>
          <tr><td><strong>Message</strong></td><td>${body.message}</td></tr>
        </table>
      `,
    });
    */

    // ── Mock success (remove once real email is wired) ─────────────────────
    console.log("[Contact API] New submission:", {
      name: body.name,
      email: body.email,
      service: body.service,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API] Error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
