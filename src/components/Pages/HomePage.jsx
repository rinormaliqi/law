// LawFirmLanding.js (main component)
import React from 'react';
import { PracticeAreas } from '../PracticeArea/PracticeAreas';
import ContactForm from '../Contact/ContactForm';
import { NewHero } from '../Hero/NewHero';
import { AboutUsSection } from '../AboutUs';
import { AttorneysSection } from '../AttorneysSection/AttorneysSection';
import NotableCasesSection from '../LatestNewsSection/LatestNewsSection';

// Each section owns its own container and background, so widths and
// vertical rhythm stay consistent across the page.
const LawFirmLanding = () => {
  return (
    <div className="text-ink">
      <NewHero />
      <AboutUsSection showCasesPreview={false} />
      <AttorneysSection />
      <PracticeAreas />
      <NotableCasesSection />
      <ContactForm />
    </div>
  );
};

export default LawFirmLanding;
