import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImgWrapRef = useRef<HTMLDivElement>(null);
  const rightImgWrapRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  
  // Refs for card animations
  const leftCardsRef = useRef<HTMLDivElement[]>([]);
  const rightCardsRef = useRef<HTMLDivElement[]>([]);
  
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  // Card data for animations - only 2 cards each side with more tilt
  const leftCardPositions = [
    { x: 40, y: -25, rotation: 20, scale: 0.95 },
    { x: 65, y: 20, rotation: 35, scale: 0.9 },
  ];

  const rightCardPositions = [
    { x: -40, y: -25, rotation: -20, scale: 0.95 },
    { x: -65, y: 20, rotation: -35, scale: 0.9 },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const leftImg = leftImgWrapRef.current;
    const rightImg = rightImgWrapRef.current;
    const tagline = taglineRef.current;
    const heading = headingRef.current;
    const para = paraRef.current;
    const cta = ctaRef.current;

    if (!section || !leftImg || !rightImg || !tagline || !heading || !para || !cta) return;

    let scrollTriggerInstance: ScrollTrigger | null = null;

    const initAnimation = () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars?.id === 'about-section-trigger') {
            trigger.kill();
          }
        });

        gsap.set(leftImg, { opacity: 1, x: "-100vw", rotation: -8.53 });
        gsap.set(rightImg, { opacity: 1, x: "100vw", rotation: 8.53 });
        gsap.set([tagline, heading, para, cta], { opacity: 0 });

        const tl = gsap.timeline({
          defaults: { ease: 'power1.inOut' },
        });

        scrollTriggerInstance = ScrollTrigger.create({
          trigger: section,
          start: 'clamp(top top)',
          end: '+=100%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: 'about-section-trigger',
          animation: tl,
          onRefresh: () => {
            gsap.set(leftImg, { opacity: 1, x: "-100vw", rotation: -8.53 });
            gsap.set(rightImg, { opacity: 1, x: "100vw", rotation: 8.53 });
            gsap.set([tagline, heading, para, cta], { opacity: 0 });
          }
        });

        tl.addLabel('start', 0);
        
        tl.to(leftImg, {
          x: 0,
          duration: 0.8,
          ease: 'power1.inOut'
        }, 'start');

        tl.to(rightImg, {
          x: 0,
          duration: 0.8,
          ease: 'power1.inOut'
        }, 'start');

        // Start text animations earlier - at 30% of the image animation
        tl.addLabel('textStart', 0.01);
        
        tl.to(tagline, {
          opacity: 1,
          duration: 0.3,
          ease: 'power1.inOut'
        }, 'textStart');

        tl.to(heading, {
          opacity: 1,
          duration: 0.3,
          ease: 'power1.inOut'
        }, 'textStart+=0.1');

        tl.to(para, {
          opacity: 1,
          duration: 0.3,
          ease: 'power1.inOut'
        }, 'textStart+=0.2');

        tl.to(cta, {
          opacity: 1,
          duration: 0.3,
          ease: 'power1.inOut'
        }, 'textStart+=0.3');

        tl.addLabel('end', 1.2);

      }, section);

      return ctx;
    };

    const timer = setTimeout(() => {
      const ctx = initAnimation();
      (section as any)._gsapContext = ctx;
    }, 50);

    return () => {
      clearTimeout(timer);
      
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        scrollTriggerInstance = null;
      }
      
      if ((section as any)?._gsapContext) {
        (section as any)._gsapContext.revert();
        (section as any)._gsapContext = null;
      }
    };
  }, []);

  // Card hover animations
  useEffect(() => {
    const leftCards = leftCardsRef.current;
    const rightCards = rightCardsRef.current;

    if (leftHovered && leftCards.length > 0) {
      gsap.fromTo(leftCards, 
        { 
          opacity: 0,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1
        },
        {
          opacity: 1,
          x: (i) => leftCardPositions[i]?.x || 0,
          y: (i) => leftCardPositions[i]?.y || 0,
          rotation: (i) => leftCardPositions[i]?.rotation || 0,
          scale: (i) => leftCardPositions[i]?.scale || 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1
        }
      );
    } else if (leftCards.length > 0) {
      gsap.to(leftCards, {
        opacity: 0,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut"
      });
    }
  }, [leftHovered]);

  useEffect(() => {
    const rightCards = rightCardsRef.current;

    if (rightHovered && rightCards.length > 0) {
      gsap.fromTo(rightCards, 
        { 
          opacity: 0,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1
        },
        {
          opacity: 1,
          x: (i) => rightCardPositions[i]?.x || 0,
          y: (i) => rightCardPositions[i]?.y || 0,
          rotation: (i) => rightCardPositions[i]?.rotation || 0,
          scale: (i) => rightCardPositions[i]?.scale || 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1
        }
      );
    } else if (rightCards.length > 0) {
      gsap.to(rightCards, {
        opacity: 0,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut"
      });
    }
  }, [rightHovered]);

  useEffect(() => {
    let refreshTimeout: ReturnType<typeof setTimeout>;

    const handleRefresh = () => {
      clearTimeout(refreshTimeout);
      refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener('load', handleRefresh);
    window.addEventListener('resize', handleRefresh);

    return () => {
      clearTimeout(refreshTimeout);
      window.removeEventListener('load', handleRefresh);
      window.removeEventListener('resize', handleRefresh);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#FFFBF1] relative min-h-screen overflow-hidden"
    >
      <div className="w-full h-full">
        <div className="flex items-center justify-between gap-12 h-screen px-2">
          {/* Left Image wrapper with cards */}
          <div 
            ref={leftImgWrapRef} 
            className="flex-shrink-0 transform relative"
            onMouseEnter={() => setLeftHovered(true)}
            onMouseLeave={() => setLeftHovered(false)}
          >
            {/* Background cards */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) leftCardsRef.current[index] = el;
                  }}
                  className="absolute top-0 left-0 w-full h-full opacity-0"
                  style={{ zIndex: -index - 1 }}
                >
                  <img
                    src={index === 0 ? "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop" : "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop"}
                    alt={`Left Background Image ${index + 1}`}
                    className="w-[22vw] h-[65vh] object-cover rounded-lg shadow-xl"
                  />
                </div>
              ))}
            </div>
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src="/about_image_01.png"
                alt="Couple Photo 1"
                className="w-[22vw] h-[65vh] object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center relative px-8 max-w-3xl mx-auto">
            <p ref={taglineRef} className="font-lora text-xl text-[#BB7F2557] mb-3">
              Welcome to Evara
            </p>
            <h2 ref={headingRef} className="font-cinzel-decorative text-4xl text-[#00223F] mb-6">
              Where Every Love Story Finds Its Magic
            </h2>

            <div className="max-w-2xl mx-auto">
              <p ref={paraRef} className="font-lora text-lg sm:text-xl text-[#BB7F25] leading-relaxed mb-8">
                Let your royal love story unfold in a canvas of timeless elegance where every detail is artfully curated and every memory becomes a masterpiece. Step into EVARA&apos;s world of everlasting celebration, where moments shine with grandeur and passion, echoing through eternity.
              </p>
            </div>

            <Link to="/services">
  <button
    ref={ctaRef}
    className="font-cinzel group relative overflow-hidden bg-transparent border-b-2 border-[#BB7F25] text-[#BB7F25] py-2 px-2 font-medium text-xl transition-all duration-300 hover:text-black hover:px-4 rounded-sm"
  >
    <span className="relative z-10 font-cinzel">View Services</span>
    <div className="absolute px-4 inset-0 bg-[#BB7F25] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
  </button>
</Link>
          </div>

          {/* Right Image wrapper with cards */}
          <div 
            ref={rightImgWrapRef} 
            className="flex-shrink-0 transform relative"
            onMouseEnter={() => setRightHovered(true)}
            onMouseLeave={() => setRightHovered(false)}
          >
            {/* Background cards */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) rightCardsRef.current[index] = el;
                  }}
                  className="absolute top-0 left-0 w-full h-full opacity-0"
                  style={{ zIndex: -index - 1 }}
                >
                  <img
                    src={index === 0 ? "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop" : "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop"}
                    alt={`Right Background Image ${index + 1}`}
                    className="w-[22vw] h-[65vh] object-cover rounded-lg shadow-xl"
                  />
                </div>
              ))}
            </div>
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src="/about_image_02.png"
                alt="Couple Photo 2"
                className="w-[22vw] h-[65vh] object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Static Decorative Pattern */}
        <div className="absolute bottom-16 left-16 z-20 opacity-60">
          <img
            src="/about_image_03.png"
            alt="Decorative Pattern"
            className="w-auto h-[35vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
}