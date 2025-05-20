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
    subject: '',
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
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || data.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: `Er is een fout opgetreden. Probeer het later opnieuw. (${error.message})`
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
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 pt-12 pb-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              Neem contact met ons op voor meer informatie of een vrijblijvende offerte.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="order-1 lg:order-1">
              <div className="bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 rounded-xl shadow-lg p-8 group">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Stuur Ons Een Bericht</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Naam</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-orange-50/90 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900 placeholder-orange-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-orange-50/90 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900 placeholder-orange-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Onderwerp</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-orange-50/90 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900 placeholder-orange-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Bericht</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-orange-50/90 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-orange-900 placeholder-orange-300"
                    ></textarea>
                  </div>
                  {status.message && (
                    <div className={`p-4 rounded-lg ${
                      status.success ? 'bg-green-900/50 text-green-200' : 
                      status.error ? 'bg-red-900/50 text-red-200' : 
                      'bg-blue-900/50 text-blue-200'
                    }`}>
                      {status.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status.loading}
                    className={`w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 ${
                      status.loading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {status.loading ? 'Verzenden...' : 'Verstuur bericht'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div className="order-2 lg:order-2">
              <div className="bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Contactgegevens</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center"><MapPinIcon className="w-5 h-5 mr-2 text-orange-200" />Adres</h3>
                    <p className="text-orange-900 font-medium">
                      Andorrastraat 3<br />
                      5171 PC Kaatsheuvel<br />
                      Nederland
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center"><PhoneIcon className="w-5 h-5 mr-2 text-orange-200" />Contact</h3>
                    <div className="text-orange-900 font-medium space-y-1">
                      <div>+31 (0) 618 612 190</div>
                      <div>+31 (0) 132 340 905</div>
                      <div>info@hollandveranda.nl</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center"><ClockIcon className="w-5 h-5 mr-2 text-orange-200" />Openingstijden</h3>
                    <div>
                      <span className="text-orange-900 font-medium">Maandag - Vrijdag:</span> <span className="text-orange-900 font-medium">09:00 - 17:00</span><br />
                      <span className="text-orange-900 font-medium">Zaterdag:</span> <span className="text-orange-900 font-medium">10:00 - 15:00</span><br />
                      <span className="text-orange-900 font-medium">Zondag:</span> <span className="text-orange-900 font-medium">Gesloten</span>
                    </div>
                  </div>
                </div>
              </div>
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