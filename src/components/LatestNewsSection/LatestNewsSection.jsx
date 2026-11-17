"use client";
import { useState } from "react";
import { translations, useLanguage } from "../../contexts/language";
import { notableCasesData } from "./notableCases";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import { Reveal } from "../Reveal";

export default function NotableCasesSection({ standalone = false }) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language];
  const [visibleCount, setVisibleCount] = useState(6);
  
  const notableCases = notableCasesData(language);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleCaseClick = (caseItem) => {
    navigate(`/news/${caseItem.slug}`);
  };

  const getTypeText = (type) => {
    switch(type) {
      case 'case': return language === 'en' ? 'Legal Case' : language === 'al' ? 'Rast Ligjor' : language === 'de' ? 'Rechtsfall' : 'Hukuki Dava';
      case 'media': return language === 'en' ? 'Media Commentary' : language === 'al' ? 'Koment Mediatik' : language === 'de' ? 'Medienkommentar' : 'Medya Yorumu';
      case 'legal': return language === 'en' ? 'Legal Analysis' : language === 'al' ? 'Analizë Ligjore' : language === 'de' ? 'Rechtsanalyse' : 'Hukuki Analiz';
      default: return type;
    }
  };

  const readMore = language === 'en' ? "Read more" : language === 'al' ? "Lexo më shumë" : language === 'de' ? "Mehr lesen" : "Devamını oku";
  const loadMore = language === 'en' ? "Load more cases" : language === 'al' ? "Ngarko më shumë raste" : language === 'de' ? "Weitere Fälle laden" : "Daha fazla dava yükle";
  const sourceLabel = language === 'en' ? "Source" : language === 'al' ? "Burimi" : language === 'de' ? "Quelle" : "Kaynak";
  const Heading = standalone ? 'h1' : 'h2';

  return (
    <section id="notable-cases" className={`section bg-surface ${standalone ? 'page-top' : ''}`}>
      <div className="container-page">
        <Reveal className="section-header">
          <Heading className="section-title">
            {t.notableCases?.title || (language === 'en' ? "Notable Cases & Media Commentary" : language === 'al' ? "Raste të Shquara & Komente Mediatike" : language === 'de' ? "Bemerkenswerte Fälle & Medienkommentare" : "Önemli Davalar ve Medya Yorumları")}
          </Heading>
          <div className="section-divider" />
          <p className="section-subtitle">
            {language === 'en' ? "High-profile legal cases and media appearances showcasing our attorneys' expertise and commitment to justice" : language === 'al' ? "Raste të njohura ligjore dhe paraqitje mediatike që tregojnë ekspertizën dhe përkushtimin e avokatëve tanë për drejtësi" : language === 'de' ? "Hochkarätige Rechtsfälle und Medienauftritte, die die Expertise und das Engagement unserer Anwälte für Gerechtigkeit zeigen" : "Avukatlarımızın uzmanlığını ve adalete bağlılığını sergileyen üst düzey hukuki davalar ve medya görünümleri"}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notableCases.slice(0, visibleCount).map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.06} className="h-full">
              <article
                role="link"
                tabIndex={0}
                onClick={() => handleCaseClick(item)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleCaseClick(item); }}
                className="card card-hover group flex h-full cursor-pointer flex-col overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm">
                      {getTypeText(item.type)}
                    </span>
                    <span className="rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-white">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between gap-3 text-xs font-medium text-gray-500">
                    <span className="truncate">{item.source}</span>
                    <span className="flex flex-shrink-0 items-center gap-1.5 text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                      {item.author}
                    </span>
                  </div>

                  <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-snug decoration-brand decoration-2 underline-offset-4 group-hover:underline">
                    {item.title}
                  </h3>

                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {item.content.split('\n')[0]}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="link-arrow">
                      {readMore}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>

                    {item.link && item.link !== '#' && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-medium text-gray-500 transition-colors hover:text-ink"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {sourceLabel}
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {visibleCount < notableCases.length && (
          <div className="mt-12 flex justify-center">
            <button onClick={handleSeeMore} className="btn btn-outline-dark">
              {loadMore}
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
