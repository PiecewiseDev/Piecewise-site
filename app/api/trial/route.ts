import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key-for-build') {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Piecewise <noreply@piecewiseai.com>',
      to: ['kyle@piecewiseai.com'],
      subject: `New Free Trial Interest from ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1d; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Free Trial Request
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #2563eb; margin-bottom: 5px;">Contact Information</h3>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="margin: 20px 0; background-color: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
            <p style="margin: 0; line-height: 1.6;">
              This person submitted their email through the free trial form on the homepage. They're interested in getting started.
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This email was sent from the homepage free trial form.</p>
            <p>Reply directly to reach them at ${email}.</p>
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
