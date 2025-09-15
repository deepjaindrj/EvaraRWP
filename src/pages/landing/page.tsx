import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Process from '../../components/Process';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import {WeddingTimelineDemo} from '../../components/processSection';
import RoyalLegacySection from '../../components/RoyalCTA';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />    
      <Services />
      <WeddingTimelineDemo />
      <RoyalLegacySection />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
};

export default LandingPage;
