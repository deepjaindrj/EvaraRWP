import React from 'react';
import FAQPage from '../faq/page';
import ContactForm from '../../components/ContactForm';
import AboutSecond from '../../components/aboutSecond';
import AboutHero from '../../components/About Hero';
import WhyChooseEvara from '../../components/whyChoose';
import Footer from '../../components/Footer';
const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <AboutSecond />
      <WhyChooseEvara />
      <ContactForm />
      <FAQPage />    
      <Footer />
    </div>
  );
};

export default AboutPage;
