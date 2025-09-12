import { useState } from "react";
import { Search } from "lucide-react";
import image from "../../assets/image1.jpg";
import { translations, useLanguage } from "../../contexts/language";

export default function OurPeopleSection() {
  const [search, setSearch] = useState("");
  const { language } = useLanguage();
  const t = translations[language].peopleSection;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 bg-white">
      {/* Left Content */}
      <div className="order-2 md:order-1">
        <h2 className="text-[#1a3e6a] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          {t.title}
        </h2>
        <p className="text-gray-700 mb-3 md:mb-4 text-sm sm:text-base">
          {t.para1}
        </p>
        <p className="text-gray-700 mb-4 md:mb-6 text-sm sm:text-base">
          {t.para2}
        </p>
        
        {/* Search Bar (if needed) */}
        <div className="relative mb-6 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={t.searchPlaceholder || "Search our team"}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3e6a] focus:border-[#1a3e6a] text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <button className="bg-[#1a3e6a] hover:bg-[#2a4e7a] text-white px-5 py-2.5 md:px-6 md:py-3 rounded font-semibold text-sm md:text-base transition-colors duration-200">
          {t.button}
        </button>
      </div>

      {/* Right Content - Image */}
      <div className="flex justify-center items-center order-1 md:order-2">
        <img
          src={image}
          alt="Our people"
          className="rounded-xl shadow-lg w-full max-w-md md:max-w-full h-auto"
        />
      </div>
    </section>
  );
}
