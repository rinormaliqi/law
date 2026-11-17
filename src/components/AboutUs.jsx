import React from "react";
import { useTranslation } from "../contexts/language";
import { Scale, Users, Target, Award, Shield, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Reveal } from "./Reveal";

// `standalone` = rendered as its own page (/about), so it clears the fixed header.
// `showCasesPreview` = show the two highlighted cases (hidden on the home page,
// which already has the full cases section further down).
export const AboutUsSection = ({ standalone = false, showCasesPreview = true }) => {
  const { t, language } = useTranslation();
  const navigate = useNavigate();

  const aboutTexts = t('about') || {};
  const stats = t('stats') || {};

  const statsData = [
    { icon: Scale, value: "35+", label: stats.years || "Years of Combined Experience" },
    { icon: BookOpen, value: "500+", label: stats.cases || "Cases Handled" },
    { icon: Award, value: "95%", label: stats.success || "Success Rate" },
    {
      icon: Users,
      value: "100+",
      label:
        language === 'en' ? 'Clients Served' :
        language === 'al' ? 'Klientë të Shërbyer' :
        language === 'de' ? 'Kunden Betreut' :
        'Hizmet Verilen Müşteriler',
    },
  ];

  const pillars = [
    { icon: Target, title: aboutTexts.missionTitle || "Our Mission", text: aboutTexts.missionText },
    { icon: Shield, title: aboutTexts.expertiseTitle || "Our Expertise", text: aboutTexts.expertiseText },
    { icon: Users, title: aboutTexts.approachTitle || "Our Approach", text: aboutTexts.approachText },
  ];

  const readMore =
    language === 'en' ? 'Read more' :
    language === 'al' ? 'Lexo më shumë' :
    language === 'de' ? 'Mehr lesen' :
    'Devamını oku';

  return (
    <section id="about" className={`section bg-white ${standalone ? 'page-top' : ''}`}>
      <div className="container-page">
        {/* Header */}
        <Reveal className="section-header">
          {standalone ? (
            <h1 className="section-title">{aboutTexts.title || "About Bytyqi & Partners"}</h1>
          ) : (
            <h2 className="section-title">{aboutTexts.title || "About Bytyqi & Partners"}</h2>
          )}
          <div className="section-divider" />
          <p className="section-subtitle">{aboutTexts.subtitle || "Your Trusted Legal Advocates in Kosovo"}</p>
        </Reveal>

        {/* Mission / Expertise / Approach */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.08} className="card p-7 md:p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft">
                <Icon className="h-6 w-6 text-ink" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{title}</h3>
              <p className="leading-relaxed text-gray-600">{text}</p>
            </Reveal>
          ))}
        </div>

        {/* Values + Stats */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5">
          <Reveal className="rounded-2xl bg-surface p-7 md:p-8 lg:col-span-2">
            <h3 className="mb-5 text-xl font-bold">{aboutTexts.valuesTitle || "Our Values"}</h3>
            <ul className="space-y-3.5">
              {(aboutTexts.values || []).map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/10 lg:col-span-3">
            {statsData.map(({ icon: Icon, value, label }) => (
              <div key={value} className="flex flex-col items-center justify-center bg-ink px-4 py-8 text-center">
                <Icon className="mb-3 h-7 w-7 text-brand" aria-hidden="true" />
                <div className="text-3xl font-extrabold text-white md:text-4xl">{value}</div>
                <div className="mt-1 text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Recognition */}
        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="mb-4 text-2xl font-bold">{aboutTexts.recognitionTitle || "Recognition & Impact"}</h3>
          <p className="text-lg leading-relaxed text-gray-600">{aboutTexts.recognitionText}</p>
        </Reveal>

        {/* Notable cases preview */}
        {showCasesPreview && (
          <Reveal className="mt-14 rounded-2xl bg-brand p-6 md:p-10">
            <h3 className="mb-6 text-center text-2xl font-bold">
              {t('notableCases.title') || "Notable Cases & Legal Commentary"}
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {(t('notableCases.cases') || []).slice(0, 2).map((caseItem) => (
                <button
                  key={caseItem.title}
                  onClick={() => navigate('/news')}
                  className="card card-hover group p-6 text-left"
                >
                  <h4 className="mb-2 font-bold">{caseItem.title}</h4>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{caseItem.description}</p>
                  <span className="link-arrow">
                    {readMore}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};
