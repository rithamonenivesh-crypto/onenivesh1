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
    const { name, phone, email, subject, message, website } = body;

    // 1. Honeypot Check (Bot Protection)
    if (website) {
      return Response.json({ error: 'System Error. Please try again.' }, { status: 400, headers: corsHeaders });
    }

    // 2. Missing Fields Check
    if (!name || !phone || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400, headers: corsHeaders });
    }

    // 3. Length Validation (Anti-DoS)
    if (name.length > 100 || email.length > 100 || phone.length > 20 || message.length > 2000) {
      return Response.json({ error: 'Input too long' }, { status: 400, headers: corsHeaders });
    }

    // 4. Basic Sanitization (Escape HTML)
    const sanitize = (str: string) => str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m] || m));

    const sName = sanitize(name);
    const sPhone = sanitize(phone);
    const sEmail = sanitize(email);
    const sSubject = sanitize(subject || 'General Inquiry');
    const sMessage = sanitize(message);

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
      replyTo: sEmail,                              // Setting replyTo so you can reply directly to the customer
      subject: `New Website Enquiry: ${sSubject}`,
      text: `Name: ${sName}\nPhone: ${sPhone}\nEmail: ${sEmail}\nSubject: ${sSubject}\n\nMessage:\n${sMessage}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #00E5FF; margin-top: 0;">New Website Enquiry</h2>
          <p><strong>Name:</strong> ${sName}</p>
          <p><strong>Phone Number:</strong> ${sPhone}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${sEmail}">${sEmail}</a></p>
          <p><strong>Interested In:</strong> ${sSubject}</p>
          <hr style="border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 6px;">${sMessage}</p>
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
