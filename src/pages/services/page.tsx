import React from 'react';
import ServiceHero from '../../components/Service Hero';
import SplendorSection from '../../components/SplendourSection';
import FAQPage from '../faq/page';
import ServiceRows from '../../components/serviceRows';
import Footer from '../../components/Footer'
const ServicesPage: React.FC = () => {
  return (
    <div>
     
      <ServiceHero />
      <SplendorSection />
      <ServiceRows />
      <FAQPage />  
      <Footer />
    </div>
  );
};

export default ServicesPage;
