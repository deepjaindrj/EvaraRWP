import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-cream-50 mt-28" style={{backgroundColor: '#faf9f7'}}>
      {/* Container with side margins */}
      <div className="relative w-full mx-4 sm:mx-8 xl:mx-auto">
        {/* Background Image Container with rounded corners */}
        <div 
          className="relative min-h-[100vh] w-[96vw] mx-auto bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: 'url("/hero-background.png")',
          }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-[82vh] px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-4xl">
              {/* Main Heading */}
             <h1 className="font-cinzel mb-4 sm:mb-12 text-center text-[#FDD894] leading-[96%] tracking-[-0.07em]"
              style={{
                fontSize: 'clamp(48px, 8vw, 90px)',
                textShadow:
                  '2px 0px 0px rgba(253, 216, 148, 0.14)', // Simulate inner shadow
                filter: 'drop-shadow(inset 0 2px 6px rgba(0, 0, 0, 0.3))',
              }}>
              <span className="block mb-2 sm:mb-4 font-cinzel">
                <span className="text-[1.3em] align-top font-cinzel">U</span>NFOLD{' '}
                <span className="text-[1.3em] align-top font-cinzel">Y</span>OUR
              </span>
              <span className="block text-[#FDD894] font-cinzel">
                <span className="text-[1.3em] align-top font-cinzel">R</span>OYAL{' '}
                <span className="text-[1.3em] align-top font-cinzel">L</span>OVE{' '}
                <span className="text-[1.3em] align-top font-cinzel">S</span>TORY
              </span>
            </h1>

              
              {/* Call to Action Button */}
              <div className="flex justify-center">
                <button className="font-cinzel group relative overflow-hidden bg-transparent border-b-2 border-[#FDD894] text-[#FDD894] py-3 px-2 font-medium text-2xl transition-all duration-300 hover:[#FDD894] hover:text-black hover:px-4 rounded-sm">
                  <span className="relative z-10 font-cinzel">View Gallery</span>
                  <div className="absolute px-4 inset-0 bg-[#FDD894] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}