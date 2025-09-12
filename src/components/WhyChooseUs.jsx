// components/WhyChooseUs.js
import React from 'react';
import { translations, useLanguage } from '../contexts/language';

export const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = translations[language].why;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Side */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#1a3e6a]">{t.title}</h2>
            <p className="text-gray-700 mb-6">{t.description}</p>

            {/* Points */}
            <ul className="space-y-4">
              {t.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#1a3e6a] p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>

            {/* Technical Expertise */}
            <div className="mt-8 p-6 bg-[#f0f4f8] rounded-lg border border-[#1a3e6a]/20">
              <h4 className="font-semibold mb-4 text-[#1a3e6a]">Technical Legal Expertise</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="bg-white px-3 py-1 rounded border border-[#1a3e6a]/20 text-[#1a3e6a]">Legal Research & Analysis</span>
                <span className="bg-white px-3 py-1 rounded border border-[#1a3e6a]/20 text-[#1a3e6a]">Case Strategy Development</span>
                <span className="bg-white px-3 py-1 rounded border border-[#1a3e6a]/20 text-[#1a3e6a]">Document Automation</span>
                <span className="bg-white px-3 py-1 rounded border border-[#1a3e6a]/20 text-[#1a3e6a]">E-Discovery Management</span>
                <span className="bg-white px-3 py-1 rounded border border-[#1a3e6a]/20 text-[#1a3e6a]">Contract Analytics</span>
                <span className="bg-white px-3 py-1 rounded border border-[#1a3e6a]/20 text-[#1a3e6a]">Compliance Monitoring</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 space-y-6">
            {/* Experience Box */}
            <div className="bg-[#1a3e6a] text-white rounded-lg p-8 shadow-md">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">25+</div>
                <div className="text-xl">Years of Combined Experience</div>
                <div className="w-20 h-1 bg-white mx-auto my-4"></div>

                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Cases Handled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Decorative Kosovo Outline */}
              <div className="absolute bottom-0 right-0 opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <path d="M100,20 C120,30 160,40 170,70 C180,100 160,130 130,150 C100,170 70,160 50,140 C30,120 20,90 30,60 C40,30 70,20 100,20 Z" 
                        stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Kosovo Legal System Specialization */}
            <div className="p-4 bg-[#e0edf7] border border-[#1a3e6a]/40 rounded-lg">
              <h4 className="font-semibold text-[#1a3e6a] mb-2">Kosovo Legal System Specialization</h4>
              <ul className="text-sm text-[#1a3e6a] list-disc list-inside space-y-1">
                <li>Kosovo Constitution and legal framework</li>
                <li>EULEX legacy case integration</li>
                <li>Hybrid legal system (Civil Law with common law elements)</li>
                <li>International legal standards implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
