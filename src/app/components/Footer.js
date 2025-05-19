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
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" fill="url(#instagram-gradient)"/>
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFD600"/>
                      <stop offset="50%" stopColor="#FF0069"/>
                      <stop offset="100%" stopColor="#7638FA"/>
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
                  <path d="M19.321 5.562a5.122 5.122 0 01-5.116-5.115h-3.767v15.663c0 2.042-1.656 3.696-3.697 3.696-2.042 0-3.697-1.654-3.697-3.696 0-2.042 1.655-3.697 3.697-3.697.407 0 .798.066 1.164.188v-3.866c-.384-.059-.776-.09-1.177-.09C2.832 8.645 0 11.477 0 14.91c0 3.434 2.832 6.266 6.265 6.266 3.434 0 6.266-2.832 6.266-6.266V8.016a8.783 8.783 0 005.116 1.595V5.562h1.674z" fill="#00F2EA"/>
                  <path d="M19.321 5.562V3.888a5.122 5.122 0 01-5.116-5.115h-1.674c0 3.75 3.04 6.789 6.79 6.789z" fill="#00F2EA"/>
                  <path d="M6.265 11.244v3.866c.366.122.757.188 1.164.188 2.041 0 3.697 1.655 3.697 3.697 0 2.042-1.656 3.696-3.697 3.696-2.042 0-3.697-1.654-3.697-3.696 0-2.042 1.655-3.697 3.697-3.697.407 0 .798.066 1.164.188V8.645c-.384-.059-.776-.09-1.177-.09C2.832 8.645 0 11.477 0 14.91c0 3.434 2.832 6.266 6.265 6.266 3.434 0 6.266-2.832 6.266-6.266V8.016a8.783 8.783 0 005.116 1.595V5.562c-3.75 0-6.79-3.04-6.79-6.789h-3.767v15.663c0 2.042-1.656 3.696-3.697 3.696" fill="#FF004F"/>
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