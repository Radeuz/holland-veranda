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
      id: 1,
      title: "Veranda",
      image: "/Veranda1.jpg",
      description: "Moderne en stijlvolle veranda's op maat gemaakt voor uw woning en tuin. Onze veranda's bieden het hele jaar door extra leefruimte en bescherming tegen weersinvloeden.",
      features: ["Maatwerk ontwerp", "Diverse dakopties", "LED-verlichting mogelijk", "Verschillende kleuropties"],
      objectFit: "cover",
      slug: "veranda"
    },
    {
      id: 2,
      title: "Carport",
      image: "/Carport2.jpg",
      description: "Duurzame carports die uw auto beschermen tegen weersinvloeden en UV-straling. De open structuur zorgt voor een luchtige uitstraling die past bij elke woning.",
      features: ["Robuuste constructie", "Eenvoudig te installeren", "Onderhoudsarm", "Diverse afmetingen mogelijk"],
      objectFit: "cover",
      objectPosition: "center center",
      slug: "carport"
    },
    {
      id: 3,
      title: "Terrasoverkapping",
      image: "/Terrasoverkapping1.jpg",
      description: "Een terrasoverkapping biedt beschutting tegen regen en zon, zodat u optimaal kunt genieten van uw buitenruimte. Onze terrasoverkappingen zijn verkrijgbaar in verschillende materialen en stijlen, passend bij uw woning en wensen.",
      features: ["Waterdicht dak", "Optionele glazen schuifwanden", "Geïntegreerde zonwering mogelijk", "Diverse uitvoeringen"],
      objectFit: "cover",
      slug: "terrasoverkapping"
    },
    {
      id: 4,
      title: "Kozijnen",
      image: "/Kozijnen1.jpg",
      description: "Onze kozijnen zijn van hoogwaardige kwaliteit en verkrijgbaar in verschillende materialen zoals hout, kunststof en aluminium. Ze bieden uitstekende isolatie en zijn verkrijgbaar in diverse kleuren en afwerkingen.",
      features: ["Uitstekende isolatiewaarden", "Inbraakwerend", "Geluidsisolerend", "Onderhoudsvriendelijk"],
      objectFit: "cover",
      slug: "kozijnen"
    },
    {
      id: 5,
      title: "Schuifpuien",
      image: "/Schuifpui1.jpg",
      description: "Een schuifpui is een elegante oplossing om uw woonkamer te verbinden met de tuin. Onze schuifpuien zijn verkrijgbaar in verschillende materialen en stijlen, met uitstekende isolatiewaarden en een soepele bediening.",
      features: ["Soepel schuifsysteem", "Hoge isolatiewaarde", "Inbraakwerend", "Diverse indelingen mogelijk"],
      objectFit: "cover",
      slug: "schuifpuien"
    },
    {
      id: 6,
      title: "Zonweringen",
      image: "/Zonweringen1.jpg",
      description: "Effectieve zonwering voor optimaal comfort in en rond uw woning. Bescherm uw interieur tegen zonlicht en creëer een aangename binnentemperatuur.",
      features: ["Automatische bediening mogelijk", "Wind- en weerbestendig", "Diverse kleuren en dessins", "Terugdringen energiekosten"],
      objectFit: "cover",
      objectPosition: "center 70%",
      slug: "zonweringen"
    },
    {
      id: 7,
      title: "Rolluiken",
      image: "/Rolluiken1.jpg",
      description: "Veilige en stijlvolle rolluiken die niet alleen uw privacy waarborgen maar ook zorgen voor extra isolatie en bescherming tegen inbraak.",
      features: ["Extra isolatie", "Verduisterend", "Inbraakwerend", "Elektrische bediening mogelijk"],
      objectFit: "cover",
      objectPosition: "center 90%",
      slug: "rolluiken"
    },
    {
      id: 8,
      title: "Keramische Tegels",
      image: "/KeramischeTegels1.jpg",
      description: "Duurzame en stijlvolle keramische tegels voor binnen en buiten. Creëer een naadloze overgang van uw woning naar uw terras of tuin.",
      features: ["Vorstbestendig", "Kleurvast", "Krasbestendig", "Antislip-opties beschikbaar"],
      objectFit: "cover",
      slug: "keramische-tegels"
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
              Ontdek onze ruime collectie aluminium veranda's, terrasoverkappingen en maatwerk buitenoplossingen.
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
                        objectFit: product.objectFit || 'cover',
                        objectPosition: product.objectPosition || 'center'
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