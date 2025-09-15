import React from 'react';

export default function ServiceHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#FFFBF1] mt-28">
      {/* Container with side margins */}
      <div className="relative w-full mx-4 sm:mx-8 xl:mx-auto">
        {/* Background Image Container with rounded corners */}
        <div 
          className="relative min-h-[100vh] w-[96vw] mx-auto bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: 'url("/serviceherobg.png")',
          }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-[82vh] px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-4xl">
            <h3 className="text-[#FDD894] text-lg font-light my-6 tracking-wide font-lora">Our Services</h3>

              {/* Main Heading */}
             <h1 className="font-cinzel mb-4 sm:mb-12 text-center text-[#FDD894] leading-[96%] tracking-[-0.07em]"
              style={{
                fontSize: 'clamp(36px, 6vw, 72px)',
                textShadow:
                  '2px 0px 0px rgba(253, 216, 148, 0.14)', // Simulate inner shadow
                filter: 'drop-shadow(inset 0 2px 6px rgba(0, 0, 0, 0.3))',
              }}>
              <span className="block mb-2 font-cinzel">
                <span className="text-[1.2em] align-top font-cinzel">C</span>URATING{' '}
                <span className="text-[1.2em] align-top font-cinzel">R</span>OYAL
              </span>
              <span className="block text-[#FDD894] font-cinzel">
                <span className="text-[1.2em] align-top font-cinzel">J</span>OURNEYS{' '}
                <span className="text-[1.2em] align-top font-cinzel">F</span>OR{' '}
                <span className="text-[1.2em] align-top font-cinzel">Y</span>OU
              </span>
            </h1>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}