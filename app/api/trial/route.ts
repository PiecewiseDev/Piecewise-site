import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

const MAX_EMAIL_LENGTH = 254;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key-for-build') {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const body = await request.json();
    const { email, turnstileToken } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Input length limit
    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json({ error: 'Email is too long' }, { status: 400 });
    }

    // Cloudflare Turnstile verification (skipped in local development)
    if (process.env.TURNSTILE_SECRET_KEY && process.env.NODE_ENV !== 'development') {
      if (!turnstileToken) {
        return NextResponse.json({ error: 'Security check required' }, { status: 400 });
      }
      const turnstileRes = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
          }),
        }
      );
      const turnstileData = await turnstileRes.json();
      if (!turnstileData.success) {
        return NextResponse.json({ error: 'Security check failed' }, { status: 400 });
      }
    }

    const safeEmail = escapeHtml(String(email));

    const { data, error } = await resend.emails.send({
      from: 'Piecewise <noreply@piecewiseai.com>',
      to: ['kyle@piecewiseai.com'],
      subject: `New Free Trial Interest from ${safeEmail}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1d; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Free Trial Request
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #2563eb; margin-bottom: 5px;">Contact Information</h3>
            <p><strong>Email:</strong> ${safeEmail}</p>
          </div>

          <div style="margin: 20px 0; background-color: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
            <p style="margin: 0; line-height: 1.6;">
              This person submitted their email through the free trial form on the homepage. They're interested in getting started.
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This email was sent from the homepage free trial form.</p>
            <p>Reply directly to reach them at ${safeEmail}.</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
