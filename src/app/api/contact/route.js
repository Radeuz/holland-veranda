import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Şirket e-posta adresleri
const SENDER_EMAIL = 'noreply@hollandveranda.com';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@hollandveranda.nl';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Environment check (keep for debugging if needed)
    // console.log('Environment Variables:', {
    //   hasResendKey: !!process.env.RESEND_API_KEY,
    //   nodeEnv: process.env.NODE_ENV
    // });

    // Form data logging (remove in production)
    // console.log('Received form data:', {
    //   name: formData.name,
    //   email: formData.email,
    //   phone: formData.phone,
    //   message: formData.message?.substring(0, 50) + '...'
    // });

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // console.log('Attempting to send email with Resend...');

    const { data, error } = await resend.emails.send({
      from: 'Holland Veranda <noreply@hollandveranda.com>',
      to: ['info@hollandveranda.nl'],
      subject: `Nieuwe contactaanvraag van ${formData.name}`,
      html: `
        <h2>Nieuwe contactaanvraag</h2>
        <p><strong>Naam:</strong> ${formData.name}</p>
        <p><strong>E-mail:</strong> ${formData.email}</p>
        <p><strong>Telefoon:</strong> ${formData.phone}</p>
        <p><strong>Bericht:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // console.log('Email sent successfully:', data);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack
    });
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function prepareContactEmail(formData) {
  const { name, email, subject, message } = formData;
  
  const text = `
Naam: ${name}
Email: ${email}
Onderwerp: ${subject}

Bericht:
${message}
  `;

  const html = `
    <h2>Nieuw contactformulier bericht</h2>
    <p><strong>Naam:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Onderwerp:</strong> ${subject}</p>
    <p><strong>Bericht:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  return { text, html };
}

function prepareOfferteEmail(formData) {
  const { name, email, phone, product, description } = formData;
  
  const text = `
Nieuwe offerte aanvraag:

Naam: ${name}
Email: ${email}
Telefoon: ${phone}
Product: ${product}

Beschrijving:
${description}
  `;

  const html = `
    <h2>Nieuwe offerte aanvraag</h2>
    <p><strong>Naam:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefoon:</strong> ${phone}</p>
    <p><strong>Product:</strong> ${product}</p>
    <p><strong>Beschrijving:</strong></p>
    <p>${description.replace(/\n/g, '<br>')}</p>
  `;

  return { text, html };
} 