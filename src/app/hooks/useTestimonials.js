import { useState } from 'react';

export const useTestimonials = (testimonials) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => setCurrentIndex((prev) => 
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
  
  const prev = () => setCurrentIndex((prev) => 
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
  
  return { 
    currentIndex, 
    currentTestimonial: testimonials[currentIndex],
    next, 
    prev 
  };
}; 