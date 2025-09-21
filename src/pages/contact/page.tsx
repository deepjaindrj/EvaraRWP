import React from 'react';
import FAQPage from '../faq/page';
import AboutHero from '../../components/About Hero';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
const ContactPage: React.FC = () => {
  return (
    <div>
        <AboutHero />
        <ContactForm />
        <FAQPage />
        <Footer />
    </div>
  );
};

export default ContactPage;
