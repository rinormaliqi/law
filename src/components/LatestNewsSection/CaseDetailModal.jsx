// components/CaseDetailModal.jsx
import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  ExternalLink, 
  Share2, 
  Clock,
  Tag
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const CaseDetailModal = ({ caseItem, onClose, language }) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleShare = async () => {
    const url = window.location.href + `#case-${caseItem.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
      case 'case': 
        return language === 'en' ? 'Legal Case' :
               language === 'al' ? 'Rast Ligjor' :
               language === 'de' ? 'Rechtsfall' :
               'Hukuki Dava';
      case 'media': 
        return language === 'en' ? 'Media Commentary' :
               language === 'al' ? 'Koment Mediatik' :
               language === 'de' ? 'Medienkommentar' :
               'Medya Yorumu';
      case 'legal': 
        return language === 'en' ? 'Legal Analysis' :
               language === 'al' ? 'Analizë Ligjore' :
               language === 'de' ? 'Rechtsanalyse' :
               'Hukuki Analiz';
      default: return type;
    }
  };

  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
      const handleContactAreaNavigation = () => {
    // If we're on the home page, scroll to services
    if (window.location.pathname === '/') {
      const servicesSection = document.getElementById('contact');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate('/#contact');
    }
            onClose();

  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-start justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm overflow-y-auto"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 relative">
        {/* Close Button - Top Right */}
        {/* <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button> */}

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 rounded-t-2xl sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {language === 'en' ? "Case Details" :
               language === 'al' ? "Detajet e Rastit" :
               language === 'de' ? "Falldetails" :
               "Dava Detayları"}
            </h2>
            <p className="text-sm text-gray-600">{caseItem.source} • {caseItem.year}</p>
          </div>
          
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-[#FFD700] text-gray-700 hover:text-gray-900 rounded-lg transition-all duration-200 font-medium"
          >
            <Share2 className="w-4 h-4" />
            <span>{copied ? 
              (language === 'en' ? "Copied!" :
               language === 'al' ? "Kopjuar!" :
               language === 'de' ? "Kopiert!" :
               "Kopyalandı!") : 
              (language === 'en' ? "Share" :
               language === 'al' ? "Ndaj" :
               language === 'de' ? "Teilen" :
               "Paylaş")}
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[80vh] overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Featured Image */}
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getTypeColor(caseItem.type)}`}>
                  {getTypeText(caseItem.type)}
                </span>
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
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
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {caseItem.title}
            </h1>

            {/* Source Link */}
            {caseItem.link && caseItem.link !== '#' && (
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-800 font-medium text-sm">
                      {language === 'en' ? "Original Source:" :
                       language === 'al' ? "Burimi Origjinal:" :
                       language === 'de' ? "Originalquelle:" :
                       "Orijinal Kaynak:"}
                    </p>
                    <p className="text-blue-600 text-sm truncate"></p>
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

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                {caseItem.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              {caseItem.tags && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {caseItem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Key Takeaways */}
              <div className="mt-8 p-6 bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Tag className="w-5 h-5 text-[#FFD700]" />
                  <span>
                    {language === 'en' ? "Key Legal Implications" :
                     language === 'al' ? "Implikimet Kryesore Ligjore" :
                     language === 'de' ? "Wichtige rechtliche Auswirkungen" :
                     "Önemli Hukuki Çıkarımlar"}
                  </span>
                </h3>
                <ul className="space-y-3 text-gray-700">
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

              {/* Attorney Profile */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? "About the Attorney" :
                   language === 'al' ? "Rreth Avokatit" :
                   language === 'de' ? "Über den Anwalt" :
                   "Avukat Hakkında"}
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{caseItem.author}</h4>
                    <p className="text-gray-600 mt-1">
                      {caseItem.author === "Asdren Bytyqi" ? 
                        (language === 'en' ? "Managing Partner, Constitutional Law Expert" :
                         language === 'al' ? "Partner Drejtues, Ekspert i Ligjit Kushtetues" :
                         language === 'de' ? "Geschäftsführender Partner, Verfassungsrechtsexperte" :
                         "Yönetici Ortak, Anayasa Hukuku Uzmanı") :
                        (language === 'en' ? "Senior Partner, Criminal Law Specialist" :
                         language === 'al' ? "Partnere Senior, Specialist e së Drejtës Penale" :
                         language === 'de' ? "Senior Partnerin, Strafrechtsspezialistin" :
                         "Kıdemli Ortak, Ceza Hukuku Uzmanı")
                      }
                    </p>
                    <p className="text-gray-700 mt-2 text-sm">
                      {caseItem.author === "Asdren Bytyqi" ? 
                        (language === 'en' ? "Specializes in constitutional law, human rights, and public advocacy with extensive experience in high-profile cases." :
                         language === 'al' ? "Specializohet në ligjin kushtetues, të drejtat e njeriut dhe avokimin publik me përvojë të gjerë në raste me profil të lartë." :
                         language === 'de' ? "Spezialisiert auf Verfassungsrecht, Menschenrechte und öffentliche Advocacy mit umfangreicher Erfahrung in hochkarätigen Fällen." :
                         "Anayasa hukuku, insan hakları ve kamu savunuculuğu konularında uzmanlaşmış, üst düzey davalarda geniş deneyime sahiptir.") :
                        (language === 'en' ? "Expert in criminal law, gender-based violence cases, and international war crimes proceedings with decades of experience." :
                         language === 'al' ? "Eksperte në ligjin penal, rastet e dhunës bazuar në gjini dhe procedurat ndërkombëtare për krime lufte me dekada përvoje." :
                         language === 'de' ? "Expertin für Strafrecht, geschlechtsspezifische Gewaltfälle und internationale Kriegsverbrechenverfahren mit jahrzehntelanger Erfahrung." :
                         "Ceza hukuku, toplumsal cinsiyete dayalı şiddet davaları ve uluslararası savaş suçları davalarında on yılların deneyimine sahip uzman.")
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors duration-200"
            >
              {language === 'en' ? "Close" :
               language === 'al' ? "Mbyll" :
               language === 'de' ? "Schließen" :
               "Kapat"}
            </button>
            
            <button
              onClick={handleContactAreaNavigation}
              className="w-full sm:w-auto px-6 py-3 bg-[#FFD700] hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-colors duration-200"
            >
              {language === 'en' ? "Schedule Consultation" :
               language === 'al' ? "Cakto Konsultim" :
               language === 'de' ? "Beratungstermin Vereinbaren" :
               "Danışma Randevusu Alın"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};