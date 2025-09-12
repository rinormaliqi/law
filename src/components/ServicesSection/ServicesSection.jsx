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
    <section className="bg-white py-12 px-6 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a3e6a] mb-10">
        {t.title} {/* ✅ translated section title */}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service)}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#1a3e6a] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

