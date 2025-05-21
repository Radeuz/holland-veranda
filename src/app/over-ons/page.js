'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../i18n'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function OverOns() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 pt-12 pb-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="text-center mt-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t('about.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Vision Section */}
          <div className="max-w-7xl mx-auto">
            {/* Vision Box - Centered */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 rounded-2xl p-8 shadow-lg">
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/Veranda6.jpg"
                    alt="Holland Veranda Vision"
                    fill
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{objectFit: 'cover'}}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white border-b border-orange-500/60 pb-2">{t('about.vision.title')}</h3>
                  <p className="text-base leading-relaxed text-orange-900 font-medium">
                    {t('about.vision.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Other Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Quality */}
              <div className="bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 rounded-2xl p-8 shadow-lg">
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/GespecialiseerdeMonteurs1.jpg"
                    alt="Holland Veranda Expertise"
                    fill
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{objectFit: 'cover'}}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white border-b border-orange-500/60 pb-2">{t('about.expertise.title')}</h3>
                  <p className="text-base leading-relaxed text-orange-900 font-medium">
                    {t('about.expertise.description')}
                  </p>
                </div>
              </div>

              {/* Service */}
              <div className="bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 rounded-2xl p-8 shadow-lg">
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
                  <Image 
                    src="/Veranda7.jpg"
                    alt="Holland Veranda Service"
                    fill 
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{objectFit: 'cover'}} 
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white border-b border-orange-500/60 pb-2">{t('about.service.title')}</h3>
                  <p className="text-base leading-relaxed text-orange-900 font-medium">
                    {t('about.service.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
