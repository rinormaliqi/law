import React, { useState, createContext, useContext } from 'react';

// Import language files
import enTranslations from './locales/en.json';
import alTranslations from './locales/al.json';
import deTranslations from './locales/de.json';
import trTranslations from './locales/tr.json';

// Language context
const LanguageContext = createContext();

// Combined translations
export const translations = {
  en: enTranslations,
  al: alTranslations,
  de: deTranslations,
  tr: trTranslations
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

// Helper function to get nested translation - UPDATED VERSION
export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (path, variables = {}) => {
    // If no path provided, return all translations for current language
    if (!path) return translations[language];
    
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      if (value && value[key] !== undefined) {
        value = value[key];
      } else {
        console.warn(`Translation key not found: ${path} for language: ${language}`);
        // Return a safe fallback object for attorneys to prevent errors
        if (path.includes('attorneys.')) {
          return {
            name: 'Loading...',
            title: 'Loading...',
            bio: 'Loading...',
            education: 'Loading...',
            experience: 'Loading...',
            specialties: [],
            languages: [],
            contact: { email: '', phone: '' },
            achievements: []
          };
        }
        return path; // Return the path as fallback for other cases
      }
    }
    
    // Replace variables in the translation string
    if (typeof value === 'string') {
      Object.keys(variables).forEach(variable => {
        value = value.replace(`{${variable}}`, variables[variable]);
      });
    }
    
    return value;
  };
  
  return { t, language };
};