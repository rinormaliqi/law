"use client";
import { useNavigate } from "react-router-dom";
import { translations, useLanguage } from "../../contexts/language";

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language].services; // ✅ services translations
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: t.areas.corporate.title,
      description: t.areas.corporate.description,
      content: t.areas.corporate.content,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: t.areas.commercial.title,
      description: t.areas.commercial.description,
      content: t.areas.commercial.content,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: t.areas.property.title,
      description: t.areas.property.description,
      content: t.areas.property.content,
      image:
        "https://media.istockphoto.com/id/1437629749/photo/land-plot-in-aerial-view-in-chiang-mai-of-thailand.jpg?s=612x612&w=0&k=20&c=07y-L9_WJwFGmvvhrZULYbfTfDtUPHnxJhbxWPTiqYg=",
    },
    {
      id: 4,
      title: t.areas.employment.title,
      description: t.areas.employment.description,
      content: t.areas.employment.content,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      title: t.areas.dispute.title,
      description: t.areas.dispute.description,
      content: t.areas.dispute.content,
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      title: t.areas.charities.title,
      description: t.areas.charities.description,
      content: t.areas.charities.content,
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const handleCardClick = (service) => {
    navigate(`/services/${service.id}`, { state: service });
  };

  return (
    <section className="bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3e6a] mb-6 md:mb-10 text-center">
        {t.title} {/* ✅ translated section title */}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service)}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 md:p-5">
              <h3 className="text-lg md:text-xl font-semibold text-[#1a3e6a] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
              <button className="mt-3 text-[#1a3e6a] font-medium text-sm md:text-base hover:underline flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}