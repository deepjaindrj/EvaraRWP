import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How far in advance should we book Evara\'s services?',
      answer: 'We recommend booking our services 12-18 months in advance for your ideal wedding date. However, we understand that love doesn\'t always follow timelines, and we\'ve successfully planned beautiful weddings with shorter notice periods as well.'
    },
    {
      question: 'Can Evara accommodate destination weddings across India?',
      answer: 'Absolutely! We specialize in destination weddings across India and internationally. Our extensive network of vendors and venues allows us to create magical celebrations in any location, from palace weddings in Rajasthan to beachside ceremonies in Goa.'
    },
    {
      question: 'Do you offer customized wedding design packages?',
      answer: 'Yes, every wedding we plan is completely customized. We don\'t believe in one-size-fits-all packages. Instead, we create bespoke experiences tailored to your vision, budget, and preferences, ensuring your wedding is as unique as your love story.'
    },
    {
      question: 'How do you manage vendor coordination?',
      answer: 'We have an extensive network of trusted vendors across various categories. We handle all vendor communications, contract negotiations, timeline management, and quality assurance, so you can focus on enjoying your engagement period stress-free.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our wedding planning services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-800 text-lg pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}