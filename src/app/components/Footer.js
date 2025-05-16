'use client';

import { useTranslation } from '../i18n';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-white border-b border-gray-600 pb-2">{t('footer.quickLinks.title')}</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/" 
                    className="text-gray-300 hover:text-gray-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                    {t('navigation.home')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/producten" 
                    className="text-gray-300 hover:text-gray-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                    {t('navigation.products')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projecten" 
                    className="text-gray-300 hover:text-gray-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                    {t('navigation.projects')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/over-ons" 
                    className="text-gray-300 hover:text-gray-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                    {t('navigation.about')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-300 hover:text-gray-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                    {t('navigation.contact')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-white border-b border-gray-600 pb-2">{t('footer.contact.title')}</h3>
            <address className="not-italic">
              <div className="flex items-start gap-2 mb-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 mt-1" aria-hidden="true" />
                <a 
                  href="mailto:info@hollandveranda.nl" 
                  className="text-gray-300 hover:text-gray-400 transition-colors duration-200"
                >
                  info@hollandveranda.nl
                </a>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <PhoneIcon className="h-5 w-5 text-gray-400 mt-1" aria-hidden="true" />
                <a 
                  href="tel:+31618612190" 
                  className="text-gray-300 hover:text-gray-400 transition-colors duration-200"
                >
                  +31 (0) 6186 121 90
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-5 w-5 text-gray-400 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-gray-300">{t('footer.contact.address')}</p>
                  <p className="text-gray-300">{t('footer.contact.city')}</p>
                  <p className="text-gray-300">{t('footer.contact.country')}</p>
                </div>
              </div>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-white border-b border-gray-600 pb-2">{t('footer.hours.title')}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                <p className="text-gray-300">{t('footer.hours.weekdays')}</p>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                <p className="text-gray-300">{t('footer.hours.saturday')}</p>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                <p className="text-gray-300">{t('footer.hours.sunday')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Holland Veranda. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
} 