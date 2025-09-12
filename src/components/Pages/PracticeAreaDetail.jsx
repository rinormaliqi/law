import React from 'react';
import { useParams } from 'react-router-dom';
import { translations, useLanguage } from '../../contexts/language';

export const PracticeAreaDetail = () => {
  const { areaKey } = useParams();
  const { language } = useLanguage();
  const t = translations[language].practice;
  const area = t.areas[areaKey];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{area}</h1>
      <p className="text-gray-700 text-lg">
        {translations[language].practice.descriptions[areaKey]}
      </p>
      {/* Add more detailed content here */}
    </div>
  );
};