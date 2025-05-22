'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from '../../i18n';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Placeholder from './placeholder';
import { useState, useEffect, useRef } from 'react';

// Product details database
const productDetails = {
  "veranda": {
    title: t('products.details.veranda.title'),
    image: "/Veranda6.jpg",
    description: t('products.details.veranda.description'),
    longDescription: t('products.details.veranda.longDescription'),
    features: t('products.details.veranda.features'),
    specifications: t('products.details.veranda.specifications'),
    gallery: [
      { src: "/Veranda7.jpg", alt: t('products.details.veranda.gallery.0.alt') },
      { src: "/Veranda8.jpg", alt: t('products.details.veranda.gallery.1.alt') },
      { src: "/Veranda9.jpg", alt: t('products.details.veranda.gallery.2.alt') }
    ],
    faqs: t('products.details.veranda.faqs')
  },
  "carport": {
    title: t('products.details.carport.title'),
    image: "/Carport2.jpg",
    description: t('products.details.carport.description'),
    longDescription: t('products.details.carport.longDescription'),
    features: t('products.details.carport.features'),
    specifications: t('products.details.carport.specifications'),
    gallery: [
      { src: "/Carport3.jpg", alt: t('products.details.carport.gallery.0.alt') },
      { src: "/Carport4.jpg", alt: t('products.details.carport.gallery.1.alt') },
      { src: "/Carport5.jpg", alt: t('products.details.carport.gallery.2.alt') }
    ],
    faqs: t('products.details.carport.faqs')
  },
  "terrasoverkapping": {
    title: "Terrasoverkapping",
    image: "/Terrasoverkapping1.jpg",
    description: "Stijlvolle terrasoverkappingen die uw buitenruimte transformeren tot een comfortabele leefruimte, ongeacht het weer. Geniet langer van uw terras.",
    longDescription: [
      "Een terrasoverkapping is een prachtige aanvulling op uw woning die het mogelijk maakt om langer van uw terras te genieten. Beschermd tegen regen en wind, maar met behoud van buitengevoel, biedt een terrasoverkapping het beste van beide werelden.",
      "Onze terrasoverkappingen zijn gemaakt van hoogwaardige materialen en worden op maat gemaakt voor uw specifieke situatie. Ze zijn perfect te combineren met glazen schuifwanden of screens voor nog meer comfort en bescherming."
    ],
    features: [
      "100% waterdicht dak",
      "Optionele glazen schuifwanden",
      "Diverse daktypes beschikbaar",
      "Geïntegreerde regenwaterafvoer",
      "Optionele LED-verlichting",
      "Mogelijkheid tot integratie van zonwering",
      "Onderhoudsarm aluminium",
      "Maatwerk voor elke situatie"
    ],
    specifications: [
      { label: "Materiaal", value: "Hoogwaardig aluminium" },
      { label: "Dakopties", value: "Polycarbonaat, glas, sandwichpanelen" },
      { label: "Standaard kleuren", value: "Wit (RAL 9016), Antraciet (RAL 7016)" },
      { label: "Maatwerk kleuren", value: "Alle RAL-kleuren mogelijk" },
      { label: "Opties", value: "Glazen schuifwanden, screens, verlichting" },
      { label: "Garantie", value: "10 jaar op constructie, 5 jaar op bewegende delen" }
    ],
    gallery: [
      { src: "/Terrasoverkapping4.jpg", alt: "Moderne terrasoverkapping" },
      { src: "/Terrasoverkapping2.jpg", alt: "Terrasoverkapping met glazen schuifwanden" },
      { src: "/terrasoverkapping3.jpg", alt: "Terrasoverkapping met LED-verlichting" }
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen een veranda en een terrasoverkapping?",
        answer: "Een terrasoverkapping is primair bedoeld als bescherming van uw terras en is meestal direct aan de woning bevestigd. Een veranda is vaak een vrijstaande of semi-vrijstaande constructie die als extra leefruimte fungeert."
      },
      {
        question: "Kan ik mijn terrasoverkapping later uitbreiden?",
        answer: "Ja, onze terrasoverkappingen zijn modulair ontworpen. U kunt later eenvoudig glazen schuifwanden, screens of verlichting toevoegen."
      },
      {
        question: "Hoe wordt regenwater afgevoerd?",
        answer: "Onze terrasoverkappingen hebben een geïntegreerd afvoersysteem waarbij het regenwater via de staanders wordt afgevoerd. Dit zorgt voor een schone en strakke uitstraling."
      }
    ]
  },
  "kozijnen": {
    title: "Kozijnen",
    image: "/Kozijnen4.jpg",
    description: "Hoogwaardige kozijnen voor optimale isolatie en een stijlvolle afwerking. Onze kozijnen combineren functionaliteit met esthetiek voor elke woning.",
    longDescription: [
      "Kozijnen spelen een cruciale rol in de uitstraling, isolatie en veiligheid van uw woning. Onze hoogwaardige kozijnen bieden niet alleen een prachtige afwerking, maar dragen ook bij aan energiebesparing en comfort in uw woning.",
      "Wij bieden een uitgebreid assortiment aan kozijnen in verschillende materialen en stijlen. Of u nu op zoek bent naar klassieke houten kozijnen, onderhoudsarme kunststof kozijnen of moderne aluminium kozijnen, wij hebben de perfecte oplossing voor uw woning."
    ],
    features: [
      "Uitstekende isolatiewaarden",
      "Inbraakwerend (SKG-gecertificeerd)",
      "Geluidsisolerend",
      "Onderhoudsvriendelijk",
      "Diverse materiaalopties (hout, kunststof, aluminium)",
      "Maatwerk voor elke situatie",
      "Professionele montage",
      "10 jaar garantie"
    ],
    specifications: [
      { label: "Materiaalopties", value: "Hout, kunststof, aluminium" },
      { label: "Isolatiewaarde", value: "U-waarde vanaf 0,8 W/m²K" },
      { label: "Veiligheid", value: "SKG-gecertificeerd hang- en sluitwerk" },
      { label: "Geluidsreductie", value: "Tot 43 dB" },
      { label: "Kleuren hout", value: "Diverse houtsoorten en afwerkingen" },
      { label: "Kleuren kunststof/aluminium", value: "Alle RAL-kleuren beschikbaar" },
      { label: "Garantie", value: "10 jaar op materiaal en constructie" }
    ],
    gallery: [
      { src: "/Kozijnen2.jpg", alt: "Moderne kozijnen" },
      { src: "/Kozijnen3.jpg", alt: "Houten kozijnen" },
      { src: "/Kozijnen4.jpg", alt: "Kunststof kozijnen" }
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen houten, kunststof en aluminium kozijnen?",
        answer: "Houten kozijnen hebben een warme, natuurlijke uitstraling en goede isolatie, maar vereisen meer onderhoud. Kunststof kozijnen zijn onderhoudsarm en hebben een goede prijs-kwaliteitverhouding. Aluminium kozijnen zijn zeer duurzaam, slank en sterk, perfect voor moderne architectuur."
      },
      {
        question: "Hoe lang duurt het vervangen van kozijnen?",
        answer: "Dit hangt af van het aantal kozijnen en de complexiteit van het project. Gemiddeld rekenen we 1-2 dagen voor een eengezinswoning. We zorgen ervoor dat uw woning elke avond wind- en waterdicht is."
      },
      {
        question: "Zijn nieuwe kozijnen energiebesparend?",
        answer: "Absoluut. Moderne kozijnen hebben een veel betere isolatiewaarde dan oudere kozijnen. In combinatie met HR++ of triple glas kunt u tot 30% besparen op uw energierekening."
      }
    ]
  },
  "schuifpuien": {
    title: "Schuifpuien",
    image: "/Schuifpui2.jpg",
    description: "Moderne schuifpuien die uw woning transformeren met een stijlvolle en functionele oplossing. Geniet van maximale lichtinval en een naadloze verbinding tussen binnen en buiten.",
    longDescription: [
      "Schuifpuien creëren een naadloze overgang tussen binnen en buiten, zorgen voor maximale lichtinval en geven uw woning een ruimtelijk gevoel. Met onze hoogwaardige schuifpuisystemen transformeert u uw woonruimte en tuin tot één harmonieus geheel.",
      "Onze schuifpuien zijn verkrijgbaar in verschillende materialen en uitvoeringen, van hef-schuifpuien tot minimalistische panoramische systemen met ultradunne profielen. Alle systemen bieden uitstekende isolatie, veiligheid en bedieningsgemak."
    ],
    features: [
      "Soepel schuifsysteem",
      "Maximale glasoppervlakte",
      "Hoge isolatiewaarde",
      "Inbraakwerend (SKG-gecertificeerd)",
      "Diverse openingsvarianten",
      "Laag onderdorpel mogelijk",
      "Vrije doorgang tot wel 6 meter",
      "Diverse materiaalopties (aluminium, kunststof, hout-aluminium)"
    ],
    specifications: [
      { label: "Materiaalopties", value: "Aluminium, kunststof, hout-aluminium" },
      { label: "Systemen", value: "Hef-schuif, schuif-kiep, vouw, panoramisch" },
      { label: "Max. breedte (2-delig)", value: "Tot 6 meter" },
      { label: "Isolatiewaarde", value: "U-waarde vanaf 0,9 W/m²K" },
      { label: "Veiligheid", value: "SKG** hang- en sluitwerk" },
      { label: "Beglazing", value: "HR++, triple glas, zonwerend glas" },
      { label: "Bediening", value: "Handmatig of elektrisch" },
      { label: "Garantie", value: "10 jaar op materiaal, 5 jaar op bewegende delen" }
    ],
    gallery: [
      { src: "/Schuifpui4.jpg", alt: "Hoekschuifpui" },
      { src: "/Schuifpui3.jpg", alt: "Schuifpui met meerdere panelen" },
      { src: "/Schuifpui2.jpg", alt: "Moderne schuifpui" }
    ],
    faqs: [
      {
        question: "Welk type schuifpui is het meest geschikt voor mijn woning?",
        answer: "Dit hangt af van uw specifieke situatie en wensen. Hef-schuifpuien zijn robuust en zeer isolerend, panoramische systemen bieden maximale transparantie, en vouwwanden kunnen volledig worden geopend. Wij adviseren u graag over de beste oplossing."
      },
      {
        question: "Kan ik een schuifpui laten plaatsen in een bestaande gevel?",
        answer: "Ja, in de meeste gevallen is het mogelijk om een schuifpui te plaatsen in een bestaande gevel. We maken een bouwkundige aanpassing waarbij we zorgen voor een goede draagconstructie boven de opening."
      },
      {
        question: "Zijn schuifpuien goed geïsoleerd?",
        answer: "Onze moderne schuifpuien hebben uitstekende isolatiewaarden dankzij thermisch onderbroken profielen en hoogwaardig isolatieglas. Ze voldoen ruimschoots aan de huidige bouwnormen."
      }
    ]
  },
  "zonweringen": {
    title: "Zonweringen",
    image: "/Zonweringen1.jpg",
    description: "Effectieve zonwering voor optimaal comfort en energiebesparing in uw woning. Bescherm uzelf tegen felle zon en warmte.",
    longDescription: [
      "Zonwering is een essentieel onderdeel van elk huis om optimaal comfort te garanderen. Het beschermt niet alleen uw interieur tegen schadelijke UV-stralen, maar helpt ook bij het reguleren van de binnentemperatuur en het besparen op energiekosten voor airconditioning.",
      "Wij bieden diverse hoogwaardige zonweringsoplossingen die perfect passen bij uw woning. Van stijlvolle uitvalschermen en screens tot praktische rolluiken en elegante markiezen, wij hebben altijd een oplossing die past bij uw stijl en behoeften."
    ],
    features: [
      "Automatische bediening mogelijk met sensoren",
      "Wind- en weerbestendig ontwerp",
      "Diverse materialen en dessins beschikbaar",
      "Helpt bij het terugdringen van energiekosten",
      "UV-bescherming voor uw interieur",
      "Verbetert comfort door temperatuurregulatie",
      "Eenvoudige bediening met afstandsbediening of app",
      "Geïntegreerde LED-verlichting mogelijk"
    ],
    specifications: [
      { label: "Materiaalopties", value: "Acryl, polyester, PVC-gecoat" },
      { label: "Bediening", value: "Handmatig, elektrisch of app-bestuurd" },
      { label: "Sensoren", value: "Wind, zon, regen (optioneel)" },
      { label: "Doekopties", value: "Meer dan 100 kleuren en dessins" },
      { label: "Framekleuren", value: "Alle RAL-kleuren mogelijk" },
      { label: "Typen", value: "Uitvalschermen, screens, markiezen, knikarmschermen" },
      { label: "Garantie", value: "5 jaar op constructie, 3 jaar op doek en motor" }
    ],
    gallery: [
      { src: "/Zonweringen3.jpg", alt: "Moderne zonwering" },
      { src: "/Zonweringen2.jpg", alt: "Zonwering voor terrasoverkapping" },
      { src: "/Zonweringen4.jpg", alt: "Screens voor ramen" }
    ],
    faqs: [
      {
        question: "Welk type zonwering is het meest geschikt voor mij?",
        answer: "Dit hangt af van uw specifieke situatie en wensen. Screens zijn ideaal voor grote raampartijen en bieden veel privacy. Uitvalschermen zijn geschikt voor kleinere ramen, terwijl knikarmschermen perfect zijn voor terrassen. Wij adviseren u graag over de beste oplossing voor uw situatie."
      },
      {
        question: "Kan ik mijn zonwering automatisch laten reageren op het weer?",
        answer: "Ja, wij kunnen uw zonwering uitrusten met sensoren die reageren op zon, wind en regen. Bij te veel wind wordt de zonwering automatisch ingetrokken om schade te voorkomen, en bij zon kan deze automatisch uitrollen voor optimale bescherming."
      },
      {
        question: "Hoe onderhoud ik mijn zonwering?",
        answer: "Het doek kunt u regelmatig afborstelen en een keer per jaar reinigen met lauwwarm water en milde zeep. De mechanische delen dienen jaarlijks gecontroleerd te worden op slijtage en indien nodig gesmeerd te worden. Wij bieden ook onderhoudscontracten aan voor optimale duurzaamheid."
      }
    ]
  },
  "rolluiken": {
    title: "Rolluiken",
    image: "/Rolluiken1.jpg",
    description: "Veilige en isolerende rolluiken voor uw woning. Bespaar energie, verhoog de veiligheid en reduceer geluidsoverlast.",
    longDescription: [
      "Rolluiken bieden een veelzijdige bescherming voor uw woning. Ze houden niet alleen de warmte binnen in de winter en buiten in de zomer, maar bieden ook privacy, geluids- en lichtdemping, en een uitstekende beveiliging tegen inbraak.",
      "Onze rolluiken zijn verkrijgbaar in diverse uitvoeringen en kleuren, zodat ze perfect passen bij de stijl van uw woning. Ze kunnen handmatig bediend worden of voorzien worden van een elektrische motor, eventueel met app-besturing voor maximaal comfort."
    ],
    features: [
      "Extra isolatie (tot 15% energiebesparing)",
      "Verduisterend effect voor betere nachtrust",
      "Inbraakwerend dankzij robuuste constructie",
      "Geluidsisolerend vermogen",
      "Elektrische bediening mogelijk",
      "Integratie met smart home systemen",
      "Diverse lamelprofiel-opties",
      "Op maat gemaakt voor elke situatie"
    ],
    specifications: [
      { label: "Materiaal", value: "Aluminium, dubbelwandig en geïsoleerd" },
      { label: "Lameldikte", value: "9 mm, 14 mm of 19 mm" },
      { label: "Bediening", value: "Handbediend (band/koord) of elektrisch" },
      { label: "Kleuropties", value: "Alle RAL-kleuren mogelijk" },
      { label: "Kasttypen", value: "Opbouw, inbouw, voorzet, renovatie" },
      { label: "Automatisering", value: "Tijdklok, sensoren, afstandsbediening, app-besturing" },
      { label: "Garantie", value: "5 jaar op materiaal, 3 jaar op motor" }
    ],
    gallery: [
      { src: "/Rolluiken2.jpg", alt: "Moderne rolluiken" },
      { src: "/Rolluiken3.jpg", alt: "Inbouwrolluiken" },
      { src: "/Rolluiken4.jpg", alt: "Rolluiken met zonnecel" }
    ],
    faqs: [
      {
        question: "Kan ik rolluiken laten plaatsen als ik geen ruimte heb boven het raam?",
        answer: "Ja, er zijn verschillende montageoplossingen mogelijk afhankelijk van uw situatie. We kunnen rolluiken monteren op de gevel, in de dagopening of bij nieuwbouw zelfs volledig geïntegreerd in de muur. Voor elke situatie hebben wij een passende oplossing."
      },
      {
        question: "Zijn rolluiken ook geschikt voor dakramen?",
        answer: "Ja, wij bieden speciale rolluiken voor dakramen die zowel binnen als buiten gemonteerd kunnen worden. Deze bieden uitstekende verduistering en isolatie voor uw dakramen."
      },
      {
        question: "Welke voordelen bieden geïntegreerde rolluiken in vergelijking met opbouwrolluiken?",
        answer: "Geïntegreerde rolluiken zijn grotendeels onzichtbaar wanneer ze opgerold zijn, wat esthetisch aantrekkelijker is. Ze zijn beter beschermd tegen weersinvloeden en vaak beter geïsoleerd. Opbouwrolluiken zijn echter eenvoudiger en goedkoper te installeren op bestaande woningen, zonder grote bouwkundige aanpassingen."
      }
    ]
  },
  "keramische-tegels": {
    title: "Keramische Tegels",
    image: "/KeramischeTegels1.jpg",
    description: "Duurzame en stijlvolle keramische tegels voor uw terras of oprit. Onderhoudsvriendelijk, vorstbestendig en kleurvast.",
    longDescription: [
      "Keramische tegels zijn de perfecte oplossing voor wie op zoek is naar duurzame, onderhoudsarme en stijlvolle bestrating voor tuin, terras of binnenruimtes. Deze hoogwaardige tegels combineren esthetiek met praktische voordelen en gaan jarenlang mee zonder kwaliteitsverlies.",
      "Onze collectie keramische tegels is verkrijgbaar in diverse formaten, kleuren en afwerkingen - van natuursteen-look tot moderne designs. Ze zijn perfect voor het creëren van een naadloze overgang tussen binnen- en buitenruimtes, wat uw leefruimte visueel vergroot."
    ],
    features: [
      "Vorstbestendig en weerbestendig",
      "Kleurvast, verbleekt niet door zonlicht",
      "Krasbestendig en slijtvast",
      "Antislip-opties beschikbaar voor veiligheid",
      "Eenvoudig te reinigen en onderhoudsarm",
      "Duurzame keuze met lange levensduur",
      "Bestand tegen vlekken en chemicaliën",
      "Milieuvriendelijk productieproces"
    ],
    specifications: [
      { label: "Materiaal", value: "Hoogwaardig keramiek" },
      { label: "Dikte", value: "1 cm (binnen), 2 cm of 3 cm (buiten)" },
      { label: "Formaten", value: "60x60, 80x80, 90x90, 120x120 cm en meer" },
      { label: "Uitvoeringen", value: "Mat, gepolijst, antislip, gestructureerd" },
      { label: "Stijlen", value: "Natuursteen-look, hout-look, modern, industrieel" },
      { label: "Toepassingen", value: "Terrassen, tuinpaden, zwembadranden, binnenruimtes" },
      { label: "Belastbaarheid", value: "1500-2000 kg per tegel" },
      { label: "Garantie", value: "10 jaar fabrieksgarantie" }
    ],
    gallery: [
      { src: "/KeramischeTegels2.jpg", alt: "Moderne keramische tegels" },
      { src: "/KeramischeTegels3.jpg", alt: "Keramische tegels in houtkleuren" },
      { src: "/KeramischeTegels4.jpg", alt: "Keramische tegels in natuursteenlook" }
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen keramische tegels en natuursteen?",
        answer: "Keramische tegels zijn industrieel vervaardigd en hebben daardoor consistente eigenschappen en kleuren. Ze zijn niet poreus, waardoor ze minder gevoelig zijn voor vlekken en verwering dan natuursteen. Natuursteen heeft unieke kleurschakeringen en patronen, maar vereist meer onderhoud en is vaak duurder."
      },
      {
        question: "Hoe worden keramische tegels geplaatst?",
        answer: "Afhankelijk van de ondergrond en toepassing zijn er verschillende plaatsingsmethoden: op een gestabiliseerde ondergrond, op tegeldragers, gelijmd op een betonplaat, of in combinatie met vloerverwarming. Wij adviseren over de beste methode voor uw situatie en kunnen de complete plaatsing verzorgen."
      },
      {
        question: "Zijn keramische tegels geschikt voor opritten?",
        answer: "Voor opritten adviseren wij 3 cm dikke tegels die specifiek geschikt zijn voor zwaar verkeer. Deze worden op een goed voorbereide en verdichte ondergrond geplaatst om verzakking te voorkomen. De juiste plaatsing is cruciaal voor een duurzaam resultaat bij opritten."
      }
    ]
  }
};

