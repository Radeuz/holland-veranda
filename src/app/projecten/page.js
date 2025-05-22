'use client';

import Image from 'next/image'
import { useTranslation } from '../i18n'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

export default function Projecten() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [projects, setProjects] = useState([]);
  
  const projectData = [
    { 
      id: 1, 
      image: '/Veranda1.jpg'
    },
    { 
      id: 2, 
      image: '/Veranda2.jpg'
    },
    { 
      id: 3, 
      image: '/Veranda3.jpg'
    },
    { 
      id: 4, 
      image: '/Veranda4.jpg'
    },
    { 
      id: 5, 
      image: '/Veranda5.jpg'
    },
    { 
      id: 6, 
      image: '/Veranda6.jpg'
    },
    { 
      id: 7, 
      image: '/Veranda7.jpg'
    },
    { 
      id: 8, 
      image: '/Veranda8.jpg'
    },
    {
      id: 9,
      image: '/Veranda9.jpg'
    },
    {
      id: 10,
      image: '/Veranda10.jpg'
    },
    {
      id: 11,
      image: '/Veranda11.jpg'
    },
    {
      id: 12,
      image: '/Veranda12.jpg'
    },
    { 
      id: 13, 
      image: '/Veranda13.jpg'
    },
    { 
      id: 14, 
      image: '/Carport2.jpg'
    },
    { 
      id: 15, 
      image: '/Carport3.jpg'
    },
    { 
      id: 16, 
      image: '/Carport4.jpg'
    },
    { 
      id: 17, 
      image: '/Carport5.jpg'
    },
    { 
      id: 18, 
      image: '/Terrasoverkapping1.jpg'
    },
    { 
      id: 19, 
      image: '/Terrasoverkapping2.jpg'
    },
    { 
      id: 20, 
      image: '/Terrasoverkapping3.jpg'
    },
    { 
      id: 21, 
      image: '/Terrasoverkapping4.jpg'
    },
    { 
      id: 22, 
      image: '/Terrasoverkapping5.jpg'
    },
    { 
      id: 23, 
      image: '/Kozijnen1.jpg'
    },
    { 
      id: 24, 
      image: '/Kozijnen2.jpg'
    },
    { 
      id: 25, 
      image: '/Kozijnen3.jpg'
    },
    { 
      id: 26, 
      image: '/Kozijnen4.jpg'
    },
    { 
      id: 27, 
      image: '/Kozijnen5.jpg'
    },
    { 
      id: 28, 
      image: '/Schuifpui1.jpg'
    },
    { 
      id: 29, 
      image: '/Schuifpui2.jpg'
    },
    { 
      id: 30, 
      image: '/Schuifpui3.jpg'
    },
    { 
      id: 31, 
      image: '/Schuifpui4.jpg'
    },
    { 
      id: 32, 
      image: '/Schuifpui5.jpg'
    },
    { 
      id: 33, 
      image: '/Zonweringen1.jpg'
    },
    { 
      id: 34, 
      image: '/Zonweringen2.jpg'
    },
    { 
      id: 35, 
      image: '/Zonweringen3.jpg'
    },
    { 
      id: 36, 
      image: '/Zonweringen4.jpg'
    },
    { 
      id: 37, 
      image: '/Rolluiken1.jpg'
    },
    { 
      id: 38, 
      image: '/Rolluiken2.jpg'
    },
    { 
      id: 39, 
      image: '/Rolluiken3.jpg'
    },
    { 
      id: 40, 
      image: '/Rolluiken4.jpg'
    },
    { 
      id: 41, 
      image: '/KeramischeTegels1.jpg'
    },
    { 
      id: 42, 
      image: '/KeramischeTegels2.jpg'
    },
    { 
      id: 43, 
      image: '/KeramischeTegels3.jpg'
    },
    { 
      id: 44, 
      image: '/KeramischeTegels4.jpg'
    }
  ];

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const handleImageClick = (project) => {
    setSelectedImage(project);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = projects.findIndex(p => p.id === selectedImage.id);
      const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedImage(projects[previousIndex]);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = projects.findIndex(p => p.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedImage(projects[nextIndex]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
      <Navigation />

      {/* Page Header */}
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

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => handleImageClick(project)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={project.image}
                    alt={`Project ${project.id}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={handleClose}>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors z-10"
              onClick={handleClose}
              aria-label={t('projects.modal.close')}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 transition-colors z-10"
              onClick={handlePrevious}
              aria-label={t('projects.modal.previous')}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 transition-colors z-10"
              onClick={handleNext}
              aria-label={t('projects.modal.next')}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.image}
                alt={`Project ${selectedImage.id}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}