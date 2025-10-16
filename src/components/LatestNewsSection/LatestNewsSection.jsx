"use client";
import { useState } from "react";
import { translations, useLanguage } from "../../contexts/language";
import { notableCasesData } from "./notableCases";
import { useNavigate } from "react-router-dom";

export default function NotableCasesSection() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language];
  const [visibleCount, setVisibleCount] = useState(6);
  
  const notableCases = notableCasesData(language);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleCaseClick = (caseItem) => {
    navigate(`/news/${caseItem.slug}`);
  };

  const getTypeBadgeColor = (type) => {
    switch(type) {
      case 'case': return 'bg-red-100 text-red-800';
      case 'media': return 'bg-blue-100 text-blue-800';
      case 'legal': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
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
    <section id="notable-cases" className="px-4 sm:px-6 md:px-8 py-10 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.notableCases?.title || (language === 'en' ? "Notable Cases & Media Commentary" : language === 'al' ? "Raste të Shquara & Komente Mediatike" : language === 'de' ? "Bemerkenswerte Fälle & Medienkommentare" : "Önemli Davalar ve Medya Yorumları")}
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {language === 'en' ? "High-profile legal cases and media appearances showcasing our attorneys' expertise and commitment to justice" : language === 'al' ? "Raste të njohura ligjore dhe paraqitje mediatike që tregojnë ekspertizën dhe përkushtimin e avokatëve tanë për drejtësi" : language === 'de' ? "Hochkarätige Rechtsfälle und Medienauftritte, die die Expertise und das Engagement unserer Anwälte für Gerechtigkeit zeigen" : "Avukatlarımızın uzmanlığını ve adalete bağlılığını sergileyen üst düzey hukuki davalar ve medya görünümleri"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {notableCases.slice(0, visibleCount).map((item) => (
            <div 
              key={item.id} 
              onClick={() => handleCaseClick(item)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden group"
            >
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeBadgeColor(item.type)}`}>
                    {getTypeText(item.type)}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-white">
                    {item.year}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-500 text-sm font-medium">{item.source}</span>
                  <span className="text-[#FFD700] font-semibold text-sm">{item.author}</span>
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-[#FFD700] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {item.content.split('\n')[0]}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-[#FFD700] font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-1 text-sm">
                    <span>
                      {language === 'en' ? "Read more" : language === 'al' ? "Lexo më shumë" : language === 'de' ? "Mehr lesen" : "Devamını oku"}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  
                  {item.link && item.link !== '#' && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 text-xs flex items-center space-x-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Source</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-[#FFD700] to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {visibleCount < notableCases.length && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={handleSeeMore}
              className="px-8 py-3 bg-[#FFD700] hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>
                {language === 'en' ? "Load More Cases" : language === 'al' ? "Ngarko Më Shumë Raste" : language === 'de' ? "Weitere Fälle Laden" : "Daha Fazla Dava Yükle"}
              </span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}