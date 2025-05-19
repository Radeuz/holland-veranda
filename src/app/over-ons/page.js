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
              Over Ons
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              Leer meer over ons bedrijf, onze missie en onze toewijding aan kwaliteit en klanttevredenheid.
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
              <div className="bg-gradient-to-br from-orange-50 via-orange-100/60 to-white rounded-2xl p-8 shadow-lg">
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
                  <h3 className="text-2xl font-semibold text-white border-b border-orange-500/60 pb-2">Onze Visie</h3>
                  <p className="text-base leading-relaxed text-orange-900 font-medium">
                    Bij Holland Veranda geloven we dat een aluminium veranda of terrasoverkapping op maat een echte meerwaarde is voor elke woning. Het biedt extra leefruimte, beschutting tegen weer en een stijlvolle uitbreiding van uw huis. Met aandacht voor comfort en duurzaamheid creëren we buitenoplossingen die uw levenskwaliteit verhogen.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Quality */}
              <div className="bg-gradient-to-br from-orange-50 via-orange-100/60 to-white rounded-2xl p-8 shadow-lg">
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
                  <h3 className="text-2xl font-semibold text-white border-b border-orange-500/60 pb-2">Expertise & Kwaliteit</h3>
                  <p className="text-base leading-relaxed text-orange-900 font-medium">
                    Met meer dan 20 jaar ervaring in het plaatsen van veranda's, carports, schuifpuien en rolluiken, combineren wij vakmanschap met moderne technieken. Wij gebruiken alleen hoogwaardige materialen voor duurzame buitenoplossingen die bestand zijn tegen elk seizoen.
                  </p>
                </div>
              </div>

              {/* Service */}
              <div className="bg-gradient-to-br from-orange-50 via-orange-100/60 to-white rounded-2xl p-8 shadow-lg">
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
                  <h3 className="text-2xl font-semibold text-white border-b border-orange-500/60 pb-2">Persoonlijke Service</h3>
                  <p className="text-base leading-relaxed text-orange-900 font-medium">
                    Vanaf het eerste contact tot de volledige montage van uw veranda, overkapping of kozijnen begeleiden wij u met persoonlijke service. Wij denken mee in oplossingen en zorgen voor een vlotte installatie. Uw tevredenheid staat altijd centraal bij Holland Veranda.
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
