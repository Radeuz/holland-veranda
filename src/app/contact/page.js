'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../i18n';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Er is een fout opgetreden. Probeer het later opnieuw.'
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
      <Navigation />

      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-12 pb-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Neem contact op voor advies en een offerte voor duurzame aluminium veranda's en buitenoplossingen op maat.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Contactgegevens</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-600">Adres</h4>
                    <p className="text-gray-600">Amsterdam, Nederland</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <PhoneIcon className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-600">Contact</h4>
                    <p className="text-gray-600">+31 6 12345678</p>
                    <p className="text-gray-600">info@hollandveranda.nl</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-600">Openingstijden</h4>
                    <p className="text-gray-600">Maandag - Vrijdag: 9:00 - 17:00</p>
                    <p className="text-gray-600">Zaterdag: 10:00 - 15:00</p>
                    <p className="text-gray-600">Zondag: Gesloten</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Stuur ons een bericht</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-orange-600 mb-1">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-orange-600 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-orange-600 mb-1">
                    Onderwerp
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-orange-600 mb-1">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-200"
                >
                  Verstuur
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 text-orange-600">{t('contact.location.title')}</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.1234567890123!2d5.0371234!3d51.6571234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6f8c3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sAndorrastraat%203%2C%205171%20PC%20Kaatsheuvel!5e0!3m2!1snl!2snl!4v1635000000000!5m2!1snl!2snl"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <a 
                href="https://www.google.com/maps/dir//Andorrastraat+3,+5171+PC+Kaatsheuvel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                {t('contact.location.directions')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}