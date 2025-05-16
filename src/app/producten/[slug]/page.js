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
    title: "Veranda",
    image: "/Veranda6.jpg",
    description: "Moderne en stijlvolle veranda's op maat gemaakt voor uw woning en tuin. Onze veranda's bieden het hele jaar door extra leefruimte en bescherming tegen weersinvloeden.",
    longDescription: [
      "Een veranda is een elegante uitbreiding van uw woonruimte die u langer laat genieten van uw tuin en terras. Onze veranda's zijn op maat gemaakt en passen perfect bij de architectuur van uw woning.",
      "Met een veranda creëert u een aangename ruimte die bescherming biedt tegen regen, wind en UV-straling, maar toch de verbinding met buiten behoudt. Het is de ideale plek om te ontspannen, gasten te ontvangen of gewoon te genieten van het uitzicht op uw tuin in alle seizoenen."
    ],
    features: [
      "Maatwerk ontwerp afgestemd op uw woning",
      "Diverse dakopties (glas, polycarbonaat, sandwichpanelen)",
      "LED-verlichting mogelijk voor sfeervolle avonden",
      "Verschillende kleuropties passend bij uw woning",
      "Onderhoudsarme aluminium constructie",
      "Optionele zijwanden en schuifdeuren",
      "Mogelijkheid tot integratie van zonwering",
      "10 jaar garantie op constructie"
    ],
    specifications: [
      { label: "Materiaal", value: "Hoogwaardig aluminium" },
      { label: "Dakopties", value: "Glas, polycarbonaat, sandwichpanelen" },
      { label: "Standaard kleuren", value: "Wit (RAL 9016), Antraciet (RAL 7016)" },
      { label: "Maatwerk kleuren", value: "Alle RAL-kleuren mogelijk" },
      { label: "Verlichting", value: "LED-spots, LED-strips (optioneel)" },
      { label: "Garantie", value: "10 jaar op constructie, 5 jaar op bewegende delen" }
    ],
    gallery: [
      { src: "/Veranda7.jpg", alt: "Moderne veranda aan woning" },
      { src: "/Veranda8.jpg", alt: "Veranda met glazen dak" },
      { src: "/Veranda9.jpg", alt: "Veranda met zijwanden" }
    ],
    faqs: [
      {
        question: "Hoe lang duurt de installatie van een veranda?",
        answer: "De installatie van een standaard veranda duurt gemiddeld 2-3 werkdagen, afhankelijk van de grootte en complexiteit van het project."
      },
      {
        question: "Is een bouwvergunning nodig voor een veranda?",
        answer: "Dit hangt af van de grootte van de veranda en de lokale regelgeving. In veel gevallen is een vergunning niet nodig, maar wij kunnen u hierover adviseren en indien nodig helpen met de aanvraag."
      },
      {
        question: "Kan ik mijn veranda later uitbreiden met zijwanden?",
        answer: "Ja, onze veranda's zijn modulair ontworpen, zodat u later eenvoudig glazen schuifwanden of screens kunt toevoegen."
      }
    ]
  },
  "carport": {
    title: "Carport",
    image: "/Carport2.jpg",
    description: "Duurzame carports die uw auto beschermen tegen weersinvloeden en UV-straling. De open structuur zorgt voor een luchtige uitstraling die past bij elke woning.",
    longDescription: [
      "Een carport is de ideale oplossing voor wie zijn auto wil beschermen tegen weer en wind zonder een volledig gesloten garage te bouwen.",
      "Onze carports bieden optimale bescherming tegen regen, sneeuw, hagel en UV-straling, terwijl de open structuur zorgt voor een ruimtelijk gevoel.",
      "",
      "De moderne, strakke vormgeving van onze aluminium carports past perfect bij zowel traditionele als moderne woningen.",
      "Daarnaast zijn ze onderhoudsarm en zeer duurzaam, waardoor u jarenlang plezier hebt van uw investering."
    ],
    features: [
      "Robuuste aluminium constructie",
      "Eenvoudig te installeren op diverse ondergronden",
      "Onderhoudsarm en weerbestendig",
      "Diverse afmetingen mogelijk voor één of meerdere auto's",
      "Te combineren met LED-verlichting",
      "Verschillende dakopties beschikbaar",
      "Optioneel uit te breiden met zijwanden",
      "Maatwerk mogelijk voor specifieke situaties"
    ],
    specifications: [
      { label: "Materiaal", value: "Hoogwaardig aluminium" },
      { label: "Dakopties", value: "Polycarbonaat (helder of opaal), sandwichpanelen" },
      { label: "Standaard kleuren", value: "Wit (RAL 9016), Antraciet (RAL 7016)" },
      { label: "Maatwerk kleuren", value: "Alle RAL-kleuren mogelijk" },
      { label: "Standaard breedtes", value: "3.0m, 3.5m, 4.0m, 5.0m, 6.0m" },
      { label: "Standaard dieptes", value: "2.5m, 3.0m, 3.5m, 4.0m, 5.0m" },
      { label: "Garantie", value: "10 jaar op constructie" }
    ],
    gallery: [
      { src: "/Carport3.jpg", alt: "Moderne carport voor twee auto's" },
      { src: "/Carport4.jpg", alt: "Carport met geïntegreerde berging" },
      { src: "/Carport5.jpg", alt: "Vrijstaande carport met LED-verlichting" }
    ],
    faqs: [
      {
        question: "Heb ik een bouwvergunning nodig voor een carport?",
        answer: "Dit is afhankelijk van de grootte en locatie van de carport, en van de lokale regelgeving. Wij kunnen u hierover adviseren en indien nodig helpen bij de vergunningsaanvraag."
      },
      {
        question: "Kan een carport ook vrijstaand geplaatst worden?",
        answer: "Ja, onze carports kunnen zowel aan de woning bevestigd als vrijstaand geplaatst worden, afhankelijk van uw wensen en de situatie."
      },
      {
        question: "Hoe worden carports verankerd?",
        answer: "Carports kunnen op verschillende manieren verankerd worden, afhankelijk van de ondergrond. Op een betonnen ondergrond worden ankers gebruikt, terwijl bij zachte ondergronden zoals gras of zand speciale funderingsvoeten worden toegepast."
      }
    ]
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
  const { t } = useTranslation();
  const { slug } = useParams();
  const [imageError, setImageError] = useState({});
  const specsBoxRef = useRef(null);
  const [specsHeight, setSpecsHeight] = useState(400);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Gallery navigation functions
  const nextGalleryImage = (e) => {
    e.stopPropagation();
    const product = productDetails[slug] || defaultProduct;
    setCurrentGalleryIndex((prev) => 
      prev === product.gallery.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevGalleryImage = (e) => {
    e.stopPropagation();
    const product = productDetails[slug] || defaultProduct;
    setCurrentGalleryIndex((prev) => 
      prev === 0 ? product.gallery.length - 1 : prev - 1
    );
  };

  // Modal navigation functions
  const handlePrevModalImage = (e) => {
    e.stopPropagation();
    const product = productDetails[slug] || defaultProduct;
    const currentIndex = parseInt(selectedImage.index);
    const previousIndex = (currentIndex - 1 + product.gallery.length) % product.gallery.length;
    setSelectedImage({
      src: product.gallery[previousIndex].src,
      alt: product.gallery[previousIndex].alt,
      index: previousIndex
    });
  };

  const handleNextModalImage = (e) => {
    e.stopPropagation();
    const product = productDetails[slug] || defaultProduct;
    const currentIndex = parseInt(selectedImage.index);
    const nextIndex = (currentIndex + 1) % product.gallery.length;
    setSelectedImage({
      src: product.gallery[nextIndex].src,
      alt: product.gallery[nextIndex].alt,
      index: nextIndex
    });
  };
  
  useEffect(() => {
    if (specsBoxRef.current) {
      // Set height after render to match specs box
      const updateHeight = () => {
        const height = specsBoxRef.current.offsetHeight;
        if (height > 0) {
          setSpecsHeight(height);
        }
      };
      
      updateHeight();
      // Also update on window resize
      window.addEventListener('resize', updateHeight);
      
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [slug]);
  
  // Fallback for products without detailed information yet
  const defaultProduct = {
    title: slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' '),
    image: "/placeholder.jpg",
    description: "Gedetailleerde informatie over dit product wordt binnenkort toegevoegd.",
    longDescription: ["Neem contact met ons op voor meer informatie over dit product."],
    features: ["Maatwerk mogelijk", "Hoge kwaliteit", "Professionele installatie", "Uitstekende service"],
    specifications: [
      { label: "Materiaal", value: "Hoogwaardige materialen" },
      { label: "Garantie", value: "10 jaar garantie" }
    ],
    gallery: [],
    faqs: []
  };
  
  // Get product details or use fallback
  const product = productDetails[slug] || defaultProduct;

  const handleImageError = (imageKey) => {
    setImageError(prev => ({...prev, [imageKey]: true}));
  };

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-0 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 py-12 z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={`/offerte?product=${product.title}`}
                  className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105"
                >
                  Vraag offerte aan
                </Link>
                {product.gallery.length > 0 && (
                  <Link 
                    href="#gallery" 
                    className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors duration-200"
                  >
                    Bekijk voorbeelden
                  </Link>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[550px] md:h-[650px]">
              {imageError['hero'] ? (
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <Placeholder title={product.title} />
                </div>
              ) : (
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  style={{ 
                    objectPosition: 
                      slug === 'veranda' ? 'center top' : 
                      slug === 'carport' ? 'center 30%' :
                      slug === 'terrasoverkapping' ? 'center 20%' :
                      slug === 'kozijnen' ? 'center 30%' :
                      slug === 'schuifpuien' ? 'center 40%' :
                      slug === 'zonweringen' ? 'center 20%' :
                      slug === 'rolluiken' ? 'center 35%' :
                      slug === 'keramische-tegels' ? 'center 40%' : 'center'
                  }}
                  priority
                  onError={() => handleImageError('hero')}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Description and Features - Side by Side for all products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Product Description */}
            <div className="w-full md:w-1/2">
              <div className="px-4 md:px-10 max-w-[85%] mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Over {product.title}</h2>
                {product.longDescription.map((paragraph, index) => (
                  paragraph ? (
                    <p key={index} className="text-gray-600 mb-7 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ) : (
                    <div key={index} className="h-6"></div>
                  )
                ))}
              </div>
            </div>
            
            {/* Right side - Features */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Kenmerken</h2>
              <div className="grid grid-cols-1 gap-5">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications and Gallery Side by Side for all products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Specifications */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Specificaties</h2>
              <div ref={specsBoxRef} className="bg-white rounded-lg p-6 shadow-sm">
                {product.specifications.map((spec, index) => (
                  <div key={index} className={`flex py-3 ${index !== product.specifications.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <span className="w-1/3 font-semibold text-gray-700">{spec.label}</span>
                    <span className="w-2/3 text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Gallery (just one image) */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-gray-800" id="gallery">Voorbeelden</h2>
              <div 
                className="rounded-lg overflow-hidden shadow-md cursor-pointer" 
                style={{ height: `${specsHeight}px` }}
                onClick={() => {
                  if (product.gallery.length > 0) {
                    setSelectedImage({
                      src: product.gallery[currentGalleryIndex].src,
                      alt: product.gallery[currentGalleryIndex].alt,
                      index: currentGalleryIndex
                    });
                  }
                }}
              >
                {product.gallery.length > 0 && (
                  <div className="relative h-full w-full">
                    {imageError['gallery-first'] ? (
                      <Placeholder />
                    ) : (
                      <>
                        <Image
                          src={product.gallery[currentGalleryIndex].src}
                          alt={product.gallery[currentGalleryIndex].alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          onError={() => handleImageError('gallery-first')}
                        />
                        {/* Gallery navigation buttons */}
                        {product.gallery.length > 1 && (
                          <>
                            {currentGalleryIndex > 0 && (
                              <button 
                                onClick={prevGalleryImage} 
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full shadow-md z-10 transition-colors duration-200"
                                aria-label="Previous image"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                            )}
                            
                            {currentGalleryIndex < product.gallery.length - 1 && (
                              <button 
                                onClick={nextGalleryImage} 
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full shadow-md z-10 transition-colors duration-200"
                                aria-label="Next image"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            )}
                          </>
                        )}
                        {/* Gallery indicator dots */}
                        {product.gallery.length > 1 && (
                          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                            {product.gallery.map((_, index) => (
                              <button 
                                key={index} 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentGalleryIndex(index);
                                }}
                                className={`h-2 w-2 rounded-full ${currentGalleryIndex === index ? 'bg-orange-600' : 'bg-white/50'}`}
                                aria-label={`Go to image ${index + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
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
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1920}
              height={1080}
              style={{
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-orange-600 rounded-full p-2 hover:bg-orange-700 transition-colors duration-200 shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation Arrows */}
            {product.gallery.length > 1 && (
              <>
                {selectedImage.index > 0 && (
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-orange-600 rounded-full p-3 hover:bg-orange-700 transition-colors duration-200 shadow-md"
                    onClick={handlePrevModalImage}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                
                {selectedImage.index < product.gallery.length - 1 && (
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-orange-600 rounded-full p-3 hover:bg-orange-700 transition-colors duration-200 shadow-md"
                    onClick={handleNextModalImage}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
} 