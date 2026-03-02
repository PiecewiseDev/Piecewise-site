import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

export async function POST(request: NextRequest) {
  try {
    // Check if API key is available at runtime
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key-for-build') {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const body = await request.json();
    const { name, email, business, website, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const fullName = name;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Piecewise <noreply@piecewiseai.com>',
      to: ['kyle@piecewiseai.com'],
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1d; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #2563eb; margin-bottom: 5px;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${business ? `<p><strong>Business:</strong> ${business}</p>` : ''}
            ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
          </div>

          ${
            message
              ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #2563eb; margin-bottom: 5px;">Message</h3>
              <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
                <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
          `
              : ''
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This email was sent from the contact form on your website.</p>
            <p>Reply directly to this email to respond to ${fullName}.</p>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    });

    if (error) {
      // Don't expose internal email service errors to the client
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (error) {
    // Don't expose internal server errors to the client
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
