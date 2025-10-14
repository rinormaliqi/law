import React from "react";
import { useTranslation } from "../contexts/language";
import { Scale, Users, Target, Award, Shield, BookOpen } from "lucide-react";

export const AboutUsSection = () => {
  const { t, language } = useTranslation();
  
  const aboutTexts = t('about') || {};
  const stats = t('stats') || {};

  // Stats data with fallbacks
  const statsData = [
    {
      icon: <Scale className="w-8 h-8" />,
      value: "35+",
      label: stats.years || "Years of Combined Experience"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: "500+",
      label: stats.cases || "Cases Handled"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "95%",
      label: stats.success || "Success Rate"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "100+",
      label: language === 'en' ? 'Clients Served' : 
             language === 'al' ? 'Klientë të Shërbyer' :
             language === 'de' ? 'Kunden Betreut' :
             'Hizmet Verilen Müşteriler'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {aboutTexts.title || "About Bytyqi & Partners"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutTexts.subtitle || "Your Trusted Legal Advocates in Kosovo"}
          </p>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6"></div>
        </div>

        {/* Mission & Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 text-[#FFD700] mr-3" />
                {aboutTexts.missionTitle || "Our Mission"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {aboutTexts.missionText}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-[#FFD700] mr-3" />
                {aboutTexts.expertiseTitle || "Our Expertise"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {aboutTexts.expertiseText}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-[#FFD700] mr-3" />
                {aboutTexts.approachTitle || "Our Approach"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {aboutTexts.approachText}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {aboutTexts.valuesTitle || "Our Values"}
              </h3>
              <ul className="space-y-3">
                {aboutTexts.values && aboutTexts.values.map((value, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-[#FFD700]">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {aboutTexts.recognitionTitle || "Recognition & Impact"}
          </h3>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
            {aboutTexts.recognitionText}
          </p>
        </div>

        {/* Notable Cases Preview */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#FFD700] to-yellow-400 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {t('notableCases.title') || "Notable Cases & Legal Commentary"}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t('notableCases.cases') && t('notableCases.cases').slice(0, 2).map((caseItem, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">{caseItem.title}</h4>
                <p className="text-gray-700 text-sm">{caseItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};