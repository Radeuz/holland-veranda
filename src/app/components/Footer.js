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
              <p className="text-orange-900 font-medium">+31 6 18 61 21 90 & 013-2340905</p>
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-orange-900 font-medium">Andorrastraat 3</p>
              <p className="text-orange-900 font-medium">5171 PC Kaatsheuvel</p>
              <p className="text-orange-900 font-medium">Nederland</p>
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
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                aria-label="Facebook"
              >
                <img src="/Facebook_logo.png" alt="Facebook" className="h-6 w-6 rounded-lg" />
              </a>
              <a 
                href="https://www.instagram.com/hollandveranda.nl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                aria-label="Instagram"
              >
                <img src="/instagram-logo.jpg" alt="Instagram" className="h-6 w-6 rounded-lg" />
              </a>
              <a 
                href="https://www.tiktok.com/@hollandveranda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                aria-label="TikTok"
              >
                <img src="/TikTok-Logo.jpg" alt="TikTok" className="h-6 w-6 rounded-lg" />
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