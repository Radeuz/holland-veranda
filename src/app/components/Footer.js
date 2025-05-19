'use client';

import { useTranslation } from '../i18n';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 text-white py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-orange-900 font-medium">info@hollandveranda.nl</p>
              <p className="text-orange-900 font-medium">+31 6 12345678</p>
              <p className="text-orange-900 font-medium">Amsterdam, Nederland</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Openingstijden</h3>
            <div className="space-y-2">
              <p className="text-orange-900 font-medium">Maandag - Vrijdag: 9:00 - 17:00</p>
              <p className="text-orange-900 font-medium">Zaterdag: 10:00 - 15:00</p>
              <p className="text-orange-900 font-medium">Zondag: Gesloten</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Sociale Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/hollandveranda.nl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <radialGradient id="ig-gradient" cx="50%" cy="50%" r="75%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fdf497" />
                    <stop offset="60%" stopColor="#fd5949" />
                    <stop offset="90%" stopColor="#d6249f" />
                    <stop offset="100%" stopColor="#285AEB" />
                  </radialGradient>
                  <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
                  <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8A4.8 4.8 0 1 0 12 7.2Z" fill="#fff"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#1877F3">
                  <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" fill="#1877F3"/>
                  <path d="M16.671 24v-9.294h3.128l.467-3.622h-3.595V8.413c0-1.048.291-1.763 1.795-1.763l1.918-.001V3.625c-.332-.044-1.47-.143-2.795-.143-2.766 0-4.659 1.688-4.659 4.788v2.671H9.692v3.622h3.128V24h3.851z" fill="#fff"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@hollandveranda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12.5 2c0 .828.672 1.5 1.5 1.5h1.5v2.5c0 2.485 2.015 4.5 4.5 4.5V13c0 3.59-2.91 6.5-6.5 6.5S7 16.59 7 13s2.91-6.5 6.5-6.5V2z" fill="#000"/>
                  <path d="M15.5 3.5V7c0 2.485 2.015 4.5 4.5 4.5" stroke="#25F4EE" strokeWidth="1.5"/>
                  <path d="M12.5 2v11a2.5 2.5 0 1 1-2.5-2.5" stroke="#FE2C55" strokeWidth="1.5"/>
                  <circle cx="12.5" cy="13.5" r="1.5" fill="#25F4EE"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Snelle Links</h3>
            <div className="space-y-2">
              <Link href="/over-ons" className="text-orange-900 hover:text-white transition-colors block font-medium">Over Ons</Link>
              <Link href="/producten" className="text-orange-900 hover:text-white transition-colors block font-medium">Producten</Link>
              <Link href="/projecten" className="text-orange-900 hover:text-white transition-colors block font-medium">Projecten</Link>
              <Link href="/contact" className="text-orange-900 hover:text-white transition-colors block font-medium">Contact</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-orange-900 font-medium">
            &copy; {currentYear} Holland Veranda. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
} 