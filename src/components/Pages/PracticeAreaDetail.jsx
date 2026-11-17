import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { translations, useLanguage } from '../../contexts/language';

export const PracticeAreaDetail = () => {
  const { areaKey } = useParams();
  const { language } = useLanguage();
  const area = translations[language]?.services?.areas?.[areaKey];

  if (!area) {
    return <Navigate to="/practice-areas" replace />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 pt-32 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{area.title}</h1>
      <div className="w-24 h-1 bg-[#FFD700] mb-6"></div>
      {area.description && (
        <p className="text-gray-600 text-lg mb-6">{area.description}</p>
      )}
      {area.content && (
        <p className="text-gray-700 leading-relaxed mb-10">{area.content}</p>
      )}
      <Link
        to="/#contact"
        className="inline-block bg-[#FFD700] hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors"
      >
        {translations[language]?.nav?.contact || 'Contact'}
      </Link>
    </div>
  );
};
