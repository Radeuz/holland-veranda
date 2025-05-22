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
      id: 5, 
      image: '/Veranda5.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 6, 
      image: '/Veranda6.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 7, 
      image: '/Veranda7.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 8, 
      image: '/Veranda8.jpg',
      locationKey: 'netherlands'
    },
    {
      id: 9,
      image: '/Veranda9.jpg',
      locationKey: 'netherlands'
    },
    {
      id: 10,
      image: '/Terrasoverkapping5.jpg',
      locationKey: 'netherlands'
    },
    {
      id: 11,
      image: '/Terrasoverkapping3.jpg',
      locationKey: 'netherlands'
    },
    {
      id: 12,
      image: '/Terrasoverkapping4.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 13, 
      image: '/Carport3.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 14, 
      image: '/Carport5.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 15, 
      image: '/Kozijnen5.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 16, 
      image: '/Kozijnen2.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 17, 
      image: '/Kozijnen4.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 18, 
      image: '/Schuifpui5.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 19, 
      image: '/Schuifpui2.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 20, 
      image: '/Schuifpui3.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 21, 
      image: '/Schuifpui4.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 22, 
      image: '/Zonweringen1.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 24, 
      image: '/Zonweringen3.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 25, 
      image: '/Zonweringen4.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 26, 
      image: '/Rolluiken1.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 27, 
      image: '/Rolluiken2.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 28, 
      image: '/Rolluiken3.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 29, 
      image: '/Rolluiken4.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 30, 
      image: '/KeramischeTegels1.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 31, 
      image: '/KeramischeTegels2.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 32, 
      image: '/KeramischeTegels3.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 33, 
      image: '/KeramischeTegels4.jpg',
      locationKey: 'netherlands'
    },
    {
      id: 34,
      image: '/GespecialiseerdeMonteurs1.jpg',
      locationKey: 'team'
    },
    { 
      id: 1, 
      image: '/Veranda1.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 2, 
      image: '/Veranda13.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 3, 
      image: '/Veranda12.jpg',
      locationKey: 'netherlands'
    },
    { 
      id: 4, 
      image: '/Veranda4.jpg',
      objectPosition: 'center 30%',
      locationKey: 'netherlands'
    }
  ];

  useEffect(() => {
    // Apply translations to projects
    const translatedProjects = projectData.map(project => ({
      ...project,
      location: t(`projects.location.${project.locationKey}`)
    }));
    setProjects(translatedProjects);

    // Check if there's a selected project ID in sessionStorage
    const selectedProjectId = sessionStorage.getItem('selectedProjectId');
    if (selectedProjectId) {
      // Find the project with the matching ID
      const projectId = parseInt(selectedProjectId);
      const project = translatedProjects.find(p => p.id === projectId);
      
      if (project) {
        // Set the selected image to open the modal
        setSelectedImage(project);
      }
      // Clear the sessionStorage
      sessionStorage.removeItem('selectedProjectId');
    }
  }, [t]);

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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-semibold">
                      {project.location}
                    </p>
                  </div>
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
                sizes="100vw"
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