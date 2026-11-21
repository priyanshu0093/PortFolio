import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please write a message with at least 5 characters." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "unknown",
    };

    console.log("[CONTACT_API] Received message:", payload);

    // If Resend API Key is configured in .env, send the email
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL || "priyanshukumawat207@gmail.com"],
          reply_to: payload.email,
          subject: `New Portfolio Message from ${payload.name}`,
          text: `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("[CONTACT_API] Resend API error:", errorData);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully! I will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API] Internal server error:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
