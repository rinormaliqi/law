// components/CTA.js
import React from 'react';
import { translations, useLanguage } from '../contexts/language';

export const CTA = () => {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t.title}</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          {t.description}
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded font-medium hover:bg-blue-50 transition-colors shadow-lg">
          {t.button}
        </button>
      </div>
    </section>
  );
};