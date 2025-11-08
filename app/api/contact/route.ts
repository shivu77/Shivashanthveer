import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Try Resend first, fallback to console log if not configured
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>", // Update with your domain
          to: process.env.CONTACT_EMAIL || "your-email@example.com",
          subject: `New contact form submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
          replyTo: email,
        })

        return NextResponse.json({ success: true })
      } catch (resendError) {
        console.error("Resend error:", resendError)
        // Fall through to fallback
      }
    }

    // Fallback: Log to console (for development)
    console.log("Contact form submission:", { name, email, message })

    // In production, you might want to use Formspree or another service as fallback
    // For now, we'll return success even if Resend fails (for development)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}


