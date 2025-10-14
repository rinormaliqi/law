// LawFirmLanding.js (main component)
import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Hero } from '../Hero/Hero';
import { PracticeAreaCard } from '../PracticeArea/PracticeAreaCard';
import { WhyChooseUs } from '../WhyChooseUs';
import { CTA } from '../CTA';
import { Footer } from '../Footer/Footer';
import { PracticeAreas } from '../PracticeArea/PracticeAreas';
import ContactForm from '../Contact/ContactForm';
import { NewHero } from '../Hero/NewHero';
import LatestNewsSection from '../LatestNewsSection/LatestNewsSection';
import OurPeopleSection from '../OurPeopleSection/OurPeopleSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import AboutPage, { AboutUsSection } from '../AboutUs';
import { AttorneysSection } from '../AttorneysSection/AttorneysSection';

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
        <LatestNewsSection />
        {/* <PracticeAreaCard /> */}
        <ContactForm />
      </div>

      {/* Footer stays full width */}
    </div>
  );
};

export default LawFirmLanding;