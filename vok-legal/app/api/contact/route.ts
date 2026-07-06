import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: connect to your email provider (e.g. Resend, SendGrid) or CRM here.
  // Example with Resend:
  // await resend.emails.send({ from: "no-reply@voklegal.com", to: "vokagency1@gmail.com", subject: `New inquiry from ${body.name}`, text: body.message });

  console.log("New VOK Legal Agency inquiry:", body);

  return NextResponse.json({ ok: true });
}
