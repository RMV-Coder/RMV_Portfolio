import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import prisma from '@/lib/prisma';
import { escapeHtml } from '@/lib/utils';

const RatingSchema = z.object({
  categories: z.object({
    uiux: z.number().min(0).max(5),
    performance: z.number().min(0).max(5),
    content: z.number().min(0).max(5),
    overall: z.number().min(1).max(5),
  }),
  feedback: z.string().max(1000).optional(),
});

// Simple rate limiting
const ratingAttempts = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const attempt = ratingAttempts.get(ip);

  if (!attempt || now > attempt.resetTime) {
    ratingAttempts.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }

  if (attempt.count >= 3) {
    return false;
  }

  attempt.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many rating submissions. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate
    const body: unknown = await req.json();
    const data = RatingSchema.parse(body);

    // Get visitor info
    const userAgent = req.headers.get('user-agent') || 'Unknown';
    const country = req.headers.get('x-vercel-ip-country') || 'Unknown';
    const city = req.headers.get('x-vercel-ip-city') || 'Unknown';
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Manila',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    // Calculate average rating
    const { categories } = data;
    const validRatings = Object.values(categories).filter(r => r > 0);
    const averageRating = validRatings.length > 0
      ? (validRatings.reduce((a, b) => a + b, 0) / validRatings.length).toFixed(2)
      : '0.00';

    // Create star representation
    const renderStars = (rating: number) => {
      return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    // Check if SMTP is configured (skip email if not, but still save to DB)
    const smtpConfigured = process.env.SMTP_USER && process.env.SMTP_PASS;

    // Send email notification (if SMTP is configured)
    if (smtpConfigured) {
      const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/["\s]/g, ''), // Remove quotes and spaces
      },
      // Add timeout settings for serverless
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .rating-section { background: white; padding: 20px; margin: 20px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .rating-item { margin: 15px 0; padding: 10px; border-left: 3px solid #667eea; }
            .rating-label { font-weight: bold; color: #4b5563; margin-bottom: 5px; }
            .stars { font-size: 20px; letter-spacing: 2px; }
            .feedback-box { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px; }
            .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .info-table td { padding: 8px; border-bottom: 1px solid #e5e7eb; }
            .info-table td:first-child { font-weight: bold; color: #6b7280; width: 40%; }
            .average { font-size: 36px; font-weight: bold; color: #667eea; text-align: center; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎉 New Portfolio Rating!</h1>
              <p style="margin: 10px 0 0 0;">Someone just rated your portfolio</p>
            </div>
            
            <div class="content">
              <div class="average">
                ${averageRating} / 5.0
                <div style="font-size: 14px; color: #6b7280; font-weight: normal; margin-top: 5px;">
                  Average Rating
                </div>
              </div>

              <div class="rating-section">
                <h2 style="margin-top: 0; color: #1f2937;">Rating Breakdown</h2>
                
                ${categories.uiux > 0 ? `
                  <div class="rating-item">
                    <div class="rating-label">UI/UX Design</div>
                    <div class="stars">${renderStars(categories.uiux)}</div>
                    <div style="color: #6b7280; font-size: 14px;">${categories.uiux}/5</div>
                  </div>
                ` : ''}
                
                ${categories.performance > 0 ? `
                  <div class="rating-item">
                    <div class="rating-label">Performance & Speed</div>
                    <div class="stars">${renderStars(categories.performance)}</div>
                    <div style="color: #6b7280; font-size: 14px;">${categories.performance}/5</div>
                  </div>
                ` : ''}
                
                ${categories.content > 0 ? `
                  <div class="rating-item">
                    <div class="rating-label">Content Quality</div>
                    <div class="stars">${renderStars(categories.content)}</div>
                    <div style="color: #6b7280; font-size: 14px;">${categories.content}/5</div>
                  </div>
                ` : ''}
                
                <div class="rating-item" style="border-left-color: #10b981;">
                  <div class="rating-label">Overall Experience</div>
                  <div class="stars">${renderStars(categories.overall)}</div>
                  <div style="color: #6b7280; font-size: 14px;">${categories.overall}/5</div>
                </div>
              </div>

              ${data.feedback ? `
                <div class="feedback-box">
                  <strong style="color: #92400e;">💬 Feedback:</strong>
                  <p style="margin: 10px 0 0 0; color: #78350f;">${escapeHtml(data.feedback)}</p>
                </div>
              ` : ''}

              <div class="rating-section">
                <h3 style="margin-top: 0; color: #1f2937;">Visitor Information</h3>
                <table class="info-table">
                  <tr>
                    <td>Timestamp</td>
                    <td>${timestamp}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>${escapeHtml(city)}, ${escapeHtml(country)}</td>
                  </tr>
                  <tr>
                    <td>User Agent</td>
                    <td style="font-size: 12px; color: #6b7280;">${escapeHtml(userAgent)}</td>
                  </tr>
                  <tr>
                    <td>IP Address</td>
                    <td>${escapeHtml(ip)}</td>
                  </tr>
                </table>
              </div>

              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                This rating was submitted via your portfolio website
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.SMTP_TO || process.env.SMTP_USER,
        subject: `⭐ New Portfolio Rating: ${averageRating}/5.0`,
        html: emailHtml,
      });
    } else {
      console.warn('SMTP not configured - email notification skipped');
    }

    // Store in Prisma database
    try {
      await prisma.portfolioRating.create({
        data: {
          uiux: data.categories.uiux,
          performance: data.categories.performance,
          content: data.categories.content,
          overall: data.categories.overall,
          feedback: data.feedback || null,
          ipAddress: ip,
          userAgent,
          location: `${city}, ${country}`,
          country,
          city,
        },
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Email was sent successfully, but DB failed
      // Continue anyway - rating is still recorded via email
    }

    return NextResponse.json(
      { success: true, message: 'Rating submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid rating data' },
        { status: 400 }
      );
    }

    console.error('Rating submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit rating. Please try again later.' },
      { status: 500 }
    );
  }
}
