'use client';

import Image from 'next/image'
import { useTranslation } from '../i18n'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Projecten() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const projects = [
    { 
      id: 5, 
      image: '/Veranda5.jpg',
      location: 'Eindhoven, Nederland',
      product: 'Veranda'
    },
    { 
      id: 6, 
      image: '/Veranda6.jpg',
      location: 'Antwerpen, België',
      product: 'Veranda'
    },
    { 
      id: 7, 
      image: '/Veranda7.jpg',
      location: 'Brugge, België',
      product: 'Veranda'
    },
    { 
      id: 8, 
      image: '/Veranda8.jpg',
      location: 'Gent, België',
      product: 'Veranda'
    },
    {
      id: 9,
      image: '/Veranda9.jpg',
      location: 'Brussel, België',
      product: 'Veranda'
    },
    {
      id: 10,
      image: '/Terrasoverkapping5.jpg',
      location: 'Groningen, Nederland',
      product: 'Terrasoverkapping'
    },
    {
      id: 11,
      image: '/Terrasoverkapping3.jpg',
      location: 'Leeuwarden, Nederland',
      product: 'Terrasoverkapping'
    },
    {
      id: 12,
      image: '/Terrasoverkapping4.jpg',
      location: 'Arnhem, Nederland',
      product: 'Terrasoverkapping'
    },
    { 
      id: 13, 
      image: '/Carport3.jpg',
      location: 'Tilburg, Nederland',
      product: 'Carport'
    },
    { 
      id: 14, 
      image: '/Carport5.jpg',
      location: 'Enschede, Nederland',
      product: 'Carport'
    },
    { 
      id: 15, 
      image: '/Kozijnen5.jpg',
      location: 'Haarlem, Nederland',
      product: 'Kozijnen'
    },
    { 
      id: 16, 
      image: '/Kozijnen2.jpg',
      location: 'Alkmaar, Nederland',
      product: 'Kozijnen'
    },
    { 
      id: 17, 
      image: '/Kozijnen4.jpg',
      location: 'Delft, Nederland',
      product: 'Kozijnen'
    },
    { 
      id: 18, 
      image: '/Schuifpui5.jpg',
      location: 'Zwolle, Nederland',
      product: 'Schuifpuien'
    },
    { 
      id: 19, 
      image: '/Schuifpui2.jpg',
      location: 'Apeldoorn, Nederland',
      product: 'Schuifpuien'
    },
    { 
      id: 20, 
      image: '/Schuifpui3.jpg',
      location: 'Amersfoort, Nederland',
      product: 'Schuifpuien'
    },
    { 
      id: 21, 
      image: '/Schuifpui4.jpg',
      location: 'Dordrecht, Nederland',
      product: 'Schuifpuien'
    },
    { 
      id: 22, 
      image: '/Zonweringen1.jpg',
      location: 'Venlo, Nederland',
      product: 'Zonweringen'
    },
    { 
      id: 23, 
      image: '/Zonweringen2.jpg',
      location: 'Deventer, Nederland',
      product: 'Zonweringen'
    },
    { 
      id: 24, 
      image: '/Zonweringen3.jpg',
      location: 'Zaanstad, Nederland',
      product: 'Zonweringen'
    },
    { 
      id: 25, 
      image: '/Zonweringen4.jpg',
      location: 'Almere, Nederland',
      product: 'Zonweringen'
    },
    { 
      id: 26, 
      image: '/Rolluiken1.jpg',
      location: 'Hoorn, Nederland',
      product: 'Rolluiken'
    },
    { 
      id: 27, 
      image: '/Rolluiken2.jpg',
      location: 'Den Bosch, Nederland',
      product: 'Rolluiken'
    },
    { 
      id: 28, 
      image: '/Rolluiken3.jpg',
      location: 'Lelystad, Nederland',
      product: 'Rolluiken'
    },
    { 
      id: 29, 
      image: '/Rolluiken4.jpg',
      location: 'Hilversum, Nederland',
      product: 'Rolluiken'
    },
    { 
      id: 30, 
      image: '/KeramischeTegels1.jpg',
      location: 'Purmerend, Nederland',
      product: 'Keramische Tegels'
    },
    { 
      id: 31, 
      image: '/KeramischeTegels2.jpg',
      location: 'Roosendaal, Nederland',
      product: 'Keramische Tegels'
    },
    { 
      id: 32, 
      image: '/KeramischeTegels3.jpg',
      location: 'Middelburg, Nederland',
      product: 'Keramische Tegels'
    },
    { 
      id: 33, 
      image: '/KeramischeTegels4.jpg',
      location: 'Emmen, Nederland',
      product: 'Keramische Tegels'
    },
    {
      id: 34,
      image: '/GespecialiseerdeMonteurs1.jpg',
      location: 'Ons team aan het werk'
    },
    { 
      id: 1, 
      image: '/Veranda1.jpg',
      location: 'Rotterdam, Nederland',
      product: 'Veranda'
    },
    { 
      id: 2, 
      image: '/Veranda13.jpg',
      location: 'Amsterdam, Nederland',
      product: 'Veranda'
    },
    { 
      id: 3, 
      image: '/Veranda12.jpg',
      location: 'Utrecht, Nederland',
      product: 'Veranda'
    },
    { 
      id: 4, 
      image: '/Veranda4.jpg',
      location: 'Den Haag, Nederland',
      product: 'Veranda',
      objectPosition: 'center 30%'
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

  useEffect(() => {
    // ... existing code ...
  }, [projects]);

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
    <main>
      <Navigation />

      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 pt-12 pb-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Projecten
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              Bekijk onze voltooide projecten en laat u inspireren door onze vakmanschap en kwaliteit.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-[1.02]">
                <div 
                  className="relative aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(project)}
                >
                  <Image
                    src={project.image}
                    alt={`Project in ${project.location}`}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: project.objectPosition || 'center'
                    }}
                    className="rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600">{project.location}</span>
                    </div>
                    {project.product && (
                      <span className="text-orange-600 font-medium">{project.product}</span>
                    )}
                  </div>
                  {project.product && (
                    <div className="mt-4">
                      <Link 
                        href={`/offerte?product=${project.product}`}
                        className="inline-block w-full px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold transition-colors duration-200 text-center"
                      >
                        Vraag offerte aan
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage.image}
              alt={`Project in ${selectedImage.location}`}
              width={1920}
              height={1080}
              style={{
                objectFit: 'contain',
                objectPosition: selectedImage.objectPosition || 'center'
              }}
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-orange-600 rounded-full p-2 hover:bg-orange-700 transition-colors duration-200 shadow-md"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-orange-600/80 hover:bg-orange-700/90 rounded-full p-3 transition-all duration-200 shadow-md"
              onClick={handlePrevious}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-orange-600/80 hover:bg-orange-700/90 rounded-full p-3 transition-all duration-200 shadow-md"
              onClick={handleNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
} 