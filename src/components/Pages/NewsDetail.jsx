"use client";
import { useLocation, useNavigate } from "react-router-dom";

export default function NewsDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-8 mt-20">
        <p>No news data found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-[#1a3e6a] text-white rounded-lg"
        >
          Back to News
        </button>
      </div>
    );
  }

  return (
    <section className="px-8 py-16 bg-gray-50 mt-20">
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-6 py-2 bg-[#1a3e6a] text-white rounded-lg"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg overflow-hidden">
        <img
          src={state.image}
          alt={state.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#1a3e6a]">{state.title}</h1>
          <p className="text-gray-500 mt-2">By {state.author}</p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            {state.content}
          </p>
        </div>
      </div>
    </section>
  );
}
