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

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-8 text-white">{t('contact.info.title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="text-gray-300">Email</p>
                      <a 
                        href={`mailto:${t('contact.info.email')}`}
                        className="text-white hover:text-orange-500 transition-colors"
                      >
                        {t('contact.info.email')}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <PhoneIcon className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="text-gray-300">Telefoon</p>
                      <a 
                        href={`tel:${t('contact.info.phone')}`}
                        className="text-white hover:text-orange-500 transition-colors"
                      >
                        {t('contact.info.phone')}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="text-gray-300">Adres</p>
                      <p className="text-white">{t('contact.info.address')}</p>
                      <p className="text-white">{t('contact.info.city')}</p>
                      <p className="text-white">Nederland</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 text-white">{t('contact.hours.title')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <ClockIcon className="w-6 h-6 text-orange-500" />
                      <p className="text-white">{t('contact.hours.weekdays')}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <ClockIcon className="w-6 h-6 text-orange-500" />
                      <p className="text-white">{t('contact.hours.saturday')}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <ClockIcon className="w-6 h-6 text-orange-500" />
                      <p className="text-white">{t('contact.hours.sunday')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-8 text-white">{t('contact.form.title')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
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
                    className={`w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold ${
                      status.loading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {status.loading ? 'Verzenden...' : t('contact.form.submit')}
                  </button>
                </form>
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