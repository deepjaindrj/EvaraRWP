import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RoyalLegacySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const colorLayerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnWrapRef = useRef<HTMLDivElement>(null);
  const btnElRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const colorLayer = colorLayerRef.current;
    const titleEl = titleRef.current;
    const descEl = descRef.current;
    const btnWrap = btnWrapRef.current;
    const btnEl = btnElRef.current;

    if (!section || !colorLayer || !titleEl || !descEl || !btnWrap || !btnEl) return;

    let scrollTriggerInstance: ScrollTrigger | null = null;

    const initAnimation = () => {
      // Create GSAP context scoped to this section
      const ctx = gsap.context(() => {
        // Kill any existing ScrollTrigger with this ID first
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars?.id === 'royal-legacy-trigger') {
            trigger.kill();
          }
        });

        // Initial states
        gsap.set(colorLayer, { clipPath: 'circle(0% at 50% 50%)' });
        gsap.set([titleEl, descEl, btnWrap], { opacity: 0 });
        gsap.set(titleEl, { y: -80, color: '#9CA3AF', textShadow: '2px 0px 0px rgba(156,163,175,0.14)' });
        gsap.set(descEl, { y: 60, color: '#9CA3AF' });
        gsap.set(btnWrap, { y: 40, scale: 0.9 });
        gsap.set(btnEl, { background: 'linear-gradient(90deg, #6B7280 0%, #9CA3AF 100%)', color: '#FFFFFF' });

        // Master timeline - synchronized animations
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
        });

        // Create ScrollTrigger separately for better control
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: section,
          start: 'clamp(top top)',
          end: '+=300%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: 'royal-legacy-trigger',
          animation: tl,
          onRefresh: () => {
            // Ensure proper state on refresh
            gsap.set(colorLayer, { clipPath: 'circle(0% at 50% 50%)' });
            gsap.set([titleEl, descEl, btnWrap], { opacity: 0 });
            gsap.set(titleEl, { y: -80, color: '#9CA3AF', textShadow: '2px 0px 0px rgba(156,163,175,0.14)' });
            gsap.set(descEl, { y: 60, color: '#9CA3AF' });
            gsap.set(btnWrap, { y: 40, scale: 0.9 });
            gsap.set(btnEl, { background: 'linear-gradient(90deg, #6B7280 0%, #9CA3AF 100%)', color: '#FFFFFF' });
          }
        });

        // Phase A: Circle reveal AND simultaneous text animations (0 -> 1)
        tl.addLabel('start', 0);
        
        // Circle reveal
        tl.to(colorLayer, { 
          clipPath: 'circle(150% at 50% 50%)', 
          duration: 1 
        }, 'start');

        // Text animations happening simultaneously with circle reveal
        tl.to(titleEl, { 
          opacity: 1, 
          y: 0, 
          color: '#FDD894', 
          textShadow: '2px 0px 0px rgba(253,216,148,0.14)',
          ease: 'power2.out',
          duration: 1 
        }, 'start');

        tl.to(descEl, { 
          opacity: 1, 
          y: 0, 
          color: '#FFFBF1',
          ease: 'power2.out',
          duration: 1 
        }, 'start+=0.2');

        tl.to(btnWrap, { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          ease: 'back.out(1.7)',
          duration: 1 
        }, 'start+=0.4');

        tl.to(btnEl, { 
          background: 'linear-gradient(90deg, #BB7F25 0%, #FDD894 100%)', 
          color: '#00223F',
          duration: 1 
        }, 'start+=0.4');

        // Phase B: Optional settling phase (1 -> 3)
        tl.addLabel('mid', 1);
        tl.addLabel('end', 3);

      }, section); // Scope to this section element

      return ctx;
    };

    // Initialize with a different delay to prevent conflicts
    const timer = setTimeout(() => {
      const ctx = initAnimation();
      
      // Store context for cleanup
      (section as any)._gsapContext = ctx;
    }, 150); // Different delay than About component

    // Cleanup function
    return () => {
      clearTimeout(timer);
      
      // Clean up ScrollTrigger instance
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        scrollTriggerInstance = null;
      }
      
      // Clean up GSAP context
      if ((section as any)?._gsapContext) {
        (section as any)._gsapContext.revert();
        (section as any)._gsapContext = null;
      }
    };
  }, []);

  // Separate effect for global ScrollTrigger refresh - debounced
  useEffect(() => {
    let refreshTimeout: ReturnType<typeof setTimeout>;

    const handleRefresh = () => {
      clearTimeout(refreshTimeout);
      refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
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
      className="relative flex flex-col items-center pt-32 text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ height: '110vh' }}
    >
      {/* B&W background */}
      <div
        className="absolute inset-0 grayscale brightness-75"
        style={{
          backgroundImage: 'url("/cta_image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Color layer revealed by circular clip-path */}
      <div
        ref={colorLayerRef}
        className="absolute inset-0 z-5"
        style={{
          backgroundImage: 'url("/cta_image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          clipPath: 'circle(0% at 50% 50%)'
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-25 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto space-y-12">
        <h1
          ref={titleRef}
          className="font-cinzel mb-4 sm:mb-10 text-center leading-[96%] tracking-[-0.05em]"
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            filter: 'drop-shadow(inset 0 2px 6px rgba(0,0,0,0.3))'
          }}
        >
          <span className="block mb-2 sm:mb-4 font-cinzel">
            <span className="text-[1.2em] align-top font-cinzel">B</span>EGIN{' '}
            <span className="text-[1.2em] align-top font-cinzel">Y</span>OUR{' '}
            <span className="text-[1.2em] align-top font-cinzel">R</span>OYAL{' '}
            <span className="text-[1.2em] align-top font-cinzel">L</span>EGACY{' '}
          </span>
        </h1>

        <p
          ref={descRef}
          className="font-normal max-w-3xl mx-auto"
          style={{
            fontFamily: 'Lora',
            fontWeight: 400,
            fontSize: 'clamp(12px, 2.2vw, 22px)',
            lineHeight: '120%',
            letterSpacing: '0.2%',
            textAlign: 'center'
          }}
        >
          Step into a celebration crafted with timeless elegance and heartfelt artistry. Let EVARA transform your love story into a regal affair <br /> destined to be remembered for generations.
        </p>

        <div ref={btnWrapRef} className="pt-4">
          <button
            ref={btnElRef}
            className="px-6 py-4 rounded-full font-medium text-lg font-roboto shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoyalLegacySection;