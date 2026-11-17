"use client";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/language";
import { notableCasesData } from "./notableCases";
import { Calendar, User, ExternalLink, Clock, Tag, ArrowLeft } from "lucide-react";
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
            className="btn btn-primary"
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

  const getTypeText = (type) => {
    switch(type) {
      case 'case': return language === 'en' ? 'Legal Case' : language === 'al' ? 'Rast Ligjor' : language === 'de' ? 'Rechtsfall' : 'Hukuki Dava';
      case 'media': return language === 'en' ? 'Media Commentary' : language === 'al' ? 'Koment Mediatik' : language === 'de' ? 'Medienkommentar' : 'Medya Yorumu';
      case 'legal': return language === 'en' ? 'Legal Analysis' : language === 'al' ? 'Analizë Ligjore' : language === 'de' ? 'Rechtsanalyse' : 'Hukuki Analiz';
      default: return type;
    }
  };

  return (
    <div className="page-top section bg-surface">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/news')}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>
            {language === 'en' ? "Back to News" : 
             language === 'al' ? "Kthehu te Lajmet" : 
             language === 'de' ? "Zurück zu Nachrichten" : 
             "Haberler'e Dön"}
          </span>
        </button>

        {/* Article Header */}
        <div className="card mb-8 overflow-hidden">
          <div className="relative aspect-[16/9] max-h-[420px] w-full bg-gray-100">
            <img 
              src={caseItem.image} 
              alt={caseItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold text-ink shadow-sm">
                {getTypeText(caseItem.type)}
              </span>
              <span className="rounded-full bg-ink/90 px-4 py-1.5 text-sm font-semibold text-white">
                {caseItem.year}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-10">
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
            <h1 className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl">
              {caseItem.title}
            </h1>

            {/* Source Link */}
            {caseItem.link && caseItem.link !== '#' && (
              <div className="rounded-xl bg-surface p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                      {language === 'en' ? "Original Source:" : 
                       language === 'al' ? "Burimi Origjinal:" : 
                       language === 'de' ? "Originalquelle:" : 
                       "Orijinal Kaynak:"}
                    </p>
                    <p className="mt-0.5 font-semibold text-ink">{caseItem.source}</p>
                  </div>
                  <a 
                    href={caseItem.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-dark py-2.5"
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
        <div className="card mb-8 p-6 md:p-10">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
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
                      className="pill px-4 py-1.5 text-sm"
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
        <div className="mb-8 rounded-2xl bg-brand-soft p-6 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <Tag className="h-6 w-6 text-ink" aria-hidden="true" />
            <span>
              {language === 'en' ? "Key Legal Implications" : 
               language === 'al' ? "Implikimet Kryesore Ligjore" : 
               language === 'de' ? "Wichtige rechtliche Auswirkungen" : 
               "Önemli Hukuki Çıkarımlar"}
            </span>
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0"></div>
              <span>
                {language === 'en' ? "Sets important legal precedent in Kosovo jurisprudence" : 
                 language === 'al' ? "Vendos precedent të rëndësishëm ligjor në jurisprudencën e Kosovës" : 
                 language === 'de' ? "Setzt einen wichtigen rechtlichen Präzedenzfall in der kosovarischen Rechtsprechung" : 
                 "Kosova içtihat hukukunda önemli yasal emsal oluşturur"}
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0"></div>
              <span>
                {language === 'en' ? "Demonstrates commitment to constitutional principles and human rights" : 
                 language === 'al' ? "Tregon përkushtim ndaj parimeve kushtetuese dhe të drejtave të njeriut" : 
                 language === 'de' ? "Zeigt Engagement für verfassungsrechtliche Grundsätze und Menschenrechte" : 
                 "Anayasal ilkelere ve insan haklarına bağlılık gösterir"}
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0"></div>
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
        <div className="rounded-2xl bg-ink p-8 text-center md:p-12">
          <h3 className="mb-3 text-2xl font-bold text-white">
            {language === 'en' ? "Need Legal Assistance?" : 
             language === 'al' ? "Keni nevojë për Asistencë Ligjore?" : 
             language === 'de' ? "Benötigen Sie rechtliche Unterstützung?" : 
             "Hukuki Yardıma mı İhtiyacınız Var?"}
          </h3>
          <p className="mx-auto mb-7 max-w-xl text-lg text-gray-400">
            {language === 'en' ? "Our experienced attorneys are ready to help you with your legal matters." : 
             language === 'al' ? "Avokatët tanë me përvojë janë gati t'ju ndihmojnë me çështjet tuaja ligjore." : 
             language === 'de' ? "Unsere erfahrenen Anwälte sind bereit, Ihnen bei Ihren rechtlichen Angelegenheiten zu helfen." : 
             "Deneyimli avukatlarımız hukuki konularınızda size yardımcı olmaya hazır."}
          </p>
          <button 
            onClick={() => navigate('/#contact')}
            className="btn btn-primary"
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