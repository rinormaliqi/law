// components/PracticeAreaCard.js
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const PracticeAreaCard = ({ 
  areaKey, 
  areaName, 
  description, 
  fullDescription, 
  icon, 
  learnMoreText 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:transform hover:-translate-y-1">
      {/* Card Header */}
      <div className="p-6 md:p-8">
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex-shrink-0 bg-gray-900 p-3 rounded-lg group-hover:bg-[#FFD700] group-hover:text-gray-900 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FFD700] transition-colors duration-300">
            {areaName}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Expandable Content */}
        {isExpanded && fullDescription && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-700 text-sm leading-relaxed">
              {fullDescription}
            </p>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={toggleExpand}
          className="flex items-center space-x-2 text-[#FFD700] hover:text-yellow-600 font-semibold transition-colors duration-200 mt-2"
        >
          <span>{isExpanded ? "Show Less" : learnMoreText}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Hover Effect Border */}
      <div className="h-1 bg-gradient-to-r from-[#FFD700] to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};