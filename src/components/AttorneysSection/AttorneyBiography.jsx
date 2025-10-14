import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "../../contexts/language";
import { ArrowLeft, Mail, Phone, Calendar, Globe, Award, GraduationCap, FileText } from "lucide-react";

import asdrenImage from "../../assets/profile.jpg";
import fehmijeImage from "../../assets/femije.jpg";

export const AttorneyBiography = () => {
  const { attorneyId } = useParams();
  const { t, language } = useTranslation();
  const navigate = useNavigate();

  const attorneyKey = attorneyId === "asdren-bytyqi" ? "asdren" : "fehmije";
  const attorneyData = t(`attorneys.${attorneyKey}`) || {};
  const biographyTexts = t('biography') || {};

  // Safe attorney object with fallbacks
  const attorney = {
    name: attorneyData.name || 'Attorney Name',
    title: attorneyData.title || 'Attorney Title',
    bio: attorneyData.bio || 'Biography loading...',
    education: attorneyData.education || 'Education information',
    experience: attorneyData.experience || 'Experience',
    specialties: attorneyData.specialties || [],
    languages: attorneyData.languages || [],
    contact: attorneyData.contact || { email: '', phone: '' },
    achievements: attorneyData.achievements || [],
    image: attorneyKey === "asdren" ? asdrenImage : fehmijeImage
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Back button */}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start p-8 space-y-6 md:space-y-0 md:space-x-10">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#FFD700] overflow-hidden bg-gray-300">
              <img
                src={attorney.image}
                alt={attorney.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{attorney.name}</h1>
              
              <p className="text-gray-700 text-lg mb-3">{attorney.title}</p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[#FFD700]" />
                  <span>{attorney.experience}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-[#FFD700]" />
                  <span>{attorney.languages.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'en' && (biographyTexts.biography || 'Biography')}
{language === 'al' && (biographyTexts.biography || 'Biografia')}
{language === 'de' && (biographyTexts.biography || 'Biografie')}
{language === 'tr' && (biographyTexts.biography || 'Biyografi')}
</h2>
                <p className="text-gray-700 leading-relaxed">{attorney.bio}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{language === 'en' && (biographyTexts.professionalAchievements || 'Professional Achievements')}
{language === 'al' && (biographyTexts.professionalAchievements || 'Arritje Profesionale')}
{language === 'de' && (biographyTexts.professionalAchievements || 'Berufliche Erfolge')}
{language === 'tr' && (biographyTexts.professionalAchievements || 'Profesyonel Başarılar')}
</h3>
                <ul className="space-y-2">
                  {attorney.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Award className="w-5 h-5 text-[#FFD700] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact */}
              <div className="bg-gray-50 rounded-lg p-5 space-y-3">
                <h3 className="font-semibold text-gray-900">{language === 'en' && (biographyTexts.contact || 'Contact')}
{language === 'al' && (biographyTexts.contact || 'Kontakt')}
{language === 'de' && (biographyTexts.contact || 'Kontakt')}
{language === 'tr' && (biographyTexts.contact || 'İletişim')}
</h3>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Mail className="w-5 h-5 text-[#FFD700]" />
                  <span>{attorney.contact.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone className="w-5 h-5 text-[#FFD700]" />
                  <span>{attorney.contact.phone}</span>
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{language === 'en' && (biographyTexts.specialties || 'Specialties')}
{language === 'al' && (biographyTexts.specialties || 'Specializime')}
{language === 'de' && (biographyTexts.specialties || 'Fachgebiete')}
{language === 'tr' && (biographyTexts.specialties || 'Uzmanlık Alanları')}
</h3>
                <div className="flex flex-wrap gap-2">
                  {attorney.specialties.map((spec, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-sm font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{language === 'en' && (biographyTexts.educationBar || 'Education & Bar')}
{language === 'al' && (biographyTexts.educationBar || 'Arsimi & Jurispodenca')}
{language === 'de' && (biographyTexts.educationBar || 'Ausbildung & Anwaltskammer')}
{language === 'tr' && (biographyTexts.educationBar || 'Eğitim & Baro')}
</h3>
                <div className="flex flex-col gap-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-[#FFD700]" />
                    <span>{attorney.education}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-[#FFD700]" />
                    <span>{language === 'en' && (biographyTexts.kosovoBar || 'Kosovo Bar Association')}
{language === 'al' && (biographyTexts.kosovoBar || 'Oda e Avokatëve të Kosovës')}
{language === 'de' && (biographyTexts.kosovoBar || 'Anwaltskammer des Kosovo')}
{language === 'tr' && (biographyTexts.kosovoBar || 'Kosova Barosu')}
</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};