export default function ProductDetail() {
  const params = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const galleryRef = useRef(null);

  const product = params.slug;
  const productData = t(`products.details.${product}`);

  useEffect(() => {
    setIsLoading(false);
  }, [product]);

  if (isLoading) {
    return <Placeholder />;
  }

  if (!productData) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-8">The requested product could not be found.</p>
          <Link href="/producten" className="text-orange-600 hover:text-orange-700">
            Back to products
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
      <Navigation />

      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-400 to-orange-100 pt-12 pb-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {productData.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              {productData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Product Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-w-16 aspect-h-9">
                  <Image
                    src={productData.gallery[activeImage].src}
                    alt={productData.gallery[activeImage].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 grid grid-cols-4 gap-4" ref={galleryRef}>
                  {productData.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                        activeImage === index ? 'ring-2 ring-orange-500' : ''
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex space-x-4 mb-8">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      activeTab === 'overview'
                        ? 'bg-orange-600 text-white'
                        : 'text-gray-600 hover:text-orange-600'
                    }`}
                  >
                    {t('products.tabs.overview')}
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      activeTab === 'specifications'
                        ? 'bg-orange-600 text-white'
                        : 'text-gray-600 hover:text-orange-600'
                    }`}
                  >
                    {t('products.tabs.specifications')}
                  </button>
                  <button
                    onClick={() => setActiveTab('faq')}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      activeTab === 'faq'
                        ? 'bg-orange-600 text-white'
                        : 'text-gray-600 hover:text-orange-600'
                    }`}
                  >
                    {t('products.tabs.faq')}
                  </button>
                </div>

                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('products.sections.description')}</h3>
                      <div className="prose prose-orange max-w-none">
                        {productData.longDescription.map((paragraph, index) => (
                          <p key={index} className="text-gray-600 mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('products.sections.features')}</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {productData.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {productData.specifications.map((spec, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <dt className="text-sm font-medium text-gray-500">{spec.label}</dt>
                          <dd className="mt-1 text-lg font-semibold text-gray-900">{spec.value}</dd>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'faq' && (
                  <div className="space-y-6">
                    {productData.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#FFF8F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('products.cta.title', { product: productData.title })}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {t('products.cta.description', { product: productData.title })}
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:bg-orange-700"
            >
              {t('products.cta.button')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 