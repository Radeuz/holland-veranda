'use client';

import Image from 'next/image'
import { useTranslation } from '../i18n'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

export default function Projecten() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const projects = [
    { 
      id: 5, 
      image: '/Veranda5.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 6, 
      image: '/Veranda6.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 7, 
      image: '/Veranda7.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 8, 
      image: '/Veranda8.jpg',
      location: t('projects.location.netherlands')
    },
    {
      id: 9,
      image: '/Veranda9.jpg',
      location: t('projects.location.netherlands')
    },
    {
      id: 10,
      image: '/Terrasoverkapping5.jpg',
      location: t('projects.location.netherlands')
    },
    {
      id: 11,
      image: '/Terrasoverkapping3.jpg',
      location: t('projects.location.netherlands')
    },
    {
      id: 12,
      image: '/Terrasoverkapping4.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 13, 
      image: '/Carport3.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 14, 
      image: '/Carport5.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 15, 
      image: '/Kozijnen5.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 16, 
      image: '/Kozijnen2.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 17, 
      image: '/Kozijnen4.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 18, 
      image: '/Schuifpui5.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 19, 
      image: '/Schuifpui2.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 20, 
      image: '/Schuifpui3.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 21, 
      image: '/Schuifpui4.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 22, 
      image: '/Zonweringen1.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 24, 
      image: '/Zonweringen3.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 25, 
      image: '/Zonweringen4.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 26, 
      image: '/Rolluiken1.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 27, 
      image: '/Rolluiken2.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 28, 
      image: '/Rolluiken3.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 29, 
      image: '/Rolluiken4.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 30, 
      image: '/KeramischeTegels1.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 31, 
      image: '/KeramischeTegels2.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 32, 
      image: '/KeramischeTegels3.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 33, 
      image: '/KeramischeTegels4.jpg',
      location: t('projects.location.netherlands')
    },
    {
      id: 34,
      image: '/GespecialiseerdeMonteurs1.jpg',
      location: t('projects.location.team')
    },
    { 
      id: 1, 
      image: '/Veranda1.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 2, 
      image: '/Veranda13.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 3, 
      image: '/Veranda12.jpg',
      location: t('projects.location.netherlands')
    },
    { 
      id: 4, 
      image: '/Veranda4.jpg',
      objectPosition: 'center 30%',
      location: t('projects.location.netherlands')
    }
  ]
  
  useEffect(() => {
    // Check if there's a selected project ID in sessionStorage
    const selectedProjectId = sessionStorage.getItem('selectedProjectId');
    if (selectedProjectId) {
      // Find the project with the matching ID
      const projectId = parseInt(selectedProjectId);
      const project = projects.find(p => p.id === projectId);
      
      if (project) {
        // Set the selected image to open the modal
        setSelectedImage(project);
        // Clear the sessionStorage so it doesn't reopen on page refresh
        sessionStorage.removeItem('selectedProjectId');
      }
    }
  }, []);

  const handlePrevious = (e) => {
    e.stopPropagation();
    const currentIndex = projects.findIndex(p => p.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedImage(projects[previousIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = projects.findIndex(p => p.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedImage(projects[nextIndex]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/50 to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 pt-12 pb-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="text-center mt-8 w-full">
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Project ${project.id}`}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{objectFit: 'cover', objectPosition: project.objectPosition || 'center'}}
                    className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-medium">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-7xl mx-auto p-4">
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-white/90 bg-orange-600/80 hover:bg-orange-700/90 rounded-full shadow-md transition-all duration-200"
              onClick={() => setSelectedImage(null)}
              aria-label={t('projects.modal.close')}
              style={{zIndex: 2}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-white/90 bg-orange-600/80 hover:bg-orange-700/90 rounded-full shadow-md transition-all duration-200"
              onClick={handlePrevious}
              aria-label={t('projects.modal.previous')}
              style={{zIndex: 2}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-white/90 bg-orange-600/80 hover:bg-orange-700/90 rounded-full shadow-md transition-all duration-200"
              onClick={handleNext}
              aria-label={t('projects.modal.next')}
              style={{zIndex: 2}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="relative h-[80vh] w-full flex items-center justify-center">
              <Image
                src={selectedImage.image}
                alt={`Project ${selectedImage.id}`}
                fill
                quality={100}
                sizes="100vw"
                style={{objectFit: 'contain'}}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}