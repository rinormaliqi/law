import React from "react";
import { translations, useLanguage } from "../../contexts/language";
import { PracticeAreaCard } from "./PracticeAreaCard";
import { Briefcase, Building2, Home, Users, Gavel, Heart } from "lucide-react";

export const PracticeAreas = () => {
  const { language } = useLanguage();
  const t = translations[language].practice;

  const services = [
    {
      key: "corporate",
      name: t.areas.corporate,
      description: t.descriptions.corporate,
      icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-[#1a3e6a]" />,
    },
    {
      key: "commercial",
      name: t.areas.commercial,
      description: t.descriptions.commercial,
      icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-[#1a3e6a]" />,
    },
    {
      key: "realEstate",
      name: t.areas.realEstate,
      description: t.descriptions.realEstate,
      icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-[#1a3e6a]" />,
    },
    {
      key: "employment",
      name: t.areas.employment,
      description: t.descriptions.employment,
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-[#1a3e6a]" />,
    },
    {
      key: "disputeResolution",
      name: t.areas.disputeResolution,
      description: t.descriptions.disputeResolution,
      icon: <Gavel className="w-8 h-8 md:w-10 md:h-10 text-[#1a3e6a]" />,
    },
    {
      key: "family",
      name: t.areas.family,
      description: t.descriptions.family,
      icon: <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#1a3e6a]" />,
    },
  ];

  return (
    <section className="bg-none py-8 md:py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3e6a] mb-4 md:mb-6 text-center">
        {t.title}
      </h2>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base px-2">
        {t.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {services.map((service) => (
          <PracticeAreaCard
            key={service.key}
            areaKey={service.key}
            areaName={service.name}
            description={service.description}
            icon={service.icon}
            learnMore={t.learnMore}
          />
        ))}
      </div>
    </section>
  );
};