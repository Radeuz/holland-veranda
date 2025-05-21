'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../i18n'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Producten() {
  const { t } = useTranslation();

  const products = [
    {
      id: 'veranda',
      title: t('products.items.veranda.title'),
      image: '/veranda.jpg',
      description: t('products.items.veranda.description'),
      features: [
        t('products.items.veranda.features.0'),
        t('products.items.veranda.features.1'),
        t('products.items.veranda.features.2'),
        t('products.items.veranda.features.3')
      ],
      slug: 'veranda'
    },
    {
      id: 'carport',
      title: t('products.items.carport.title'),
      image: '/carport.jpg',
      description: t('products.items.carport.description'),
      features: [
        t('products.items.carport.features.0'),
        t('products.items.carport.features.1'),
        t('products.items.carport.features.2'),
        t('products.items.carport.features.3')
      ],
      slug: 'carport'
    },
    {
      id: 'terrasoverkapping',
      title: t('products.items.terrasoverkapping.title'),
      image: '/terrasoverkapping.jpg',
      description: t('products.items.terrasoverkapping.description'),
      features: [
        t('products.items.terrasoverkapping.features.0'),
        t('products.items.terrasoverkapping.features.1'),
        t('products.items.terrasoverkapping.features.2'),
        t('products.items.terrasoverkapping.features.3')
      ],
      slug: 'terrasoverkapping'
    },
    {
      id: 'kozijnen',
      title: t('products.items.kozijnen.title'),
      image: '/kozijnen.jpg',
      description: t('products.items.kozijnen.description'),
      features: [
        t('products.items.kozijnen.features.0'),
        t('products.items.kozijnen.features.1'),
        t('products.items.kozijnen.features.2'),
        t('products.items.kozijnen.features.3')
      ],
      slug: 'kozijnen'
    },
    {
      id: 'schuifpuien',
      title: t('products.items.schuifpuien.title'),
      image: '/schuifpuien.jpg',
      description: t('products.items.schuifpuien.description'),
      features: [
        t('products.items.schuifpuien.features.0'),
        t('products.items.schuifpuien.features.1'),
        t('products.items.schuifpuien.features.2'),
        t('products.items.schuifpuien.features.3')
      ],
      slug: 'schuifpuien'
    },
    {
      id: 'zonweringen',
      title: t('products.items.zonweringen.title'),
      image: '/zonweringen.jpg',
      description: t('products.items.zonweringen.description'),
      features: [
        t('products.items.zonweringen.features.0'),
        t('products.items.zonweringen.features.1'),
        t('products.items.zonweringen.features.2'),
        t('products.items.zonweringen.features.3')
      ],
      slug: 'zonweringen'
    },
    {
      id: 'rolluiken',
      title: t('products.items.rolluiken.title'),
      image: '/rolluiken.jpg',
      description: t('products.items.rolluiken.description'),
      features: [
        t('products.items.rolluiken.features.0'),
        t('products.items.rolluiken.features.1'),
        t('products.items.rolluiken.features.2'),
        t('products.items.rolluiken.features.3')
      ],
      slug: 'rolluiken'
    },
    {
      id: 'keramische-tegels',
      title: t('products.items.keramische-tegels.title'),
      image: '/keramische-tegels.jpg',
      description: t('products.items.keramische-tegels.description'),
      features: [
        t('products.items.keramische-tegels.features.0'),
        t('products.items.keramische-tegels.features.1'),
        t('products.items.keramische-tegels.features.2'),
        t('products.items.keramische-tegels.features.3')
      ],
      slug: 'keramische-tegels'
    }
  ];

  return (
    <main>
      <Navigation />

      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 pt-12 pb-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t('products.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                <Link href={`/producten/${product.slug}`}>
                  <div className="relative h-80">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                      className="rounded-t-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <Link href={`/producten/${product.slug}`}>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.title}</h3>
                  </Link>
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{product.features[0]}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Kenmerken:</h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mb-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-orange-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link href={`/producten/${product.slug}`} className="inline-flex items-center text-gray-800 font-semibold hover:text-orange-600 transition-colors duration-200">
                      {t('products.moreInfo')} →
                    </Link>
                    <Link 
                      href={`/offerte?product=${product.title}`}
                      className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold transition-colors duration-200"
                    >
                      Vraag offerte aan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}