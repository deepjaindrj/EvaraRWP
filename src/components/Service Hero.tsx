import React from 'react';

export default function ServiceHero() {
  return (
    <section id="home" className="relative bg-[#FFFBF1] overflow-hidden pt-20">
      {/* Container with proper margins - matching Hero */}
      <div className="relative w-full px-7 pb-7">
        {/* Background Image Container - matching Hero dimensions */}
        <div 
          className="relative h-[calc(100vh-5rem-1.75rem)] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: 'url("/serviceherobg.png")',
          }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/60 "></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-4xl">
              <h3 className="text-[#FDD894] text-lg font-light my-6 tracking-wide font-lora">Our Services</h3>

              {/* Main Heading - matching Hero font size exactly */}
              <h1 className="font-cinzel mb-4 sm:mb-12 text-center text-[#FDD894] leading-[96%] tracking-[-0.07em]"
                style={{
                  fontSize: 'clamp(32px, 6vw, 64px)', // Matches Hero exactly
                  textShadow: '2px 0px 0px rgba(253, 216, 148, 0.14)',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))',
                }}>
                <span className="block mb-2 sm:mb-4 font-cinzel">
                  <span className="text-[1.3em] align-top font-cinzel">C</span>URATING{' '}
                  <span className="text-[1.3em] align-top font-cinzel">R</span>OYAL
                </span>
                <span className="block text-[#FDD894] font-cinzel">
                  <span className="text-[1.3em] align-top font-cinzel">J</span>OURNEYS{' '}
                  <span className="text-[1.3em] align-top font-cinzel">F</span>OR{' '}
                  <span className="text-[1.3em] align-top font-cinzel">Y</span>OU
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
