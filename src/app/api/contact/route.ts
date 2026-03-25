import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return Response.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, subject, message } = body;

    // Validate input
    if (!name || !phone || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400, headers: corsHeaders });
    }

    // SMTP Configuration from Environment Variables
    const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing SMTP environment variables');
      return Response.json({ error: 'Email server is not configured correctly' }, { status: 500, headers: corsHeaders });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465), // Default to 465 for secure, or 587
      secure: SMTP_PORT !== '587', // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"One Nivesh Website" <${SMTP_USER}>`, // Send *from* your authenticated SMTP user
      to: 'info@onenivesh.com',                    // Send *to* your official email address
      replyTo: email,                              // Setting replyTo so you can reply directly to the customer
      subject: `New Website Enquiry: ${subject || 'General Inquiry'}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #00E5FF; margin-top: 0;">New Website Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Interested In:</strong> ${subject || 'General'}</p>
          <hr style="border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 6px;">${message}</p>
        </div>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Message sent successfully!' }, { status: 200, headers: corsHeaders });

  } catch (error: any) {
    console.error('Contact API error:', error);
    return Response.json({ error: error.message || 'Failed to send message' }, { status: 500, headers: corsHeaders });
  }
}
