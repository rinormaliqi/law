// LawFirmLanding.js (main component)
import React from 'react';
import { PracticeAreas } from '../PracticeArea/PracticeAreas';
import ContactForm from '../Contact/ContactForm';
import { NewHero } from '../Hero/NewHero';
import { AboutUsSection } from '../AboutUs';
import { AttorneysSection } from '../AttorneysSection/AttorneysSection';
import NotableCasesSection from '../LatestNewsSection/LatestNewsSection';

const LawFirmLanding = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar stays full width */}
      <NewHero />
      
      {/* Main content wrapper with responsive margins */}
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-[150px]">
        <AboutUsSection/>
        <AttorneysSection/>
        <PracticeAreas />
        
        {/* <ServicesSection/> */}
        <NotableCasesSection />
        {/* <PracticeAreaCard /> */}
        <ContactForm />
      </div>

      {/* Footer stays full width */}
    </div>
  );
};

export default LawFirmLanding;