import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Process from '../../components/Process';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />    
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
};

export default LandingPage;
