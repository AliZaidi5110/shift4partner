import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check honeypot anti-spam
    if (body.websiteUrlHoneypot) {
      return NextResponse.json({ success: true, message: "Accepted" });
    }

    // In production, integrate with Resend API / CRM Webhook:
    // e.g. await resend.emails.send({...}) or await fetch(process.env.CRM_WEBHOOK_URL, ...)
    console.log("New Shift4 Partner Lead Received:", {
      name: body.fullName,
      phone: body.phone,
      email: body.email,
      businessType: body.businessType,
      monthlyTurnover: body.monthlyTurnover,
      utmSource: body.utmSource,
      landingPage: body.landingPage,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Lead received successfully. A Shift4 onboarding specialist will contact you shortly.",
    });
  } catch (error) {
    console.error("Lead processing error:", error);
    return NextResponse.json(
      { success: false, message: "Error processing lead submission" },
      { status: 500 }
    );
  }
}
