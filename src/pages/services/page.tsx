import React from 'react';
import ServiceHero from '../../components/Service Hero';
import SplendorSection from '../../components/SplendourSection';
import FAQPage from '../faq/page';
import ServiceRows from '../../components/serviceRows';
const ServicesPage: React.FC = () => {
  return (
    <div>
     
      <ServiceHero />
      <SplendorSection />
      <ServiceRows />
      <FAQPage />  
    </div>
  );
};

export default ServicesPage;
