'use client';

import { useTranslation } from '../i18n';

export default function SchemaOrg() {
  const { t, language } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.hollandveranda.nl/#organization",
    "name": "Holland Veranda",
    "alternateName": ["Holland Veranda BV", "Holland Veranda B.V."],
    "image": [
      "https://www.hollandveranda.nl/og-image.jpg",
      "https://www.hollandveranda.nl/logo.png"
    ],
    "description": language === 'nl' 
      ? "Specialist in hoogwaardige veranda's en overkappingen. Ontdek ons assortiment moderne, klassieke en glazen veranda's voor uw tuin."
      : "Specialist in high-quality verandas and canopies. Discover our range of modern, classic, and glass verandas for your garden.",
    "url": "https://www.hollandveranda.nl",
    "telephone": "+31618612190",
    "email": "info@hollandveranda.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Voorbeeldstraat 123",
      "addressLocality": "Amsterdam",
      "postalCode": "1234 AB",
      "addressCountry": "NL",
      "addressRegion": "Noord-Holland"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.3702157,
      "longitude": 4.8861412
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00",
        "closed": true
      }
    ],
    "sameAs": [
      "https://www.facebook.com/hollandveranda",
      "https://www.instagram.com/hollandveranda",
      "https://www.linkedin.com/company/hollandveranda"
    ],
    "priceRange": "€€",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.3702157,
        "longitude": 4.8861412
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": language === 'nl' ? "Veranda's en Overkappingen" : "Verandas and Canopies",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": language === 'nl' ? "Moderne Veranda" : "Modern Veranda",
            "description": language === 'nl' 
              ? "Moderne veranda's met aluminium constructie en glazen wanden"
              : "Modern verandas with aluminum construction and glass walls"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": language === 'nl' ? "Klassieke Veranda" : "Classic Veranda",
            "description": language === 'nl'
              ? "Klassieke veranda's met houten constructie"
              : "Classic verandas with wooden construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": language === 'nl' ? "Glazen Schuifwanden" : "Glass Sliding Walls",
            "description": language === 'nl'
              ? "Moderne glazen schuifwanden voor optimale lichtinval"
              : "Modern glass sliding walls for optimal light penetration"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "John Doe"
        },
        "datePublished": "2024-01-15",
        "reviewBody": language === 'nl'
          ? "Uitstekende service en kwaliteit. Zeer tevreden met onze nieuwe veranda!"
          : "Excellent service and quality. Very satisfied with our new veranda!"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 