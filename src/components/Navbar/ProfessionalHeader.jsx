import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { translations, useLanguage } from '../../contexts/language';
import './App.css';
import hero from "../../assets/hero2.png";
import logo from "../../assets/logo.png";

// Flag icons
const FlagEnIcon = () => <span className="flag-icon">🇺🇸</span>;
const FlagAlIcon = () => <span className="flag-icon">🇦🇱</span>;
const FlagDeIcon = () => <span className="flag-icon">🇩🇪</span>;
const FlagTrIcon = () => <span className="flag-icon">🇹🇷</span>;

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const languageDropdownRef = useRef(null);
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const languages = [
    { code: 'en', name: 'English', icon: <FlagEnIcon /> },
    { code: 'al', name: 'Shqip', icon: <FlagAlIcon /> },
    { code: 'de', name: 'Deutsch', icon: <FlagDeIcon /> },
    { code: 'tr', name: 'Türkçe', icon: <FlagTrIcon /> },
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

  // Navigation handlers
  const handleAboutNavigation = () => {
    navigate('/about');
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };
    const handleNewsNavigation = () => {
    navigate('/news');
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };
   const handleCareersNavigation = () => {
    navigate('/careers');
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };
  const handleContactNavigation = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleAttorneyNavigation = (attorneySlug) => {
    navigate(`/attorneys/${attorneySlug}`);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handlePracticeAreaNavigation = () => {
    // If we're on the home page, scroll to services
    if (window.location.pathname === '/') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate('/#services');
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
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

  // Updated Navigation items to match your actual content
  const navItems = [
    { 
      key: 'practice', 
      label: translations[language].nav.practice,
      dropdown: 'practice',
      action: handlePracticeAreaNavigation
    },
    { 
      key: 'attorneys', 
      label: translations[language].nav.attorneys,
      dropdown: 'attorneys'
    },
    { 
      key: 'about', 
      label: translations[language].nav.about,
      dropdown: 'about',
      action: handleAboutNavigation
    },
    { 
      key: 'contact', 
      label: translations[language].nav.contact,
      dropdown: null,
      action: handleContactNavigation
    }
  ];

  // Updated Dropdown content to include navigation handlers
  const dropdownContent = {
    practice: [
      {
        title: translations[language].services.areas.criminal.title,
        description: translations[language].services.areas.criminal.description,
        action: handlePracticeAreaNavigation
      },
      {
        title: translations[language].services.areas.civil.title,
        description: translations[language].services.areas.civil.description,
        action: handlePracticeAreaNavigation
      },
      {
        title: translations[language].services.areas.family.title,
        description: translations[language].services.areas.family.description,
        action: handlePracticeAreaNavigation
      },
      {
        title: translations[language].services.areas.property.title,
        description: translations[language].services.areas.property.description,
        action: handlePracticeAreaNavigation
      },
      {
        title: translations[language].services.areas.enforcement.title,
        description: translations[language].services.areas.enforcement.description,
        action: handlePracticeAreaNavigation
      },
      {
        title: translations[language].services.areas.administrative.title,
        description: translations[language].services.areas.administrative.description,
        action: handlePracticeAreaNavigation
      },
       {
        title: translations[language].services.areas.corporate.title,
        description: translations[language].services.areas.corporate.description,
        action: handlePracticeAreaNavigation
      },
       {
        title: translations[language].services.areas.commercial.title,
        description: translations[language].services.areas.commercial.description,
        action: handlePracticeAreaNavigation
      },
    ],
    attorneys: [
      {
        name: translations[language].attorneys.asdren.name,
        title: translations[language].attorneys.asdren.title,
        expertise: translations[language].attorneys.asdren.expertise.slice(0, 3),
        slug: 'asdren-bytyqi',
        action: () => handleAttorneyNavigation('asdren-bytyqi')
      },
      {
        name: translations[language].attorneys.fehmije.name,
        title: translations[language].attorneys.fehmije.title,
        expertise: translations[language].attorneys.fehmije.expertise.slice(0, 3),
        slug: 'asdren-gashi-bytyqi',
        action: () => handleAttorneyNavigation('asdren-gashi-bytyqi')
      }
    ],
    about: [
      {
        text: translations[language].dropdown.about.story,
        action: handleAboutNavigation
      },
      {
        text: translations[language].dropdown.about.values,
        action: handleAboutNavigation
      },
      {
        text: translations[language].dropdown.careers.joinTeam,
        action: handleCareersNavigation
      },
      {
        text: translations[language].dropdown.people.news,
        action: handleNewsNavigation
      }
    ]
  };

  return (
    <div className="app">
      {/* Top Contact Bar */}
      {/* Sticky Header */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Bytyqi & Partners" className="logo-image" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="navigation">
            {navItems.map((item) => (
              <div 
                key={item.key}
                className="nav-item" 
                onMouseEnter={() => item.dropdown && handleDropdownHover(item.key)}
                onMouseLeave={item.dropdown ? handleDropdownLeave : undefined}
              >
                <button 
                  className={`nav-link ${activeDropdown === item.key ? 'active' : ''} ${!item.dropdown ? 'no-dropdown' : ''}`}
                  onClick={item.action || (() => {})}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>

          {/* Language Switcher */}
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
        {activeDropdown && dropdownContent[activeDropdown] && (
          <div 
            className="dropdown"
            onMouseEnter={cancelDropdownLeave}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="dropdown-content">
              <h3>{navItems.find(item => item.key === activeDropdown)?.label}</h3>
              <div className={`dropdown-grid ${activeDropdown === 'attorneys' ? 'attorneys-grid' : ''}`}>
                {dropdownContent[activeDropdown].map((item, index) => (
                  <div 
                    key={index} 
                    className={`dropdown-item ${activeDropdown === 'attorneys' ? 'attorney-item' : ''} ${item.action ? 'clickable' : ''}`}
                    onClick={item.action}
                    style={{ cursor: item.action ? 'pointer' : 'default' }}
                  >
                    {activeDropdown === 'attorneys' ? (
                      <div className="attorney-dropdown">
                        <h4>{item.name}</h4>
                        <p className="attorney-title">{item.title}</p>
                        <div className="expertise-tags">
                          {item.expertise.map((exp, idx) => (
                            <span key={idx} className="expertise-tag">{exp}</span>
                          ))}
                        </div>
                      </div>
                    ) : activeDropdown === 'practice' ? (
                      <div className="practice-dropdown">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
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
                <Link to="/" onClick={toggleMobileMenu}>
                  <img src={logo} alt="Bytyqi & Partners" className="logo-image" />
                </Link>
              </div>
              <button className="close-menu" onClick={toggleMobileMenu}>×</button>
            </div>
            
            {/* Mobile Contact Info */}
            <div className="mobile-contact-info">
              <div className="contact-text">
                {language === 'en' && 'Need legal advice?'}
                {language === 'al' && 'Keni nevojë për këshilla ligjore?'}
                {language === 'de' && 'Rechtliche Beratung benötigt?'}
                {language === 'tr' && 'Hukuki danışmanlığa mı ihtiyacınız var?'}
              </div>
              <a href="tel:+38344123123" className="contact-phone">+383 (44) 123-123</a>
            </div>
            
            <nav className="mobile-navigation">
              {navItems.map((item) => (
                <div key={item.key} className="mobile-nav-item">
                  <button 
                    className={`mobile-nav-link ${mobileDropdown === item.key ? 'active' : ''} ${!item.dropdown ? 'no-dropdown' : ''}`}
                    onClick={() => {
                      if (item.dropdown) {
                        toggleMobileDropdown(item.key);
                      } else if (item.action) {
                        item.action();
                      }
                    }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <span className="dropdown-arrow">
                        {mobileDropdown === item.key ? '▲' : '▼'}
                      </span>
                    )}
                  </button>
                  
                  {mobileDropdown === item.key && item.dropdown && (
                    <div className="mobile-dropdown">
                      {dropdownContent[item.key].map((content, index) => (
                        <div 
                          key={index} 
                          className="mobile-dropdown-item"
                          onClick={content.action}
                          style={{ cursor: content.action ? 'pointer' : 'default' }}
                        >
                          {item.key === 'attorneys' ? (
                            <div className="mobile-attorney-item">
                              <strong>{content.name}</strong>
                              <small>{content.title}</small>
                            </div>
                          ) : item.key === 'practice' ? (
                            <div className="mobile-practice-item">
                              <strong>{content.title}</strong>
                              <p>{content.description}</p>
                            </div>
                          ) : (
                            <span>{content.text}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Language Switcher for Mobile */}
            <div className="language-switcher-mobile">
              <div className="language-label">
                {language === 'en' && 'Language:'}
                {language === 'al' && 'Gjuha:'}
                {language === 'de' && 'Sprache:'}
                {language === 'tr' && 'Dil:'}
              </div>
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
    </div>
  );
};

export default Header;