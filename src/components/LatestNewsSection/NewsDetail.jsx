"use client";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/language";
import { notableCasesData } from "./notableCases";
import { Calendar, User, ExternalLink, Share2, Clock, Tag, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function CaseDetailPage() {
  const { caseSlug } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [caseItem, setCaseItem] = useState(null);

  useEffect(() => {
    const cases = notableCasesData(language);
    const foundCase = cases.find(c => c.slug === caseSlug);
    setCaseItem(foundCase);
  }, [caseSlug, language]);

  if (!caseItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'en' ? "Case not found" : 
             language === 'al' ? "Rasti nuk u gjet" : 
             language === 'de' ? "Fall nicht gefunden" : 
             "Dava bulunamadı"}
          </h1>
          <button 
            onClick={() => navigate('/news')}
            className="px-6 py-3 bg-[#FFD700] hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-colors"
          >
            {language === 'en' ? "Back to News" : 
             language === 'al' ? "Kthehu te Lajmet" : 
             language === 'de' ? "Zurück zu Nachrichten" : 
             "Haberler'e Dön"}
          </button>
        </div>
      </div>
    );
  }

  const getTypeColor = (type) => {
    switch(type) {
      case 'case': return 'bg-red-100 text-red-800 border-red-200';
      case 'media': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'legal': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeText = (type) => {
    switch(type) {
      case 'case': return language === 'en' ? 'Legal Case' : language === 'al' ? 'Rast Ligjor' : language === 'de' ? 'Rechtsfall' : 'Hukuki Dava';
      case 'media': return language === 'en' ? 'Media Commentary' : language === 'al' ? 'Koment Mediatik' : language === 'de' ? 'Medienkommentar' : 'Medya Yorumu';
      case 'legal': return language === 'en' ? 'Legal Analysis' : language === 'al' ? 'Analizë Ligjore' : language === 'de' ? 'Rechtsanalyse' : 'Hukuki Analiz';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/news')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>
            {language === 'en' ? "Back to News" : 
             language === 'al' ? "Kthehu te Lajmet" : 
             language === 'de' ? "Zurück zu Nachrichten" : 
             "Haberler'e Dön"}
          </span>
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <img 
              src={caseItem.image} 
              alt={caseItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getTypeColor(caseItem.type)}`}>
                {getTypeText(caseItem.type)}
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-800 text-white">
                {caseItem.year}
              </span>
            </div>
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="font-medium">{caseItem.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{caseItem.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>
                  {language === 'en' ? "5 min read" : 
                   language === 'al' ? "5 min lexim" : 
                   language === 'de' ? "5 Min. Lesezeit" : 
                   "5 dk okuma"}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              {caseItem.title}
            </h1>

            {/* Source Link */}
            {caseItem.link && caseItem.link !== '#' && (
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-800 font-medium text-sm">
                      {language === 'en' ? "Original Source:" : 
                       language === 'al' ? "Burimi Origjinal:" : 
                       language === 'de' ? "Originalquelle:" : 
                       "Orijinal Kaynak:"}
                    </p>
                    <p className="text-blue-600 text-sm">{caseItem.source}</p>
                  </div>
                  <a 
                    href={caseItem.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <span>
                      {language === 'en' ? "Visit" : 
                       language === 'al' ? "Vizito" : 
                       language === 'de' ? "Besuchen" : 
                       "Ziyaret Et"}
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg space-y-6">
              {caseItem.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            {caseItem.tags && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'en' ? "Related Topics:" : 
                   language === 'al' ? "Tema të Ngjashme:" : 
                   language === 'de' ? "Verwandte Themen:" : 
                   "İlgili Konular:"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-[#FFD700]/10 rounded-2xl border border-[#FFD700]/20 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <Tag className="w-6 h-6 text-[#FFD700]" />
            <span>
              {language === 'en' ? "Key Legal Implications" : 
               language === 'al' ? "Implikimet Kryesore Ligjore" : 
               language === 'de' ? "Wichtige rechtliche Auswirkungen" : 
               "Önemli Hukuki Çıkarımlar"}
            </span>
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
              <span>
                {language === 'en' ? "Sets important legal precedent in Kosovo jurisprudence" : 
                 language === 'al' ? "Vendos precedent të rëndësishëm ligjor në jurisprudencën e Kosovës" : 
                 language === 'de' ? "Setzt einen wichtigen rechtlichen Präzedenzfall in der kosovarischen Rechtsprechung" : 
                 "Kosova içtihat hukukunda önemli yasal emsal oluşturur"}
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
              <span>
                {language === 'en' ? "Demonstrates commitment to constitutional principles and human rights" : 
                 language === 'al' ? "Tregon përkushtim ndaj parimeve kushtetuese dhe të drejtave të njeriut" : 
                 language === 'de' ? "Zeigt Engagement für verfassungsrechtliche Grundsätze und Menschenrechte" : 
                 "Anayasal ilkelere ve insan haklarına bağlılık gösterir"}
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
              <span>
                {language === 'en' ? "Highlights the firm's expertise in complex legal matters" : 
                 language === 'al' ? "Nënvizon ekspertizën e firmës në çështje komplekse ligjore" : 
                 language === 'de' ? "Unterstreicht die Expertise der Kanzlei in komplexen Rechtsangelegenheiten" : 
                 "Firmanın karmaşık hukuki konulardaki uzmanlığını vurgular"}
              </span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#FFD700] to-yellow-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'en' ? "Need Legal Assistance?" : 
             language === 'al' ? "Keni nevojë për Asistencë Ligjore?" : 
             language === 'de' ? "Benötigen Sie rechtliche Unterstützung?" : 
             "Hukuki Yardıma mı İhtiyacınız Var?"}
          </h3>
          <p className="text-gray-800 mb-6 text-lg">
            {language === 'en' ? "Our experienced attorneys are ready to help you with your legal matters." : 
             language === 'al' ? "Avokatët tanë me përvojë janë gati t'ju ndihmojnë me çështjet tuaja ligjore." : 
             language === 'de' ? "Unsere erfahrenen Anwälte sind bereit, Ihnen bei Ihren rechtlichen Angelegenheiten zu helfen." : 
             "Deneyimli avukatlarımız hukuki konularınızda size yardımcı olmaya hazır."}
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-gray-900 hover:bg-black text-white font-semibold rounded-lg transition-colors duration-200"
          >
            {language === 'en' ? "Schedule Consultation" : 
             language === 'al' ? "Cakto Konsultim" : 
             language === 'de' ? "Beratungstermin Vereinbaren" : 
             "Danışma Randevusu Alın"}
          </button>
        </div>
      </div>
    </div>
  );
}