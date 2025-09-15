import React from 'react';

const RoyalLegacySection: React.FC = () => {
  return (
    <section 
      className="relative flex flex-col items-center pt-32  text-center px-4 sm:px-6 lg:px-8"
      style={{
        height: '110vh',
        backgroundImage: 'url("/cta_image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        {/* Main Title */}
         <h1 className="font-cinzel mb-4 sm:mb-10 text-center text-[#FDD894] leading-[96%] tracking-[-0.05em]"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                textShadow:
                  '2px 0px 0px rgba(253, 216, 148, 0.14)', // Simulate inner shadow
                filter: 'drop-shadow(inset 0 2px 6px rgba(0, 0, 0, 0.3))',
              }}>
              <span className="block mb-2 sm:mb-4 font-cinzel">
                <span className="text-[1.2em] align-top font-cinzel">B</span>EGIN{' '}
                <span className="text-[1.2em] align-top font-cinzel">Y</span>OUR{' '}  
                <span className="text-[1.2em] align-top font-cinzel">R</span>OYAL{' '}
                <span className="text-[1.2em] align-top font-cinzel">L</span>EGACY{' '}
                </span>
            </h1>
        
        {/* Description Paragraph */}
        <p 
          className="font-normal max-w-3xl mx-auto"
          style={{
            fontFamily: 'Lora',
            fontWeight: 400,
            fontSize: 'clamp(12px, 2.2vw, 22px)',
            lineHeight: '120%',
            letterSpacing: '0.2%',
            textAlign: 'center',
            color: '#FFFBF1'
          }}
        >
          Step into a celebration crafted with timeless elegance and heartfelt artistry. Let EVARA transform your love story into a regal affair <br /> destined to be remembered for generations.
        </p>
        
        {/* Book Consultation Button */}
        <div className="pt-4">
          <button 
            className="px-6 py-4 rounded-full text-[#00223F] font-medium text-lg font-roboto hover:opacity-90 transition-opacity duration-300 shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #BB7F25 0%, #FDD894 100%)',
            }}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoyalLegacySection;