import React from 'react';
import ServiceHero from '../../components/Service Hero';
import SplendorSection from '../../components/SplendourSection';
import { WeddingTimelineDemo } from '../../components/processSection';
import FAQPage from '../faq/page';
const ServicesPage: React.FC = () => {
  return (
    <div>
     
      <ServiceHero />
      <SplendorSection />
      <WeddingTimelineDemo />
      <FAQPage />  
    </div>
  );
};

export default ServicesPage;
