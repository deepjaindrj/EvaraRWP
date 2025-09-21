import React, { useState } from 'react';
import CircleRound from './circleRound';


const FAQSection: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0); // First question open by default


  const faqData = [
    {
      id: 1,
      question: "How far in advance shoukd we book Evara's services?",
      answer: "We recommend booking at least 12-18 months before your wedding date to ensure comprehensive planning and availability."
    },
    {
      id: 2,
      question: "Can Evara accommodate destination weddings across India?",
      answer: "Yes, we specialize in destination weddings across India. Our team has extensive experience in planning weddings in various locations from Rajasthan palaces to Kerala backwaters, ensuring seamless coordination regardless of the venue."
    },
    {
      id: 3,
      question: "Do you offer customized wedding design packages?",
      answer: "Absolutely! We believe every wedding is unique. Our design team works closely with you to create personalized themes, decor, and experiences that reflect your story, cultural traditions, and personal style preferences."
    },
    {
      id: 4,
      question: "How do you manage vendor coordination?",
      answer: "We have a curated network of trusted vendors across India. Our team handles all vendor coordination, from initial selection to final execution, ensuring quality, timeline adherence, and budget management for a stress-free experience."
    }
  ];


  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };


  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFFBF1] to-[#F8F4E6] overflow-hidden py-16" style={{ minHeight: '125vh' }}>
      {/* Background Patterns */}
      <div 
        className="absolute opacity-90 z-0"
        style={{
          backgroundImage: 'url("/pattern02.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: 'clamp(250px, 30vw, 355px)',
          height: 'clamp(300px, 32vw, 375px)',
          top: 'clamp(24%, 25vh, 35%)',
          left: '-10px',
          transform: 'rotate(0deg)',
        }}
      />
      <div 
        className="absolute opacity-90 z-0"
        style={{
          backgroundImage: 'url("/pattern04.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: 'clamp(400px, 50vw, 719px)',
          height: 'clamp(300px, 40vw, 604px)',
          top: '-10%',
          right: 'clamp(-250px, -30vw, -350px)',
          transform: 'rotate(0deg)',
        }}
      />


      {/* Title */}
      <div className="relative z-10 flex justify-center pt-8 pb-16">
        <h2 
          className="my-8"
          style={{
            fontFamily: 'Cinzel Decorative',
            fontWeight: 400,
            fontSize: 'clamp(28px, 5vw, 64px)',
            lineHeight: '100%',
            letterSpacing: '2%',
            textAlign: 'center',
            color: '#00223F',
          }}
        >
          Frequently Asked<br />Questions
        </h2>
      </div>


      {/* Two-column layout with custom widths and reduced gap */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45vw_1fr] gap-2 items-start">
          {/* Left: FAQ */}
          <div style={{ marginTop: '56px' }}>
            <div 
              className="p-0"
              style={{
                border: '4px solid #BB7F25',
                backgroundColor: '#FFFBF1',
                overflow: 'hidden'
              }}
            >
              {faqData.map((faq, index) => (
                <div 
                  key={faq.id} 
                  className={`${index !== faqData.length - 1 ? 'border-b border-[#BB7F25]' : ''}`}
                  style={{
                    backgroundColor: openQuestion === faq.id ? '#FAF3DF' : '#FFFBF1'
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className={`w-full flex justify-between items-center px-6 py-4 text-left hover:opacity-80 transition-all ${
                      openQuestion === faq.id ? 'border-b border-[#BB7F25] border-opacity-30' : ''
                    }`}
                  >
                    <span 
                      className="pr-4"
                      style={{
                        fontFamily: 'Cinzel Decorative',
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        fontWeight: 500,
                        color: '#000000',
                        lineHeight: '1.4'
                      }}
                    >
                      {index + 1}) {faq.question}
                    </span>
                    {/* Plus/Minus Icon */}
                    <div className="flex-shrink-0 ml-4">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        className="transition-transform duration-300"
                        style={{ 
                          transform: openQuestion === faq.id ? 'rotate(45deg)' : 'rotate(0deg)' 
                        }}
                      >
                        <path 
                          d="M12 5V19M5 12H19" 
                          stroke="#BB7F25" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  {/* Answer */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openQuestion === faq.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <p 
                        style={{
                          fontFamily: 'Lora',
                          fontSize: 'clamp(18px, 1.9vw, 20px)',
                          color: '#00223F',
                          lineHeight: '1.6'
                        }}
                      >
                        A: {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: SplendourVisual */}
          <div>
            <CircleRound />
          </div>
        </div>
      </div>
    </section>
  );
};


export default FAQSection;
