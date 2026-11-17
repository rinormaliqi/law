// components/Footer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { translations, useLanguage } from '../../contexts/language';
import logo from '../../assets/logo.png';

const LABELS = {
  bar: {
    en: 'Kosovo Bar Association Member',
    al: 'Anëtar i Odës së Avokatëve të Kosovës',
    de: 'Mitglied der Anwaltskammer des Kosovo',
    tr: 'Kosova Barolar Birliği Üyesi',
  },
  district: {
    en: 'Central Business District',
    al: 'Zona Qendrore e Biznesit',
    de: 'Zentrales Geschäftsviertel',
    tr: 'Merkezi İş Bölgesi',
  },
  hoursTitle: { en: 'Business Hours', al: 'Orari i Punës', de: 'Geschäftszeiten', tr: 'Çalışma Saatleri' },
  hours: {
    en: 'Mon – Fri: 8:00 – 18:00',
    al: 'E Hënë – E Premte: 8:00 – 18:00',
    de: 'Mo – Fr: 8:00 – 18:00 Uhr',
    tr: 'Pzt – Cuma: 8:00 – 18:00',
  },
  developedBy: { en: 'Developed by', al: 'Zhvilluar nga', de: 'Entwickelt von', tr: 'Geliştiren' },
  privacy: { en: 'Privacy Policy', al: 'Politika e Privatësisë', de: 'Datenschutzerklärung', tr: 'Gizlilik Politikası' },
  terms: { en: 'Terms of Service', al: 'Kushtet e Shërbimit', de: 'Nutzungsbedingungen', tr: 'Hizmet Şartları' },
  disclaimer: { en: 'Disclaimer', al: 'Mohim i Përgjegjësisë', de: 'Haftungsausschluss', tr: 'Feragatname' },
  careers: { en: 'Careers', al: 'Karriera', de: 'Karriere', tr: 'Kariyer' },
};

const linkClass =
  'text-left text-sm text-gray-400 transition-colors duration-200 hover:text-white focus-visible:text-white';

export const Footer = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language];
  const currentYear = new Date().getFullYear();
  const l = (key) => LABELS[key][language] || LABELS[key].en;

  const practiceAreas = t.services.areas ? Object.values(t.services.areas).map((area) => area.title) : [];

  const goToSection = (id) => {
    if (window.location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  const quickLinks = [
    { label: t.nav.about, action: () => navigate('/about') },
    { label: t.nav.attorneys, action: () => goToSection('attorneys') },
    { label: t.nav.practice, action: () => goToSection('services') },
    { label: t.dropdown.people.news, action: () => navigate('/news') },
    { label: l('careers'), action: () => navigate('/careers') },
    { label: t.nav.contact, action: () => navigate('/contact') },
  ];

  const legalLinks = [
    { label: l('privacy'), path: '/privacy' },
    { label: l('terms'), path: '/terms' },
    { label: l('disclaimer'), path: '/disclaimer' },
  ];

  const headingClass = 'mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand';

  return (
    <footer className="bg-ink text-white">
      <div className="container-page pb-10 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <button onClick={() => navigate('/')} className="mb-5 block" aria-label="Bytyqi & Partners">
              <img src={logo} alt="Bytyqi & Partners" className="h-16 w-16 rounded-md" />
            </button>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">{t.footer.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              {l('bar')}
            </div>
          </div>

          {/* Practice areas */}
          <div className="lg:col-span-3">
            <h4 className={headingClass}>{t.footer.practiceTitle}</h4>
            <ul className="space-y-3">
              {practiceAreas.slice(0, 6).map((area) => (
                <li key={area}>
                  <button onClick={() => goToSection('services')} className={linkClass}>
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className={headingClass}>{t.footer.linksTitle}</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button onClick={item.action} className={linkClass}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className={headingClass}>{t.footer.contactTitle}</h4>
            <address className="space-y-4 text-sm not-italic text-gray-400">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block text-white">Prishtinë, Kosovo</span>
                  {l('district')}
                </span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                <a href="tel:+38344728118" className="transition-colors hover:text-white">
                  +383 (44) 728-118
                </a>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                <a href="mailto:Asdren.bytyqi91@gmail.com" className="break-all transition-colors hover:text-white">
                  Asdren.bytyqi91@gmail.com
                </a>
              </p>
              <p className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block text-white">{l('hoursTitle')}</span>
                  {l('hours')}
                </span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            {t.footer.copyright.replace('{year}', currentYear)}
            <span className="mx-2 text-gray-700">·</span>
            {l('developedBy')}{' '}
            <a
              href="https://www.linkedin.com/in/rinor-maliqi-646a2233a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-medium text-gray-400 transition-colors hover:text-white"
            >
              Rinor Maliqi
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            {legalLinks.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
