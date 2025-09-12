import React from 'react'
import { motion } from 'framer-motion';
import './hero.css';
import hero from "../../assets/hero2.png";
import { translations, useLanguage } from '../../contexts/language';

export const NewHero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <span>{t.title1}</span>
            <span className="highlight">{t.title2}</span>
          </h1>
          <p>{t.subtitle}</p>

          <div className="hero-buttons">
            <button className="btn-white">{t.businessBtn}</button>
            <button className="btn-white">{t.personalBtn}</button>
            <button className="btn-orange">{t.contactBtn}</button>
          </div>
        </div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.5
          }}
        >
          <img src={hero} alt="Legal Services Illustration" />
        </motion.div>
      </div>
    </section>
  )
}
