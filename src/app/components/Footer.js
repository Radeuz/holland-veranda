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
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('footer.contact.title')}</h3>
              <div className="h-px bg-white/20 mb-4"></div>
            </div>
            <div className="space-y-2">
              <div className="text-white font-medium">
                {t('footer.contact.email')}
              </div>
              <div className="text-orange-200">
                <a href="https://wa.me/31618612190" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors underline">+31 (0) 618 612 190</a>
                <span className="text-white mx-2">&amp;</span>
                <a href="tel:+31132340905" className="hover:text-orange-200 transition-colors underline">+31 (0) 132 340 905</a>
              </div>
              <div className="text-white font-medium">
                <span>
                  {t('footer.contact.address').split('\n').map((line, idx) => (
                    <span key={idx}>{line}<br /></span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('footer.openingHours.title')}</h3>
              <div className="h-px bg-white/20 mb-4"></div>
            </div>
            <div className="space-y-2">
              <div className="text-white font-medium">
                {t('footer.openingHours.weekdays')}
              </div>
              <div className="text-white font-medium">
                {t('footer.openingHours.saturday')}
              </div>
              <div className="text-white font-medium">
                {t('footer.openingHours.sunday')}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('footer.social.title')}</h3>
              <div className="h-px bg-white/20 mb-4"></div>
            </div>
            <div className="flex space-x-4">
              <div 
                className="transition-colors duration-200 cursor-not-allowed opacity-50"
                aria-label="Facebook"
              >
                <img src="/Facebook_logo.png" alt="Facebook" className="h-6 w-6 rounded-lg" />
              </div>
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
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('footer.quickLinks.title')}</h3>
              <div className="h-px bg-white/20 mb-4"></div>
            </div>
            <div className="space-y-2">
              <Link href="/over-ons" className="flex items-center text-white hover:text-orange-200 transition-colors font-medium">
                <span className="mr-2">&gt;</span> {t('footer.quickLinks.about')}
              </Link>
              <Link href="/producten" className="flex items-center text-white hover:text-orange-200 transition-colors font-medium">
                <span className="mr-2">&gt;</span> {t('footer.quickLinks.products')}
              </Link>
              <Link href="/projecten" className="flex items-center text-white hover:text-orange-200 transition-colors font-medium">
                <span className="mr-2">&gt;</span> {t('footer.quickLinks.projects')}
              </Link>
              <Link href="/contact" className="flex items-center text-white hover:text-orange-200 transition-colors font-medium">
                <span className="mr-2">&gt;</span> {t('footer.quickLinks.contact')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="h-px bg-white/20 mt-8 mb-2"></div>
        <div className="pt-4 text-center">
          <p className="text-orange-900 font-medium">
            &copy; {currentYear} Holland Veranda. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
} 