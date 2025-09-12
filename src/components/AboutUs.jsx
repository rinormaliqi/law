import React from "react";
import { motion } from "framer-motion";
import { translations, useLanguage } from "../contexts/language";

const AboutPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* Biography */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1a3e6a]">
              {language === "en"
                ? "Meet Asdren Bytyqi"
                : language === "al"
                ? "Njihuni me Asdren Bytyqi"
                : "Lernen Sie Asdren Bytyqi kennen"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {language === "en"
                ? "Asdren Bytyqi is a distinguished lawyer based in Prishtina, Kosovo, with a Bachelor's degree from the Faculty of Law at the University of Prishtina. With over 10 years of experience in criminal and civil law, he has built a reputation for excellence and dedication."
                : language === "al"
                ? "Asdren Bytyqi është një avokat i shquar me seli në Prishtinë, Kosovë, me diplomë Bachelor nga Fakulteti Juridik i Universitetit të Prishtinës. Me mbi 10 vjet përvojë në të drejtën penale dhe civile, ai ka ndërtuar një reputacion për shkëlqim dhe përkushtim."
                : "Asdren Bytyqi ist ein angesehener Anwalt mit Sitz in Prishtina, Kosovo, und hat einen Bachelor-Abschluss von der Juristischen Fakultät der Universität Prishtina. Mit über 10 Jahren Erfahrung im Straf- und Zivilrecht hat er sich einen Ruf für Exzellenz und Engagement erarbeitet."}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {language === "en"
                ? "As the founder of Bytyqi Law Firm, Asdren combines his legal expertise with a passion for justice, serving clients with personalized solutions and unwavering commitment."
                : language === "al"
                ? "Si themelues i Firmës Juridike Bytyqi, Asdren kombinon ekspertizën e tij ligjore me pasionin për drejtësi, duke u shërbyer klientëve me zgjidhje të personalizuara dhe përkushtim të palëkundur."
                : "Als Gründer der Kanzlei Bytyqi kombiniert Asdren sein juristisches Fachwissen mit einer Leidenschaft für Gerechtigkeit und betreut seine Mandanten mit maßgeschneiderten Lösungen und unerschütterlichem Engagement."}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-800 rounded-lg transform rotate-2 opacity-10"></div>
            <img
              src="profile.jpg"
              alt="Asdren Bytyqi's law office"
              className="relative rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left Side */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#1a3e6a]">{t.why.title}</h2>
              <p className="text-gray-700 mb-6">{t.why.description}</p>

              {/* Points */}
              <ul className="space-y-4">
                {t.why.points.map((point, index) => (
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
                <h4 className="font-semibold mb-4 text-[#1a3e6a]">{t.why.technicalExpertise.title}</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {t.why.technicalExpertise.items.map((item, index) => (
                    <span key={index} className="bg-white px-3 py-1 rounded border border-[#1a3e6a]/20 text-[#1a3e6a]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 space-y-6">
              {/* Experience Box */}
              <div className="bg-[#1a3e6a] text-white rounded-lg p-8 shadow-md relative overflow-hidden">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">25+</div>
                  <div className="text-xl">{t.stats.years}</div>
                  <div className="w-20 h-1 bg-white mx-auto my-4"></div>

                  <div className="grid grid-cols-2 gap-6 mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm">{t.stats.cases}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">95%</div>
                      <div className="text-sm">{t.stats.success}</div>
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
                <h4 className="font-semibold text-[#1a3e6a] mb-2">{t.why.kosovoExpertise.title}</h4>
                <ul className="text-sm text-[#1a3e6a] list-disc list-inside space-y-1">
                  {t.why.kosovoExpertise.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-gradient-to-b from-gray-50 to-gray-100">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-16 text-center text-[#1a3e6a]">
            {language === "en"
              ? "Areas of Expertise"
              : language === "al"
              ? "Fushat e Ekspertizës"
              : "Fachgebiete"}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#1a3e6a]"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1a3e6a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a3e6a]">
                {language === "en"
                  ? "Criminal Law"
                  : language === "al"
                  ? "E Drejta Penale"
                  : "Strafrecht"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Expert representation in criminal defense, ensuring your rights are protected with strategic and thorough advocacy."
                  : language === "al"
                  ? "Përfaqësim ekspert në mbrojtjen penale, duke siguruar që të drejtat tuaja të mbrohen me avokim strategjik dhe të plotë."
                  : "Fachkundige Vertretung in der Strafverteidigung, um Ihre Rechte mit strategischer und gründlicher Fürsprache zu schützen."}
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#1a3e6a]"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1a3e6a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a3e6a]">
                {language === "en"
                  ? "Civil Law"
                  : language === "al"
                  ? "E Drejta Civile"
                  : "Zivilrecht"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Comprehensive legal support in civil matters, including contracts, disputes, and family law, tailored to your needs."
                  : language === "al"
                  ? "Mbështetje gjithëpërfshirëse ligjore në çështje civile, duke përfshirë kontratat, mosmarrëveshjet dhe të drejtën familjare, të përshtatura për nevojat tuaja."
                  : "Umfassende rechtliche Unterstützung in zivilrechtlichen Angelegenheiten, einschließlich Verträgen, Streitigkeiten und Familienrecht, maßgeschneidert auf Ihre Bedürfnisse."}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
