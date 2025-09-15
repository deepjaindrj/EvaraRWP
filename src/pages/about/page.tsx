import React from 'react';
import FAQPage from '../faq/page';
import ContactForm from '../../components/ContactForm';
import AboutSecond from '../../components/aboutSecond';
import AboutHero from '../../components/About Hero';
import WhyChooseEvara from '../../components/whyChoose';
const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <AboutSecond />
      <WhyChooseEvara />
      <ContactForm />
      <FAQPage />    
    </div>
  );
};

export default AboutPage;
