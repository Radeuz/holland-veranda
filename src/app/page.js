'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from './i18n'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const { t } = useTranslation();
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const scrollContainerRef = useRef(null);

  // Testimonial state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      text: "Onze aluminium veranda is precies op maat gemaakt en vakkundig geplaatst. Zeer tevreden over de kwaliteit en afwerking.",
      firstName: "Willem",
      lastName: "V.",
      location: "Rotterdam",
      initial: "W"
    },
    {
      text: "De schuifpui werd snel geplaatst en zorgt voor veel licht in onze woning in Düsseldorf. Echt een aanrader!",
      firstName: "Anna",
      lastName: "Jansen",
      location: "Düsseldorf",
      initial: "A"
    },
    {
      text: "Onze aluminium overkapping werd snel en netjes geplaatst. De kwaliteit is uitstekend en we genieten er elke dag van.",
      firstName: "Peter",
      lastName: "Bakker",
      location: "Antwerpen",
      initial: "P"
    },
    {
      text: "Rolluiken laten installeren in Utrecht. Snelle service, nette afwerking en topkwaliteit materialen.",
      firstName: "Sophie",
      lastName: "Visser",
      location: "Utrecht",
      initial: "S"
    },
    {
      text: "Van offerte tot montage van de terrasoverkapping verliep alles vlot. Holland Veranda is echt een aanrader in België.",
      firstName: "Thomas",
      lastName: "Smit",
      location: "België",
      initial: "T"
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const nextTestimonial = () => {
    if (currentTestimonial < testimonials.length - 1) {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  // Otomatik yorum değiştirme için useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Her 5 saniyede bir değişecek

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get avatar color based on initial
  const getAvatarColor = (initial) => {
    const colors = {
      'W': 'bg-emerald-600/60',
      'A': 'bg-purple-600/60',
      'P': 'bg-green-600/60',
      'S': 'bg-pink-600/60',
      'T': 'bg-teal-600/60'
    };
    return colors[initial] || 'bg-orange-600/60';
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <main>
      <Navigation />

      {/* Main Banner */}
      <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 via-gray-800/25 to-gray-700/20"></div>
        {/* Blur Effect */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>
        {/* Content */}
        <div className="relative container mx-auto px-0 md:px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="w-full md:w-1/2 pt-24 pb-12 md:py-24 px-4 md:px-0 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
                Holland Veranda
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 max-w-xl mx-auto md:mx-0">
                {t('hero.subtitle')}
              </p>
              <div className="flex justify-center md:justify-start">
                <Link 
                  href="/offerte"
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-base md:text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105"
                >
                  Vraag een gratis offerte aan
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Banner Image */}
            <div className="w-full md:w-1/2 relative h-[250px] md:h-[600px]">
              <Image 
                src="/Veranda1.jpg"
                alt="Holland Veranda"
                fill
                priority
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{objectFit: 'cover', objectPosition: 'center 30%'}}
                className="shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <section className="py-10 bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('products.title')}</h2>
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-8" 
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth'
              }}
            >
              <div className="flex space-x-6 min-w-max px-4 md:px-0" style={{ WebkitOverflowScrolling: 'touch' }}>
                {/* Veranda */}
                <div className="w-[330px] md:w-[400px] flex-shrink-0">
                  <Link href="/producten/veranda" className="block">
                    <div className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                      <div className="relative h-[320px] overflow-hidden">
                        <Image 
                          src="/Veranda6.jpg"
                          alt="Veranda"
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: 'cover', objectPosition: 'center center'}}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Veranda</h3>
                        <p className="text-gray-700 mb-4">Verhoog uw wooncomfort met een stijlvolle veranda op maat. Extra ruimte en bescherming tegen weer.</p>
                        <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Bekijk veranda's
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Carport */}
                <div className="w-[330px] md:w-[400px] flex-shrink-0">
                  <Link href="/producten/carport" className="block">
                    <div className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                      <div className="relative h-[320px] overflow-hidden">
                        <Image 
                          src="/Carport2.jpg"
                          alt="Carport"
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: 'cover', objectPosition: 'center center'}}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Carport</h3>
                        <p className="text-gray-700 mb-4">Bescherm uw auto tegen regen en zon met een moderne carport. Strak design en lange levensduur.</p>
                        <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Bekijk carports
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Terrasoverkapping */}
                <div className="w-[330px] md:w-[400px] flex-shrink-0">
                  <Link href="/producten/terrasoverkapping" className="block">
                    <div className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                      <div className="relative h-[320px] overflow-hidden">
                        <Image 
                          src="/Terrasoverkapping3.jpg"
                          alt="Terrasoverkapping"
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: 'cover', objectPosition: 'center center'}}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Terrasoverkapping</h3>
                        <p className="text-gray-700 mb-4">Zorg voor extra leefruimte en comfort met een stijlvolle, weerbestendige terrasoverkapping.</p>
                        <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Bekijk terrasoverkappingen
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Kozijnen */}
                <div className="w-[330px] md:w-[400px] flex-shrink-0">
                  <Link href="/producten/kozijnen" className="block">
                    <div className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                      <div className="relative h-[320px] overflow-hidden">
                        <Image 
                          src="/Kozijnen3.jpg"
                          alt="Kozijnen"
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: 'cover', objectPosition: 'center center'}}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Kozijnen</h3>
                        <p className="text-gray-700 mb-4">Verbeter isolatie en uitstraling met hoogwaardige kozijnen. Duurzaam, stijlvol en onderhoudsarm.</p>
                        <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Bekijk kozijnen
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Schuifpuien */}
                <div className="w-[330px] md:w-[400px] flex-shrink-0">
                  <Link href="/producten/schuifpuien" className="block">
                    <div className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                      <div className="relative h-[320px] overflow-hidden">
                        <Image 
                          src="/Schuifpui3.jpg"
                          alt="Schuifpuien Project"
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: 'cover', objectPosition: 'center center'}}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Schuifpuien</h3>
                        <p className="text-gray-700 mb-4">Laat binnen en buiten naadloos in elkaar overlopen. Meer licht en ruimte met onze schuifpuien.</p>
                        <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Bekijk schuifpuien
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Zonweringen */}
                <div className="w-[330px] md:w-[400px] flex-shrink-0">
                  <Link href="/producten/zonweringen" className="block">
                    <div className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                      <div className="relative h-[320px] overflow-hidden">
                        <Image 
                          src="/Zonweringen1.jpg"
                          alt="Zonweringen"
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: 'cover', objectPosition: 'center center'}}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Zonweringen</h3>
                        <p className="text-gray-700 mb-4">Geniet van schaduw en comfort op uw terras. Stijlvolle bescherming tegen hitte en UV-straling.</p>
                        <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Bekijk zonweringen
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Rolluiken */}
                <div className="w-[330px] md:w-[400px] flex-shrink-0">
                  <Link href="/producten/rolluiken" className="block">
                    <div className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                      <div className="relative h-[320px] overflow-hidden">
                        <Image
                          src="/Rolluiken1.jpg"
                          alt="Rolluiken"
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: 'cover', objectPosition: 'center center'}}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Rolluiken</h3>
                        <p className="text-gray-700 mb-4">Kies voor inbraakwerende rolluiken met moderne uitstraling. Bescherming en comfort in één.</p>
                        <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Bekijk rolluiken
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Keramische Tegels */}
                <div className="w-[330px] md:w-[400px] flex-shrink-0">
                  <Link href="/producten/keramische-tegels" className="block">
                    <div className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                      <div className="relative h-[320px] overflow-hidden">
                        <Image 
                          src="/KeramischeTegels1.jpg"
                          alt="Keramische Tegels"
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: 'cover', objectPosition: 'center center'}}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Keramische Tegels</h3>
                        <p className="text-gray-700 mb-4">Geef uw terras of oprit een duurzame upgrade. Slijtvast, kleurvast en onderhoudsvriendelijk.</p>
                        <div className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                          Bekijk keramische tegels
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Buttons - Updated positioning */}
            <button 
              className={`absolute left-2 md:left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-white/90 bg-orange-600/80 hover:bg-orange-700/90 rounded-full shadow-md transition-all duration-200 ${!showLeftButton ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              onClick={() => {
                const container = scrollContainerRef.current;
                const cardWidth = window.innerWidth < 768 ? 330 : 400;
                container.scrollLeft -= cardWidth;
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white hover:brightness-110 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className={`absolute right-2 md:right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-white/90 bg-orange-600/80 hover:bg-orange-700/90 rounded-full shadow-md transition-all duration-200 ${!showRightButton ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              onClick={() => {
                const container = scrollContainerRef.current;
                const cardWidth = window.innerWidth < 768 ? 330 : 400;
                container.scrollLeft += cardWidth;
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white hover:brightness-110 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-12 relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 via-gray-800/25 to-gray-700/20"></div>
        {/* Blur Effect */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>
        
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-10 text-white">Voordelen van Holland Veranda</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column with 4 cards stacked in 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Voordeel 1 */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-orange-600 rounded-full p-1.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Maatwerk & vakmanschap</h3>
                </div>
                <p className="text-gray-300 text-base">Elke aluminium veranda of overkapping wordt op maat gemaakt door ervaren vakmensen.</p>
              </div>
              
              {/* Voordeel 2 */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-orange-600 rounded-full p-1.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Snelle levering & montage</h3>
                </div>
                <p className="text-gray-300 text-base">Snelle levering en vakkundige montage van veranda's, carports en schuifpuien.</p>
              </div>
              
              {/* Voordeel 3 */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-orange-600 rounded-full p-1.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Hoogwaardige materialen</h3>
                </div>
                <p className="text-gray-300 text-base">Wij gebruiken alleen duurzame en weerbestendige materialen voor langdurig resultaat.</p>
              </div>
              
              {/* Voordeel 4 */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-orange-600 rounded-full p-1.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Tevreden klanten</h3>
                </div>
                <p className="text-gray-300 text-base">Meer dan 500 tevreden klanten in Nederland, België en Duitsland kozen voor onze veranda's en rolluiken.</p>
              </div>
            </div>
            
            {/* Right Column with Reviews */}
            <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/90 to-gray-900/80 p-6 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-orange-500/10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Ervaringen Van Onze Klanten
                  </h3>
                  <div className="flex items-center space-x-1">
                    <span className="text-xl md:text-2xl font-bold text-white">4.5</span>
                    <div className="flex flex-col">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4].map((star) => (
                          <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <defs>
                            <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="50%" stopColor="currentColor" />
                              <stop offset="50%" stopColor="#D1D5DB" stopOpacity="0.3" />
                            </linearGradient>
                          </defs>
                          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="text-gray-400 text-xs">90+ beoordelingen</span>
                    </div>
                  </div>
                </div>
                
                {/* Testimonials slider-like design */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                      <svg className="h-6 w-6 text-orange-500 mb-3 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-200 italic mb-4 leading-relaxed text-base min-h-[80px]">"{testimonials[currentTestimonial].text}"</p>
                      <div className="flex items-center">
                        <div className={`h-10 w-10 rounded-full ${getAvatarColor(testimonials[currentTestimonial].initial)} flex items-center justify-center mr-3`}>
                          <span className="text-white font-bold text-sm">{testimonials[currentTestimonial].initial}</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-base">{testimonials[currentTestimonial].firstName} {testimonials[currentTestimonial].lastName.charAt(0)}.</p>
                          <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-1.5">
                    {testimonials.map((_, index) => (
                      <div 
                        key={index} 
                        className={`h-1.5 ${index === currentTestimonial ? 'w-6 bg-orange-500' : 'w-1.5 bg-white/30'} rounded-full transition-all duration-300`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://g.co/kgs/TeS7GGm" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center justify-center text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/20 text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Bekijk alle Google beoordelingen
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uitgelichte Projecten Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Uitgelichte Projecten</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
              <div className="relative h-[320px] overflow-hidden">
                <Image 
                  src="/Veranda6.jpg"
                  alt="Project in Amsterdam"
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: 'cover', objectPosition: 'center center'}}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Moderne Veranda</h3>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Amsterdam, Nederland</span>
                </div>
                <p className="text-gray-700">Moderne veranda op maat in Amsterdam met aluminium structuur en strakke lijnen. Perfect passend bij moderne stadswoningen.</p>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
              <div className="relative h-[320px] overflow-hidden">
                <Image 
                  src="/Terrasoverkapping3.jpg"
                  alt="Project in Rotterdam"
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: 'cover', objectPosition: 'center center'}}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Terrasoverkapping</h3>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Rotterdam, Nederland</span>
                </div>
                <p className="text-gray-700">Moderne terrasoverkapping in Rotterdam met aluminium structuur. Perfect voor het creëren van een extra woonruimte buiten.</p>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
              <div className="relative h-[320px] overflow-hidden">
                <Image 
                  src="/Schuifpui4.jpg"
                  alt="Project in Düsseldorf"
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: 'cover', objectPosition: 'center center'}}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Schuifpuien</h3>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Düsseldorf, Duitsland</span>
                </div>
                <p className="text-gray-700">Aluminium schuifpui in Düsseldorf met maximale lichtinval. Naadloze overgang tussen binnen en buiten.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projecten" 
              className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105"
            >
              Bekijk alle projecten
            </Link>
          </div>
        </div>
      </section>

      {/* Over Ons Section */}
      <section className="py-8 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/about.jpg"
                  alt="Over Holland Veranda"
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{objectFit: 'cover'}}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Over Holland Veranda</h2>
              <div className="w-16 md:w-20 h-1.5 bg-orange-600 rounded-full"></div>
              <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                Holland Veranda is specialist in aluminium veranda's, carports, terrasoverkappingen, schuifpuien, rolluiken, kozijnen en zonwering op maat. Met meer dan 20 jaar ervaring leveren wij duurzame buitenoplossingen in Nederland, België en Duitsland.
              </p>
              <div className="pt-2 md:pt-4">
                <Link 
                  href="/over-ons" 
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-base md:text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105"
                >
                  Meer over ons
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
