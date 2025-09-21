import React from 'react';
import FAQPage from '../faq/page';
import ContactHero from '../../components/Contact Hero';
import ContactForm2 from '../../components/ContactForm2';
import Footer from '../../components/Footer';
const ContactPage: React.FC = () => {
  return (
    <div>
        <ContactHero />
        <ContactForm2 />
        <FAQPage />
        <Footer />
    </div>
  );
};

export default ContactPage;
