// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { translations, useLanguage } from '../../contexts/language';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 bg-white shadow-md py-4 transition-all ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-blue-900">Asdren Bytyqi</div>
        
        <div className="hidden md:flex space-x-8 items-center">
          {Object.values(t).map((item) => (
            <a key={item} href="/" className="font-medium hover:text-blue-700 transition-colors">
              {item}
            </a>
          ))}
          <LanguageSwitcher />
        </div>
        
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSwitcher />
          <button className="text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};