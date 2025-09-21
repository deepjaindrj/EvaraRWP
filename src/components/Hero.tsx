import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start the background shrink animation
    const timer1 = setTimeout(() => {
      setIsLoaded(true);
    }, 800); // Delay before starting the shrink

    // Show content after background animation completes
    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Delay for content to appear after background settles

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section 
      id="home" 
      className={`relative bg-[#FFFBF1] overflow-hidden transition-all duration-1000 ease-out ${
        isLoaded 
          ? 'pt-20' 
          : 'min-h-screen mt-0 fixed inset-0 z-40'
      }`}
    >
      {/* Container with proper margins */}
      <div className={`relative w-full transition-all duration-[1500ms] ease-out ${
        isLoaded 
          ? 'px-7 pb-7' 
          : 'px-0 pb-0'
      }`}>
        {/* Background Image Container with animated positioning */}
        <div 
          className={`relative bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-[1500ms] ease-out ${
            isLoaded 
              ? 'h-[calc(100vh-5rem-1.75rem)] w-full ' 
              : 'min-h-screen w-screen h-screen fixed inset-0 z-30 rounded-none'
          }`}
          style={{
            transform: isLoaded ? 'scale(1)' : 'scale(1.05)',
            transformOrigin: 'center center',
          }}
        >
          {/* Background image layer with hover effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out hover:scale-105"
            style={{
              backgroundImage: 'url("/hero-background.png")',
            }}
          ></div>

          {/* Subtle overlay with animated opacity */}
          <div className={`absolute inset-0 bg-black/30 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100 ' : 'opacity-60'
          }`}></div>

          {/* Content with staggered animations */}
          <div className="relative z-10 flex items-center justify-center h-full px-6 sm:px-8 lg:px-12 pointer-events-none">
            <div className="text-center max-w-4xl">
              {/* Main Heading with slide-up animation */}
              <h1 
                className={`font-cinzel mb-4 sm:mb-12 text-center text-[#FDD894] leading-[96%] tracking-[-0.07em] transition-all duration-1000 ease-out ${
                  showContent 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-12'
                }`}
                style={{
                  fontSize: 'clamp(32px, 6vw, 64px)',
                  textShadow: '2px 0px 0px rgba(253, 216, 148, 0.14)',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))',
                  transitionDelay: showContent ? '200ms' : '0ms'
                }}
              >
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

              {/* Call to Action Button with delayed slide-up */}
              <div 
                className={`flex justify-center transition-all duration-1000 ease-out pointer-events-auto ${
                  showContent 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
                style={{
                  transitionDelay: showContent ? '600ms' : '0ms'
                }}
              >
                <button className="font-cinzel group relative overflow-hidden bg-transparent border-b-2 border-[#FDD894] text-[#FDD894] py-2 px-2 font-medium text-lg transition-all duration-300 hover:text-black hover:px-4 rounded-sm">
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