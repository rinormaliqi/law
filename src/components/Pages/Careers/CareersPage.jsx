import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './careers.css';
import { translations, useLanguage } from '../../../contexts/language';

const MAX_CV_BYTES = 3 * 1024 * 1024; // keep in sync with api/careers.js
const ALLOWED_CV_EXTENSIONS = ['pdf', 'doc', 'docx'];

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  coverLetter: '',
  cv: null,
  company: '' // honeypot, hidden from real visitors
};

const readFileAsBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

export const Careers = () => {
  const { language } = useLanguage();
  const t = translations[language].careers;

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateCv = (file) => {
    if (!file) return t.fileType;
    const extension = file.name.split('.').pop().toLowerCase();
    if (!ALLOWED_CV_EXTENSIONS.includes(extension)) return t.fileType;
    if (file.size > MAX_CV_BYTES) return t.fileTooLarge;
    return '';
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    const problem = file ? validateCv(file) : '';
    if (problem) {
      e.target.value = '';
      setFormData(prev => ({ ...prev, cv: null }));
      setErrorMessage(problem);
      setStatus('error');
      return;
    }
    setFormData(prev => ({ ...prev, cv: file }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const problem = validateCv(formData.cv);
    if (problem) {
      setErrorMessage(problem);
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const { cv, ...fields } = formData;
      const content = await readFileAsBase64(cv);
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, language, cv: { name: cv.name, content } })
      });

      if (!response.ok) {
        const { error } = await response.json().catch(() => ({}));
        setErrorMessage(
          error === 'file_too_large' ? t.fileTooLarge :
          error === 'invalid_file' ? t.fileType :
          t.submissionError
        );
        setStatus('error');
        return;
      }

      setFormData(EMPTY_FORM);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrorMessage(t.submissionError);
      setStatus('error');
    }
  };

  const availablePositions = [
    { id: 'lawyer', name: t.positions.lawyer },
    { id: 'paralegal', name: t.positions.paralegal },
    { id: 'legal-assistant', name: t.positions.legalAssistant },
    { id: 'intern', name: t.positions.intern },
    { id: 'administrative', name: t.positions.administrative }
  ];

  return (
    <section className="careers page-top section">
      <div className="container-page">
        {/* Hero Section */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="section-title">{t.title}</h1>
          <div className="section-divider" />
          <p className="section-subtitle">{t.subtitle}</p>
        </motion.div>

        <div className="careers-content">
          {/* Why Join Us Section */}
          <motion.div 
            className="why-join-us"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="application-form" style={{ position: 'relative' }}>
              <h2>{t.formTitle}</h2>

              {/* Honeypot field for bots – hidden from people and screen readers */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                <label htmlFor="careers-company">Company</label>
                <input type="text" id="careers-company" name="company" tabIndex={-1} autoComplete="off" value={formData.company} onChange={handleInputChange} />
              </div>
              
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
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  required
                />
                <small>{t.form.fileTypes}</small>
              </div>

              <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                {status === 'sending' ? t.sending : t.form.submit}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="form-status form-status--success">{t.submissionSuccess}</p>
                )}
                {status === 'error' && (
                  <p className="form-status form-status--error">{errorMessage}</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};