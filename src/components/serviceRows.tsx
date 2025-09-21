import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
  keyPoints: string[];
  imageUrl: string;
}

interface ServiceSectionProps {
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    title: "Grand Value Selection",
    description: "From ancient palatial halls to sacred garden sanctuaries, we source, secure, and style India's finest venues, crafting the regal canvas where your memories unfold.",
    keyPoints: [
      "Access to exclusive palatial and heritage venues",
      "Dedicated venue manager for seamless coordination"
    ],
    imageUrl: "/service01.jpg"
  },
  {
    title: "Ritual Coordination",
    description: "With reverence for every custom, our maverick choreograph each ceremony and plans, ensuring authenticity and joy flow through every sacred moment.",
    keyPoints: [
      "Expert rituals and ritual escort",
      "Personalized script and sequence for ceremonies",
      "Sacred decor elements for guest and ceremonies",
      "Arrangement of traditional cups items and ceremonial music"
    ],
    imageUrl: "/service02.jpg"
  },
  {
    title: "Custom Wedding Design",
    description: "Luxury blooms in the details. Our team imagines photographed silk in color, fragrance, and meaning - infusing divine lighting and entertainment with your vision and legacy.",
    keyPoints: [
      "Bespoke decor concepts and color palettes",
      "Dedicated venue manager for seamless coordination",
      "Custom floral designs and installations",
      "Staging and floral installations for your occasion"
    ],
    imageUrl: "/service03.jpg"
  },
  {
    title: "Luxury Guest Management",
    description: "From royal welcomes to bespoke hospitality, your guests are enveloped in gracious comfort. Stylish suites every arrival, stay, and parting with thoughtful beauty and ease.",
    keyPoints: [
      "Bespoke decor concepts and color palettes",
      "Dedicated venue manager for seamless coordination",
      "Custom floral designs and installations",
      "Custom lighting and floral installations for your occasion"
    ],
    imageUrl: "/service04.jpg"
  },
  {
    title: "Vendor Coordination & Management",
    description: "Behind every flawless celebration is seamless orchestration. We harmonize every detail—from culminating culinary design, and entertainment elements as one grand symphony.",
    keyPoints: [
      "Bespoke decor concepts and color palettes",
      "Dedicated venue manager for seamless coordination",
      "Custom floral designs and installations",
      "Custom lighting and floral installations for your occasion"
    ],
    imageUrl: "/service05.jpg"
  }
];

