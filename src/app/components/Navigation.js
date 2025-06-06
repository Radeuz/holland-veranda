'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from '../i18n';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const { t, language, handleLanguageChange } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const productsButtonRef = useRef(null);
  const [dropdownWidth, setDropdownWidth] = useState(180);
  const pathname = usePathname();
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const productsDropdownTimeout = useRef();

  const languageOptions = [
    { value: 'nl', label: t('languages.nl'), icon: '/flag-nl.svg' },
    { value: 'en', label: t('languages.en'), icon: '/flag-en.svg' },
    { value: 'de', label: t('languages.de'), icon: '/flag-de.svg' },
    { value: 'fr', label: t('languages.fr'), icon: '/flag-fr.svg' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (productsButtonRef.current) {
      // Set the dropdown width to match the button width, but with a minimum width
      const buttonWidth = productsButtonRef.current.offsetWidth;
      setDropdownWidth(Math.max(buttonWidth, 180)); // Adjusted minimum width
    }

    const handleResize = () => {
      if (productsButtonRef.current) {
        const buttonWidth = productsButtonRef.current.offsetWidth;
        setDropdownWidth(Math.max(buttonWidth, 180)); // Adjusted minimum width
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [productsButtonRef]);

  const productItems = [
    { name: 'Alle Producten', href: '/producten' },
    { name: 'Veranda', href: '/producten/veranda' },
    { name: 'Carport', href: '/producten/carport' },
    { name: 'Terrasoverkapping', href: '/producten/terrasoverkapping' },
    { name: 'Kozijnen', href: '/producten/kozijnen' },
    { name: 'Schuifpuien', href: '/producten/schuifpuien' },
    { name: 'Zonweringen', href: '/producten/zonweringen' },
    { name: 'Rolluiken', href: '/producten/rolluiken' },
    { name: 'Keramische Tegels', href: '/producten/keramische-tegels' },
  ];

  const isActive = (path) => pathname === path;
  const isProductActive = () => pathname.includes('/producten');

  const handleProductsMouseEnter = () => {
    if (productsDropdownTimeout.current) {
      clearTimeout(productsDropdownTimeout.current);
    }
    setProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsDropdownTimeout.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 180); // 180ms gecikme
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center"
            aria-label="Holland Veranda Home"
          >
            <Image
              src="/hollandveranda-logo.png"
              alt="Holland Veranda Logo"
              width={300}
              height={75}
              priority
              className="w-auto h-12 sm:h-14 md:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 justify-end flex-1">
            <Link 
              href="/" 
              className={`text-gray-800 hover:text-orange-600 transition-colors duration-200 font-bold ${
                isActive('/') ? 'text-orange-600' : ''
              }`}
            >
              {t('navigation.home')}
            </Link>
            
            {/* Products Dropdown - Hover Version */}
            <div
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <Link
                href="/producten"
                ref={productsButtonRef}
                className={`flex items-center justify-center text-gray-800 hover:text-orange-600 transition-colors duration-200 font-bold ${isProductActive() ? 'text-orange-600' : ''}`}
                aria-expanded={productsDropdownOpen}
                aria-haspopup="true"
              >
                {t('navigation.products')}
                <svg 
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''} ${isProductActive() ? 'text-orange-600' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute z-10 mt-1 bg-white transform transition-all duration-200 ease-in-out border-t-2 border-orange-500 ${productsDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-1 invisible'}`}
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  width: `${dropdownWidth}px`,
                  left: '50%',
                  transform: productsDropdownOpen 
                    ? 'translateX(-50%) translateY(0)' 
                    : 'translateX(-50%) translateY(-8px)'
                }}
                tabIndex={-1}
                role="menu"
                aria-orientation="vertical"
              >
                <ul className="py-2 list-none m-0 p-0">
                  {productItems.map((item) => (
                    <li key={item.name} className="m-0 p-0">
                      <Link
                        href={item.href}
                        className={`flex justify-center items-center w-full h-full py-2 text-sm ${
                          isActive(item.href) 
                            ? 'text-orange-600 font-medium bg-gray-50' 
                            : 'text-gray-800 hover:bg-gray-50 hover:text-orange-600'
                        } transition-colors duration-150`}
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Link 
              href="/projecten" 
              className={`text-gray-800 hover:text-orange-600 transition-colors duration-200 font-bold ${
                isActive('/projecten') ? 'text-orange-600' : ''
              }`}
            >
              {t('navigation.projects')}
            </Link>
            <Link 
              href="/over-ons" 
              className={`text-gray-800 hover:text-orange-600 transition-colors duration-200 font-bold ${
                isActive('/over-ons') ? 'text-orange-600' : ''
              }`}
            >
              {t('navigation.about')}
            </Link>
            <Link 
              href="/contact" 
              className={`text-gray-800 hover:text-orange-600 transition-colors duration-200 font-bold ${
                isActive('/contact') ? 'text-orange-600' : ''
              }`}
            >
              {t('navigation.contact')}
            </Link>
            {/* Language Selector Dropdown */}
            <div
              className="ml-4 relative"
              onMouseEnter={() => setLanguageDropdownOpen(true)}
              onMouseLeave={() => setLanguageDropdownOpen(false)}
            >
              <button
                className={`flex items-center px-2 py-1 bg-white rounded shadow-sm transition-colors border-2 ${languageDropdownOpen ? 'border-orange-500' : 'border-orange-400'} hover:border-orange-500`}
                aria-haspopup="true"
                aria-expanded={languageDropdownOpen}
                type="button"
              >
                <span style={{ display: 'inline-block', width: 32, height: 24 }}>
                  <Image src={languageOptions.find(opt => opt.value === language).icon} alt={languageOptions.find(opt => opt.value === language).label} width={32} height={24} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </span>
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fill={languageDropdownOpen ? '#f97316' : '#fb923c'}
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Dropdown */}
              <div
                className={`absolute mt-2 bg-white border border-gray-200 rounded shadow-lg z-20 transition-all duration-200 ${languageDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                style={{ minWidth: 140, left: '50%', transform: languageDropdownOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)' }}
                role="menu"
                aria-orientation="vertical"
              >
                <ul className="py-1">
                  {languageOptions.filter(opt => opt.value !== language).map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => { handleLanguageChange(opt.value); setLanguageDropdownOpen(false); }}
                        className="flex items-center w-full px-3 py-2 hover:bg-gray-100 transition-colors text-left"
                        role="menuitem"
                        type="button"
                      >
                        <span style={{ display: 'inline-block', width: 28, height: 21, marginRight: 8 }}>
                          <Image src={opt.icon} alt={opt.label} width={28} height={21} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        </span>
                        <span className="text-gray-800 hover:text-orange-600 transition-colors whitespace-nowrap" style={{ marginRight: 0 }}>{opt.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            {/* Mobile Language Selector (hamburger'ın solu) */}
            <div className="md:hidden mr-2 relative"
              onMouseEnter={() => setLanguageDropdownOpen(true)}
              onMouseLeave={() => setLanguageDropdownOpen(false)}
            >
              <button
                className={`flex items-center px-2 py-1 bg-white rounded shadow-sm transition-colors border-2 ${languageDropdownOpen ? 'border-orange-500' : 'border-orange-400'} hover:border-orange-500`}
                aria-haspopup="true"
                aria-expanded={languageDropdownOpen}
                type="button"
              >
                <span style={{ display: 'inline-block', width: 32, height: 24 }}>
                  <Image src={languageOptions.find(opt => opt.value === language).icon} alt={languageOptions.find(opt => opt.value === language).label} width={32} height={24} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </span>
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fill={languageDropdownOpen ? '#f97316' : '#fb923c'}
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Dropdown */}
              <div
                className={`absolute mt-2 bg-white border border-gray-200 rounded shadow-lg z-20 transition-all duration-200 ${languageDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                style={{ minWidth: 140, left: '50%', transform: languageDropdownOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)' }}
                role="menu"
                aria-orientation="vertical"
              >
                <ul className="py-1">
                  {languageOptions.filter(opt => opt.value !== language).map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => { handleLanguageChange(opt.value); setLanguageDropdownOpen(false); }}
                        className="flex items-center w-full px-3 py-2 hover:bg-gray-100 transition-colors text-left"
                        role="menuitem"
                        type="button"
                      >
                        <span style={{ display: 'inline-block', width: 28, height: 21, marginRight: 8 }}>
                          <Image src={opt.icon} alt={opt.label} width={28} height={21} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        </span>
                        <span className="text-gray-800 hover:text-orange-600 transition-colors whitespace-nowrap" style={{ marginRight: 0 }}>{opt.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-800 hover:text-orange-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            <Link
              href="/"
              className={`block text-gray-800 hover:text-orange-600 transition-colors duration-200 ${
                isActive('/') ? 'text-orange-600 font-semibold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.home')}
            </Link>
            
            {/* Mobile Products Menu */}
            <div>
              <button
                className={`flex items-center w-full text-left text-gray-800 hover:text-orange-600 transition-colors duration-200 ${
                  isProductActive() ? 'text-orange-600 font-semibold' : ''
                }`}
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              >
                {t('navigation.products')}
                <svg 
                  className={`ml-2 h-5 w-5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className={`pl-4 mt-2 space-y-2 ${productsDropdownOpen ? 'block' : 'hidden'}`}>
                {productItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-gray-800 hover:text-orange-600 transition-colors duration-200 ${
                      isActive(item.href) ? 'text-orange-600 font-semibold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/projecten"
              className={`block text-gray-800 hover:text-orange-600 transition-colors duration-200 ${
                isActive('/projecten') ? 'text-orange-600 font-semibold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.projects')}
            </Link>
            <Link
              href="/over-ons"
              className={`block text-gray-800 hover:text-orange-600 transition-colors duration-200 ${
                isActive('/over-ons') ? 'text-orange-600 font-semibold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.about')}
            </Link>
            <Link
              href="/contact"
              className={`block text-gray-800 hover:text-orange-600 transition-colors duration-200 ${
                isActive('/contact') ? 'text-orange-600 font-semibold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.contact')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 