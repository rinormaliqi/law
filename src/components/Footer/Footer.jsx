// components/Footer.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { translations, useLanguage } from '../../contexts/language';

export const Footer = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  // Get all practice areas from services
  const practiceAreas = t.services.areas ? Object.values(t.services.areas).map(area => area.title) : [];

  // Navigation handlers
  const handleAboutNavigation = () => {
    navigate('/about');
  };

  const handleContactNavigation = () => {
    navigate('/contact');
  };

  const handleAttorneysNavigation = () => {
    navigate('/attorneys/asdren-bytyqi');
  };

  const handlePracticeAreaNavigation = () => {
    if (window.location.pathname === '/') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#services');
    }
  };

  const handleHomeNavigation = () => {
    navigate('/');
  };

  const handleNewsNavigation = () => {
    // Assuming you have a news page
    navigate('/news');
  };

  const handleBlogNavigation = () => {
    // Assuming you have a blog page
    navigate('/news');
  };

  const handlePrivacyNavigation = () => {
    // Assuming you have a privacy policy page
    navigate('/privacy');
  };

  const handleTermsNavigation = () => {
    // Assuming you have a terms page
    navigate('/terms');
  };

  const handleDisclaimerNavigation = () => {
    // Assuming you have a disclaimer page
    navigate('/disclaimer');
  };

  // Navigation links excluding home for footer
  const navLinks = [
    { 
      key: 'about', 
      label: t.nav.about,
      action: handleAboutNavigation
    },
    { 
      key: 'attorneys', 
      label: t.nav.attorneys,
      action: handleAttorneysNavigation
    },
    { 
      key: 'practice', 
      label: t.nav.practice,
      action: handlePracticeAreaNavigation
    },
    { 
      key: 'contact', 
      label: t.nav.contact,
      action: handleContactNavigation
    }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firm Description */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4 text-[#FFD700]">Bytyqi & Partners</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
              <span className="text-sm text-gray-300">
                {language === 'en' && 'Kosovo Bar Association Member'}
                {language === 'al' && 'Anëtar i Odes së Avokatëve të Kosovës'}
                {language === 'de' && 'Mitglied der Anwaltskammer des Kosovo'}
                {language === 'tr' && 'Kosova Barolar Birliği Üyesi'}
              </span>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold mb-4 text-[#FFD700] border-b border-[#FFD700] pb-2">
              {t.footer.practiceTitle}
            </h4>
            <ul className="space-y-2 text-gray-300">
              {practiceAreas.slice(0, 6).map((area, index) => (
                <li key={index}>
                  <button 
                    onClick={handlePracticeAreaNavigation}
                    className="hover:text-[#FFD700] transition-colors duration-200 text-sm text-left w-full"
                  >
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#FFD700] border-b border-[#FFD700] pb-2">
              {t.footer.linksTitle}
            </h4>
            <ul className="space-y-2 text-gray-300">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={item.action}
                    className="hover:text-[#FFD700] transition-colors duration-200 text-sm text-left w-full"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              {/* Additional footer-specific links */}
              <li>
                <button 
                  onClick={handleNewsNavigation}
                  className="hover:text-[#FFD700] transition-colors duration-200 text-sm text-left w-full"
                >
                  {t.dropdown.people.news}
                </button>
              </li>
              <li>
                <button 
                  onClick={handleBlogNavigation}
                  className="hover:text-[#FFD700] transition-colors duration-200 text-sm text-left w-full"
                >
                  {t.dropdown.people.blogArticles}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4 text-[#FFD700] border-b border-[#FFD700] pb-2">
              {t.footer.contactTitle}
            </h4>
            <address className="not-italic text-gray-300">
              <div className="mb-3">
                <p className="font-medium text-white">Prishtinë, Kosovo</p>
                <p className="text-sm">
                  {language === 'en' && 'Central Business District'}
                  {language === 'al' && 'Zona Qendrore e Biznesit'}
                  {language === 'de' && 'Zentrales Geschäftsviertel'}
                  {language === 'tr' && 'Merkezi İş Bölgesi'}
                </p>
              </div>
              
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:+38344123123" className="hover:text-[#FFD700] transition-colors">
                  +383 (44) 728-118

                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:info@bytyqipartners.com" className="hover:text-[#FFD700] transition-colors">
                    info@bytyqipartners.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:asdren@bytyqipartners.com" className="hover:text-[#FFD700] transition-colors">
                    contact@bytyqipartners.com
                  </a>
                </p>
              </div>

              {/* Business Hours */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm font-medium text-white mb-2">
                  {language === 'en' && 'Business Hours:'}
                  {language === 'al' && 'Orari i Punës:'}
                  {language === 'de' && 'Geschäftszeiten:'}
                  {language === 'tr' && 'Çalışma Saatleri:'}
                </p>
                <p className="text-xs text-gray-400">
                  {language === 'en' && 'Mon - Fri: 8:00 AM - 6:00 PM'}
                  {language === 'al' && 'E Hënë - E Premte: 8:00 - 18:00'}
                  {language === 'de' && 'Mo - Fr: 8:00 - 18:00 Uhr'}
                  {language === 'tr' && 'Pzt - Cuma: 8:00 - 18:00'}
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t.footer.copyright.replace('{year}', currentYear)} |  {language === 'en' && 'Developed By'}
                {language === 'al' && 'Zhvilluar nga'}
                {language === 'de' && 'entwickelt von'}
                {language === 'tr' && 'tarafından geliştirildi'}   
  <a 
  href="https://www.linkedin.com/in/rinor-maliqi-646a2233a/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white underline hover:no-underline transition-colors duration-300 font-medium hover:bg-[#FFD700] hover:px-2 hover:py-1 hover:rounded"
>
    <span className="mr-2"></span>
    Rinor Maliqi
    <span className="ml-2 text-sm">↗</span>
</a>            </p>
            
            {/* Additional legal links */}
            <div className="flex space-x-6 text-sm text-gray-400">
              <button 
                onClick={handlePrivacyNavigation}
                className="hover:text-[#FFD700] transition-colors"
              >
                {language === 'en' && 'Privacy Policy'}
                {language === 'al' && 'Politika e Privatësisë'}
                {language === 'de' && 'Datenschutzerklärung'}
                {language === 'tr' && 'Gizlilik Politikası'}
              </button>
              <button 
                onClick={handleTermsNavigation}
                className="hover:text-[#FFD700] transition-colors"
              >
                {language === 'en' && 'Terms of Service'}
                {language === 'al' && 'Kushtet e Shërbimit'}
                {language === 'de' && 'Nutzungsbedingungen'}
                {language === 'tr' && 'Hizmet Şartları'}
              </button>
              <button 
                onClick={handleDisclaimerNavigation}
                className="hover:text-[#FFD700] transition-colors"
              >
                {language === 'en' && 'Disclaimer'}
                {language === 'al' && 'Mohim i Përgjegjësisë'}
                {language === 'de' && 'Haftungsausschluss'}
                {language === 'tr' && 'Feragatname'}
              </button>
            </div>
          </div>

          {/* Bar Association Badge */}
          <div className="mt-4 flex justify-center">
            <div className="bg-[#FFD700] text-gray-900 px-4 py-2 rounded-lg text-xs font-semibold">
              {t.badges.bar}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
