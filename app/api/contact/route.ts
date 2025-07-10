import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, business, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Using Resend's default domain for now - change to contact@piecewiseai.com once domain is verified
      to: ['kyle@piecewiseai.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1d; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #2563eb; margin-bottom: 5px;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${business ? `<p><strong>Business Type:</strong> ${business}</p>` : ''}
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
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
