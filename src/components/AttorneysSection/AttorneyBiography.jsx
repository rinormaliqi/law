import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "../../contexts/language";
import { Mail, Phone, Award, FileText, GraduationCap, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";

import asdrenImage from "../../assets/profile.jpg";
import fehmijeImage from "../../assets/femije.jpg";

const EMAIL = "Asdren.bytyqi91@gmail.com";

const TEXT = {
  back: { en: 'All attorneys', al: 'Të gjithë avokatët', de: 'Alle Anwälte', tr: 'Tüm avukatlar' },
  biography: { en: 'Biography', al: 'Biografia', de: 'Biografie', tr: 'Biyografi' },
  achievements: { en: 'Professional Achievements', al: 'Arritje Profesionale', de: 'Berufliche Erfolge', tr: 'Profesyonel Başarılar' },
  contact: { en: 'Contact', al: 'Kontakt', de: 'Kontakt', tr: 'İletişim' },
  specialties: { en: 'Specialties', al: 'Specializime', de: 'Fachgebiete', tr: 'Uzmanlık Alanları' },
  educationBar: { en: 'Education & Bar', al: 'Arsimi & Oda e Avokatëve', de: 'Ausbildung & Anwaltskammer', tr: 'Eğitim & Baro' },
  kosovoBar: { en: 'Kosovo Bar Association', al: 'Oda e Avokatëve të Kosovës', de: 'Anwaltskammer des Kosovo', tr: 'Kosova Barosu' },
  bookConsultation: { en: 'Book a consultation', al: 'Caktoni një konsultim', de: 'Beratung vereinbaren', tr: 'Danışma randevusu alın' },
};

export const AttorneyBiography = () => {
  const { attorneyId } = useParams();
  const { t, language } = useTranslation();
  const navigate = useNavigate();
  const label = (key) => TEXT[key][language] || TEXT[key].en;

  const attorneyKey =
    attorneyId === "asdren-bytyqi" ? "asdren" :
    attorneyId === "fehmije-gashi-bytyqi" ? "fehmije" : null;

  if (!attorneyKey) {
    return <Navigate to="/" replace />;
  }

  const data = t(`attorneys.${attorneyKey}`) || {};
  const attorney = {
    name: data.name || '',
    title: data.title || '',
    bio: data.bio || '',
    education: data.education || '',
    specialties: data.specialties || data.expertise || [],
    achievements: data.achievements || [],
    phone: data.phone || '',
    image: attorneyKey === "asdren" ? asdrenImage : fehmijeImage,
  };
  const phoneHref = `tel:${attorney.phone.replace(/\s/g, '')}`;

  const sidebarCard = "rounded-2xl bg-surface p-6";
  const sidebarTitle = "mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500";

  return (
    <div className="page-top section bg-white">
      <div className="container-page">
        <button
          onClick={() => navigate('/#attorneys')}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {label('back')}
        </button>

        {/* Header */}
        <Reveal className="flex flex-col items-center gap-8 rounded-3xl bg-brand p-6 text-center sm:p-10 md:flex-row md:items-center md:text-left">
          <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg ring-4 ring-white md:h-48 md:w-48">
            <img src={attorney.image} alt={attorney.name} className="h-full w-full object-cover object-[50%_25%]" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">{attorney.name}</h1>
            <p className="mt-2 text-lg font-medium text-ink/75">{attorney.title}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <button onClick={() => navigate('/#contact')} className="btn btn-dark">
                {label('bookConsultation')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              {attorney.phone && (
                <a href={phoneHref} className="btn btn-outline-dark">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {attorney.phone}
                </a>
              )}
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          <Reveal className="space-y-12 lg:col-span-2">
            <section>
              <h2 className="mb-4 text-2xl font-bold">{label('biography')}</h2>
              <p className="text-lg leading-relaxed text-gray-700">{attorney.bio}</p>
            </section>

            {attorney.achievements.length > 0 && (
              <section>
                <h2 className="mb-5 text-2xl font-bold">{label('achievements')}</h2>
                <ul className="space-y-3">
                  {attorney.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3 rounded-xl border border-gray-100 p-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-soft">
                        <Award className="h-4 w-4 text-ink" aria-hidden="true" />
                      </span>
                      <span className="pt-1 leading-relaxed text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </Reveal>

          <Reveal delay={0.08} as="aside" className="space-y-5">
            <div className={sidebarCard}>
              <h3 className={sidebarTitle}>{label('contact')}</h3>
              <div className="space-y-3 text-[0.95rem]">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all text-gray-700 transition-colors hover:text-ink">
                  <Mail className="h-4 w-4 flex-shrink-0 text-brand-dark" aria-hidden="true" />
                  {EMAIL}
                </a>
                {attorney.phone && (
                  <a href={phoneHref} className="flex items-center gap-3 text-gray-700 transition-colors hover:text-ink">
                    <Phone className="h-4 w-4 flex-shrink-0 text-brand-dark" aria-hidden="true" />
                    {attorney.phone}
                  </a>
                )}
              </div>
            </div>

            {attorney.specialties.length > 0 && (
              <div className={sidebarCard}>
                <h3 className={sidebarTitle}>{label('specialties')}</h3>
                <div className="flex flex-wrap gap-2">
                  {attorney.specialties.map((spec) => (
                    <span key={spec} className="pill bg-white">{spec}</span>
                  ))}
                </div>
              </div>
            )}

            <div className={sidebarCard}>
              <h3 className={sidebarTitle}>{label('educationBar')}</h3>
              <div className="space-y-3 text-[0.95rem] text-gray-700">
                {attorney.education && (
                  <p className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-dark" aria-hidden="true" />
                    {attorney.education}
                  </p>
                )}
                <p className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-dark" aria-hidden="true" />
                  {label('kosovoBar')}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
