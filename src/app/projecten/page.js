'use client';

import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useTranslation } from '../i18n';

const projectImages = [
  'Veranda1.jpg', 'Veranda2.jpg', 'Veranda3.jpg', 'Veranda4.jpg', 'Veranda5.jpg', 'Veranda6.jpg', 'Veranda7.jpg', 'Veranda8.jpg', 'Veranda9.jpg', 'Veranda10.jpg', 'Veranda12.jpg', 'Veranda13.jpg',
  'Carport3.jpg', 'Carport5.jpg',
  'Kozijnen1.jpg', 'Kozijnen2.jpg', 'Kozijnen3.jpg', 'Kozijnen4.jpg',
  'Terrasoverkapping1.jpg', 'Terrasoverkapping2.jpg', 'Terrasoverkapping3.jpg', 'Terrasoverkapping4.jpg', 'Terrasoverkapping5.jpg',
  'Schuifpui1.jpg', 'Schuifpui2.jpg', 'Schuifpui3.jpg', 'Schuifpui4.jpg', 'Schuifpui5.jpg',
  'Rolluiken1.jpg', 'Rolluiken2.jpg', 'Rolluiken3.jpg', 'Rolluiken4.jpg',
  'Zonweringen1.jpg', 'Zonweringen2.jpg', 'Zonweringen3.jpg', 'Zonweringen4.jpg',
  'KeramischeTegels1.jpg', 'KeramischeTegels2.jpg', 'KeramischeTegels3.jpg', 'KeramischeTegels4.jpg',
  'GespecialiseerdeMonteurs1.jpg'
];

export default function Projecten() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
      <Navigation />
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 pt-12 pb-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t('projects.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projectImages.map((img, idx) => (
              <div key={img} className="rounded-xl overflow-hidden shadow-lg bg-white flex flex-col">
                <Image
                  src={`/${img}`}
                  alt={`Project ${idx + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full"
                  style={{height: 'auto'}}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 