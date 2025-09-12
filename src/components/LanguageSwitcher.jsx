import { useState } from "react";
import { useLanguage } from "../contexts/language";
import { ChevronDown } from "lucide-react";

// You'll need to create or import these flag icons
// For now, I'll use text placeholders
const FlagEnIcon = () => <span className="text-sm">🇺🇸</span>;
const FlagAlIcon = () => <span className="text-sm">🇦🇱</span>;
const FlagDeIcon = () => <span className="text-sm">🇩🇪</span>;

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', icon: <FlagEnIcon /> },
    { code: 'al', name: 'Albanian', icon: <FlagAlIcon /> },
    { code: 'de', name: 'German', icon: <FlagDeIcon /> },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Select Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <div className="flex items-center">
          {currentLanguage?.icon}
          <span className="ml-2 text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        </div>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  language === lang.code 
                    ? 'bg-blue-100 text-blue-900' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                role="menuitem"
              >
                {lang.icon}
                <span className="ml-2">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};