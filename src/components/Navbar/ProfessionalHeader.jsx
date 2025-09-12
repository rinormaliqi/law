import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, useLanguage } from '../../contexts/language';
import './App.css';
import hero from "../../assets/hero2.png";
import logo from "../../assets/logo.png";

// Flag icons
const FlagEnIcon = () => <span className="flag-icon">🇺🇸</span>;
const FlagAlIcon = () => <span className="flag-icon">🇦🇱</span>;
const FlagDeIcon = () => <span className="flag-icon">🇩🇪</span>;

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const languageDropdownRef = useRef(null);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', icon: <FlagEnIcon /> },
    { code: 'al', name: 'Albanian', icon: <FlagAlIcon /> },
    { code: 'de', name: 'German', icon: <FlagDeIcon /> },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleDropdownHover = (dropdown) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const cancelDropdownLeave = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileDropdown(null);
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    if (mobileDropdown === dropdown) {
      setMobileDropdown(null);
    } else {
      setMobileDropdown(dropdown);
    }
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container') && 
          !event.target.closest('.burger-menu')) {
        setIsMobileMenuOpen(false);
        setMobileDropdown(null);
      }
      
      if (isLanguageDropdownOpen && languageDropdownRef.current && 
          !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, isLanguageDropdownOpen]);

  // Navigation items with translations
  const navItems = [
    { key: 'personal', label: translations[language].nav.practice },
    { key: 'people', label: translations[language].nav.attorneys },
    { key: 'careers', label: translations[language].nav.testimonials },
    { key: 'about', label: translations[language].nav.about }
  ];

  // Dropdown content
const dropdownContent = {
  business: [
    translations[language].practice.areas.corporate,
    translations[language].practice.areas.litigation,
    translations[language].practice.areas.realestate,
    translations[language].practice.areas.family,
    translations[language].practice.areas.intellectual
  ],
  personal: [
    translations[language].dropdown.personal.family || translations[language].practice.areas.family,
    translations[language].practice.areas.estate,
    translations[language].dropdown.personal.immigration,
    translations[language].dropdown.personal.personalInjury,
    translations[language].dropdown.personal.property
  ],
  people: [
    translations[language].nav.attorneys,
    translations[language].dropdown.people.caseStudies,
    translations[language].nav.testimonials,
    translations[language].dropdown.people.blogArticles,
    translations[language].dropdown.people.news
  ],
  careers: [
    translations[language].dropdown.careers.joinTeam,
    translations[language].dropdown.careers.openings,
    translations[language].dropdown.careers.training,
    translations[language].dropdown.careers.culture,
    translations[language].dropdown.careers.benefits
  ],
  about: [
    translations[language].dropdown.about.story,
    translations[language].dropdown.about.values,
    translations[language].dropdown.about.offices,
    translations[language].dropdown.about.social,
    translations[language].nav.contact
  ]
};


  return (
    <div className="app">
      {/* Top Contact Bar - Made thinner */}
      <div className="top-contact-bar">
        <div className="contact-header-container">
          <div className="contact-info">
            <span className="contact-text">Need legal advice? Call us now:</span>
            <a href="tel:+1234567890" className="contact-phone">+383 (44) 123-123</a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="header">
        <div className="header-container">
          {/* Logo as image */}
          <div className="logo">
            <img src={logo} alt="Moore Barlow" className="logo-image" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="navigation">
            {navItems.map((item) => (
              <div 
                key={item.key}
                className="nav-item" 
                onMouseEnter={() => handleDropdownHover(item.key)}
                onMouseLeave={handleDropdownLeave}
              >
                <button className={`nav-link ${activeDropdown === item.key ? 'active' : ''}`}>
                  {item.label}
                </button>
              </div>
            ))}
          </nav>

          {/* Language Switcher as Dropdown for Desktop */}
          <div className="language-dropdown-container" ref={languageDropdownRef}>
            <button 
              className="language-dropdown-toggle"
              onClick={toggleLanguageDropdown}
            >
              {currentLanguage?.icon}
              <span className="language-arrow">▼</span>
            </button>
            
            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div 
                  className="language-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`language-option ${language === lang.code ? 'active' : ''}`}
                    >
                      {lang.icon} {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Burger Menu for Mobile */}
          <button 
            className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Desktop Dropdowns */}
        {activeDropdown && (
          <div 
            className="dropdown"
            onMouseEnter={cancelDropdownLeave}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="dropdown-content">
              <h3>{navItems.find(item => item.key === activeDropdown)?.label}</h3>
              <div className="dropdown-grid">
                {dropdownContent[activeDropdown].map((item, index) => (
                  <div key={index} className="dropdown-item">{item}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-container"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="mobile-menu-header">
              <div className="logo">
                <img src={logo} alt="Moore Barlow" className="logo-image" />
              </div>
              <button className="close-menu" onClick={toggleMobileMenu}>×</button>
            </div>
            
            {/* Mobile Contact Info */}
            <div className="mobile-contact-info">
              <div className="contact-text">Need legal advice?</div>
              <a href="tel:+1234567890" className="contact-phone">+1 (234) 567-890</a>
            </div>
            
            <nav className="mobile-navigation">
              {navItems.map((item) => (
                <div key={item.key} className="mobile-nav-item">
                  <button 
                    className={`mobile-nav-link ${mobileDropdown === item.key ? 'active' : ''}`}
                    onClick={() => toggleMobileDropdown(item.key)}
                  >
                    {item.label}
                    <span className="dropdown-arrow">
                      {mobileDropdown === item.key ? '▲' : '▼'}
                    </span>
                  </button>
                  
                  {mobileDropdown === item.key && (
                    <div className="mobile-dropdown">
                      {dropdownContent[item.key].map((content, index) => (
                        <div key={index} className="mobile-dropdown-item">
                          {content}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Language Switcher for Mobile */}
            <div className="language-switcher-mobile">
              <div className="language-label">{translations[language].nav.language}:</div>
              <div className="language-buttons">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`language-btn ${language === lang.code ? 'active' : ''}`}
                  >
                    {lang.icon} {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      {/* <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>{translations[language].hero.title}</h1>
            <p>{translations[language].hero.description}</p>
            <button className="cta-button">{translations[language].hero.cta1}</button>
          </div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.5
            }}
          >
            <img 
              src={hero}
              alt="Legal Services Illustration" 
            />
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Header;
