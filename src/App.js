import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LawFirmLanding from "./components/Pages/HomePage";
import AboutUs, { AboutUsSection } from "./components/AboutUs";
import { LanguageProvider } from "./contexts/language";
import { Footer } from "./components/Footer/Footer";
import ProfessionalHeader from "./components/Navbar/ProfessionalHeader";
import { PracticeAreas } from "./components/PracticeArea/PracticeAreas";
import { PracticeAreaDetail } from "./components/Pages/PracticeAreaDetail";
import { AttorneyBiography } from "./components/AttorneysSection/AttorneyBiography";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { AttorneysSection } from "./components/AttorneysSection/AttorneysSection";
import ContactForm from "./components/Contact/ContactForm";
import NotableCasesSection from "./components/LatestNewsSection/LatestNewsSection";
import TermsOfService from "./components/Pages/TermsOfService";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import Disclaimer from "./components/Pages/Disclaimer";
function App() {
  return (
    <LanguageProvider>
      <Router>
        <ProfessionalHeader/>
        <ScrollToTop />  {/* <-- Kjo */}
        <div className="App min-h-screen flex flex-col">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LawFirmLanding />} />
              <Route path="/about" element={<AboutUsSection />} />
                            <Route path="/contact" element={<ContactForm />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/practice-areas/:areaKey" element={<PracticeAreaDetail />} />
              <Route path="/attorneys/:attorneyId" element={<AttorneyBiography />} />
                            <Route path="/news" element={< NotableCasesSection/>} />
  <Route path="/terms" element={< TermsOfService/>} />
    <Route path="/privacy" element={< PrivacyPolicy/>} />
  <Route path="/disclaimer" element={< Disclaimer/>} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>

  );
}

export default App;