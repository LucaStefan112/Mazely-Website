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
    solutions: string;
    hospitals: string;
    universities: string;
    platform: string;
    features: string;
    howItWorks: string;
    deployment: string;
    security: string;
    pricing: string;
    contact: string;
    requestDemo: string;
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
    trustedBy: string;
  };
  trustedBy: {
    label: string;
    title: string;
    institutions: string;
    visitors: string;
    floors: string;
    uptime: string;
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
  industries: {
    label: string;
    title: string;
    subtitle: string;
    hospitals: {
      title: string;
      description: string;
      benefits: string[];
      cta: string;
    };
    universities: {
      title: string;
      description: string;
      benefits: string[];
      cta: string;
    };
    government: {
      title: string;
      description: string;
      benefits: string[];
      cta: string;
    };
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
  deployment: {
    label: string;
    title: string;
    subtitle: string;
    step1: { title: string; description: string; timeline: string };
    step2: { title: string; description: string; timeline: string };
    step3: { title: string; description: string; timeline: string };
    step4: { title: string; description: string; timeline: string };
    step5: { title: string; description: string; timeline: string };
    noBullet1: string;
    noBullet2: string;
    noBullet3: string;
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
  security: {
    label: string;
    title: string;
    subtitle: string;
    privacy: { title: string; points: string[] };
    dataOwnership: { title: string; points: string[] };
    infrastructure: { title: string; points: string[] };
    compliance: { title: string; points: string[] };
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
    steps: string[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    emailLabel: string;
    demoTitle: string;
    demoSubtitle: string;
    formName: string;
    formEmail: string;
    formOrg: string;
    formRole: string;
    formMessage: string;
    formSubmit: string;
  };
  footer: {
    description: string;
    product: string;
    features: string;
    howItWorks: string;
    deployment: string;
    admin: string;
    solutions: string;
    hospitals: string;
    universities: string;
    government: string;
    company: string;
    about: string;
    contact: string;
    security: string;
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

const en: Translations = {
  meta: {
    title: "Mazely — Indoor Wayfinding Infrastructure for Institutions",
    description:
      "Enterprise indoor navigation platform for hospitals, universities, and public institutions. Reduce visitor confusion, improve satisfaction, and gain actionable analytics.",
    keywords:
      "indoor navigation, hospital wayfinding, university campus navigation, enterprise indoor maps, institutional wayfinding, QR navigation, building navigation platform, accessibility compliance, visitor experience",
    ogTitle: "Mazely — Indoor Wayfinding for Hospitals & Universities",
    ogDescription:
      "Purpose-built indoor navigation for institutions. No app download, no hardware — visitors scan a QR code and follow photo-guided directions.",
  },
  nav: {
    solutions: "Solutions",
    hospitals: "For Hospitals",
    universities: "For Universities",
    platform: "Platform",
    features: "Features",
    howItWorks: "How It Works",
    deployment: "Deployment",
    security: "Security",
    pricing: "Pricing",
    contact: "Contact",
    requestDemo: "Request a Demo",
    goToApp: "Go to App",
  },
  hero: {
    badge: "Enterprise Indoor Navigation Platform",
    title1: "Every Visitor Finds",
    titleHighlight: "Their Way. Every Time.",
    title2: "",
    subtitle:
      "Purpose-built indoor wayfinding for hospitals, universities, and public institutions. Reduce confusion, improve visitor satisfaction, and gain actionable navigation analytics — no app download or hardware required.",
    cta: "Request a Demo",
    secondaryCta: "See How It Works",
    trustedBy: "Trusted by institutions worldwide",
  },
  trustedBy: {
    label: "Trusted by Institutions",
    title: "Powering indoor navigation at scale",
    institutions: "Institutions Served",
    visitors: "Visitors Guided",
    floors: "Floors Mapped",
    uptime: "Platform Uptime",
  },
  features: {
    label: "Platform Capabilities",
    title: "Enterprise-Grade Indoor Navigation",
    subtitle:
      "A complete wayfinding platform designed for the complexity and scale of institutional facilities — from multi-building hospital campuses to sprawling university grounds.",
    visualNav: {
      title: "Photo-Guided Directions",
      description:
        "Visitors follow real photographs of corridors, turns, and landmarks — not abstract maps. Intuitive navigation that anyone can understand, regardless of language or ability.",
    },
    qrCode: {
      title: "Zero-Friction QR Access",
      description:
        "Visitors scan a QR code at any entrance or checkpoint and navigate instantly. No app download, no account creation, no Bluetooth pairing.",
    },
    multiFloor: {
      title: "Multi-Floor & Multi-Building",
      description:
        "Seamless routing across floors and between buildings via elevators, stairs, and covered walkways. Handles complex campus layouts with ease.",
    },
    smartRouting: {
      title: "Intelligent Pathfinding",
      description:
        "Advanced algorithms calculate optimal routes in real time, considering accessibility requirements, floor transitions, and current building conditions.",
    },
    multiLang: {
      title: "Multi-Language Support",
      description:
        "Serve diverse visitor populations with navigation in English, Romanian, French, and German — with additional languages available on request.",
    },
    analytics: {
      title: "Actionable Analytics",
      description:
        "Track navigation sessions, popular destinations, search patterns, and visitor feedback. Identify wayfinding pain points and measure improvements over time.",
    },
  },
  industries: {
    label: "Industry Solutions",
    title: "Purpose-Built for Your Institution",
    subtitle:
      "Mazely addresses the unique wayfinding challenges of each institution type with tailored deployment and configuration.",
    hospitals: {
      title: "Hospitals & Healthcare",
      description:
        "Reduce missed appointments, improve patient satisfaction scores, and free staff from giving directions across complex medical campuses.",
      benefits: [
        "Reduce missed appointments and patient no-shows",
        "Improve HCAHPS patient experience scores",
        "Free clinical staff from routine wayfinding tasks",
        "Support ADA and accessibility compliance",
        "Adapt instantly to department moves and construction",
      ],
      cta: "Learn More",
    },
    universities: {
      title: "Universities & Education",
      description:
        "Welcome new students from day one, support open days, and reduce the burden on front desk and security staff across campus.",
      benefits: [
        "Seamless orientation for new students",
        "Independent navigation for open days and events",
        "Multi-building campus routing",
        "Reduce front desk and security inquiries",
        "Support international students with multi-language navigation",
      ],
      cta: "Learn More",
    },
    government: {
      title: "Government & Public Buildings",
      description:
        "Improve citizen experience in courthouses, civic centers, and public offices while meeting accessibility mandates.",
      benefits: [
        "Improve citizen experience and reduce wait times",
        "Meet accessibility mandates for public facilities",
        "Support multilingual visitor populations",
        "Real-time updates for space changes",
        "Anonymous navigation — no personal data collected",
      ],
      cta: "Learn More",
    },
  },
  howItWorks: {
    label: "How It Works",
    title: "Three Steps to Any Destination",
    subtitle:
      "Visitors navigate your facility in seconds — no app download, no registration, no special equipment.",
    step1: {
      title: "Scan",
      description:
        "Visitor scans a QR code at any building entrance, lobby, elevator, or checkpoint using their smartphone camera.",
    },
    step2: {
      title: "Select Destination",
      description:
        "Choose from a searchable directory of rooms, departments, offices, and facilities. Find any destination in seconds.",
    },
    step3: {
      title: "Follow Visual Directions",
      description:
        "Step-by-step photo-guided directions show exactly what's ahead at every turn. No guessing, no abstract maps.",
    },
    step4: {
      title: "Arrive with Confidence",
      description:
        "Visitors reach their destination on time, every time — improving satisfaction, reducing missed appointments, and freeing your staff.",
    },
  },
  deployment: {
    label: "Enterprise Deployment",
    title: "From Discovery to Live Navigation in Weeks",
    subtitle:
      "Non-disruptive deployment with dedicated support. No hardware to install, no network changes, no IT burden.",
    step1: {
      title: "Discovery & Planning",
      description:
        "We assess your facility layout, visitor flow patterns, and wayfinding pain points to design an optimal deployment plan.",
      timeline: "Week 1",
    },
    step2: {
      title: "Facility Mapping",
      description:
        "Your team maps rooms, corridors, and waypoints using our interactive floor plan designer — with full guidance from our onboarding team.",
      timeline: "Weeks 1–2",
    },
    step3: {
      title: "Visual Content & QR Deployment",
      description:
        "Directional photographs are captured for each corridor. QR codes are generated and placed at strategic entry points throughout your facility.",
      timeline: "Weeks 2–3",
    },
    step4: {
      title: "Staff Training & Go Live",
      description:
        "Brief training sessions ensure your staff can manage the system. Navigation goes live and analytics tracking begins immediately.",
      timeline: "Week 3–4",
    },
    step5: {
      title: "Monitor & Optimize",
      description:
        "Review analytics, gather visitor feedback, and optimize routes and signage placement based on real usage data.",
      timeline: "Ongoing",
    },
    noBullet1: "No hardware installation required",
    noBullet2: "No network infrastructure changes",
    noBullet3: "No app download for visitors",
  },
  admin: {
    label: "Administration",
    title: "Full Control from a Centralized Dashboard",
    subtitle:
      "Building administrators manage everything through an intuitive web dashboard — no technical expertise required.",
    feature1: "Interactive drag-and-drop floor map designer",
    feature2: "Bulk image upload with camera capture support",
    feature3: "QR code generation and management for all locations",
    feature4: "Export floor maps as PNG or SVG",
    feature5: "Role-based access control for administrators",
    feature6: "Real-time analytics and visitor feedback dashboard",
  },
  security: {
    label: "Security & Privacy",
    title: "Designed for Institutional Trust",
    subtitle:
      "Public institutions require solutions that meet strict standards for security, privacy, and data governance. Mazely is built with these requirements at its foundation.",
    privacy: {
      title: "Privacy by Design",
      points: [
        "No personal data collected from visitors",
        "No account creation or login required for navigation",
        "No tracking cookies or behavioral profiling",
        "Fully anonymous navigation sessions",
      ],
    },
    dataOwnership: {
      title: "Data Ownership",
      points: [
        "All facility data, floor plans, and images belong to your institution",
        "Data is never shared with or sold to third parties",
        "Full export capabilities at any time (maps, analytics, content)",
        "Data deletion available on request",
      ],
    },
    infrastructure: {
      title: "Infrastructure Security",
      points: [
        "SOC 2-aligned cloud infrastructure",
        "Data encrypted in transit (TLS 1.3) and at rest (AES-256)",
        "Regular security audits and vulnerability assessments",
        "99.9% platform uptime SLA for enterprise deployments",
      ],
    },
    compliance: {
      title: "Compliance",
      points: [
        "GDPR-compliant data handling practices",
        "Supports ADA and accessibility compliance goals",
        "No PHI collected — HIPAA concerns minimized by design",
        "Data residency options available on request",
      ],
    },
  },
  stats: {
    buildings: "Institutions Served",
    floors: "Floors Mapped",
    navigations: "Visitors Guided",
    languages: "Languages Supported",
  },
  cta: {
    title: "Start Your Free Pilot Program",
    subtitle:
      "See Mazely in action at your facility. We'll deploy indoor navigation for one building or floor at no cost — including full onboarding support and a 30-day analytics report.",
    button: "Request a Demo",
    steps: [
      "Book a Demo",
      "Facility Consultation",
      "Free Pilot Program",
      "Enterprise Contract",
    ],
  },
  contact: {
    label: "Contact",
    title: "Talk to Our Enterprise Team",
    subtitle:
      "Ready to improve wayfinding at your institution? Our team will walk you through the platform and design a deployment plan tailored to your facility.",
    email: "enterprise@mazely.app",
    emailLabel: "Enterprise inquiries",
    demoTitle: "Request a Demo",
    demoSubtitle: "Fill out the form and we'll schedule a personalized walkthrough of the Mazely platform.",
    formName: "Full Name",
    formEmail: "Work Email",
    formOrg: "Organization",
    formRole: "Role / Title",
    formMessage: "Tell us about your facility",
    formSubmit: "Request Demo",
  },
  footer: {
    description:
      "Enterprise indoor wayfinding infrastructure for hospitals, universities, and public institutions.",
    product: "Platform",
    features: "Features",
    howItWorks: "How It Works",
    deployment: "Deployment",
    admin: "Administration",
    solutions: "Solutions",
    hospitals: "For Hospitals",
    universities: "For Universities",
    government: "For Government",
    company: "Company",
    about: "About",
    contact: "Contact",
    security: "Security & Privacy",
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
};

const ro: Translations = {
  meta: {
    title: "Mazely — Infrastructura de Orientare in Interior pentru Institutii",
    description:
      "Platforma de navigare in interior pentru spitale, universitati si institutii publice. Reduceti confuzia vizitatorilor, imbunatatiti satisfactia si obtineti analize actionabile.",
    keywords:
      "navigare interior, orientare spital, navigare campus universitar, harti interioare, orientare institutionala, navigare QR, platforma navigare cladiri",
    ogTitle: "Mazely — Orientare in Interior pentru Spitale si Universitati",
    ogDescription:
      "Navigare in interior pentru institutii. Fara aplicatie, fara hardware — vizitatorii scaneaza un cod QR si urmeaza indicatiile foto.",
  },
  nav: {
    solutions: "Solutii",
    hospitals: "Pentru Spitale",
    universities: "Pentru Universitati",
    platform: "Platforma",
    features: "Functionalitati",
    howItWorks: "Cum Functioneaza",
    deployment: "Implementare",
    security: "Securitate",
    pricing: "Preturi",
    contact: "Contact",
    requestDemo: "Solicita un Demo",
    goToApp: "Mergi la Aplicatie",
  },
  hero: {
    badge: "Platforma de Navigare in Interior pentru Institutii",
    title1: "Fiecare Vizitator Isi Gaseste",
    titleHighlight: "Drumul. De Fiecare Data.",
    title2: "",
    subtitle:
      "Orientare in interior pentru spitale, universitati si institutii publice. Reduceti confuzia, imbunatatiti satisfactia vizitatorilor si obtineti analize actionabile — fara aplicatie sau hardware.",
    cta: "Solicita un Demo",
    secondaryCta: "Vezi Cum Functioneaza",
    trustedBy: "De incredere pentru institutii din intreaga lume",
  },
  trustedBy: {
    label: "De Incredere pentru Institutii",
    title: "Navigare in interior la scara larga",
    institutions: "Institutii Deservite",
    visitors: "Vizitatori Ghidati",
    floors: "Etaje Cartografiate",
    uptime: "Disponibilitate Platforma",
  },
  features: {
    label: "Capabilitati Platforma",
    title: "Navigare in Interior de Nivel Enterprise",
    subtitle:
      "O platforma completa de orientare conceputa pentru complexitatea facilitatilor institutionale — de la campusuri spitalicesti la universitati.",
    visualNav: {
      title: "Indicatii Ghidate de Fotografii",
      description:
        "Vizitatorii urmeaza fotografii reale ale coridoarelor, colturilor si reperelor — nu harti abstracte. Navigare intuitiva pe care oricine o poate intelege.",
    },
    qrCode: {
      title: "Acces QR Fara Fricatiune",
      description:
        "Vizitatorii scaneaza un cod QR la orice intrare si navigheaza instant. Fara aplicatie, fara cont, fara Bluetooth.",
    },
    multiFloor: {
      title: "Multi-Etaj si Multi-Cladire",
      description:
        "Rutare fluida intre etaje si cladiri prin lifturi, scari si pasarele. Gestioneaza layouturi complexe de campus.",
    },
    smartRouting: {
      title: "Rutare Inteligenta",
      description:
        "Algoritmi avansati calculeaza rute optime in timp real, luand in considerare cerintele de accesibilitate si tranzitiile intre etaje.",
    },
    multiLang: {
      title: "Suport Multilingv",
      description:
        "Serviti populatii diverse de vizitatori cu navigare in romana, engleza, franceza si germana — cu limbi suplimentare la cerere.",
    },
    analytics: {
      title: "Analize Actionabile",
      description:
        "Urmariti sesiunile de navigare, destinatiile populare, tiparele de cautare si feedback-ul vizitatorilor. Identificati punctele problematice.",
    },
  },
  industries: {
    label: "Solutii pe Industrie",
    title: "Construit Special pentru Institutia Dvs.",
    subtitle:
      "Mazely abordeaza provocarile unice de orientare ale fiecarui tip de institutie cu implementare si configurare personalizata.",
    hospitals: {
      title: "Spitale si Sanatate",
      description:
        "Reduceti programarile ratate, imbunatatiti scorurile de satisfactie a pacientilor si eliberati personalul de a da indicatii.",
      benefits: [
        "Reduceti programarile ratate si neprezentarile",
        "Imbunatatiti scorurile de experienta a pacientilor",
        "Eliberati personalul clinic de sarcinile de orientare",
        "Sustineti conformitatea cu accesibilitatea",
        "Adaptati-va instant la mutarile departamentelor",
      ],
      cta: "Aflati Mai Multe",
    },
    universities: {
      title: "Universitati si Educatie",
      description:
        "Intampinati studentii noi din prima zi, sustineti zilele deschise si reduceti povara personalului de la receptie.",
      benefits: [
        "Orientare fluida pentru studentii noi",
        "Navigare independenta pentru zilele deschise",
        "Rutare campus multi-cladire",
        "Reduceti intrebarile la receptie si securitate",
        "Sustineti studentii internationali cu navigare multilingva",
      ],
      cta: "Aflati Mai Multe",
    },
    government: {
      title: "Guvern si Cladiri Publice",
      description:
        "Imbunatatiti experienta cetatenilor in tribunale, centre civice si birouri publice, respectand mandatele de accesibilitate.",
      benefits: [
        "Imbunatatiti experienta cetatenilor si reduceti timpii de asteptare",
        "Respectati mandatele de accesibilitate",
        "Sustineti populatiile multilingve de vizitatori",
        "Actualizari in timp real pentru schimbarile de spatiu",
        "Navigare anonima — fara date personale colectate",
      ],
      cta: "Aflati Mai Multe",
    },
  },
  howItWorks: {
    label: "Cum Functioneaza",
    title: "Trei Pasi catre Orice Destinatie",
    subtitle:
      "Vizitatorii navigheaza in facilitatea dvs. in secunde — fara aplicatie, fara inregistrare, fara echipament special.",
    step1: {
      title: "Scaneaza",
      description:
        "Vizitatorul scaneaza un cod QR la orice intrare, lift sau punct de control folosind camera telefonului.",
    },
    step2: {
      title: "Selecteaza Destinatia",
      description:
        "Alege dintr-un director de camere, departamente, birouri si facilitati. Gaseste orice destinatie in secunde.",
    },
    step3: {
      title: "Urmeaza Indicatiile Vizuale",
      description:
        "Indicatii pas cu pas cu fotografii arata exact ce urmeaza la fiecare colt. Fara ghiceli, fara harti abstracte.",
    },
    step4: {
      title: "Ajunge cu Incredere",
      description:
        "Vizitatorii ajung la destinatie la timp, de fiecare data — imbunatatind satisfactia si eliberand personalul.",
    },
  },
  deployment: {
    label: "Implementare Enterprise",
    title: "De la Descoperire la Navigare Activa in Saptamani",
    subtitle:
      "Implementare non-disruptiva cu suport dedicat. Fara hardware de instalat, fara modificari de retea.",
    step1: {
      title: "Descoperire si Planificare",
      description:
        "Evaluam layoutul facilitatii, tiparele de flux al vizitatorilor si punctele problematice de orientare.",
      timeline: "Saptamana 1",
    },
    step2: {
      title: "Cartografierea Facilitatii",
      description:
        "Echipa dvs. cartografiaza camerele, coridoarele si punctele de referinta folosind designerul nostru interactiv.",
      timeline: "Saptamana 1–2",
    },
    step3: {
      title: "Continut Vizual si Implementare QR",
      description:
        "Fotografiile directionale sunt capturate. Codurile QR sunt generate si plasate la punctele strategice de intrare.",
      timeline: "Saptamana 2–3",
    },
    step4: {
      title: "Instruire Personal si Lansare",
      description:
        "Sesiuni scurte de instruire asigura ca personalul poate gestiona sistemul. Navigarea devine activa imediat.",
      timeline: "Saptamana 3–4",
    },
    step5: {
      title: "Monitorizare si Optimizare",
      description:
        "Revizuiti analizele, colectati feedback de la vizitatori si optimizati rutele pe baza datelor reale de utilizare.",
      timeline: "Continuu",
    },
    noBullet1: "Fara instalare hardware",
    noBullet2: "Fara modificari infrastructura retea",
    noBullet3: "Fara aplicatie de descarcat pentru vizitatori",
  },
  admin: {
    label: "Administrare",
    title: "Control Total dintr-un Panou Centralizat",
    subtitle:
      "Administratorii cladirilor gestioneaza totul printr-un panou web intuitiv — fara expertiza tehnica necesara.",
    feature1: "Designer interactiv de harti cu drag-and-drop",
    feature2: "Incarcare multipla de imagini cu suport camera",
    feature3: "Generare si gestionare coduri QR pentru toate locatiile",
    feature4: "Export harti etaje ca PNG sau SVG",
    feature5: "Control acces bazat pe roluri pentru administratori",
    feature6: "Panou de analize in timp real si feedback vizitatori",
  },
  security: {
    label: "Securitate si Confidentialitate",
    title: "Conceput pentru Increderea Institutionala",
    subtitle:
      "Institutiile publice necesita solutii care respecta standarde stricte de securitate, confidentialitate si guvernanta a datelor.",
    privacy: {
      title: "Confidentialitate prin Design",
      points: [
        "Fara date personale colectate de la vizitatori",
        "Fara creare de cont sau autentificare necesara",
        "Fara cookie-uri de urmarire sau profilare comportamentala",
        "Sesiuni de navigare complet anonime",
      ],
    },
    dataOwnership: {
      title: "Proprietatea Datelor",
      points: [
        "Toate datele facilitatii, planurile si imaginile apartin institutiei dvs.",
        "Datele nu sunt niciodata partajate sau vandute tertilor",
        "Capabilitati complete de export in orice moment",
        "Stergerea datelor disponibila la cerere",
      ],
    },
    infrastructure: {
      title: "Securitate Infrastructura",
      points: [
        "Infrastructura cloud aliniata SOC 2",
        "Date criptate in tranzit (TLS 1.3) si in repaus (AES-256)",
        "Audituri regulate de securitate si evaluari de vulnerabilitati",
        "SLA de disponibilitate 99.9% pentru implementari enterprise",
      ],
    },
    compliance: {
      title: "Conformitate",
      points: [
        "Practici de gestionare a datelor conforme GDPR",
        "Sustine obiectivele de conformitate cu accesibilitatea",
        "Fara PHI colectat — preocuparile HIPAA minimizate prin design",
        "Optiuni de rezidenta a datelor disponibile la cerere",
      ],
    },
  },
  stats: {
    buildings: "Institutii Deservite",
    floors: "Etaje Cartografiate",
    navigations: "Vizitatori Ghidati",
    languages: "Limbi Suportate",
  },
  cta: {
    title: "Incepeti Programul Pilot Gratuit",
    subtitle:
      "Vedeti Mazely in actiune la facilitatea dvs. Vom implementa navigarea in interior pentru o cladire sau un etaj fara costuri.",
    button: "Solicita un Demo",
    steps: [
      "Rezerva un Demo",
      "Consultatie Facilitate",
      "Program Pilot Gratuit",
      "Contract Enterprise",
    ],
  },
  contact: {
    label: "Contact",
    title: "Vorbiti cu Echipa Enterprise",
    subtitle:
      "Pregatit sa imbunatatiti orientarea in institutia dvs.? Echipa noastra va va ghida prin platforma si va proiecta un plan de implementare.",
    email: "enterprise@mazely.app",
    emailLabel: "Intrebari enterprise",
    demoTitle: "Solicita un Demo",
    demoSubtitle: "Completati formularul si vom programa o prezentare personalizata a platformei Mazely.",
    formName: "Nume Complet",
    formEmail: "Email de Serviciu",
    formOrg: "Organizatie",
    formRole: "Functie / Titlu",
    formMessage: "Spuneti-ne despre facilitatea dvs.",
    formSubmit: "Solicita Demo",
  },
  footer: {
    description:
      "Infrastructura de orientare in interior pentru spitale, universitati si institutii publice.",
    product: "Platforma",
    features: "Functionalitati",
    howItWorks: "Cum Functioneaza",
    deployment: "Implementare",
    admin: "Administrare",
    solutions: "Solutii",
    hospitals: "Pentru Spitale",
    universities: "Pentru Universitati",
    government: "Pentru Guvern",
    company: "Companie",
    about: "Despre",
    contact: "Contact",
    security: "Securitate si Confidentialitate",
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
};

const fr: Translations = {
  meta: {
    title: "Mazely — Infrastructure d'Orientation Interieure pour Institutions",
    description:
      "Plateforme de navigation interieure pour hopitaux, universites et institutions publiques. Reduisez la confusion des visiteurs et obtenez des analyses actionnables.",
    keywords:
      "navigation interieure, orientation hopital, navigation campus universitaire, cartes interieures, orientation institutionnelle, navigation QR",
    ogTitle: "Mazely — Orientation Interieure pour Hopitaux et Universites",
    ogDescription:
      "Navigation interieure pour institutions. Sans application, sans materiel — les visiteurs scannent un code QR et suivent les directions photo.",
  },
  nav: {
    solutions: "Solutions",
    hospitals: "Pour les Hopitaux",
    universities: "Pour les Universites",
    platform: "Plateforme",
    features: "Fonctionnalites",
    howItWorks: "Comment Ca Marche",
    deployment: "Deploiement",
    security: "Securite",
    pricing: "Tarifs",
    contact: "Contact",
    requestDemo: "Demander une Demo",
    goToApp: "Aller a l'App",
  },
  hero: {
    badge: "Plateforme de Navigation Interieure pour Institutions",
    title1: "Chaque Visiteur Trouve",
    titleHighlight: "Son Chemin. A Chaque Fois.",
    title2: "",
    subtitle:
      "Orientation interieure pour hopitaux, universites et institutions publiques. Reduisez la confusion, ameliorez la satisfaction et obtenez des analyses — sans application ni materiel.",
    cta: "Demander une Demo",
    secondaryCta: "Voir Comment Ca Marche",
    trustedBy: "Fait confiance par les institutions du monde entier",
  },
  trustedBy: {
    label: "Fait Confiance par les Institutions",
    title: "Navigation interieure a grande echelle",
    institutions: "Institutions Desservies",
    visitors: "Visiteurs Guides",
    floors: "Etages Cartographies",
    uptime: "Disponibilite Plateforme",
  },
  features: {
    label: "Capacites de la Plateforme",
    title: "Navigation Interieure de Niveau Entreprise",
    subtitle:
      "Une plateforme d'orientation complete concue pour la complexite des installations institutionnelles.",
    visualNav: {
      title: "Directions Guidees par Photos",
      description:
        "Les visiteurs suivent de vraies photos des couloirs, tournants et reperes — pas des cartes abstraites. Navigation intuitive pour tous.",
    },
    qrCode: {
      title: "Acces QR Sans Friction",
      description:
        "Les visiteurs scannent un code QR a n'importe quelle entree et naviguent instantanement. Sans application, sans compte, sans Bluetooth.",
    },
    multiFloor: {
      title: "Multi-Etages et Multi-Batiments",
      description:
        "Routage fluide entre les etages et les batiments via ascenseurs, escaliers et passerelles couvertes.",
    },
    smartRouting: {
      title: "Routage Intelligent",
      description:
        "Des algorithmes avances calculent les itineraires optimaux en temps reel, tenant compte de l'accessibilite et des transitions entre etages.",
    },
    multiLang: {
      title: "Support Multilingue",
      description:
        "Servez des populations de visiteurs diverses avec navigation en francais, anglais, roumain et allemand — langues supplementaires sur demande.",
    },
    analytics: {
      title: "Analyses Actionnables",
      description:
        "Suivez les sessions de navigation, les destinations populaires, les schemas de recherche et les retours visiteurs.",
    },
  },
  industries: {
    label: "Solutions par Secteur",
    title: "Concu Specifiquement pour Votre Institution",
    subtitle:
      "Mazely repond aux defis d'orientation uniques de chaque type d'institution avec un deploiement et une configuration sur mesure.",
    hospitals: {
      title: "Hopitaux et Sante",
      description:
        "Reduisez les rendez-vous manques, ameliorez les scores de satisfaction des patients et liberez le personnel des directions.",
      benefits: [
        "Reduisez les rendez-vous manques et les absences",
        "Ameliorez les scores d'experience patient",
        "Liberez le personnel clinique des taches d'orientation",
        "Soutenez la conformite d'accessibilite",
        "Adaptez-vous instantanement aux demenagements de departements",
      ],
      cta: "En Savoir Plus",
    },
    universities: {
      title: "Universites et Education",
      description:
        "Accueillez les nouveaux etudiants des le premier jour, soutenez les journees portes ouvertes et reduisez la charge de l'accueil.",
      benefits: [
        "Orientation fluide pour les nouveaux etudiants",
        "Navigation independante pour les journees portes ouvertes",
        "Routage campus multi-batiments",
        "Reduisez les demandes a l'accueil et la securite",
        "Soutenez les etudiants internationaux avec navigation multilingue",
      ],
      cta: "En Savoir Plus",
    },
    government: {
      title: "Gouvernement et Batiments Publics",
      description:
        "Ameliorez l'experience citoyenne dans les tribunaux, centres civiques et bureaux publics tout en respectant les mandats d'accessibilite.",
      benefits: [
        "Ameliorez l'experience citoyenne et reduisez les temps d'attente",
        "Respectez les mandats d'accessibilite",
        "Soutenez les populations de visiteurs multilingues",
        "Mises a jour en temps reel pour les changements d'espace",
        "Navigation anonyme — aucune donnee personnelle collectee",
      ],
      cta: "En Savoir Plus",
    },
  },
  howItWorks: {
    label: "Comment Ca Marche",
    title: "Trois Etapes vers N'importe Quelle Destination",
    subtitle:
      "Les visiteurs naviguent dans votre installation en secondes — sans application, sans inscription, sans equipement special.",
    step1: {
      title: "Scanner",
      description:
        "Le visiteur scanne un code QR a n'importe quelle entree, ascenseur ou point de controle avec la camera de son telephone.",
    },
    step2: {
      title: "Selectionner la Destination",
      description:
        "Choisissez dans un repertoire de salles, departements, bureaux et installations. Trouvez n'importe quelle destination en secondes.",
    },
    step3: {
      title: "Suivre les Directions Visuelles",
      description:
        "Des directions pas a pas avec photos montrent exactement ce qui se trouve devant a chaque tournant. Sans deviner, sans cartes abstraites.",
    },
    step4: {
      title: "Arriver avec Confiance",
      description:
        "Les visiteurs arrivent a destination a l'heure, a chaque fois — ameliorant la satisfaction et liberant votre personnel.",
    },
  },
  deployment: {
    label: "Deploiement Entreprise",
    title: "De la Decouverte a la Navigation Active en Semaines",
    subtitle:
      "Deploiement non-disruptif avec support dedie. Pas de materiel a installer, pas de changements reseau.",
    step1: {
      title: "Decouverte et Planification",
      description:
        "Nous evaluons la disposition de votre installation, les flux de visiteurs et les points problematiques d'orientation.",
      timeline: "Semaine 1",
    },
    step2: {
      title: "Cartographie de l'Installation",
      description:
        "Votre equipe cartographie les salles, couloirs et points de repere avec notre concepteur interactif de plans.",
      timeline: "Semaines 1–2",
    },
    step3: {
      title: "Contenu Visuel et Deploiement QR",
      description:
        "Les photos directionnelles sont capturees. Les codes QR sont generes et places aux points d'entree strategiques.",
      timeline: "Semaines 2–3",
    },
    step4: {
      title: "Formation du Personnel et Lancement",
      description:
        "De breves sessions de formation assurent que votre personnel peut gerer le systeme. La navigation devient active immediatement.",
      timeline: "Semaine 3–4",
    },
    step5: {
      title: "Surveiller et Optimiser",
      description:
        "Examinez les analyses, recueillez les retours visiteurs et optimisez les itineraires selon les donnees d'utilisation reelles.",
      timeline: "Continu",
    },
    noBullet1: "Pas d'installation de materiel requise",
    noBullet2: "Pas de changements d'infrastructure reseau",
    noBullet3: "Pas d'application a telecharger pour les visiteurs",
  },
  admin: {
    label: "Administration",
    title: "Controle Total depuis un Tableau de Bord Centralise",
    subtitle:
      "Les administrateurs de batiments gerent tout via un tableau de bord web intuitif — sans expertise technique requise.",
    feature1: "Concepteur de plans interactif avec glisser-deposer",
    feature2: "Telechargement d'images en masse avec capture camera",
    feature3: "Generation et gestion de codes QR pour toutes les localisations",
    feature4: "Export des plans en PNG ou SVG",
    feature5: "Controle d'acces base sur les roles pour les administrateurs",
    feature6: "Tableau de bord analytique en temps reel et retours visiteurs",
  },
  security: {
    label: "Securite et Confidentialite",
    title: "Concu pour la Confiance Institutionnelle",
    subtitle:
      "Les institutions publiques necessitent des solutions respectant des normes strictes de securite, confidentialite et gouvernance des donnees.",
    privacy: {
      title: "Confidentialite par Conception",
      points: [
        "Aucune donnee personnelle collectee aupres des visiteurs",
        "Aucune creation de compte ou connexion requise",
        "Aucun cookie de suivi ou profilage comportemental",
        "Sessions de navigation entierement anonymes",
      ],
    },
    dataOwnership: {
      title: "Propriete des Donnees",
      points: [
        "Toutes les donnees, plans et images appartiennent a votre institution",
        "Les donnees ne sont jamais partagees ou vendues a des tiers",
        "Capacites d'export completes a tout moment",
        "Suppression des donnees disponible sur demande",
      ],
    },
    infrastructure: {
      title: "Securite de l'Infrastructure",
      points: [
        "Infrastructure cloud alignee SOC 2",
        "Donnees chiffrees en transit (TLS 1.3) et au repos (AES-256)",
        "Audits de securite reguliers et evaluations de vulnerabilites",
        "SLA de disponibilite 99.9% pour les deploiements entreprise",
      ],
    },
    compliance: {
      title: "Conformite",
      points: [
        "Pratiques de gestion des donnees conformes au RGPD",
        "Soutient les objectifs de conformite d'accessibilite",
        "Aucune PHI collectee — preoccupations HIPAA minimisees par conception",
        "Options de residence des donnees disponibles sur demande",
      ],
    },
  },
  stats: {
    buildings: "Institutions Desservies",
    floors: "Etages Cartographies",
    navigations: "Visiteurs Guides",
    languages: "Langues Supportees",
  },
  cta: {
    title: "Demarrez Votre Programme Pilote Gratuit",
    subtitle:
      "Voyez Mazely en action dans votre installation. Nous deploierons la navigation pour un batiment ou un etage sans frais.",
    button: "Demander une Demo",
    steps: [
      "Reserver une Demo",
      "Consultation Installation",
      "Programme Pilote Gratuit",
      "Contrat Entreprise",
    ],
  },
  contact: {
    label: "Contact",
    title: "Parlez a Notre Equipe Entreprise",
    subtitle:
      "Pret a ameliorer l'orientation dans votre institution? Notre equipe vous guidera a travers la plateforme et concevra un plan de deploiement.",
    email: "enterprise@mazely.app",
    emailLabel: "Demandes entreprise",
    demoTitle: "Demander une Demo",
    demoSubtitle: "Remplissez le formulaire et nous programmerons une presentation personnalisee de la plateforme Mazely.",
    formName: "Nom Complet",
    formEmail: "Email Professionnel",
    formOrg: "Organisation",
    formRole: "Fonction / Titre",
    formMessage: "Parlez-nous de votre installation",
    formSubmit: "Demander une Demo",
  },
  footer: {
    description:
      "Infrastructure d'orientation interieure pour hopitaux, universites et institutions publiques.",
    product: "Plateforme",
    features: "Fonctionnalites",
    howItWorks: "Comment Ca Marche",
    deployment: "Deploiement",
    admin: "Administration",
    solutions: "Solutions",
    hospitals: "Pour les Hopitaux",
    universities: "Pour les Universites",
    government: "Pour le Gouvernement",
    company: "Entreprise",
    about: "A Propos",
    contact: "Contact",
    security: "Securite et Confidentialite",
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
};

const de: Translations = {
  meta: {
    title: "Mazely — Innennavigations-Infrastruktur fur Institutionen",
    description:
      "Innennavigationsplattform fur Krankenhauser, Universitaten und offentliche Einrichtungen. Reduzieren Sie Besucherverwirrung und gewinnen Sie umsetzbare Analysen.",
    keywords:
      "Innennavigation, Krankenhaus-Wegfuhrung, Campus-Navigation, institutionelle Wegfuhrung, QR-Navigation, Gebaudeplattform",
    ogTitle: "Mazely — Innennavigation fur Krankenhauser und Universitaten",
    ogDescription:
      "Innennavigation fur Institutionen. Keine App, keine Hardware — Besucher scannen einen QR-Code und folgen fotobasierten Wegbeschreibungen.",
  },
  nav: {
    solutions: "Losungen",
    hospitals: "Fur Krankenhauser",
    universities: "Fur Universitaten",
    platform: "Plattform",
    features: "Funktionen",
    howItWorks: "So Funktioniert's",
    deployment: "Bereitstellung",
    security: "Sicherheit",
    pricing: "Preise",
    contact: "Kontakt",
    requestDemo: "Demo Anfordern",
    goToApp: "Zur App",
  },
  hero: {
    badge: "Innennavigations-Plattform fur Institutionen",
    title1: "Jeder Besucher Findet",
    titleHighlight: "Seinen Weg. Jedes Mal.",
    title2: "",
    subtitle:
      "Wegfuhrung fur Krankenhauser, Universitaten und offentliche Einrichtungen. Reduzieren Sie Verwirrung, verbessern Sie die Zufriedenheit und gewinnen Sie Analysen — ohne App oder Hardware.",
    cta: "Demo Anfordern",
    secondaryCta: "So Funktioniert's",
    trustedBy: "Vertraut von Institutionen weltweit",
  },
  trustedBy: {
    label: "Vertraut von Institutionen",
    title: "Innennavigation im grossen Massstab",
    institutions: "Betreute Institutionen",
    visitors: "Gefuhrte Besucher",
    floors: "Kartierte Stockwerke",
    uptime: "Plattform-Verfugbarkeit",
  },
  features: {
    label: "Plattform-Funktionen",
    title: "Innennavigation auf Enterprise-Niveau",
    subtitle:
      "Eine vollstandige Wegfuhrungsplattform fur die Komplexitat institutioneller Einrichtungen.",
    visualNav: {
      title: "Fotobasierte Wegbeschreibung",
      description:
        "Besucher folgen echten Fotos von Korridoren, Abbiegungen und Orientierungspunkten — keine abstrakten Karten. Intuitive Navigation fur jeden.",
    },
    qrCode: {
      title: "Reibungsloser QR-Zugang",
      description:
        "Besucher scannen einen QR-Code an jedem Eingang und navigieren sofort. Keine App, kein Konto, kein Bluetooth.",
    },
    multiFloor: {
      title: "Mehrstockig und Mehrgebaude",
      description:
        "Nahtlose Routenfuhrung zwischen Stockwerken und Gebauden uber Aufzuge, Treppen und uberdachte Wege.",
    },
    smartRouting: {
      title: "Intelligente Routenfuhrung",
      description:
        "Fortschrittliche Algorithmen berechnen optimale Routen in Echtzeit unter Berucksichtigung von Barrierefreiheit und Stockwerkswechseln.",
    },
    multiLang: {
      title: "Mehrsprachige Unterstutzung",
      description:
        "Bedienen Sie diverse Besucherpopulationen mit Navigation auf Deutsch, Englisch, Rumanisch und Franzosisch — weitere Sprachen auf Anfrage.",
    },
    analytics: {
      title: "Umsetzbare Analysen",
      description:
        "Verfolgen Sie Navigationssitzungen, beliebte Ziele, Suchmuster und Besucherfeedback. Identifizieren Sie Wegfuhrungs-Problemstellen.",
    },
  },
  industries: {
    label: "Branchenlosungen",
    title: "Speziell fur Ihre Institution Entwickelt",
    subtitle:
      "Mazely adressiert die einzigartigen Wegfuhrungsherausforderungen jedes Institutionstyps mit massgeschneiderter Bereitstellung.",
    hospitals: {
      title: "Krankenhauser und Gesundheitswesen",
      description:
        "Reduzieren Sie verpasste Termine, verbessern Sie Patientenzufriedenheit und befreien Sie Personal von Wegbeschreibungen.",
      benefits: [
        "Verpasste Termine und Nichterscheinen reduzieren",
        "Patientenerfahrungswerte verbessern",
        "Klinisches Personal von Wegfuhrungsaufgaben befreien",
        "Barrierefreiheits-Compliance unterstutzen",
        "Sofortige Anpassung bei Abteilungsumzugen",
      ],
      cta: "Mehr Erfahren",
    },
    universities: {
      title: "Universitaten und Bildung",
      description:
        "Begrussen Sie neue Studierende ab dem ersten Tag, unterstutzen Sie Tage der offenen Tur und entlasten Sie das Empfangspersonal.",
      benefits: [
        "Nahtlose Orientierung fur neue Studierende",
        "Unabhangige Navigation fur Tage der offenen Tur",
        "Multi-Gebaude Campus-Routenfuhrung",
        "Empfangs- und Sicherheitsanfragen reduzieren",
        "Internationale Studierende mit mehrsprachiger Navigation unterstutzen",
      ],
      cta: "Mehr Erfahren",
    },
    government: {
      title: "Regierung und Offentliche Gebaude",
      description:
        "Verbessern Sie die Burgererfahrung in Gerichten, Burgerzenteren und offentlichen Amtern bei Einhaltung der Barrierefreiheitsvorschriften.",
      benefits: [
        "Burgererfahrung verbessern und Wartezeiten reduzieren",
        "Barrierefreiheitsvorschriften erfullen",
        "Mehrsprachige Besucherpopulationen unterstutzen",
        "Echtzeit-Updates fur Raumveranderungen",
        "Anonyme Navigation — keine personenbezogenen Daten erfasst",
      ],
      cta: "Mehr Erfahren",
    },
  },
  howItWorks: {
    label: "So Funktioniert's",
    title: "Drei Schritte zu Jedem Ziel",
    subtitle:
      "Besucher navigieren in Ihrer Einrichtung in Sekunden — keine App, keine Registrierung, keine Spezialausrustung.",
    step1: {
      title: "Scannen",
      description:
        "Der Besucher scannt einen QR-Code an jedem Eingang, Aufzug oder Kontrollpunkt mit der Smartphone-Kamera.",
    },
    step2: {
      title: "Ziel Auswahlen",
      description:
        "Wahlen Sie aus einem durchsuchbaren Verzeichnis von Raumen, Abteilungen, Buros und Einrichtungen.",
    },
    step3: {
      title: "Visuellen Wegbeschreibungen Folgen",
      description:
        "Schritt-fur-Schritt Fotoanweisungen zeigen genau, was an jeder Abbiegung voraus liegt. Kein Raten, keine abstrakten Karten.",
    },
    step4: {
      title: "Sicher Ankommen",
      description:
        "Besucher erreichen ihr Ziel punktlich, jedes Mal — verbesserte Zufriedenheit und entlastetes Personal.",
    },
  },
  deployment: {
    label: "Enterprise-Bereitstellung",
    title: "Von der Entdeckung zur Aktiven Navigation in Wochen",
    subtitle:
      "Nicht-disruptive Bereitstellung mit dediziertem Support. Keine Hardware zu installieren, keine Netzwerkanderungen.",
    step1: {
      title: "Entdeckung und Planung",
      description:
        "Wir bewerten Ihr Einrichtungslayout, Besucherstrome und Wegfuhrungs-Problemstellen.",
      timeline: "Woche 1",
    },
    step2: {
      title: "Einrichtungskartierung",
      description:
        "Ihr Team kartiert Raume, Korridore und Wegpunkte mit unserem interaktiven Grundriss-Designer.",
      timeline: "Woche 1–2",
    },
    step3: {
      title: "Visueller Inhalt und QR-Bereitstellung",
      description:
        "Richtungsfotos werden aufgenommen. QR-Codes werden generiert und an strategischen Eingangspunkten platziert.",
      timeline: "Woche 2–3",
    },
    step4: {
      title: "Personalschulung und Start",
      description:
        "Kurze Schulungen stellen sicher, dass Ihr Personal das System verwalten kann. Die Navigation wird sofort aktiviert.",
      timeline: "Woche 3–4",
    },
    step5: {
      title: "Uberwachen und Optimieren",
      description:
        "Uberprufen Sie Analysen, sammeln Sie Besucherfeedback und optimieren Sie Routen basierend auf echten Nutzungsdaten.",
      timeline: "Fortlaufend",
    },
    noBullet1: "Keine Hardware-Installation erforderlich",
    noBullet2: "Keine Netzwerk-Infrastrukturanderungen",
    noBullet3: "Kein App-Download fur Besucher",
  },
  admin: {
    label: "Administration",
    title: "Volle Kontrolle uber ein Zentrales Dashboard",
    subtitle:
      "Gebaudeadministratoren verwalten alles uber ein intuitives Web-Dashboard — keine technische Expertise erforderlich.",
    feature1: "Interaktiver Grundriss-Designer mit Drag-and-Drop",
    feature2: "Massen-Bildupload mit Kameraerfassung",
    feature3: "QR-Code-Generierung und -Verwaltung fur alle Standorte",
    feature4: "Grundrisse als PNG oder SVG exportieren",
    feature5: "Rollenbasierte Zugriffskontrolle fur Administratoren",
    feature6: "Echtzeit-Analyse-Dashboard und Besucherfeedback",
  },
  security: {
    label: "Sicherheit und Datenschutz",
    title: "Fur Institutionelles Vertrauen Konzipiert",
    subtitle:
      "Offentliche Einrichtungen benotigen Losungen, die strenge Standards fur Sicherheit, Datenschutz und Datenverwaltung erfullen.",
    privacy: {
      title: "Datenschutz durch Design",
      points: [
        "Keine personenbezogenen Daten von Besuchern erfasst",
        "Keine Kontoerstellung oder Anmeldung erforderlich",
        "Keine Tracking-Cookies oder Verhaltensprofilierung",
        "Vollstandig anonyme Navigationssitzungen",
      ],
    },
    dataOwnership: {
      title: "Dateneigentum",
      points: [
        "Alle Einrichtungsdaten, Grundrisse und Bilder gehoren Ihrer Institution",
        "Daten werden niemals an Dritte weitergegeben oder verkauft",
        "Vollstandige Exportmoglichkeiten jederzeit",
        "Datenloschung auf Anfrage verfugbar",
      ],
    },
    infrastructure: {
      title: "Infrastruktursicherheit",
      points: [
        "SOC 2-konforme Cloud-Infrastruktur",
        "Daten verschlusselt bei Ubertragung (TLS 1.3) und im Ruhezustand (AES-256)",
        "Regelmassige Sicherheitsaudits und Schwachstellenbewertungen",
        "99,9% Verfugbarkeits-SLA fur Enterprise-Bereitstellungen",
      ],
    },
    compliance: {
      title: "Compliance",
      points: [
        "DSGVO-konforme Datenverarbeitungspraktiken",
        "Unterstutzt Barrierefreiheits-Compliance-Ziele",
        "Keine PHI erfasst — HIPAA-Bedenken durch Design minimiert",
        "Optionen zur Datenresidenz auf Anfrage verfugbar",
      ],
    },
  },
  stats: {
    buildings: "Betreute Institutionen",
    floors: "Kartierte Stockwerke",
    navigations: "Gefuhrte Besucher",
    languages: "Unterstutzte Sprachen",
  },
  cta: {
    title: "Starten Sie Ihr Kostenloses Pilotprogramm",
    subtitle:
      "Erleben Sie Mazely in Ihrer Einrichtung. Wir stellen die Navigation fur ein Gebaude oder Stockwerk kostenlos bereit.",
    button: "Demo Anfordern",
    steps: [
      "Demo Buchen",
      "Einrichtungsberatung",
      "Kostenloses Pilotprogramm",
      "Enterprise-Vertrag",
    ],
  },
  contact: {
    label: "Kontakt",
    title: "Sprechen Sie mit Unserem Enterprise-Team",
    subtitle:
      "Bereit, die Wegfuhrung in Ihrer Institution zu verbessern? Unser Team fuhrt Sie durch die Plattform und entwirft einen Bereitstellungsplan.",
    email: "enterprise@mazely.app",
    emailLabel: "Enterprise-Anfragen",
    demoTitle: "Demo Anfordern",
    demoSubtitle: "Fullen Sie das Formular aus und wir planen eine personalisierte Prasentation der Mazely-Plattform.",
    formName: "Vollstandiger Name",
    formEmail: "Geschafts-E-Mail",
    formOrg: "Organisation",
    formRole: "Funktion / Titel",
    formMessage: "Erzahlen Sie uns von Ihrer Einrichtung",
    formSubmit: "Demo Anfordern",
  },
  footer: {
    description:
      "Innennavigations-Infrastruktur fur Krankenhauser, Universitaten und offentliche Einrichtungen.",
    product: "Plattform",
    features: "Funktionen",
    howItWorks: "So Funktioniert's",
    deployment: "Bereitstellung",
    admin: "Administration",
    solutions: "Losungen",
    hospitals: "Fur Krankenhauser",
    universities: "Fur Universitaten",
    government: "Fur Regierung",
    company: "Unternehmen",
    about: "Uber Uns",
    contact: "Kontakt",
    security: "Sicherheit und Datenschutz",
    privacy: "Datenschutzrichtlinie",
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
};

export const translations: Record<Locale, Translations> = { en, ro, fr, de };
