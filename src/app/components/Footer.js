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
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="url(#paint0_linear)"/>
                  <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F58529"/>
                      <stop offset="0.5" stopColor="#DD2A7B"/>
                      <stop offset="1" stopColor="#515BD4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@hollandveranda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 3H13V15.5C13 16.8807 11.8807 18 10.5 18C9.11929 18 8 16.8807 8 15.5C8 14.1193 9.11929 13 10.5 13C10.7761 13 11 13.2239 11 13.5V11.5C8.51472 11.5 6.5 13.5147 6.5 16C6.5 18.4853 8.51472 20.5 11 20.5C13.4853 20.5 15.5 18.4853 15.5 16V7.5C16.3284 8.32843 17.5 8.5 18.5 8.5V6.5C17.5 6.5 16.5 5.5 16.5 4.5H14.5C14.5 6.5 12.5 8.5 10.5 8.5V10.5C12.5 10.5 14.5 8.5 14.5 6.5V3H9.5Z" fill="#000"/>
                  <path d="M15.5 7.5V16C15.5 18.4853 13.4853 20.5 11 20.5C8.51472 20.5 6.5 18.4853 6.5 16C6.5 13.5147 8.51472 11.5 11 11.5V13.5C9.11929 13.5 8 14.6193 8 16C8 17.3807 9.11929 18.5 10.5 18.5C11.8807 18.5 13 17.3807 13 16V3H15.5V7.5Z" fill="#25F4EE"/>
                  <path d="M18.5 8.5C17.5 8.5 16.3284 8.32843 15.5 7.5V3H18.5V8.5Z" fill="#FE2C55"/>
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
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Snelle Links</h3>
            <div className="space-y-2">
              <Link href="/over-ons" className="flex items-center text-orange-900 hover:text-white transition-colors font-medium">
                <span className="mr-2">&gt;</span> Over Ons
              </Link>
              <Link href="/producten" className="flex items-center text-orange-900 hover:text-white transition-colors font-medium">
                <span className="mr-2">&gt;</span> Producten
              </Link>
              <Link href="/projecten" className="flex items-center text-orange-900 hover:text-white transition-colors font-medium">
                <span className="mr-2">&gt;</span> Projecten
              </Link>
              <Link href="/contact" className="flex items-center text-orange-900 hover:text-white transition-colors font-medium">
                <span className="mr-2">&gt;</span> Contact
              </Link>
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