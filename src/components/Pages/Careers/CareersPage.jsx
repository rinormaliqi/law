import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './careers.css';
import { translations, useLanguage } from '../../../contexts/language';

export const Careers = () => {
  const { language } = useLanguage();
  const t = translations[language].careers;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    cv: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      cv: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
    alert(t.submissionSuccess);
  };

  const availablePositions = [
    { id: 'lawyer', name: t.positions.lawyer },
    { id: 'paralegal', name: t.positions.paralegal },
    { id: 'legal-assistant', name: t.positions.legalAssistant },
    { id: 'intern', name: t.positions.intern },
    { id: 'administrative', name: t.positions.administrative }
  ];

  return (
    <section className="careers">
      <div className="careers-container">
        {/* Hero Section */}
        <motion.div 
          className="careers-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </motion.div>

        <div className="careers-content">
          {/* Why Join Us Section */}
          <motion.div 
            className="why-join-us"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>{t.whyJoin.title}</h2>
            <div className="benefits-grid">
              {t.whyJoin.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">✓</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div 
            className="application-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="application-form">
              <h2>{t.formTitle}</h2>
              
              <div className="form-group">
                <label htmlFor="fullName">{t.form.fullName} *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t.form.email} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t.form.phone} *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="position">{t.form.position} *</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">{t.form.selectPosition}</option>
                    {availablePositions.map(pos => (
                      <option key={pos.id} value={pos.id}>
                        {pos.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">{t.form.experience} *</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">{t.form.selectExperience}</option>
                    <option value="0-2">0-2 {t.form.years}</option>
                    <option value="3-5">3-5 {t.form.years}</option>
                    <option value="5-10">5-10 {t.form.years}</option>
                    <option value="10+">10+ {t.form.years}</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter">{t.form.coverLetter} *</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder={t.form.coverLetterPlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cv">{t.form.cv} *</label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
                <small>{t.form.fileTypes}</small>
              </div>

              <button type="submit" className="btn-submit">
                {t.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};