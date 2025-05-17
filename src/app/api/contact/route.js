import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@hollandveranda.nl';
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'contact@hollandveranda.nl';

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email } = formData;

    // Determine if this is a contact or offerte form submission
    const isOfferte = 'product' in formData;
    
    // Prepare email content based on form type
    const emailContent = isOfferte ? prepareOfferteEmail(formData) : prepareContactEmail(formData);

    const { data, error } = await resend.emails.send({
      from: `Holland Veranda <${SENDER_EMAIL}>`,
      to: [CONTACT_EMAIL],
      subject: isOfferte 
        ? `Nieuwe offerte aanvraag van ${name} voor ${formData.product}`
        : `Nieuw contactformulier bericht van ${name}`,
      text: emailContent.text,
      html: emailContent.html,
    });

    if (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw of neem telefonisch contact met ons op.' 
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