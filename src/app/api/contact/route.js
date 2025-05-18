import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Şirket e-posta adresleri
const SENDER_EMAIL = 'noreply@hollandveranda.com';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@hollandveranda.nl';

export async function POST(request) {
  try {
    // Detailed environment logging
    console.log('Environment Variables:', {
      RESEND_API_KEY: process.env.RESEND_API_KEY ? 'Set (masked)' : 'Not set',
      CONTACT_EMAIL: process.env.CONTACT_EMAIL,
      NODE_ENV: process.env.NODE_ENV
    });

    const formData = await request.json();
    console.log('Received form data:', {
      ...formData,
      email: formData.email ? '***@***.***' : undefined // Mask email for privacy
    });

    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const { name, email } = formData;

    // Determine if this is a contact or offerte form submission
    const isOfferte = 'product' in formData;
    
    // Prepare email content based on form type
    const emailContent = isOfferte ? prepareOfferteEmail(formData) : prepareContactEmail(formData);

    console.log('Attempting to send email with Resend...');
    const { data, error } = await resend.emails.send({
      from: `Holland Veranda <${SENDER_EMAIL}>`,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: isOfferte 
        ? `Nieuwe offerte aanvraag van ${name} voor ${formData.product}`
        : `Nieuw contactformulier bericht van ${name}`,
      text: emailContent.text,
      html: emailContent.html,
    });

    if (error) {
      console.error('Resend API Error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw of neem telefonisch contact met ons op.',
        error: error.message // Adding error message for debugging
      },
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