const ServiceSection: React.FC<ServiceSectionProps> = ({ services = defaultServices }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const serviceRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const separatorRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    // Load GSAP from CDN
    const loadGSAP = async () => {
      if (typeof window === 'undefined') return;
      
      // Check if GSAP is already loaded
      if (!(window as any).gsap) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        document.head.appendChild(script);
        
        await new Promise<void>((resolve) => {
          script.onload = () => resolve();
        });
      }

      // Load ScrollTrigger plugin
      if (!(window as any).ScrollTrigger) {
        const scrollScript = document.createElement('script');
        scrollScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        document.head.appendChild(scrollScript);
        
        await new Promise<void>((resolve) => {
          scrollScript.onload = () => resolve();
        });
      }

      initAnimations();
    };

    const initAnimations = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      
      if (!gsap || !ScrollTrigger) return;
      
      gsap.registerPlugin(ScrollTrigger);

      // Set initial states
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9
      });

      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const isEvenRow = index % 2 === 1;
          gsap.set(ref, {
            opacity: 0,
            x: isEvenRow ? -120 : 120
          });
        }
      });

      separatorRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, {
            opacity: 0,
            scaleX: 0
          });
        }
      });

      // Animate title on load
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3
      });

      // Animate service rows with ScrollTrigger
      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const isEvenRow = index % 2 === 1;
          
          gsap.to(ref, {
            opacity: 1,
            x: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          });

          // Animate child elements with stagger
          const image = ref.querySelector('.service-image');
          const content = ref.querySelector('.service-content');
          const title = ref.querySelector('.service-title');
          const description = ref.querySelector('.service-description');
          const keyPoints = ref.querySelectorAll('.key-point');

          if (image && content) {
            gsap.set(image, {
              opacity: 0,
              x: isEvenRow ? -60 : 60
            });
            
            gsap.set(content, {
              opacity: 0,
              y: 40
            });

            ScrollTrigger.create({
              trigger: ref,
              start: "top 75%",
              onEnter: () => {
                // Animate image with only X direction
                gsap.to(image, {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  ease: "power2.out"
                });
                
                // Animate content
                gsap.to(content, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power2.out",
                  delay: 0.2
                });

                // Animate content children
                gsap.to([title, description], {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  stagger: 0.1,
                  delay: 0.3
                });

                gsap.to(keyPoints, {
                  opacity: 1,
                  x: 0,
                  duration: 0.6,
                  ease: "power2.out",
                  stagger: 0.1,
                  delay: 0.6
                });
              }
            });
          }
        }
      });

      // Animate separators
      separatorRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.to(ref, {
            opacity: 0.4,
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      };
    };

    loadGSAP();
  }, []);

  return (
    <div ref={containerRef} className="w-full pt-24 pb-20 relative overflow-hidden" style={{ backgroundColor: '#FFFBF1' }}>
      {/* Background Feather Patterns */}
      <div 
        className="absolute opacity-100 pointer-events-none z-0"
        style={{ 
          top: '-45px',
          left: '-150px', 
          transform: 'rotate(0deg)',
          width: '400px',
          height: '436px'
        }}
      >
        <img src="/pillar.png" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div 
        className="absolute opacity-100 pointer-events-none z-50"
        style={{ 
          top: '55px',
          right: '-300px',
          transform: 'rotate(-193.26deg) scaleY(-1)', // Flip horizontally
          width: '750px',
          height: '400px'
        }}
      >
        <img src="/feather.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 text-center relative px-12 z-30 mb-20">
        <h2 
          ref={titleRef}
          className="font-cinzel tracking-[-0.07em] text-6xl text-[#BB7F25]"
          style={{ opacity: 0 }}
        >
          SERVICES
        </h2>
      </div>

      {services.map((service, index) => {
        const isEvenRow = index % 2 === 1;
        const backgroundColor = index % 2 === 0 ? '#FAF3DF' : '#FFFBF1';
        
        return (
          <div key={index}>
            {/* Decorative line separator */}
            {index > 0 && (
              <div className="w-full flex justify-center">
                <div 
                  ref={(el) => separatorRefs.current[index - 1] = el}
                  className="w-96 h-px"
                  style={{ 
                    backgroundColor: '#BB7F25',
                    opacity: 0,
                    transformOrigin: 'center'
                  }}
                />
              </div>
            )}
            
            <div 
              ref={(el) => serviceRefs.current[index] = el}
              className="flex items-center"
              style={{ 
                height: '70vh',
                backgroundColor: backgroundColor,
                opacity: 0
              }}
            >
              {/* Image on left for odd rows (index 0, 2, 4...) */}
              {!isEvenRow && (
                <div 
                  className="service-image"
                  style={{ 
                    width: '40vw', 
                    height: '60vh',
                    opacity: 0
                  }}
                >
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Content Section */}
              <div 
                className="flex flex-col justify-center service-content"
                style={{ 
                  width: '60vw',
                  height: '60vh',
                  paddingTop: '6rem',
                  paddingBottom: '6rem',
                  paddingLeft: '5rem',
                  paddingRight: '5rem',
                  opacity: 0
                }}
              >
                {/* Title */}
                <h2 
                  className="text-center mb-8 service-title"
                  style={{
                    fontFamily: 'Cinzel Decorative, serif',
                    fontWeight: 400,
                    fontSize: '27.35px',
                    lineHeight: '95%',
                    letterSpacing: '0%',
                    color: '#00223F',
                    opacity: 0,
                    transform: 'translateY(30px)'
                  }}
                >
                  {service.title}
                </h2>
                
                {/* Description */}
                <p 
                  className="text-center mb-12 px-8 service-description"
                  style={{
                    fontFamily: 'lora, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '110%',
                    letterSpacing: '0%',
                    color: '#BB7F25',
                    opacity: 0,
                    transform: 'translateY(30px)'
                  }}
                >
                  {service.description}
                </p>
                
                {/* Key Points Grid */}
                <div 
                  className="px-8"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: service.keyPoints.length <= 2 ? '1fr' : '1fr 1fr',
                    gridAutoFlow: 'row',
                    gap: '1.5rem'
                  }}
                >
                  {service.keyPoints.map((point, pointIndex) => (
                    <div 
                      key={pointIndex}
                      className="flex items-start space-x-3 key-point"
                      style={{
                        opacity: 0,
                        transform: 'translateX(-20px)'
                      }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#BB7F25' }}
                      ></div>
                      <p 
                        style={{
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 400,
                          fontSize: '15px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#BB7F25'
                        }}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image on right for even rows (index 1, 3, 5...) */}
              {isEvenRow && (
                <div 
                  className="service-image"
                  style={{ 
                    width: '40vw', 
                    height: '60vh',
                    opacity: 0
                  }}
                >
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSection;