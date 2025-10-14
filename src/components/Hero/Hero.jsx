// components/Hero.js
import React from 'react';
import { Squares } from '../Squares';
import { useLanguage } from '../../contexts/language';
import { translations } from '../../contexts/language';
import bgImage from '../../assets/image1.jpg';

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
<section
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(50%)'
  }}
  className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-white overflow-hidden h-full"
>
      <div className="relative z-10">

      {/* Squares Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Squares 
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.2)"
          hoverFillColor="rgba(255, 255, 255, 0.1)"
          className="w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:px-6 text-center relative z-10">
        <div className="flex justify-center mb-6">

        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
          {t.title} <br />
          <span className="text-blue-300">{t.subtitle}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {t.description}
        </p>
        
        {/* Technical Expertise Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium">Kosovo Bar Association</span>
          <span className="bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium">EU Law Integration</span>
          <span className="bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium">Commercial Litigation</span>
          <span className="bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium">International Law</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-yellow-300 px-8 py-3 rounded font-medium hover:bg-blue-50 transition-colors shadow-lg flex items-center">
            {t.cta1}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-blue-900 transition-colors flex items-center">
            {t.cta2}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};