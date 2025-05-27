'use client';

import { useTranslation } from '../i18n';

export default function SchemaOrg() {
  const { t, language } = useTranslation();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Holland Veranda",
    "@id": "https://hollandveranda.com/#organization",
    "url": "https://hollandveranda.com",
         "logo": [
       {
         "@type": "ImageObject",
         "url": "https://hollandveranda.com/Tab_Logo.jpg"
       }
     ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31-123-456-789",
      "contactType": "customer service",
      "url": "https://hollandveranda.com",
      "availableLanguage": ["Dutch", "English", "German", "French"],
      "email": "info@hollandveranda.nl",
      "areaServed": ["NL", "BE", "DE"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NL",
      "addressRegion": "Noord-Holland"
    },
    "sameAs": [
      "https://www.facebook.com/hollandveranda",
      "https://www.instagram.com/hollandveranda.nl/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
} 