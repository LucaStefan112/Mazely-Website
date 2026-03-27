export type Locale = "en" | "ro" | "fr" | "de";

export interface Translations {
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    features: string;
    howItWorks: string;
    admin: string;
    contact: string;
    getStarted: string;
    goToApp: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  features: {
    label: string;
    title: string;
    subtitle: string;
    visualNav: { title: string; description: string };
    qrCode: { title: string; description: string };
    multiFloor: { title: string; description: string };
    smartRouting: { title: string; description: string };
    multiLang: { title: string; description: string };
    analytics: { title: string; description: string };
  };
  howItWorks: {
    label: string;
    title: string;
    subtitle: string;
    step1: { title: string; description: string };
    step2: { title: string; description: string };
    step3: { title: string; description: string };
    step4: { title: string; description: string };
  };
  admin: {
    label: string;
    title: string;
    subtitle: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
    feature6: string;
  };
  stats: {
    buildings: string;
    floors: string;
    navigations: string;
    languages: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    emailLabel: string;
  };
  footer: {
    description: string;
    product: string;
    features: string;
    howItWorks: string;
    admin: string;
    company: string;
    about: string;
    contact: string;
    privacy: string;
    rights: string;
    madeWith: string;
  };
  language: {
    select: string;
    en: string;
    ro: string;
    fr: string;
    de: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    meta: {
      title: "Mazely — Indoor Building Navigation",
      description:
        "Map floors, connect rooms, and guide people through buildings with step-by-step visual navigation. The smart indoor wayfinding solution.",
      keywords:
        "indoor navigation, building navigation, wayfinding, floor mapping, indoor maps, QR navigation, smart building, room finder",
      ogTitle: "Mazely — Find Your Way Indoors",
      ogDescription:
        "Step-by-step visual navigation for any building. Map floors, connect rooms, and help people find their way.",
    },
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      admin: "For Admins",
      contact: "Contact",
      getStarted: "Get Started",
      goToApp: "Go to App",
    },
    hero: {
      badge: "Indoor Navigation Platform",
      title1: "Find Your Way",
      titleHighlight: "Inside Any Building",
      title2: "",
      subtitle:
        "Map floors, connect rooms, and guide visitors with step-by-step visual directions. No GPS needed — just smart indoor wayfinding.",
      cta: "Get Started Free",
      secondaryCta: "See How It Works",
    },
    features: {
      label: "Features",
      title: "Everything You Need for Indoor Navigation",
      subtitle:
        "Mazely provides a complete toolkit for mapping buildings and guiding people — from visual directions to analytics.",
      visualNav: {
        title: "Visual Navigation",
        description:
          "See real photos of every corridor, door, and landmark along your route. No guessing — just follow the images.",
      },
      qrCode: {
        title: "QR Code Access",
        description:
          "Scan a QR code at any room or checkpoint to instantly set your starting point and begin navigating.",
      },
      multiFloor: {
        title: "Multi-Floor Support",
        description:
          "Navigate seamlessly across floors via elevators, stairs, or escalators with automatic cross-floor routing.",
      },
      smartRouting: {
        title: "Smart Pathfinding",
        description:
          "Advanced algorithms calculate the shortest and most efficient route between any two points in the building.",
      },
      multiLang: {
        title: "Multi-Language",
        description:
          "Available in English, Romanian, French, and German — with more languages coming soon.",
      },
      analytics: {
        title: "Usage Analytics",
        description:
          "Track navigation sessions, popular routes, and user feedback to continuously improve the experience.",
      },
    },
    howItWorks: {
      label: "How It Works",
      title: "Up and Running in Minutes",
      subtitle:
        "Setting up Mazely for your building is simple. Map your space, connect it, and let people navigate.",
      step1: {
        title: "Map Your Floors",
        description:
          "Use the interactive floor map designer to add rooms, corridors, and checkpoints to each floor of your building.",
      },
      step2: {
        title: "Connect Spaces",
        description:
          "Create connections between rooms, corridors, and checkpoints. Link floors together via elevators and stairs.",
      },
      step3: {
        title: "Add Walkthrough Images",
        description:
          "Upload or capture photos for each corridor direction so visitors see exactly what's ahead at every step.",
      },
      step4: {
        title: "Share & Navigate",
        description:
          "Generate QR codes, share building links, and let visitors navigate with step-by-step visual directions.",
      },
    },
    admin: {
      label: "For Admins",
      title: "Powerful Building Management Tools",
      subtitle:
        "Everything building administrators need to create, manage, and optimize indoor navigation experiences.",
      feature1: "Interactive drag-and-drop floor map designer",
      feature2: "Bulk image upload with camera capture support",
      feature3: "QR code generation for rooms and checkpoints",
      feature4: "Export floor maps as PNG or SVG",
      feature5: "Invite and manage building administrators",
      feature6: "Real-time navigation analytics dashboard",
    },
    stats: {
      buildings: "Buildings Mapped",
      floors: "Floors Designed",
      navigations: "Navigations Completed",
      languages: "Languages Supported",
    },
    cta: {
      title: "Ready to Transform Your Building Navigation?",
      subtitle:
        "Join organizations already using Mazely to help visitors, employees, and students find their way.",
      button: "Start Mapping Today",
    },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      subtitle:
        "Have questions about Mazely? Want to set up indoor navigation for your building? We'd love to hear from you.",
      email: "app@mazely.app",
      emailLabel: "Email us at",
    },
    footer: {
      description:
        "Indoor building navigation — map floors, connect rooms, find your way.",
      product: "Product",
      features: "Features",
      howItWorks: "How It Works",
      admin: "For Admins",
      company: "Company",
      about: "About",
      contact: "Contact",
      privacy: "Privacy Policy",
      rights: "All rights reserved.",
      madeWith: "Made with",
    },
    language: {
      select: "Language",
      en: "English",
      ro: "Romanian",
      fr: "French",
      de: "German",
    },
  },
  ro: {
    meta: {
      title: "Mazely — Navigare in Cladiri",
      description:
        "Cartografiaza etaje, conecteaza camere si ghideaza vizitatorii cu navigare vizuala pas cu pas. Solutia inteligenta de orientare in interior.",
      keywords:
        "navigare interior, navigare cladire, orientare, cartografiere etaje, harti interioare, navigare QR, cladire inteligenta",
      ogTitle: "Mazely — Gaseste-ti Drumul in Interior",
      ogDescription:
        "Navigare vizuala pas cu pas pentru orice cladire. Cartografiaza etaje, conecteaza camere si ajuta oamenii sa se orienteze.",
    },
    nav: {
      features: "Functionalitati",
      howItWorks: "Cum Functioneaza",
      admin: "Pentru Administratori",
      contact: "Contact",
      getStarted: "Incepe Acum",
      goToApp: "Mergi la Aplicatie",
    },
    hero: {
      badge: "Platforma de Navigare in Interior",
      title1: "Gaseste-ti Drumul",
      titleHighlight: "In Orice Cladire",
      title2: "",
      subtitle:
        "Cartografiaza etaje, conecteaza camere si ghideaza vizitatorii cu indicatii vizuale pas cu pas. Fara GPS — doar orientare inteligenta.",
      cta: "Incepe Gratuit",
      secondaryCta: "Vezi Cum Functioneaza",
    },
    features: {
      label: "Functionalitati",
      title: "Tot Ce Ai Nevoie pentru Navigarea in Interior",
      subtitle:
        "Mazely ofera un set complet de instrumente pentru cartografierea cladirilor si ghidarea vizitatorilor — de la indicatii vizuale la analitice.",
      visualNav: {
        title: "Navigare Vizuala",
        description:
          "Vezi fotografii reale ale fiecarui coridor, usa si reper de pe traseu. Fara ghiceli — urmeaza imaginile.",
      },
      qrCode: {
        title: "Acces prin Cod QR",
        description:
          "Scaneaza un cod QR la orice camera sau punct de control pentru a-ti seta instant punctul de plecare.",
      },
      multiFloor: {
        title: "Suport Multi-Etaj",
        description:
          "Navigheaza fluid intre etaje prin lifturi, scari sau scari rulante cu rutare automata.",
      },
      smartRouting: {
        title: "Rutare Inteligenta",
        description:
          "Algoritmi avansati calculeaza cel mai scurt si eficient traseu intre oricare doua puncte din cladire.",
      },
      multiLang: {
        title: "Multilingv",
        description:
          "Disponibil in romana, engleza, franceza si germana — cu mai multe limbi in curand.",
      },
      analytics: {
        title: "Analitice de Utilizare",
        description:
          "Urmareste sesiunile de navigare, rutele populare si feedback-ul utilizatorilor pentru a imbunatati experienta.",
      },
    },
    howItWorks: {
      label: "Cum Functioneaza",
      title: "Gata de Utilizare in Cateva Minute",
      subtitle:
        "Configurarea Mazely pentru cladirea ta este simpla. Cartografiaza spatiul, conecteaza-l si lasa vizitatorii sa navigheze.",
      step1: {
        title: "Cartografiaza Etajele",
        description:
          "Foloseste designerul interactiv pentru a adauga camere, coridoare si puncte de control pe fiecare etaj.",
      },
      step2: {
        title: "Conecteaza Spatiile",
        description:
          "Creeaza conexiuni intre camere, coridoare si puncte de control. Leaga etajele prin lifturi si scari.",
      },
      step3: {
        title: "Adauga Imagini de Parcurgere",
        description:
          "Incarca sau captureaza fotografii pentru fiecare directie de coridor, astfel incat vizitatorii sa vada exact ce urmeaza.",
      },
      step4: {
        title: "Partajeaza si Navigheaza",
        description:
          "Genereaza coduri QR, partajeaza link-uri si lasa vizitatorii sa navigheze cu indicatii vizuale pas cu pas.",
      },
    },
    admin: {
      label: "Pentru Administratori",
      title: "Instrumente Puternice de Gestionare",
      subtitle:
        "Tot ce au nevoie administratorii pentru a crea, gestiona si optimiza experienta de navigare in interior.",
      feature1: "Designer interactiv de harti cu drag-and-drop",
      feature2: "Incarcare multipla de imagini cu suport camera",
      feature3: "Generare coduri QR pentru camere si puncte de control",
      feature4: "Export harti etaje ca PNG sau SVG",
      feature5: "Invita si gestioneaza administratorii cladirii",
      feature6: "Panou de analitice in timp real",
    },
    stats: {
      buildings: "Cladiri Cartografiate",
      floors: "Etaje Proiectate",
      navigations: "Navigari Finalizate",
      languages: "Limbi Suportate",
    },
    cta: {
      title: "Pregatit sa Transformi Navigarea in Cladirea Ta?",
      subtitle:
        "Alatura-te organizatiilor care folosesc deja Mazely pentru a ajuta vizitatorii si angajatii sa se orienteze.",
      button: "Incepe Cartografierea",
    },
    contact: {
      label: "Contact",
      title: "Ia Legatura",
      subtitle:
        "Ai intrebari despre Mazely? Vrei sa configurezi navigarea in interior pentru cladirea ta? Ne-ar placea sa auzim de la tine.",
      email: "app@mazely.app",
      emailLabel: "Trimite-ne un email la",
    },
    footer: {
      description:
        "Navigare in cladiri — cartografiaza etaje, conecteaza camere, gaseste-ti drumul.",
      product: "Produs",
      features: "Functionalitati",
      howItWorks: "Cum Functioneaza",
      admin: "Pentru Administratori",
      company: "Companie",
      about: "Despre",
      contact: "Contact",
      privacy: "Politica de Confidentialitate",
      rights: "Toate drepturile rezervate.",
      madeWith: "Facut cu",
    },
    language: {
      select: "Limba",
      en: "Engleza",
      ro: "Romana",
      fr: "Franceza",
      de: "Germana",
    },
  },
  fr: {
    meta: {
      title: "Mazely — Navigation Interieure des Batiments",
      description:
        "Cartographiez les etages, connectez les salles et guidez les visiteurs avec une navigation visuelle etape par etape.",
      keywords:
        "navigation interieure, navigation batiment, orientation, cartographie etages, plans interieurs, navigation QR",
      ogTitle: "Mazely — Trouvez Votre Chemin a l'Interieur",
      ogDescription:
        "Navigation visuelle etape par etape pour tout batiment. Cartographiez, connectez et guidez.",
    },
    nav: {
      features: "Fonctionnalites",
      howItWorks: "Comment Ca Marche",
      admin: "Pour les Admins",
      contact: "Contact",
      getStarted: "Commencer",
      goToApp: "Aller a l'App",
    },
    hero: {
      badge: "Plateforme de Navigation Interieure",
      title1: "Trouvez Votre Chemin",
      titleHighlight: "Dans N'importe Quel Batiment",
      title2: "",
      subtitle:
        "Cartographiez les etages, connectez les salles et guidez les visiteurs avec des directions visuelles. Sans GPS — juste une orientation intelligente.",
      cta: "Commencer Gratuitement",
      secondaryCta: "Voir Comment Ca Marche",
    },
    features: {
      label: "Fonctionnalites",
      title: "Tout Ce Dont Vous Avez Besoin pour la Navigation Interieure",
      subtitle:
        "Mazely fournit une boite a outils complete pour cartographier les batiments et guider les visiteurs.",
      visualNav: {
        title: "Navigation Visuelle",
        description:
          "Voyez de vraies photos de chaque couloir, porte et repere sur votre itineraire. Suivez simplement les images.",
      },
      qrCode: {
        title: "Acces par Code QR",
        description:
          "Scannez un code QR a n'importe quelle salle ou point de controle pour definir instantanement votre point de depart.",
      },
      multiFloor: {
        title: "Support Multi-Etages",
        description:
          "Naviguez entre les etages par ascenseurs, escaliers ou escalators avec un routage automatique.",
      },
      smartRouting: {
        title: "Routage Intelligent",
        description:
          "Des algorithmes avances calculent l'itineraire le plus court et le plus efficace entre deux points.",
      },
      multiLang: {
        title: "Multilingue",
        description:
          "Disponible en francais, anglais, roumain et allemand — d'autres langues arrivent bientot.",
      },
      analytics: {
        title: "Analytiques d'Utilisation",
        description:
          "Suivez les sessions de navigation, les itineraires populaires et les retours utilisateurs.",
      },
    },
    howItWorks: {
      label: "Comment Ca Marche",
      title: "Operationnel en Quelques Minutes",
      subtitle:
        "Configurer Mazely pour votre batiment est simple. Cartographiez, connectez et laissez les gens naviguer.",
      step1: {
        title: "Cartographiez Vos Etages",
        description:
          "Utilisez le concepteur interactif pour ajouter des salles, couloirs et points de controle a chaque etage.",
      },
      step2: {
        title: "Connectez les Espaces",
        description:
          "Creez des connexions entre salles, couloirs et points de controle. Reliez les etages par ascenseurs et escaliers.",
      },
      step3: {
        title: "Ajoutez des Images de Parcours",
        description:
          "Telechargez ou capturez des photos pour chaque direction de couloir afin que les visiteurs voient ce qui les attend.",
      },
      step4: {
        title: "Partagez et Naviguez",
        description:
          "Generez des codes QR, partagez des liens et laissez les visiteurs naviguer avec des directions visuelles.",
      },
    },
    admin: {
      label: "Pour les Admins",
      title: "Outils de Gestion Puissants",
      subtitle:
        "Tout ce dont les administrateurs ont besoin pour creer, gerer et optimiser la navigation interieure.",
      feature1: "Concepteur de plans interactif avec glisser-deposer",
      feature2: "Telechargement d'images en masse avec capture camera",
      feature3: "Generation de codes QR pour salles et points de controle",
      feature4: "Export des plans en PNG ou SVG",
      feature5: "Inviter et gerer les administrateurs du batiment",
      feature6: "Tableau de bord analytique en temps reel",
    },
    stats: {
      buildings: "Batiments Cartographies",
      floors: "Etages Concus",
      navigations: "Navigations Completees",
      languages: "Langues Supportees",
    },
    cta: {
      title: "Pret a Transformer la Navigation de Votre Batiment?",
      subtitle:
        "Rejoignez les organisations qui utilisent deja Mazely pour aider visiteurs et employes a s'orienter.",
      button: "Commencer la Cartographie",
    },
    contact: {
      label: "Contact",
      title: "Contactez-Nous",
      subtitle:
        "Des questions sur Mazely? Vous souhaitez mettre en place la navigation interieure? Nous serions ravis de vous entendre.",
      email: "app@mazely.app",
      emailLabel: "Ecrivez-nous a",
    },
    footer: {
      description:
        "Navigation interieure — cartographiez les etages, connectez les salles, trouvez votre chemin.",
      product: "Produit",
      features: "Fonctionnalites",
      howItWorks: "Comment Ca Marche",
      admin: "Pour les Admins",
      company: "Entreprise",
      about: "A Propos",
      contact: "Contact",
      privacy: "Politique de Confidentialite",
      rights: "Tous droits reserves.",
      madeWith: "Fait avec",
    },
    language: {
      select: "Langue",
      en: "Anglais",
      ro: "Roumain",
      fr: "Francais",
      de: "Allemand",
    },
  },
  de: {
    meta: {
      title: "Mazely — Gebaude-Innennavigation",
      description:
        "Kartieren Sie Stockwerke, verbinden Sie Raume und leiten Sie Besucher mit visueller Schritt-fur-Schritt-Navigation.",
      keywords:
        "Innennavigation, Gebaudenavigation, Wegfindung, Stockwerkkartierung, Innenraumkarten, QR-Navigation",
      ogTitle: "Mazely — Finden Sie Ihren Weg Drinnen",
      ogDescription:
        "Visuelle Schritt-fur-Schritt-Navigation fur jedes Gebaude. Kartieren, verbinden und leiten.",
    },
    nav: {
      features: "Funktionen",
      howItWorks: "So Funktioniert's",
      admin: "Fur Admins",
      contact: "Kontakt",
      getStarted: "Loslegen",
      goToApp: "Zur App",
    },
    hero: {
      badge: "Innennavigations-Plattform",
      title1: "Finden Sie Ihren Weg",
      titleHighlight: "In Jedem Gebaude",
      title2: "",
      subtitle:
        "Kartieren Sie Stockwerke, verbinden Sie Raume und leiten Sie Besucher mit visuellen Schritt-fur-Schritt-Anweisungen. Kein GPS notig.",
      cta: "Kostenlos Starten",
      secondaryCta: "So Funktioniert's",
    },
    features: {
      label: "Funktionen",
      title: "Alles Was Sie fur Innennavigation Brauchen",
      subtitle:
        "Mazely bietet ein komplettes Toolkit zum Kartieren von Gebauden und Leiten von Besuchern.",
      visualNav: {
        title: "Visuelle Navigation",
        description:
          "Sehen Sie echte Fotos jedes Korridors, jeder Tur und jedes Orientierungspunkts auf Ihrer Route.",
      },
      qrCode: {
        title: "QR-Code-Zugang",
        description:
          "Scannen Sie einen QR-Code an jedem Raum oder Kontrollpunkt, um sofort Ihren Startpunkt festzulegen.",
      },
      multiFloor: {
        title: "Mehrstockig",
        description:
          "Navigieren Sie nahtlos zwischen Stockwerken uber Aufzuge, Treppen oder Rolltreppen.",
      },
      smartRouting: {
        title: "Intelligente Routenfuhrung",
        description:
          "Fortschrittliche Algorithmen berechnen den kurzesten und effizientesten Weg zwischen zwei Punkten.",
      },
      multiLang: {
        title: "Mehrsprachig",
        description:
          "Verfugbar auf Deutsch, Englisch, Rumanisch und Franzosisch — weitere Sprachen folgen.",
      },
      analytics: {
        title: "Nutzungsanalysen",
        description:
          "Verfolgen Sie Navigationssitzungen, beliebte Routen und Nutzerfeedback zur Verbesserung.",
      },
    },
    howItWorks: {
      label: "So Funktioniert's",
      title: "In Wenigen Minuten Einsatzbereit",
      subtitle:
        "Die Einrichtung von Mazely ist einfach. Kartieren Sie Ihren Raum, verbinden Sie ihn und lassen Sie Besucher navigieren.",
      step1: {
        title: "Stockwerke Kartieren",
        description:
          "Verwenden Sie den interaktiven Designer, um Raume, Korridore und Kontrollpunkte hinzuzufugen.",
      },
      step2: {
        title: "Raume Verbinden",
        description:
          "Erstellen Sie Verbindungen zwischen Raumen, Korridoren und Kontrollpunkten. Verbinden Sie Stockwerke.",
      },
      step3: {
        title: "Bilder Hinzufugen",
        description:
          "Laden Sie Fotos fur jede Korridorrichtung hoch, damit Besucher sehen, was sie erwartet.",
      },
      step4: {
        title: "Teilen & Navigieren",
        description:
          "Generieren Sie QR-Codes, teilen Sie Links und lassen Sie Besucher mit visuellen Anweisungen navigieren.",
      },
    },
    admin: {
      label: "Fur Admins",
      title: "Leistungsstarke Verwaltungstools",
      subtitle:
        "Alles, was Gebaudeadministratoren brauchen, um Innennavigation zu erstellen und zu optimieren.",
      feature1: "Interaktiver Grundriss-Designer mit Drag-and-Drop",
      feature2: "Massen-Bildupload mit Kameraerfassung",
      feature3: "QR-Code-Generierung fur Raume und Kontrollpunkte",
      feature4: "Grundrisse als PNG oder SVG exportieren",
      feature5: "Gebaudeadministratoren einladen und verwalten",
      feature6: "Echtzeit-Analyse-Dashboard",
    },
    stats: {
      buildings: "Kartierte Gebaude",
      floors: "Entworfene Stockwerke",
      navigations: "Abgeschlossene Navigationen",
      languages: "Unterstutzte Sprachen",
    },
    cta: {
      title: "Bereit, Ihre Gebaudenavigation zu Transformieren?",
      subtitle:
        "Schliessen Sie sich Organisationen an, die Mazely bereits nutzen, um Besuchern den Weg zu weisen.",
      button: "Jetzt Kartieren",
    },
    contact: {
      label: "Kontakt",
      title: "Kontaktieren Sie Uns",
      subtitle:
        "Fragen zu Mazely? Mochten Sie Innennavigation einrichten? Wir freuen uns von Ihnen zu horen.",
      email: "app@mazely.app",
      emailLabel: "Schreiben Sie uns an",
    },
    footer: {
      description:
        "Gebaude-Innennavigation — Stockwerke kartieren, Raume verbinden, den Weg finden.",
      product: "Produkt",
      features: "Funktionen",
      howItWorks: "So Funktioniert's",
      admin: "Fur Admins",
      company: "Unternehmen",
      about: "Uber Uns",
      contact: "Kontakt",
      privacy: "Datenschutz",
      rights: "Alle Rechte vorbehalten.",
      madeWith: "Gemacht mit",
    },
    language: {
      select: "Sprache",
      en: "Englisch",
      ro: "Rumanisch",
      fr: "Franzosisch",
      de: "Deutsch",
    },
  },
};
