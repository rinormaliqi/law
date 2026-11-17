import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../contexts/language";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "../Reveal";

import asdrenImage from "../../assets/profile.jpg";
import fehmijeImage from "../../assets/femije.jpg";

const TEXT = {
  title: { en: 'Our Legal Team', al: 'Ekipi Ynë Ligjor', de: 'Unser Rechtsteam', tr: 'Hukuk Ekibimiz' },
  subtitle: {
    en: 'Meet our experienced legal professionals dedicated to your success',
    al: 'Njihuni me profesionistët tanë juridikë të përvojshëm të përkushtuar për suksesin tuaj',
    de: 'Lernen Sie unsere erfahrenen Rechtsprofis kennen, die Ihrem Erfolg verpflichtet sind',
    tr: 'Başarınıza adanmış deneyimli hukuk profesyonellerimizle tanışın',
  },
  contact: { en: 'Contact', al: 'Kontakt', de: 'Kontakt', tr: 'İletişim' },
  viewProfile: { en: 'View Profile', al: 'Shiko Profilin', de: 'Profil ansehen', tr: 'Profili Görüntüle' },
};

export const AttorneysSection = () => {
  const { t, language } = useTranslation();
  const navigate = useNavigate();
  const label = (key) => TEXT[key][language] || TEXT[key].en;

  const attorneys = [
    { id: "asdren-bytyqi", ...(t('attorneys.asdren') || {}), image: asdrenImage },
    { id: "fehmije-gashi-bytyqi", ...(t('attorneys.fehmije') || {}), image: fehmijeImage },
  ].map((a) => ({
    id: a.id,
    name: a.name || 'Attorney',
    title: a.title || '',
    bio: a.bio || '',
    specialties: a.specialties || a.expertise || [],
    image: a.image,
  }));

  const goToContact = () => {
    if (window.location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <section id="attorneys" className="section bg-surface">
      <div className="container-page">
        <Reveal className="section-header">
          <h2 className="section-title">{label('title')}</h2>
          <div className="section-divider" />
          <p className="section-subtitle">{label('subtitle')}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {attorneys.map((attorney, index) => (
            <Reveal key={attorney.id} delay={index * 0.1} className="h-full">
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                <button
                  onClick={() => navigate(`/attorneys/${attorney.id}`)}
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-gray-200"
                  aria-label={`${label('viewProfile')} – ${attorney.name}`}
                >
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-[50%_25%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                </button>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="text-2xl font-bold">{attorney.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-500">{attorney.title}</p>

                  {attorney.bio && (
                    <p className="mt-4 line-clamp-3 leading-relaxed text-gray-600">{attorney.bio}</p>
                  )}

                  {attorney.specialties.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {attorney.specialties.slice(0, 4).map((spec) => (
                        <span key={spec} className="pill">{spec}</span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                    <button onClick={() => navigate(`/attorneys/${attorney.id}`)} className="btn btn-dark flex-1">
                      {label('viewProfile')}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button onClick={goToContact} className="btn btn-outline flex-1">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {label('contact')}
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
