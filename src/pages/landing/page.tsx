import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import {WeddingTimelineDemo} from '../../components/processSection';
import RoyalLegacySection from '../../components/RoyalCTA';
import TalesFramesSection from '../../components/TimelineTales';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />    
      <Services />
      <WeddingTimelineDemo />
      <RoyalLegacySection />
      <TalesFramesSection />      
      <Testimonials />
      <FAQ />
      
    </div>
  );
};

export default LandingPage;
