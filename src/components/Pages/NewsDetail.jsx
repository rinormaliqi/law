"use client";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, useLanguage } from "../../contexts/language";
import { Calendar, User, ArrowLeft, ExternalLink, Share2, Clock, Tag } from "lucide-react";
import { useState } from "react";

export default function NewsDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!state) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'en' ? "Article Not Found" :
               language === 'al' ? "Artikulli nuk u Gjet" :
               language === 'de' ? "Artikel nicht gefunden" :
               "Makale Bulunamadı"}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'en' ? "The article you're looking for doesn't exist or may have been moved." :
               language === 'al' ? "Artikulli që po kërkoni nuk ekziston ose mund të jetë zhvendosur." :
               language === 'de' ? "Der gesuchte Artikel existiert nicht oder wurde möglicherweise verschoben." :
               "Aradığınız makale mevcut değil veya taşınmış olabilir."}
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full bg-[#FFD700] hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {language === 'en' ? "Back to Home" :
                 language === 'al' ? "Kthehu në Faqen Kryesore" :
                 language === 'de' ? "Zurück zur Startseite" :
                 "Ana Sayfaya Dön"}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
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

  const formatDate = (year) => {
    return year || "2024";
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#FFD700] transition-colors duration-200 font-semibold group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>
                {language === 'en' ? "Back to Cases" :
                 language === 'al' ? "Kthehu te Rastet" :
                 language === 'de' ? "Zurück zu Fällen" :
                 "Davalar'a Dön"}
              </span>
            </button>
            
            <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Featured Image */}
          <div className="relative h-80 sm:h-96 lg:h-[500px] overflow-hidden">
            <img
              src={state.image}
              alt={state.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Badges */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getTypeColor(state.type)}`}>
                {getTypeText(state.type)}
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-900 text-white border border-gray-700">
                {state.source}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="font-medium">{state.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(state.year)}</span>
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {state.title}
            </h1>

            {/* Source Link */}
            {state.link && state.link !== '#' && (
              <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-800 font-medium text-sm">
                      {language === 'en' ? "Original Source:" :
                       language === 'al' ? "Burimi Origjinal:" :
                       language === 'de' ? "Originalquelle:" :
                       "Orijinal Kaynak:"}
                    </p>
                    <p className="text-blue-600 text-sm truncate">{state.link}</p>
                  </div>
                  <a
                    href={state.link}
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
              <div className="text-gray-700 leading-relaxed text-lg space-y-6">
                {state.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="mt-12 p-6 bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/20">
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
              <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
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
                    <h4 className="text-lg font-semibold text-gray-900">{state.author}</h4>
                    <p className="text-gray-600 mt-1">
                      {state.author === "Asdren Bytyqi" ? 
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
                      {state.author === "Asdren Bytyqi" ? 
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

            {/* Action Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/")}
                className="flex-1 bg-[#FFD700] hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>
                  {language === 'en' ? "View More Cases" :
                   language === 'al' ? "Shiko Më Shumë Raste" :
                   language === 'de' ? "Weitere Fälle Ansehen" :
                   "Daha Fazla Dava Görüntüle"}
                </span>
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="flex-1 border-2 border-[#FFD700] hover:bg-[#FFD700] text-gray-700 hover:text-gray-900 font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>
                  {language === 'en' ? "Consult Our Team" :
                   language === 'al' ? "Konsultohu me Ekipin Tonë" :
                   language === 'de' ? "Unser Team Konsultieren" :
                   "Ekibimizle Görüşün"}
                </span>
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* Footer CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? "Need Legal Assistance?" :
             language === 'al' ? "Keni nevojë për asistencë ligjore?" :
             language === 'de' ? "Benötigen Sie rechtliche Unterstützung?" :
             "Hukuki Yardıma mı İhtiyacınız Var?"}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {language === 'en' ? "Our experienced attorneys are ready to provide expert legal guidance for your specific situation." :
             language === 'al' ? "Avokatët tanë me përvojë janë gati të ofrojnë udhëzime ligjore eksperte për situatën tuaj specifike." :
             language === 'de' ? "Unsere erfahrenen Anwälte sind bereit, Ihnen eine fachkundige rechtliche Beratung für Ihre spezifische Situation zu bieten." :
             "Deneyimli avukatlarımız, özel durumunuz için uzman hukuki rehberlik sağlamaya hazırdır."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FFD700] hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              {language === 'en' ? "Schedule Consultation" :
               language === 'al' ? "Programoni Konsultim" :
               language === 'de' ? "Beratungstermin Vereinbaren" :
               "Danışma Randevusu Alın"}
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              {language === 'en' ? "Call +383 (44) 123-123" :
               language === 'al' ? "Telefoni +383 (44) 123-123" :
               language === 'de' ? "Anrufen +383 (44) 123-123" :
               "Ara +383 (44) 123-123"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}