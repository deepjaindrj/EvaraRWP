import React, { useEffect, useRef } from 'react';

export default function AboutHero() {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const stripRef = useRef(null);
  const centerImageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Load GSAP
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const { gsap } = window;
      
      // Create timeline
      const tl = gsap.timeline();

      // Set initial states - everything visible from start
      gsap.set([backgroundRef.current, stripRef.current, centerImageRef.current], { 
        opacity: 1 
      });
      gsap.set(textRef.current, { opacity: 0, scale: 0.8, y: 20 });

      // Animation sequence
      tl
        // Pause to let everything settle beautifully
        .to({}, { duration: 2 })
        
        // THE MAGIC TRANSFORMATION
        // Strip slides out from right to left
        .to(stripRef.current, {
          x: "100vw",
          duration: 2.5,
          ease: "power2.inOut"
        })
        
        // Simultaneously - center image expands to fill entire background
        .to(centerImageRef.current, {
          scale: 2.8,
          width: '100%',
          height: '100%',
          duration: 2.5,
          ease: "power2.inOut",
          transformOrigin: "center center"
        }, "-=2.5")
        
        // Once transformation is complete - text appears
        .to(textRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "back.out(1.7)"
        }, "-=0.3");
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-[#FFFBF1] pt-20 overflow-hidden"
    >
      {/* Container with proper margins */}
      <div className="relative w-full px-7 pb-7">
        
        {/* LAYER 1: Background Image Container */}
        <div 
          ref={backgroundRef}
          className="relative h-[calc(100vh-5rem-1.75rem)] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: 'url("/serviceherobg.png")',
          }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* LAYER 2: White Strip Only - No Text, No Image */}
          <div 
            ref={stripRef}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="h-[30vh] w-full bg-[#FFFBF1] shadow-2xl">
            </div>
          </div>

          {/* LAYER 3: Center Image - Small Horizontal Rectangle Initially */}
          <div 
            ref={centerImageRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 overflow-hidden shadow-lg"
            style={{
              width: '200px',
              height: '120px'
            }}
          >
            <img 
              src="/abouthero.png" 
              alt="About Us" 
              className="w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden"
              style={{
                objectPosition: 'center center'
              }}
            />
          </div>

          {/* Final Text - "About Us" Together in Center */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
  <h1 
    ref={textRef}
    className="font-cinzel text-[#FDD894] text-5xl sm:text-8xl font-medium tracking-tighter text-center"
    style={{ 
      textShadow: '3px 3px 10px rgba(0,0,0,0.8), 6px 6px 12px rgba(191, 191, 191, 0.6), 0px 0px 20px rgba(0,0,0,0.4)'
    }}
  >
    Contact Us
  </h1>
</div>
        </div>
      </div>
    </section>
  );
}