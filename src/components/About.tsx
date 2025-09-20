import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
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
      // Create GSAP context scoped to this section
      const ctx = gsap.context(() => {
        // Kill any existing ScrollTrigger with this ID first
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars?.id === 'about-section-trigger') {
            trigger.kill();
          }
        });

        // Initial states - elements start outside viewport
        gsap.set(leftImg, { opacity: 1, x: "-100vw", rotation: -8.53 });
        gsap.set(rightImg, { opacity: 1, x: "100vw", rotation: 8.53 });
        gsap.set([tagline, heading, para, cta], { opacity: 0 });

        // Master timeline with smoother timing
        const tl = gsap.timeline({
          defaults: { ease: 'power1.inOut' },
        });

        // Create ScrollTrigger separately for better control
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: section,
          start: 'clamp(top top)',
          end: '+=180%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: 'about-section-trigger',
          animation: tl,
          onRefresh: () => {
            // Ensure proper state on refresh
            gsap.set(leftImg, { opacity: 1, x: "-100vw", rotation: -8.53 });
            gsap.set(rightImg, { opacity: 1, x: "100vw", rotation: 8.53 });
            gsap.set([tagline, heading, para, cta], { opacity: 0 });
          }
        });

        // Phase A: Images slide in smoothly from sides (0 -> 1.0)
        tl.addLabel('start', 0);
        
        tl.to(leftImg, {
          x: 0,
          duration: 1.0,
          ease: 'power1.inOut'
        }, 'start');

        tl.to(rightImg, {
          x: 0,
          duration: 1.0,
          ease: 'power1.inOut'
        }, 'start');

        // Phase B: Text elements simple fade in (0.5 -> 1.5)
        tl.addLabel('textStart', 0.5);
        
        tl.to(tagline, {
          opacity: 1,
          duration: 0.4,
          ease: 'power1.inOut'
        }, 'textStart');

        tl.to(heading, {
          opacity: 1,
          duration: 0.4,
          ease: 'power1.inOut'
        }, 'textStart+=0.2');

        tl.to(para, {
          opacity: 1,
          duration: 0.4,
          ease: 'power1.inOut'
        }, 'textStart+=0.4');

        tl.to(cta, {
          opacity: 1,
          duration: 0.4,
          ease: 'power1.inOut'
        }, 'textStart+=0.6');

        tl.addLabel('end', 1.8);

      }, section); // Scope to this section element

      return ctx;
    };

    // Initialize with a small delay to prevent conflicts
    const timer = setTimeout(() => {
      const ctx = initAnimation();
      
      // Store context for cleanup
      (section as any)._gsapContext = ctx;
    }, 50);

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
        <div className="flex items-center justify-between gap-4 h-screen px-4">
          {/* Left Image wrapper - shifted more to right */}
          <div ref={leftImgWrapRef} className="flex-shrink-0 transform ml-16">
            <img
              src="/about_image_01.png"
              alt="Couple Photo 1"
              className="w-[22vw] h-[65vh] object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center relative px-4 max-w-3xl mx-auto">
            {/* Top text block */}
            <p ref={taglineRef} className="font-lora text-xl text-[#BB7F2557] mb-3">
              Welcome to Evara
            </p>
            <h2 ref={headingRef} className="font-cinzel-decorative text-4xl text-[#00223F] mb-6">
              Where Every Love Story Finds Its Magic
            </h2>

            {/* Bottom text block */}
            <div className="max-w-2xl mx-auto">
              <p ref={paraRef} className="font-lora text-lg sm:text-xl text-[#BB7F25] leading-relaxed mb-8">
                Let your royal love story unfold in a canvas of timeless elegance where every detail is artfully curated and every memory becomes a masterpiece. Step into EVARA&apos;s world of everlasting celebration, where moments shine with grandeur and passion, echoing through eternity.
              </p>
            </div>

            <button
              ref={ctaRef}
              className="font-cinzel group relative overflow-hidden bg-transparent border-b-2 border-[#BB7F25] text-[#BB7F25] py-2 px-2 font-medium text-xl transition-all duration-300 hover:text-black hover:px-4 rounded-sm"
            >
              <span className="relative z-10 font-cinzel">View Services</span>
              <div className="absolute px-4 inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </button>
          </div>

          {/* Right Image wrapper - shifted more to right */}
          <div ref={rightImgWrapRef} className="flex-shrink-0 transform mr-16">
            <img
              src="/about_image_02.png"
              alt="Couple Photo 2"
              className="w-[22vw] h-[65vh] object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Static Decorative Pattern - no animations */}
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