// components/PracticeAreaCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

export const PracticeAreaCard = ({
  areaKey,
  areaName,
  description,
  learnMore,
  icon,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/practice-areas/${areaKey}`);
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer h-full flex flex-col"
      onClick={handleClick}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{areaName}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <button className="mt-4 text-[#1a3e6a] hover:text-blue-900 font-medium">
        {learnMore} →
      </button>
    </div>
  );
};
