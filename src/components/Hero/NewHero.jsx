import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './hero.css';
import hero from '../../assets/hero2.png';
import { translations, useLanguage } from '../../contexts/language';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const NewHero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <section className="hero">
      <div className="hero-container container-page">
        <div className="hero-content">
          <motion.h1 initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <span className="highlight">{t.title1}</span>
            <span className="highlight">{t.title2}</span>
          </motion.h1>

          <motion.p initial="hidden" animate="show" variants={fadeUp} custom={1}>
            {t.subtitle}
          </motion.p>

          <motion.div className="hero-buttons" initial="hidden" animate="show" variants={fadeUp} custom={2}>
            <button onClick={() => scrollToSection('contact')} className="hero-btn hero-btn-solid">
              {t.contactBtn}
              <ArrowRight aria-hidden="true" />
            </button>
            <button onClick={() => scrollToSection('services')} className="hero-btn hero-btn-outline">
              {t.businessBtn}
            </button>
            <button onClick={() => scrollToSection('services')} className="hero-btn hero-btn-outline">
              {t.personalBtn}
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={hero} alt="" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
};
