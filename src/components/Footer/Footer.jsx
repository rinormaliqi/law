// components/Footer.js
import React from 'react';
import { translations, useLanguage } from '../../contexts/language';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3e6a] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Asdren Bytyqi</h3>
            <p className="text-gray-400">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.practiceTitle}</h4>
            <ul className="space-y-2 text-gray-400">
              {Object.values(t.practice.areas).slice(0, 5).map((area) => (
                <li key={area}><a href="#" className="hover:text-white">{area}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.linksTitle}</h4>
            <ul className="space-y-2 text-gray-400">
              {Object.values(t.nav).map((item) => (
                <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactTitle}</h4>
            <address className="not-italic text-gray-400">
              <p>5, 5 Garibaldi</p>
              <p>Prishtina 10000</p>
              <p className="mt-2">Phone: (+383) 45 123-456</p>
              <p>Email: info@justicelegal.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright.replace('{year}', currentYear)}</p>
        </div>
      </div>
    </footer>
  );
};