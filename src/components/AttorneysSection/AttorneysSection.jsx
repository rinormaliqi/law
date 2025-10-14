import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../contexts/language";
import { Scale, Shield, Mail, Phone } from "lucide-react";

import asdrenImage from "../../assets/profile.jpg";
import fehmijeImage from "../../assets/femije.jpg";
export const AttorneysSection = () => {
  const { t, language } = useTranslation();
  const navigate = useNavigate();
  
  const attorneysSectionTexts = t('attorneysSection') || {};
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
  // Create attorneys array with fallbacks
  const attorneys = [
    {
      id: "asdren-bytyqi",
      ...(t('attorneys.asdren') || {}),
      image: asdrenImage,
      icon: <Scale className="w-6 h-6" />,
    },
    {
      id: "fehmije-gashi-bytyqi",
      ...(t('attorneys.fehmije') || {}),
      image: fehmijeImage,
      icon: <Shield className="w-6 h-6" />,
    },
  ].map(attorney => ({
    // Ensure all required properties have fallbacks
    id: attorney.id,
    name: attorney.name || 'Attorney Name',
    title: attorney.title || 'Attorney Title',
    bio: attorney.bio || 'Attorney biography...',
    specialties: attorney.specialties || [],
    contact: attorney.contact || { email: '', phone: '' },
    image: attorney.image,
    icon: attorney.icon
  }));

  const handleAttorneyClick = (attorneyId) => {
    navigate(`/attorneys/${attorneyId}`);
  };

  const handleContactClick = (email, phone, e) => {
    e.stopPropagation();
    console.log(`Contact: ${email}, ${phone}`);
  };

  // Add safety check before rendering
  if (!attorneys || !Array.isArray(attorneys)) {
    return (
      <section id="attorneys" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>Loading attorneys...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="attorneys" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Updated to match AboutUsSection */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
{language === 'en' && (attorneysSectionTexts.ourLegalTeam || 'Our Legal Team')}
{language === 'al' && (attorneysSectionTexts.ourLegalTeam || 'Ekipi Ynë Ligjor')}
{language === 'de' && (attorneysSectionTexts.ourLegalTeam || 'Unser Rechtsteam')}
{language === 'tr' && (attorneysSectionTexts.ourLegalTeam || 'Hukuk Ekibimiz')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "en" ? "Meet our experienced legal professionals dedicated to your success" :
             language === "al" ? "Njihuni me profesionistët tanë juridikë të përvojshëm të përkushtuar për suksesin tuaj" :
             language === "de" ? "Lernen Sie unsere erfahrenen Rechtsprofis kennen, die Ihrem Erfolg verpflichtet sind" :
             "Başarınıza adanmış deneyimli hukuk profesyonellerimizle tanışın"}
          </p>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {attorneys.map((attorney) => (
            <div
              key={attorney.id}
              onClick={() => handleAttorneyClick(attorney.id)}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-[400px] overflow-hidden">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                <h3 className="text-xl font-bold mb-1">{attorney.name}</h3>
                <p className="text-gray-200 text-sm">{attorney.title}</p>
              </div>

              {/* Hover info */}
              <div className="absolute inset-0 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-gray-900 font-bold text-xl mb-3">{attorney.title}</h4>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">{attorney.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {attorney.specialties && attorney.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-xs font-medium border border-[#FFD700]/20"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={(e) => handleContactClick(attorney.contact.email, attorney.contact.phone, e)}
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 hover:bg-[#FFD700] hover:text-gray-900 hover:border-[#FFD700] transition-all duration-200 text-sm font-medium"
                  >
                    <Mail className="w-4 h-4" /> 
{language === 'en' && (attorneysSectionTexts.contact || 'Contact')}
{language === 'al' && (attorneysSectionTexts.contact || 'Kontakt')}
{language === 'de' && (attorneysSectionTexts.contact || 'Kontakt')}
{language === 'tr' && (attorneysSectionTexts.contact || 'İletişim')}
                  </button>
                  <button
                    onClick={() => handleAttorneyClick(attorney.id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#FFD700] rounded-lg py-3 text-gray-900 font-semibold hover:bg-yellow-500 transition-all duration-200 text-sm"
                  >
{language === 'en' && (attorneysSectionTexts.viewProfile || 'View Profile')}
{language === 'al' && (attorneysSectionTexts.viewProfile || 'Shiko Profilin')}
{language === 'de' && (attorneysSectionTexts.viewProfile || 'Profil ansehen')}
{language === 'tr' && (attorneysSectionTexts.viewProfile || 'Profili Görüntüle')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section matching AboutUsSection style */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#FFD700] to-yellow-400 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === "en" ? "Ready to Work With Our Legal Team?" :
               language === "al" ? "Gati për të Punuar me Ekipin Tonë Ligjor?" :
               language === "de" ? "Bereit, mit unserem Rechtsteam zusammenzuarbeiten?" :
               "Hukuk Ekibimizle Çalışmaya Hazır mısınız?"}
            </h3>
            <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
              {language === "en" ? "Contact us today for a confidential consultation and let us help you achieve the best possible outcome for your case." :
               language === "al" ? "Na kontaktoni sot për një konsultim konfidencial dhe na lejoni t'ju ndihmojmë të arrini rezultatin më të mirë të mundshëm për rastin tuaj." :
               language === "de" ? "Kontaktieren Sie uns noch heute für eine vertrauliche Beratung und lassen Sie uns Ihnen helfen, das bestmögliche Ergebnis für Ihren Fall zu erzielen." :
               "Gizli bir danışma için bugün bizimle iletişime geçin ve davasınız için mümkün olan en iyi sonucu elde etmenize yardımcı olalım."}
            </p>
            <button
              onClick={handleContactAreaNavigation}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              {language === "en" ? "Get Started Today" :
               language === "al" ? "Filloni Sot" :
               language === "de" ? "Starten Sie Noch Heute" :
               "Bugün Başlayın"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};