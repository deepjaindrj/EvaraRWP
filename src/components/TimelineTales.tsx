import React, { useState, useEffect, useRef } from 'react';

const TalesFramesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger slide-in when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Earlier trigger - when only 10% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle scroll-based carousel movement
  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      
      // Start moving much earlier - when images are still clearly visible
      if (rect.top <= 50) { // Start when section is just 50px past top
        const progress = Math.abs(rect.top - 50) / 300; // Faster progression over shorter distance
        setScrollOffset(Math.min(progress * 40, 40)); // Max 40vw movement
      } else {
        setScrollOffset(0);
      }
    };

    // Much shorter delay - start scroll movement earlier
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 1200); // Reduced from 2000ms to 1200ms

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#FFFBF1] overflow-hidden" 
      style={{ height: '160vh' }}
    >
      {/* Background Pattern Left */}
      <div 
        className="absolute opacity-80 z-0"
        style={{
          backgroundImage: 'url("/pattern02.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: 'clamp(300px, 40vw, 520px)',
          height: 'clamp(250px, 33vw, 437px)',
          top: 'clamp(20%, 25vh, 30%)',
          left: 'clamp(-150px, -15vw, -220px)',
          transform: 'rotate(-155.06deg)',
        }}
      />
      
      {/* Background Pattern Right */}
      <div 
        className="absolute opacity-80 z-0"
        style={{
          backgroundImage: 'url("/pattern03.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: 'clamp(350px, 42vw, 552px)',
          height: 'clamp(280px, 35vw, 464px)',
          top: 'clamp(1%, 5vh, 10%)',
          right: 'clamp(-250px, -20vw, -200px)',
          transform: 'rotate(0deg)',
        }}
      />
      
      {/* Title */}
      <div className="relative z-10 flex justify-center pt-36">
        <h2 
          style={{
            fontFamily: 'Cinzel Decorative',
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#BB7F25',
          }}
        >
          Tales Told in Timeless Frames
        </h2>
      </div>
      
      {/* Images Carousel */}
      <div 
        className="absolute z-10 flex items-start gap-3 sm:gap-4 lg:gap-6"
        style={{ 
          left: '47%',
          top: '58%',
          transform: `translateY(-50%) translateX(${isVisible ? -scrollOffset : 120}vw)`,
          marginLeft: 'clamp(-90px, -11vw, -140px)',
          transition: isVisible && scrollOffset === 0 ? 'transform 1500ms ease-out' : 'none'
        }}
      >
        {/* Original 3 images */}
        <div className="flex-shrink-0">
          <img 
            src="/service04.jpg" 
            alt="Wedding Service 1"
            className="object-cover"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>
        
        <div className="flex-shrink-0">
          <img 
            src="/service05.jpg" 
            alt="Wedding Service 2"
            className="object-cover"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>
        
        <div className="flex-shrink-0">
          <img 
            src="/service07.jpg" 
            alt="Wedding Service 3"
            className="object-cover"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>

        {/* Extra images to prevent empty space during scroll */}
        <div className="flex-shrink-0">
          <img 
            src="/service04.jpg" 
            alt="Wedding Service 4"
            className="object-cover"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>

        <div className="flex-shrink-0">
          <img 
            src="/service05.jpg" 
            alt="Wedding Service 5"
            className="object-cover"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TalesFramesSection;