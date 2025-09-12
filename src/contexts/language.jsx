import React, { useState, createContext, useContext } from 'react';

// Language context
const LanguageContext = createContext();

// Language translations
export const translations = {
  en: {
    services: {
      title: "How can we help you and your business?",
      areas: {
        corporate: {
          title: "Corporate",
          description: "Helping you to invest in and grow your business through expert legal support and advice.",
          content: "Full details about how our corporate legal services help businesses scale, invest, and comply with regulations."
        },
        commercial: {
          title: "Commercial & Technology",
          description: "Protect you and your customers with robust agreements that ensure your business runs smoothly.",
          content: "Detailed explanation of our commercial & technology legal services, covering contracts, licensing, and more."
        },
        property: {
          title: "Property & Land",
          description: "Assistance managing your property and land investments, helping make decisions that benefit your business.",
          content: "We provide legal advice and guidance on property investment, land management, and disputes."
        },
        employment: {
          title: "Employment for Business",
          description: "Support for businesses in managing employment law matters effectively.",
          content: "Helping businesses handle employee contracts, disputes, and employment law compliance."
        },
        dispute: {
          title: "Business Dispute Resolution",
          description: "Expert guidance to resolve disputes and keep your business on track.",
          content: "Our dispute resolution team helps businesses manage conflicts, mediation, and litigation effectively."
        },
        charities: {
          title: "Charities & Schools",
          description: "Specialist legal support tailored for charities and schools.",
          content: "We work closely with charities and schools to provide bespoke legal support for governance and compliance."
        }
      }
    },
    nav: {
      home: "Home",
      about: "About",
      practice: "Practice Areas",
      attorneys: "Attorneys",
      testimonials: "Testimonials",
      contact: "Contact"
    },
     peopleSection: {
      title: "Our people",
      para1: "For us, it's all about starting a conversation and building a relationship between people who care about the outcome.",
      para2: "We're dedicated in helping you to find the right outcome tailored to your unique situation.",
      button: "Meet our team"
    },
hero: {
  title1: "Protection.",
  title2: "Trust.",
  subtitle: "Legal services guiding you personally and professionally.",
  businessBtn: "Explore Business Services",
  personalBtn: "Explore Personal Services",
  contactBtn: "Contact Our Team Today"
},
      dropdown: {
      personal: {
        immigration: "Immigration",
        personalInjury: "Personal Injury",
        property: "Property"
      },
      people: {
        caseStudies: "Case Studies",
        blogArticles: "Blog & Articles",
        news: "News"
      },
      careers: {
        joinTeam: "Join Our Team",
        openings: "Current Openings",
        training: "Training & Development",
        culture: "Company Culture",
        benefits: "Benefits"
      },
      about: {
        story: "Our Story",
        values: "Our Values",
        offices: "Offices",
        social: "Social Responsibility"
      }
    },
    badges: {
      bar: "Kosovo Bar Association",
      eu: "EU Law Integration",
      commercial: "Commercial Litigation",
      international: "International Law"
    },
    notableCases: {
      title: "Notable Cases in Kosovo Judiciary",
      cases: [
        {
          title: "Commercial Arbitration",
          description: "Successfully represented international investors in ICSID arbitration against Kosovo institutions"
        },
        {
          title: "Constitutional Challenges",
          description: "Led challenge of legislation before Kosovo Constitutional Court resulting in landmark decision"
        },
        {
          title: "Property Restitution",
          description: "Secured favorable judgments for clients in complex property restitution cases under Kosovo's PRPA"
        },
        {
          title: "EU Integration Compliance",
          description: "Advised government agencies on alignment of Kosovo legislation with EU acquis communautaire"
        }
      ]
    },
    why: {
      title: "Why Choose Our Firm",
      description: "With decades of combined experience, our attorneys bring expertise, dedication, and a track record of success to every case we handle.",
      points: [
        "Experienced attorneys with specialized knowledge",
        "Personalized attention to every client",
        "Proven track record of successful outcomes",
        "Transparent communication throughout your case",
        "Respected reputation in the legal community"
      ],
      technicalExpertise: {
        title: "Technical Legal Expertise",
        items: [
          "Legal Research & Analysis",
          "Case Strategy Development",
          "Document Automation",
          "E-Discovery Management",
          "Contract Analytics",
          "Compliance Monitoring"
        ]
      },
      kosovoExpertise: {
        title: "Kosovo Legal System Specialization",
        points: [
          "Kosovo Constitution and legal framework",
          "EULEX legacy case integration",
          "Hybrid legal system (Civil Law with common law elements)",
          "International legal standards implementation"
        ]
      }
    },
    stats: {
      years: "Years of Combined Experience",
      cases: "Cases Handled",
      success: "Success Rate"
    },
    cta: {
      title: "Ready to Discuss Your Case?",
      description: "Contact us today for a confidential consultation with one of our experienced attorneys.",
      button: "Schedule a Consultation"
    },
    footer: {
      description: "Providing expert legal representation with integrity and dedication.",
      practiceTitle: "Practice Areas",
      linksTitle: "Quick Links",
      contactTitle: "Contact Us",
      copyright: "© {year} Asdren Bytyqi. All rights reserved."
    },
  practice: {
      title: "Practice Areas",
      description: "We provide a full range of legal services across key areas of law.",
      learnMore: "Learn more",
      areas: {
        corporate: "Corporate",
        commercial: "Commercial & Technology",
        realEstate: "Real Estate",
        employment: "Employment",
        disputeResolution: "Dispute Resolution",
        family: "Family"
      },
      descriptions: {
        corporate: "Expert advice on company formation, governance, mergers, acquisitions, and compliance.",
        commercial: "Supporting businesses with contracts, technology law, data protection, and IP.",
        realEstate: "Comprehensive assistance with real estate transactions, leasing, planning, and development.",
        employment: "Guidance on employment law, workplace disputes, contracts, and HR policies.",
        disputeResolution: "Representation in litigation, arbitration, and mediation to resolve conflicts effectively.",
        family: "Handling sensitive family law matters including divorce, custody, inheritance, and guardianship."
      }
    }
    
  },
  al: {
    services: {
      title: "Si mund t'ju ndihmojmë juve dhe biznesin tuaj?",
      areas: {
        corporate: {
          title: "Korporative",
          description: "Ju ndihmojmë të investoni dhe të rrisni biznesin tuaj përmes mbështetjes dhe këshillimit profesional ligjor.",
          content: "Detaje të plota mbi mënyrën se si shërbimet tona ligjore korporative ndihmojnë bizneset të rriten, të investojnë dhe të përputhen me rregulloret."
        },
        commercial: {
          title: "Komerciale & Teknologji",
          description: "Mbrojtje për ju dhe klientët tuaj me marrëveshje të forta që sigurojnë funksionimin e qetë të biznesit tuaj.",
          content: "Shpjegim i detajuar i shërbimeve tona ligjore në fushën komerciale dhe teknologjisë, përfshirë kontratat, licencat dhe më shumë."
        },
        property: {
          title: "Pronë & Tokë",
          description: "Asistencë në menaxhimin e pronave dhe investimeve në tokë, duke ju ndihmuar të merrni vendime të dobishme për biznesin.",
          content: "Ne ofrojmë këshilla dhe udhëzime ligjore për investime në pronë, menaxhimin e tokës dhe mosmarrëveshje."
        },
        employment: {
          title: "Punësimi për Biznes",
          description: "Mbështetje për bizneset në menaxhimin efektiv të çështjeve të ligjit të punës.",
          content: "Ndihmojmë bizneset në menaxhimin e kontratave të punonjësve, mosmarrëveshjeve dhe respektimit të ligjit të punës."
        },
        dispute: {
          title: "Zgjidhja e Mosmarrëveshjeve Biznesore",
          description: "Udhëzim profesional për të zgjidhur mosmarrëveshjet dhe për ta mbajtur biznesin tuaj në rrugën e duhur.",
          content: "Ekipi ynë për zgjidhjen e mosmarrëveshjeve ndihmon bizneset të menaxhojnë konfliktet, ndërmjetësimin dhe proceset gjyqësore në mënyrë efektive."
        },
        charities: {
          title: "Organizata Bamirëse & Shkolla",
          description: "Mbështetje ligjore e specializuar për organizatat bamirëse dhe shkollat.",
          content: "Ne punojmë ngushtë me organizatat bamirëse dhe shkollat për të ofruar mbështetje ligjore të personalizuar për qeverisje dhe përputhshmëri."
        }
      }
    },
     practice: {
      title: "Fushat e Praktikës",
      description: "Ne ofrojmë një gamë të plotë shërbimesh ligjore në fusha kyçe të ligjit.",
      learnMore: "Mëso më shumë",
      areas: {
        corporate: "Korporatat",
        commercial: "Komericale & Teknologjia",
        realEstate: "Patundshmëri",
        employment: "Punësimi",
        disputeResolution: "Zgjidhja e Mosmarrëveshjeve",
        family: "Familja"
      },
      descriptions: {
        corporate: "Këshilla profesionale për themelimin e kompanive, qeverisjen, bashkimet, blerjet dhe pajtueshmërinë.",
        commercial: "Mbështetje për bizneset me kontrata, ligjin e teknologjisë, mbrojtjen e të dhënave dhe pronësinë intelektuale.",
        realEstate: "Asistencë gjithëpërfshirëse me transaksionet e pasurive të paluajtshme, qiradhënien, planifikimin dhe zhvillimin.",
        employment: "Udhëzime mbi ligjin e punës, mosmarrëveshjet në vendin e punës, kontratat dhe politikat e burimeve njerëzore.",
        disputeResolution: "Përfaqësim në gjyqe, arbitrazh dhe ndërmjetësim për zgjidhjen efektive të konflikteve.",
        family: "Trajtimi i çështjeve të ndjeshme të së drejtës familjare përfshirë divorcin, kujdestarinë, trashëgiminë dhe kujdestaritë."
      }
    },
    
    nav: {
      home: "Kryefaqja",
      about: "Rreth Nesh",
      practice: "Fushat e Praktikës",
      attorneys: "Avokatët",
      testimonials: "Dëshmitë",
      contact: "Kontakt"
    },
        peopleSection: {
      title: "Njerëzit tanë",
      para1: "Për ne, gjithçka ka të bëjë me fillimin e një bisede dhe ndërtimin e një marrëdhënieje midis njerëzve që kujdesen për rezultatin.",
      para2: "Ne jemi të përkushtuar t'ju ndihmojmë të gjeni rezultatin e duhur të përshtatur për situatën tuaj unike.",
      button: "Takoni ekipin tonë"
    },
hero: {
  title1: "Mbrojtje.",
  title2: "Besueshmëri.",
  subtitle: "Shërbime ligjore që ju udhëheqin personalisht dhe profesionalisht.",
  businessBtn: "Shiko shërbimet për biznesin",
  personalBtn: "Shiko shërbimet personale",
  contactBtn: "Kontakto ekipin tonë sot"
},

    badges: {
      bar: "Organizata e Avokatëve të Kosovës",
      eu: "Integrimi i Ligjit të BE-së",
      commercial: "Procesi Komercial",
      international: "Ligji Ndërkombëtar"
    },
       dropdown: {
      personal: {
        immigration: "Imigracioni",
        personalInjury: "Dëmtimet Personale",
        property: "Pronë"
      },
      people: {
        caseStudies: "Studime Rasti",
        blogArticles: "Blog & Artikuj",
        news: "Lajme"
      },
      careers: {
        joinTeam: "Bashkohuni me Ekipin",
        openings: "Pozitat Aktuale",
        training: "Trajnime & Zhvillim",
        culture: "Kultura e Kompanisë",
        benefits: "Përfitimet"
      },
      about: {
        story: "Historia Jonë",
        values: "Vlerat Tona",
        offices: "Zyrat",
        social: "Përgjegjësia Sociale"
      }
    },
    notableCases: {
      title: "Raste të Rëndësishme në Gjyqësorinë e Kosovës",
      cases: [
        {
          title: "Arbitrazhi Komercial",
          description: "Me sukses kemi përfaqësuar investitorët ndërkombëtarë në arbitrazhin ICSID kundër institucioneve të Kosovës"
        },
        {
          title: "Sfidat Kushtetuese",
          description: "Udhëheqja e sfidës së legjislacionit para Gjykatës Kushtetuese të Kosovës që rezultoi në një vendim historik"
        },
        {
          title: "Rikthimi i Pronës",
          description: "Sigurimi i gjykimeve të favorshme për klientët në raste komplekse të rikthimit të pronës sipas PRPA-së së Kosovës"
        },
        {
          title: "Pajtueshmëria e Integrimit të BE-së",
          description: "Këshillimi i agjencive qeveritare për rreshtimin e legjislacionit të Kosovës me akuizin komunitar të BE-së"
        }
      ]
    },
    why: {
      title: "Pse Të Zgjidhni Firmën Tonë",
      description: "Me dekada përvoje të kombinuar, avokatët tanë sjellë njohuri, përkushtim dhe një historik suksesi në çdo rast që trajtojmë.",
      points: [
        "Avokatë me përvojë me njohuri të specializuara",
        "Vëmendje e personalizuar për çdo klient",
        "Historik i provuar i rezultateve të suksesshme",
        "Komunikim transparent gjatë gjithë çështjes suaj",
        "Reputacion i respektuar në komunitetin juridik"
      ],
      technicalExpertise: {
        title: "Ekspertizë Teknike Juridike",
        items: [
          "Hulumtim & Analizë Juridike",
          "Zhvillimi i Strategjisë së Çështjes",
          "Automatizimi i Dokumenteve",
          "Menaxhimi i Zbulimit Elektronik",
          "Analitika e Kontratave",
          "Monitorimi i Pajtueshmërisë"
        ]
      },
      kosovoExpertise: {
        title: "Specializimi në Sistemin Juridik të Kosovës",
        points: [
          "Kushtetuta e Kosovës dhe korniza ligjore",
          "Integrimi i çështjeve të trashëguara nga EULEX-i",
          "Sistem hibrid juridik (Ligji Civil me elemente të ligjit të përbashkët)",
          "Implementimi i standardeve ndërkombëtare ligjore"
        ]
      }
    },
    stats: {
      years: "Vjet Përvojë e Kombinuar",
      cases: "Raste të Trajtuara",
      success: "Normë Suksesi"
    },
    cta: {
      title: "Gati për të Diskutuar Rastin Tuaj?",
      description: "Na kontaktoni sot për një konsultim konfidencial me një nga avokatët tanë me përvojë.",
      button: "Programoni Një Konsultim"
    },
    footer: {
      description: "Ofrimi i përfaqësimit juridik profesional me integritet dhe përkushtim.",
      practiceTitle: "Fushat e Praktikës",
      linksTitle: "Lidhje të Shpejta",
      contactTitle: "Na Kontaktoni",
      copyright: "© {year} Asdren Bytyqi. Të gjitha të drejtat e rezervuara."
    }
  },
  de: {
       services: {
      title: "Wie können wir Ihnen und Ihrem Unternehmen helfen?",
      areas: {
        corporate: {
          title: "Gesellschaftsrecht",
          description: "Wir helfen Ihnen, Ihr Unternehmen durch fachkundige rechtliche Unterstützung und Beratung zu investieren und zu wachsen.",
          content: "Detaillierte Informationen darüber, wie unsere gesellschaftsrechtlichen Dienstleistungen Unternehmen beim Wachsen, Investieren und Einhalten von Vorschriften helfen."
        },
        commercial: {
          title: "Handel & Technologie",
          description: "Schützen Sie sich und Ihre Kunden mit soliden Vereinbarungen, die einen reibungslosen Geschäftsbetrieb gewährleisten.",
          content: "Detaillierte Erklärung unserer handels- und technologiebezogenen Rechtsdienstleistungen, einschließlich Verträge, Lizenzen und mehr."
        },
        property: {
          title: "Immobilien & Grundstücke",
          description: "Unterstützung bei der Verwaltung Ihrer Immobilien- und Grundstücksinvestitionen, damit Sie Entscheidungen zum Vorteil Ihres Unternehmens treffen können.",
          content: "Wir bieten rechtliche Beratung und Unterstützung bei Immobilieninvestitionen, Grundstücksverwaltung und Streitigkeiten."
        },
        employment: {
          title: "Arbeitsrecht für Unternehmen",
          description: "Unterstützung für Unternehmen bei der effektiven Verwaltung arbeitsrechtlicher Angelegenheiten.",
          content: "Wir helfen Unternehmen bei der Verwaltung von Arbeitsverträgen, Streitigkeiten und der Einhaltung des Arbeitsrechts."
        },
        dispute: {
          title: "Streitbeilegung für Unternehmen",
          description: "Fachkundige Beratung zur Beilegung von Streitigkeiten und zur Sicherstellung, dass Ihr Unternehmen auf Kurs bleibt.",
          content: "Unser Team für Streitbeilegung unterstützt Unternehmen effektiv bei Konflikten, Mediation und Gerichtsverfahren."
        },
        charities: {
          title: "Wohltätigkeitsorganisationen & Schulen",
          description: "Spezialisierte rechtliche Unterstützung für Wohltätigkeitsorganisationen und Schulen.",
          content: "Wir arbeiten eng mit Wohltätigkeitsorganisationen und Schulen zusammen, um maßgeschneiderte rechtliche Unterstützung bei Governance und Compliance zu bieten."
        }
      }
    },
    nav: {
      home: "Startseite",
      about: "Über Uns",
      practice: "Rechtsgebiete",
      attorneys: "Rechtsanwälte",
      testimonials: "Erfahrungsberichte",
      contact: "Kontakt"
    },
     dropdown: {
      personal: {
        immigration: "Einwanderung",
        personalInjury: "Personenschäden",
        property: "Eigentum"
      },
      people: {
        caseStudies: "Fallstudien",
        blogArticles: "Blog & Artikel",
        news: "Nachrichten"
      },
      careers: {
        joinTeam: "Team Beitreten",
        openings: "Offene Stellen",
        training: "Schulung & Entwicklung",
        culture: "Unternehmenskultur",
        benefits: "Leistungen"
      },
      about: {
        story: "Unsere Geschichte",
        values: "Unsere Werte",
        offices: "Büros",
        social: "Soziale Verantwortung"
      }
    },
  hero: {
  title1: "Schutz.",
  title2: "Vertrauen.",
  subtitle: "Rechtsdienstleistungen, die Sie persönlich und beruflich begleiten.",
  businessBtn: "Unternehmensdienste Entdecken",
  personalBtn: "Private Dienste Entdecken",
  contactBtn: "Kontaktieren Sie Unser Team Heute"
},

     peopleSection: {
      title: "Unsere Leute",
      para1: "Für uns geht es darum, ein Gespräch zu beginnen und eine Beziehung zwischen Menschen aufzubauen, denen das Ergebnis am Herzen liegt.",
      para2: "Wir sind engagiert, Ihnen zu helfen, das richtige Ergebnis zu finden, das auf Ihre einzigartige Situation zugeschnitten ist.",
      button: "Treffen Sie unser Team"
    },
    badges: {
      bar: "Anwaltskammer des Kosovo",
      eu: "EU-Rechtsintegration",
      commercial: "Handelsrechtliche Streitigkeiten",
      international: "Internationales Recht"
    },
   practice: {
      title: "Tätigkeitsbereiche",
      description: "Wir bieten ein vollständiges Spektrum an juristischen Dienstleistungen in wichtigen Rechtsgebieten.",
      learnMore: "Mehr erfahren",
      areas: {
        corporate: "Gesellschaftsrecht",
        commercial: "Handel & Technologie",
        realEstate: "Immobilienrecht",
        employment: "Arbeitsrecht",
        disputeResolution: "Streitbeilegung",
        family: "Familienrecht"
      },
      descriptions: {
        corporate: "Fachkundige Beratung zu Unternehmensgründung, Governance, Fusionen, Übernahmen und Compliance.",
        commercial: "Unterstützung von Unternehmen bei Verträgen, Technologierecht, Datenschutz und geistigem Eigentum.",
        realEstate: "Umfassende Unterstützung bei Immobilientransaktionen, Mietverträgen, Planung und Entwicklung.",
        employment: "Beratung zum Arbeitsrecht, bei Streitigkeiten am Arbeitsplatz, Verträgen und HR-Richtlinien.",
        disputeResolution: "Vertretung bei Gerichtsverfahren, Schiedsverfahren und Mediation zur effektiven Konfliktlösung.",
        family: "Bearbeitung sensibler familienrechtlicher Angelegenheiten einschließlich Scheidung, Sorgerecht, Erbschaft und Vormundschaft."
      }
    },
    notableCases: {
      title: "Bemerkenswerte Fälle in der kosovarischen Justiz",
      cases: [
        {
          title: "Handelsschiedsgerichtsbarkeit",
          description: "Erfolgreiche Vertretung internationaler Investoren in ICSID-Schiedsverfahren gegen kosovarische Institutionen"
        },
        {
          title: "Verfassungsrechtliche Herausforderungen",
          description: "Führung von Gesetzesanfechtungen vor dem Verfassungsgericht des Kosovo mit wegweisenden Entscheidungen"
        },
        {
          title: "Eigentumsrückerstattung",
          description: "Günstige Urteile für Mandanten in komplexen Eigentumsrückerstattungsfällen nach dem kosovarischen PRPA"
        },
        {
          title: "EU-Integrationscompliance",
          description: "Beratung von Regierungsbehörden zur Angleichung der kosovarischen Gesetzgebung an den EU-Besitzstand"
        }
      ]
    },
    why: {
      title: "Warum Unsere Kanzlei Wählen",
      description: "Mit Jahrzehnten kombinierter Erfahrung bringen unsere Anwälte Expertise, Engagement und eine Erfolgsbilanz in jeden Fall, den wir bearbeiten.",
      points: [
        "Erfahrene Anwälte mit spezialisiertem Wissen",
        "Persönliche Betreuung für jeden Mandanten",
        "Bewährte Erfolgsbilanz",
        "Transparente Kommunikation während Ihres Falls",
        "Respektierter Ruf in der Rechtsgemeinschaft"
      ],
      technicalExpertise: {
        title: "Technische Rechtliche Expertise",
        items: [
          "Rechtsrecherche & -analyse",
          "Fallstrategieentwicklung",
          "Dokumentenautomatisierung",
          "E-Discovery-Management",
          "Vertragsanalytik",
          "Compliance-Überwachung"
        ]
      },
      kosovoExpertise: {
        title: "Spezialisierung auf das kosovarische Rechtssystem",
        points: [
          "Verfassung und Rechtsrahmen des Kosovo",
          "Integration von EULEX-Altfällen",
          "Hybrides Rechtssystem (Zivilrecht mit Common-Law-Elementen)",
          "Umsetzung internationaler Rechtsstandards"
        ]
      }
    },
    stats: {
      years: "Jahre kombinierte Erfahrung",
      cases: "Behandelte Fälle",
      success: "Erfolgsquote"
    },
    cta: {
      title: "Bereit, Ihren Fall zu Besprechen?",
      description: "Kontaktieren Sie uns noch heute für eine vertrauliche Beratung mit einem unserer erfahrenen Anwälte.",
      button: "Beratungstermin Vereinbaren"
    },
    footer: {
      description: "Wir bieten expertische Rechtsvertretung mit Integrität und Engagement.",
      practiceTitle: "Rechtsgebiete",
      linksTitle: "Schnelllinks",
      contactTitle: "Kontaktieren Sie Uns",
      copyright: "© {year} Asdren Bytyqi. Alle Rechte vorbehalten."
    }
  }
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('al');
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
