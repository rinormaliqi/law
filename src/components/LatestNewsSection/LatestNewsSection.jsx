"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/imaga-2.jpg"
import image2 from "../../assets/image-3.jpg"
import image3 from "../../assets/image-4.png"
import image4 from "../../assets/image-1.jpg"

const news = [
  {
    id: 1,
    title: "Kosovo adopts new Law on Commercial Court",
    author: "Asdren Bytyqi",
    image: image1,
    content:
      "The new Law on the Commercial Court in Kosovo has been adopted, aiming to improve efficiency in resolving business-related disputes. The law establishes specialized chambers for complex corporate and commercial cases.",
  },
  {
    id: 2,
    title: "Tax Administration of Kosovo introduces e-invoicing system",
    author: "Asdren Bytyqi",
    image: image2,
    content:
      "The Tax Administration of Kosovo (TAK) announced the rollout of its electronic invoicing system, which will become mandatory for all registered businesses by 2026. The reform aims to increase transparency and reduce tax evasion.",
  },
  {
    id: 3,
    title: "New amendments to the Law on Foreign Investments",
    author: "Asdren Bytyqi",
    image: image3,
    content:
      "Kosovo’s Assembly passed amendments to the Law on Foreign Investments, providing stronger guarantees for investor protection, arbitration, and access to international dispute resolution.",
  },
  {
    id: 4,
    title: "Data protection enforcement increasing in Kosovo",
    author: "Asdren Bytyqi",
    image: image4,
    content:
      "The Information and Privacy Agency of Kosovo has begun active enforcement of the Law on Personal Data Protection, issuing several fines to companies for non-compliance with privacy obligations.",
  },
  {
    id: 5,
    title: "Kosovo joins the Hague Convention on Apostilles",
    author: "Asdren Bytyqi",
    image: image1,
    content:
      "Kosovo has officially acceded to the Hague Convention Abolishing the Requirement of Legalisation for Foreign Public Documents, simplifying cross-border use of public documents with participating states.",
  },
];

export default function LatestNewsSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleCardClick = (item) => {
    navigate(`/news/${item.id}`, { state: item }); // passing props via state
  };

  return (
    <section className="px-8 py-16 bg-gray-50">
      <h2 className="text-[#1a3e6a] text-4xl font-bold mb-8">
        Latest news and updates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-gray-500 text-sm">Kosovo Legal News</span>
              <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
              <p className="text-[#1a3e6a] font-medium mt-2">{item.author}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < news.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-[#1a3e6a] text-white font-semibold rounded-lg shadow hover:bg-[#153258] transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
