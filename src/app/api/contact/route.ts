import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";
import ContactEmail from "@/components/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <invest@bativille.com>",
      to: [process.env.CONTACT_EMAIL || "delivered@resend.dev"],
      subject: `New Inquiry from ${name} at ${company || "No Company"}`,
      replyTo: email,
      react: React.createElement(ContactEmail, { name, email, company, message }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
