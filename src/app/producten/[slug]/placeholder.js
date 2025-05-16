import React from 'react';

export default function Placeholder({ title }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200">
      <div className="text-center p-6">
        <svg 
          className="w-24 h-24 mx-auto text-gray-400" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <p className="mt-4 text-gray-600 font-medium">{title || 'Productafbeelding binnenkort beschikbaar'}</p>
      </div>
    </div>
  );
} 