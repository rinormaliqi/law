import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LawFirmLanding from "./components/Pages/HomePage";
import AboutUs from "./components/AboutUs"; // make sure path matches your file structure
import { LanguageProvider } from "./contexts/language";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import ProfessionalHeader from "./components/Navbar/ProfessionalHeader";
import { PracticeAreas } from "./components/PracticeArea/PracticeAreas";
import { PracticeAreaDetail } from "./components/Pages/PracticeAreaDetail";
import NewsDetail from "./components/Pages/NewsDetail";
import ServiceDetail from "./components/Pages/ServiceDetail";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ProfessionalHeader/>
        <div className="App min-h-screen flex flex-col">

          {/* Page Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LawFirmLanding />} />
              <Route path="/about" element={<AboutUs />} />
                     <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/practice-areas/:areaKey" element={<PracticeAreaDetail />} />
                <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
           <Route
            path="/practice-areas/:areaKey"
            element={<div className="p-12 text-center">Practice Area Details Coming Soon</div>}
          />
            </Routes>
          </main>
        </div>
        <Footer/>
      </Router>
    </LanguageProvider>
  );
}

export default App;
