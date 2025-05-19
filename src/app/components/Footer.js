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
                  <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)"/>
                  <path d="M12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z" fill="white"/>
                  <circle cx="17" cy="7" r="1.5" fill="white"/>
                  <defs>
                    <linearGradient id="instagram-gradient" x1="1.5" y1="1.5" x2="22.5" y2="22.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFDD55"/>
                      <stop offset="0.5" stopColor="#FF543E"/>
                      <stop offset="1" stopColor="#C837AB"/>
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
                  <path d="M12.5 4.00002C12.5 4.00002 12.8333 4.00002 13.5 4.00002C14.1667 4.00002 14.1667 4.00002 14.5 4.00002V8.00002C14.5 8.00002 14.9227 7.99362 15.5 8.00002C16.0773 8.00642 16.5 8.00002 16.5 8.00002V12C16.5 12 15.8333 12 14.5 12C13.1667 12 12.5 11.3333 12.5 10" stroke="white" strokeWidth="2"/>
                  <path d="M12.5 10C12.5 13 10 15.5 7 15.5C4 15.5 1.5 13 1.5 10C1.5 7 4 4.5 7 4.5C10 4.5 12.5 7 12.5 10Z" stroke="white" strokeWidth="2"/>
                  <path d="M7 12.5C8.38071 12.5 9.5 11.3807 9.5 10C9.5 8.61929 8.38071 7.5 7 7.5C5.61929 7.5 4.5 8.61929 4.5 10C4.5 11.3807 5.61929 12.5 7 12.5Z" stroke="white" strokeWidth="2"/>
                  <rect width="24" height="24" rx="6" fill="black"/>
                  <path d="M17.4 6.69999C17.4 5.95999 16.8 5.39999 16.1 5.39999C15.4 5.39999 14.8 5.95999 14.8 6.69999C14.8 7.43999 15.3 7.99999 16.1 7.99999C16.8 7.99999 17.4 7.43999 17.4 6.69999Z" fill="#00F2EA"/>
                  <path d="M12.7 11.3C11.1 11.3 9.79999 12.6 9.79999 14.2C9.79999 15.8 11.1 17.1 12.7 17.1C14.3 17.1 15.6 15.8 15.6 14.2V6.79999C16.1 7.19999 16.8 7.49999 17.5 7.49999V5.69999C16.9 5.69999 16.3 5.49999 15.9 5.09999C15.5 4.69999 15.3 4.19999 15.3 3.59999H13.5C13.5 6.29999 13.5 11.7 13.5 14.3C13.5 15.9 12.2 17.2 10.6 17.2C9.09999 17.2 7.69999 15.9 7.69999 14.3C7.69999 12.7 8.99999 11.4 10.6 11.4C10.9 11.4 11.2 11.4 11.4 11.5V9.69999C11.2 9.69999 10.9 9.59999 10.6 9.59999C7.99999 9.69999 5.89999 11.8 5.89999 14.4C5.89999 17 8.09999 19.1 10.7 19.1C13.3 19.1 15.5 16.9 15.5 14.3V10.3C16.2 10.9 17.1 11.3 18.2 11.3V9.39999C16.7 9.29999 15.4 8.19999 14.9 6.69999" fill="#00F2EA"/>
                  <path d="M12.7 11.3C11.1 11.3 9.79999 12.6 9.79999 14.2C9.79999 15.8 11.1 17.1 12.7 17.1C14.3 17.1 15.6 15.8 15.6 14.2V6.79999C16.1 7.19999 16.8 7.49999 17.5 7.49999V5.69999C16.9 5.69999 16.3 5.49999 15.9 5.09999C15.5 4.69999 15.3 4.19999 15.3 3.59999H13.5C13.5 6.29999 13.5 11.7 13.5 14.3C13.5 15.9 12.2 17.2 10.6 17.2C9.09999 17.2 7.69999 15.9 7.69999 14.3C7.69999 12.7 8.99999 11.4 10.6 11.4C10.9 11.4 11.2 11.4 11.4 11.5V9.69999C11.2 9.69999 10.9 9.59999 10.6 9.59999C7.99999 9.69999 5.89999 11.8 5.89999 14.4C5.89999 17 8.09999 19.1 10.7 19.1C13.3 19.1 15.5 16.9 15.5 14.3V10.3C16.2 10.9 17.1 11.3 18.2 11.3V9.39999C16.7 9.29999 15.4 8.19999 14.9 6.69999" fill="#FF004F"/>
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