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
export const PracticeAreas = () => {
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
      icon: <Gavel className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "civil",
      name: t.services.areas.civil.title,
      description: t.services.areas.civil.description,
      fullDescription: t.services.areas.civil.content,
      icon: <Scale className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "family",
      name: t.services.areas.family.title,
      description: t.services.areas.family.description,
      fullDescription: t.services.areas.family.content,
      icon: <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "property",
      name: t.services.areas.property.title,
      description: t.services.areas.property.description,
      fullDescription: t.services.areas.property.content,
      icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "enforcement",
      name: t.services.areas.enforcement.title,
      description: t.services.areas.enforcement.description,
      fullDescription: t.services.areas.enforcement.content,
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "administrative",
      name: t.services.areas.administrative.title,
      description: t.services.areas.administrative.description,
      fullDescription: t.services.areas.administrative.content,
      icon: <Landmark className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "commercial",
      name: t.services.areas.commercial.title,
      description: t.services.areas.commercial.description,
      fullDescription: t.services.areas.commercial.content,
      icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "corporate",
      name: t.services.areas.corporate.title,
      description: t.services.areas.corporate.description,
      fullDescription: t.services.areas.corporate.content,
      icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "labor",
      name: t.services.areas.labor.title,
      description: t.services.areas.labor.description,
      fullDescription: t.services.areas.labor.content,
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "personalInjury",
      name: t.services.areas.personalInjury.title,
      description: t.services.areas.personalInjury.description,
      fullDescription: t.services.areas.personalInjury.content,
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
    },
    {
      key: "sis",
      name: t.services.areas.sis.title,
      description: t.services.areas.sis.description,
      fullDescription: t.services.areas.sis.content,
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-[#FFD700]" />,
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
  return (
    <section id="services" className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {language === 'en' && "Comprehensive legal services tailored to your personal and business needs"}
            {language === 'al' && "Shërbime gjithëpërfshirëse ligjore të përshtatura për nevojat tuaja personale dhe biznesore"}
            {language === 'de' && "Umfassende Rechtsdienstleistungen, die auf Ihre persönlichen und geschäftlichen Bedürfnisse zugeschnitten sind"}
            {language === 'tr' && "Kişisel ve iş ihtiyaçlarınıza göre uyarlanmış kapsamlı hukuki hizmetler"}
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <PracticeAreaCard
              key={service.key}
              areaKey={service.key}
              areaName={service.name}
              description={service.description}
              fullDescription={service.fullDescription}
              icon={service.icon}
              learnMoreText={
                language === 'en' ? "Learn More" :
                language === 'al' ? "Mëso më shumë" :
                language === 'de' ? "Mehr erfahren" :
                "Daha Fazla Bilgi"
              }
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {language === 'en' && "Need Specific Legal Assistance?"}
            {language === 'al' && "Keni nevojë për asistencë specifike ligjore?"}
            {language === 'de' && "Benötigen Sie spezifische rechtliche Unterstützung?"}
            {language === 'tr' && "Belirli Hukuki Yardıma mı İhtiyacınız Var?"}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            {language === 'en' && "Contact us for a confidential consultation to discuss your specific legal needs and how we can help you achieve the best possible outcome."}
            {language === 'al' && "Na kontaktoni për një konsultim konfidencial për të diskutuar nevojat tuaja specifike ligjore dhe se si mund t'ju ndihmojmë të arrini rezultatin më të mirë të mundshëm."}
            {language === 'de' && "Kontaktieren Sie uns für eine vertrauliche Beratung, um Ihre spezifischen rechtlichen Bedürfnisse zu besprechen und wie wir Ihnen helfen können, das bestmögliche Ergebnis zu erzielen."}
            {language === 'tr' && "Belirli hukuki ihtiyaçlarınızı tartışmak ve en iyi sonucu elde etmenize nasıl yardımcı olabileceğimizi görüşmek için gizli bir danışma için bizimle iletişime geçin."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleContactAreaNavigation} className="bg-[#FFD700] hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>
                {language === 'en' && "Schedule Consultation"}
                {language === 'al' && "Caktoni Konsultim"}
                {language === 'de' && "Beratungstermin Vereinbaren"}
                {language === 'tr' && "Danışma Randevusu Alın"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
         <a
  href="https://wa.me/38344728118"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border-2 border-gray-300 hover:border-[#FFD700] text-gray-700 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
    <span>
      {language === 'en' && "Call Now"}
      {language === 'al' && "Telefono Tani"}
      {language === 'de' && "Jetzt Anrufen"}
      {language === 'tr' && "Hemen Ara"}
    </span>
    <span>+383 (44) 728 118</span>
  </button>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};