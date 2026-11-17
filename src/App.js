import React from "react";
import { MotionConfig } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LawFirmLanding from "./components/Pages/HomePage";
import { AboutUsSection } from "./components/AboutUs";
import { LanguageProvider } from "./contexts/language";
import { Footer } from "./components/Footer/Footer";
import ProfessionalHeader from "./components/Navbar/ProfessionalHeader";
import { PracticeAreas } from "./components/PracticeArea/PracticeAreas";
import { PracticeAreaDetail } from "./components/Pages/PracticeAreaDetail";
import { AttorneyBiography } from "./components/AttorneysSection/AttorneyBiography";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import ContactForm from "./components/Contact/ContactForm";
import TermsOfService from "./components/Pages/TermsOfService";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import Disclaimer from "./components/Pages/Disclaimer";
import { Careers } from "./components/Pages/Careers/CareersPage";
import CaseDetailPage from "./components/LatestNewsSection/NewsDetail";
import NotableCasesSection from "./components/LatestNewsSection/LatestNewsSection";
function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
      <Router>
        <ProfessionalHeader/>
        <ScrollToTop />  {/* <-- Kjo */}
        <div className="App min-h-screen flex flex-col">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LawFirmLanding />} />
              <Route path="/about" element={<AboutUsSection standalone />} />
                            <Route path="/contact" element={<ContactForm standalone />} />
              <Route path="/practice-areas" element={<PracticeAreas standalone />} />
              <Route path="/practice-areas/:areaKey" element={<PracticeAreaDetail />} />
              <Route path="/attorneys/:attorneyId" element={<AttorneyBiography />} />
                            <Route path="/news" element={<NotableCasesSection standalone />} />
              <Route path="/news/:caseSlug" element={<CaseDetailPage />} />

  <Route path="/terms" element={< TermsOfService/>} />
    <Route path="/privacy" element={< PrivacyPolicy/>} />
  <Route path="/disclaimer" element={< Disclaimer/>} />
    <Route path="/careers" element={< Careers/>} />
              <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </MotionConfig>
    </LanguageProvider>

  );
}

export default App;