import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { contactFormSchema } from '@/lib/validations'

// Rate limiting storage (in production, use Redis or database)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // 5 requests per 15 minutes

  const record = rateLimit.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verify transporter configuration
    await transporter.verify()

    // Email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #495057; }
            .value { margin-top: 5px; padding: 10px; background: #f8f9fa; border-radius: 4px; }
            .footer { margin-top: 20px; padding: 20px; text-align: center; color: #6c757d; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>You have received a new message from your portfolio website.</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${validatedData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${validatedData.email}</div>
              </div>
              
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${validatedData.subject}</div>
              </div>
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your portfolio contact form.</p>
              <p>Time: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
Sent from portfolio contact form at ${new Date().toLocaleString()}
      `,
      html: htmlContent,
      replyTo: validatedData.email,
    })

    // Optional: Send auto-reply to the sender
    if (process.env.SEND_AUTO_REPLY === 'true') {
      await transporter.sendMail({
        from: `"Raymond Valdepeñas" <${process.env.SMTP_USER}>`,
        to: validatedData.email,
        subject: 'Thank you for your message!',
        text: `
Hi ${validatedData.name},

Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Best regards,
Raymond Valdepeñas
Full Stack Developer

Portfolio: https://raymondvaldepenas-dev.vercel.app
GitHub: https://github.com/RMV-Coder

---
This is an automated response from my portfolio contact form.
        `,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Thank you for your message!</title>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #007bff; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
                .content { background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
                .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; }
                .signature-name { font-weight: bold; color: #007bff; margin-bottom: 5px; }
                .signature-title { color: #6c757d; margin-bottom: 10px; font-style: italic; }
                .signature-links { margin-top: 10px; }
                .signature-links a { color: #007bff; text-decoration: none; margin-right: 15px; }
                .signature-links a:hover { text-decoration: underline; }
                .automated-note { margin-top: 15px; padding-top: 15px; border-top: 1px solid #f1f1f1; color: #6c757d; font-size: 12px; font-style: italic; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>Thank you for your message!</h2>
                </div>
                
                <div class="content">
                  <p>Hi ${validatedData.name},</p>
                  
                  <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
                  
                  <div class="signature">
                    <div class="signature-name">Raymond Valdepeñas</div>
                    <div class="signature-title">Full Stack Developer</div>
                    <div class="signature-links">
                      <a href="https://raymondvaldepenas-dev.vercel.app" target="_blank">Portfolio</a>
                      <a href="https://github.com/RMV-Coder" target="_blank">GitHub</a>
                    </div>
                    <div class="automated-note">
                      This is an automated response from my portfolio contact form.
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      })
    }

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Handle validation errors
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs.' },
        { status: 400 }
      )
    }
    
    // Handle nodemailer errors
    if (error instanceof Error && error.message.includes('SMTP')) {
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}