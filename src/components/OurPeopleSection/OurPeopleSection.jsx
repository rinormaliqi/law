import { useState } from "react";
import { Search } from "lucide-react";
import image from "../../assets/image1.jpg";
import { translations, useLanguage } from "../../contexts/language";

export default function OurPeopleSection() {
  const [search, setSearch] = useState("");
  const { language } = useLanguage();
  const t = translations[language].peopleSection;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-16 bg-white">
      {/* Left Content */}
      <div>
        <h2 className="text-[#1a3e6a] text-5xl font-bold mb-6">{t.title}</h2>
        <p className="text-gray-700 mb-4">{t.para1}</p>
        <p className="text-gray-700 mb-6">{t.para2}</p>
        <button className="bg-[#1a3e6a] text-white px-6 py-3 rounded font-semibold mb-6">
          {t.button}
        </button>
      </div>

      {/* Right Content - Image */}
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="Our people"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
