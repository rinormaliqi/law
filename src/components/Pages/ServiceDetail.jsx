"use client";
import { useLocation, useNavigate } from "react-router-dom";

export default function ServiceDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-8">
        <p>No service data found.</p>
        <button
          onClick={() => navigate("/services")}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <section className="px-8 py-16 bg-gray-50 mt-20">
      <button
        onClick={() => navigate("/services")}
        className="mb-6 px-6 py-2 bg-red-600 text-white rounded-lg"
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
          <h1 className="text-3xl font-bold text-red-600">{state.title}</h1>
          <p className="mt-4 text-gray-700 text-lg">{state.content}</p>
        </div>
      </div>
    </section>
  );
}
