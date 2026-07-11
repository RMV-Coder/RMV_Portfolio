import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { escapeHtml } from '@/lib/utils'

// Rate limiting map
const downloadTracking = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5

function checkRateLimit(ip: string): boolean {
  const now = Date.now()

  // Evict fully-expired entries so the map can't grow unbounded.
  for (const [key, times] of downloadTracking) {
    if (times.every(t => now - t >= RATE_LIMIT_WINDOW)) downloadTracking.delete(key)
  }

  const requests = downloadTracking.get(ip) || []

  // Filter out old requests
  const recentRequests = requests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW)

  if (recentRequests.length >= MAX_REQUESTS) {
    return false
  }

  recentRequests.push(now)
  downloadTracking.set(ip, recentRequests)
  return true
}

// Only accept requests that originate from the site itself. A same-origin
// browser fetch always sends the Origin header; a bare curl loop does not,
// which blocks the trivial inbox-flood / SMTP-quota-exhaustion path.
function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  const host = request.headers.get('host')
  if (!origin || !host) return false
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

function getDeviceInfo(userAgent: string): string {
  const ua = userAgent.toLowerCase()
  
  if (ua.includes('windows')) return 'Windows'
  if (ua.includes('macintosh') || ua.includes('mac os')) return 'macOS'
  if (ua.includes('linux') && ua.includes('android')) return 'Android'
  if (ua.includes('linux')) return 'Linux'
  if (ua.includes('iphone') || ua.includes('ipad')) return 'iOS'
  
  return 'Unknown'
}

function getBrowserInfo(userAgent: string): string {
  const ua = userAgent.toLowerCase()
  
  if (ua.includes('edg')) return 'Edge'
  if (ua.includes('chrome')) return 'Chrome'
  if (ua.includes('firefox')) return 'Firefox'
  if (ua.includes('safari') && !ua.includes('chrome')) return 'Safari'
  if (ua.includes('opera') || ua.includes('opr')) return 'Opera'
  
  return 'Unknown'
}

export async function POST(request: NextRequest) {
  try {
    // Reject cross-origin / scripted requests that didn't come from the site.
    if (!isSameOrigin(request)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      )
    }

    // Get user agent and location info
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const device = getDeviceInfo(userAgent)
    const browser = getBrowserInfo(userAgent)
    
    // Get location from headers (provided by Vercel)
    const country = request.headers.get('x-vercel-ip-country') || 'Unknown'
    const city = request.headers.get('x-vercel-ip-city') || 'Unknown'
    const region = request.headers.get('x-vercel-ip-country-region') || 'Unknown'
    
    // Get timezone
    const timezone = request.headers.get('x-vercel-ip-timezone') || 'Unknown'
    
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: timezone !== 'Unknown' ? timezone : 'UTC',
      dateStyle: 'full',
      timeStyle: 'long'
    })

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/["\s]/g, '') || '',
      },
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    })

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
          .info-row { margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #667eea; }
          .label { font-weight: bold; color: #667eea; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📄 Resume Downloaded!</h2>
          </div>
          <div class="content">
            <p>Someone just downloaded your resume. Here are the details:</p>
            
            <div class="info-row">
              <span class="label">📅 Date & Time:</span> ${timestamp}
            </div>
            
            <div class="info-row">
              <span class="label">🌍 Location:</span> ${escapeHtml(city)}, ${escapeHtml(region)}, ${escapeHtml(country)}
            </div>

            <div class="info-row">
              <span class="label">💻 Device:</span> ${escapeHtml(device)}
            </div>

            <div class="info-row">
              <span class="label">🌐 Browser:</span> ${escapeHtml(browser)}
            </div>

            <div class="info-row">
              <span class="label">🔗 IP Address:</span> ${escapeHtml(ip)}
            </div>

            <div class="info-row">
              <span class="label">🕒 Timezone:</span> ${escapeHtml(timezone)}
            </div>

            <div class="footer">
              <p>This is an automated notification from your portfolio website.</p>
              <p><strong>User Agent:</strong> ${escapeHtml(userAgent)}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `📄 Resume Downloaded - ${device} from ${city}, ${country}`,
      html: emailHtml,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Download tracked successfully'
    })
  } catch (error) {
    console.error('[Download Tracking Error]:', error)
    
    // Return success even if email fails (don't block download)
    return NextResponse.json({ 
      success: true,
      message: 'Download tracked (email notification failed)'
    })
  }
}
