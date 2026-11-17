import React from "react";
import { translations, useLanguage } from "../../contexts/language";
import { PracticeAreaCard } from "./PracticeAreaCard";
import { 
  Briefcase, 
  Building2, 
  Home, 
  Users, 
  Gavel, 
  Heart, 
  Scale,
  FileText,
  Landmark,
  Shield,
  Globe,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import { Reveal } from "../Reveal";
export const PracticeAreas = ({ standalone = false }) => {
  const { language } = useLanguage();
  const t = translations[language];
const navigate = useNavigate();
  // Use the actual 11 practice areas from services data
  const services = [
    {
      key: "criminal",
      name: t.services.areas.criminal.title,
      description: t.services.areas.criminal.description,
      fullDescription: t.services.areas.criminal.content,
      icon: <Gavel className="h-7 w-7" />,
    },
    {
      key: "civil",
      name: t.services.areas.civil.title,
      description: t.services.areas.civil.description,
      fullDescription: t.services.areas.civil.content,
      icon: <Scale className="h-7 w-7" />,
    },
    {
      key: "family",
      name: t.services.areas.family.title,
      description: t.services.areas.family.description,
      fullDescription: t.services.areas.family.content,
      icon: <Heart className="h-7 w-7" />,
    },
    {
      key: "property",
      name: t.services.areas.property.title,
      description: t.services.areas.property.description,
      fullDescription: t.services.areas.property.content,
      icon: <Home className="h-7 w-7" />,
    },
    {
      key: "enforcement",
      name: t.services.areas.enforcement.title,
      description: t.services.areas.enforcement.description,
      fullDescription: t.services.areas.enforcement.content,
      icon: <FileText className="h-7 w-7" />,
    },
    {
      key: "administrative",
      name: t.services.areas.administrative.title,
      description: t.services.areas.administrative.description,
      fullDescription: t.services.areas.administrative.content,
      icon: <Landmark className="h-7 w-7" />,
    },
    {
      key: "commercial",
      name: t.services.areas.commercial.title,
      description: t.services.areas.commercial.description,
      fullDescription: t.services.areas.commercial.content,
      icon: <Briefcase className="h-7 w-7" />,
    },
    {
      key: "corporate",
      name: t.services.areas.corporate.title,
      description: t.services.areas.corporate.description,
      fullDescription: t.services.areas.corporate.content,
      icon: <Building2 className="h-7 w-7" />,
    },
    {
      key: "labor",
      name: t.services.areas.labor.title,
      description: t.services.areas.labor.description,
      fullDescription: t.services.areas.labor.content,
      icon: <Users className="h-7 w-7" />,
    },
    {
      key: "personalInjury",
      name: t.services.areas.personalInjury.title,
      description: t.services.areas.personalInjury.description,
      fullDescription: t.services.areas.personalInjury.content,
      icon: <Shield className="h-7 w-7" />,
    },
    {
      key: "sis",
      name: t.services.areas.sis.title,
      description: t.services.areas.sis.description,
      fullDescription: t.services.areas.sis.content,
      icon: <Globe className="h-7 w-7" />,
    }
  ];
    const handleContactAreaNavigation = () => {
    // If we're on the home page, scroll to services
    if (window.location.pathname === '/') {
      const servicesSection = document.getElementById('contact');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate('/#contact');
    }
  };
  const copy = {
    subtitle: {
      en: "Comprehensive legal services tailored to your personal and business needs",
      al: "Shërbime gjithëpërfshirëse ligjore të përshtatura për nevojat tuaja personale dhe biznesore",
      de: "Umfassende Rechtsdienstleistungen, die auf Ihre persönlichen und geschäftlichen Bedürfnisse zugeschnitten sind",
      tr: "Kişisel ve iş ihtiyaçlarınıza göre uyarlanmış kapsamlı hukuki hizmetler",
    },
    learnMore: { en: "Learn more", al: "Mëso më shumë", de: "Mehr erfahren", tr: "Daha fazla bilgi" },
    showLess: { en: "Show less", al: "Shfaq më pak", de: "Weniger anzeigen", tr: "Daha az göster" },
    ctaTitle: {
      en: "Need specific legal assistance?",
      al: "Keni nevojë për asistencë specifike ligjore?",
      de: "Benötigen Sie spezifische rechtliche Unterstützung?",
      tr: "Belirli hukuki yardıma mı ihtiyacınız var?",
    },
    ctaText: {
      en: "Contact us for a confidential consultation about your situation.",
      al: "Na kontaktoni për një konsultim konfidencial për rastin tuaj.",
      de: "Kontaktieren Sie uns für eine vertrauliche Beratung zu Ihrem Anliegen.",
      tr: "Durumunuz hakkında gizli bir danışma için bizimle iletişime geçin.",
    },
    ctaButton: { en: "Schedule a consultation", al: "Caktoni Konsultim", de: "Beratung vereinbaren", tr: "Danışma randevusu alın" },
  };
  const c = (key) => copy[key][language] || copy[key].en;

  return (
    <section id="services" className={`section bg-white ${standalone ? 'page-top' : ''}`}>
      <div className="container-page">
        <Reveal className="section-header">
          {standalone ? (
            <h1 className="section-title">{t.services.title}</h1>
          ) : (
            <h2 className="section-title">{t.services.title}</h2>
          )}
          <div className="section-divider" />
          <p className="section-subtitle">{c('subtitle')}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.key} delay={(index % 3) * 0.06} className="h-full">
              <PracticeAreaCard
                areaKey={service.key}
                areaName={service.name}
                description={service.description}
                fullDescription={service.fullDescription}
                icon={service.icon}
                learnMoreText={c('learnMore')}
                showLessText={c('showLess')}
              />
            </Reveal>
          ))}

          {/* 12th tile: consultation call-to-action, completes the grid */}
          <Reveal delay={0.12} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-ink p-6 text-white md:p-7">
              <div>
                <h3 className="text-xl font-bold leading-snug text-white">{c('ctaTitle')}</h3>
                <p className="mt-3 leading-relaxed text-gray-400">{c('ctaText')}</p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button onClick={handleContactAreaNavigation} className="btn btn-primary w-full">
                  {c('ctaButton')}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href="https://wa.me/38344728118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full border-2 border-white/15 text-white hover:border-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +383 (44) 728 118
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
