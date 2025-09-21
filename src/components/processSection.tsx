import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export function WeddingTimelineDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "DISCOVERY & VISION",
      description: "We begin by understanding your love story, personality, and dreams to create a celebration uniquely yours.",
      image: "/service04.jpg",
      alt: "Couple in traditional wedding attire during ceremony"
    },
    {
      number: "02", 
      title: "DESIGN & PLANNING",
      description: "Our expert team curates every detail: venue, décor, ritual, blending tradition with luxurious elegance. All with your approval of course",
      image: "/service05.jpg",
      alt: "Wedding ceremony with floral decorations"
    },
    {
      number: "03",
      title: "VENDOR COORDINATION", 
      description: "We carefully select and manage trusted partners, ensuring seamless execution and flawless experiences",
      image: "/service06.jpg",
      alt: "Wedding ceremony coordination"
    },
    {
      number: "04",
      title: "CELEBRATION AND BEYOND",
      description: "From the grand ceremony to heartfelt moments, we orchestrate your wedding journey with grace and joy",
      image: "/service07.jpg", 
      alt: "Joyful wedding celebration with couple and guests"
    }
  ];

  // Your manual image styles - increased sizes, no shadows
  const img1: React.CSSProperties = {
    width: "450px", // Increased from 343px
    height: "420px", // Increased from 342px
    objectFit: "cover",
    borderRadius: 0,
    border: "22px solid #FFFBF1",
    transition: "transform 0.3s ease",
  };

  const img2: React.CSSProperties = {
    width: "480px", // Increased from 390px
    height: "350px", // Increased from 265px
    objectFit: "cover",
    borderRadius: 0,
    transition: "transform 0.3s ease",
    border: "22px solid #FFFBF1",
  };

  const img3: React.CSSProperties = {
    width: "350px", // Increased from 278px
    height: "340px", // Increased from 347px
    objectFit: "cover",
    borderRadius: 0,
    border: "22px solid #FFFBF1", 
    transition: "transform 0.3s ease",
  };

  const img4: React.CSSProperties = {
    width: "500px", // Increased from 411px
    height: "370px", // Increased from 316px
    objectFit: "cover",
    borderRadius: 0,
    border: "22px solid #FFFBF1",
    transition: "transform 0.3s ease",
  };

  // Your manual container styles - converted from Figma positions
  const right: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "1200px", // Increased to accommodate the taller layout
  };

  const imageContainer1: React.CSSProperties = {
    position: "absolute",
    top: "-20px", // Relative start position (Figma: 2634px from document top)
    left: "250px", // Converted from Figma left: 892px for 1280px width
  };

  const imageContainer2: React.CSSProperties = {
    position: "absolute",
    top: "328px", // Relative position (2962-2634 = 328px from first image)
    left: "100px", // Converted from Figma left: 780px for 1280px width
  };

  const imageContainer3: React.CSSProperties = {
    position: "absolute",
    top: "604px", // Relative position (3188-2634 = 554px from first image)
    left: "265px", // Converted from Figma left: 919px for 1280px width
  };

  const imageContainer4: React.CSSProperties = {
    position: "absolute",
    top: "900px", // Relative position (3472-2634 = 838px from first image)
    left: "180px", // Converted from Figma left: 824px for 1280px width
  };

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div 
      className="w-full bg-[#FFFBF1] font-sans py-36 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background Feather Images - positioned absolutely behind all content */}
      
      {/* Feather 1 - Top Left */}
<div 
  className="absolute opacity-100 pointer-events-none z-0"
  style={{ 
    top: '-45px',
    left: '-150px', 
    transform: 'rotate(20deg)',
    width: '600px',
    height: '436px'
  }}
>
  <img src="/feather.png" alt="" className="w-full h-full object-cover" />
</div>

{/* Feather 2 - Top Right */}
<div 
  className="absolute opacity-100 pointer-events-none z-0"
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

{/* Feather 3 - Middle Left */}
<div 
  className="absolute opacity-100 pointer-events-none z-0"
  style={{ 
    top: '385px',
    right: '420px',
    transform: 'rotate(165.26deg) scaleY(-1)',
    width: '400px',
    height: '456px'
  }}
>
  <img src="/feather.png" alt="" className="w-full h-full object-cover" />
</div>

{/* Feather 4 - Bottom Left */}
<div 
  className="absolute opacity-100 pointer-events-none z-0"
  style={{ 
    top: '1400px',
    left: '-100px',
    transform: 'rotate(-143.26deg) scaleY(-1) scaleX(-1)',
    width: '500px',
    height: '536px'
  }}
>
  <img src="/feather.png" alt="" className="w-full h-full object-cover" />
</div>

      <div className="flex-1 text-center relative px-12 z-30">
        <h2 className="font-cinzel tracking-[-0.07em] text-6xl text-[#BB7F25] ">OUR PROCESS</h2>
      </div>
      
      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 mt-32">
        {/* Container with both timeline and images */}
        <div className="flex">
          {/* Left Column - Timeline with Steps */}
          <div className="flex-1">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex justify-start md:gap-8 h-[48vh] mb-4"
              >
                {/* Sticky Content */}
                <div className="sticky flex flex-col md:flex-row z-40 items-start top-16 self-start max-w-xs lg:max-w-lg md:w-full h-fit">
                  {/* Pin Point */}
                  <motion.div 
                    className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-amber-50 flex items-center justify-center border-2 border-amber-300/50 shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <motion.div 
                      className="h-4 w-4 rounded-full bg-amber-600 border-2 border-amber-200 p-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
                      viewport={{ once: true, amount: 0.8 }}
                    />
                  </motion.div>
                  
                  {/* Step Content */}
                  <div className="hidden md:block md:pl-20 md:w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.8 }}
                    >
                      <motion.div 
                        className="text-6xl font-medium tracking-[-0.1em] text-[#BB7F25] mb-4 font-cinzel-decorative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true, amount: 0.8 }}
                      >
                        {step.number}
                      </motion.div>
                      <motion.h3 
                        className="text-3xl tracking-[-0.07em] text-[#00223F] font-cinzel mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.8 }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="text-[#00223F8C] font-roboto text-md leading-relaxed max-w-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true, amount: 0.8 }}
                      >
                        {step.description}
                      </motion.p>
                    </motion.div>
                  </div>

                  {/* Mobile Content */}
                  <div className="md:hidden block mb-8 absolute top-16 pl-20">
                    <div className="text-4xl font-bold text-amber-600 mb-4 font-cinzel-decorative">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-cinzel font-bold text-amber-900 mb-4 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-amber-800 font-roboto text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Timeline Line */}
            <div
              style={{
                height: height - 350 + "px",
                top: "1px"
              }}
              className="absolute md:left-8 left-8 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-[0%] via-amber-300 to-transparent to-[99%] opacity-40"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-amber-600 via-amber-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>

          {/* Right Column - Your Manual Image Layout with Enhanced Animations */}
          <div className="flex-1 relative z-20">
            <div style={right}>
              {/* Image 1 - Enhanced fade in from right with rotation and scale */}
              <motion.div 
                style={imageContainer1}
                initial={{ 
                  opacity: 0, 
                  x: 150, 
                  y: -30,
                  scale: 0.8,
                  rotate: 5
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  scale: 1,
                  rotate: 0
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.1 
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.4 }
                }}
              >
                <motion.img
                  src="/service04.jpg"
                  alt="Traditional Wedding Ceremony"
                  style={img1}
                  className="transition-all duration-500"
                  initial={{ filter: "blur(8px)" }}
                  whileInView={{ filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>
              
              {/* Image 2 - Enhanced fade in from left with bounce */}
              <motion.div 
                style={imageContainer2}
                initial={{ 
                  opacity: 0, 
                  x: -120, 
                  y: 40,
                  scale: 0.7,
                  rotate: -8
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  scale: 1,
                  rotate: 0
                }}
                transition={{ 
                  duration: 1.4, 
                  ease: [0.68, -0.55, 0.265, 1.55],
                  delay: 0.3 
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ 
                  scale: 1.08,
                  rotate: 3,
                  transition: { duration: 0.5, type: "spring", stiffness: 300 }
                }}
              >
                <motion.img
                  src="/service05.jpg"
                  alt="Outdoor Wedding Setup"
                  style={img2}
                  className="transition-all duration-500"
                  initial={{ filter: "brightness(0.6) blur(6px)" }}
                  whileInView={{ filter: "brightness(1) blur(0px)" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
              
              {/* Image 3 - Enhanced fade in from right with elastic effect */}
              <motion.div 
                style={imageContainer3}
                initial={{ 
                  opacity: 0, 
                  x: 180, 
                  y: -50,
                  scale: 0.6,
                  rotate: 12
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  scale: 1,
                  rotate: 0
                }}
                transition={{ 
                  duration: 1.6, 
                  ease: [0.175, 0.885, 0.32, 1.275],
                  delay: 0.5 
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ 
                  scale: 1.12,
                  rotate: -5,
                  y: -10,
                  transition: { duration: 0.6, type: "spring", stiffness: 200 }
                }}
              >
                <motion.img
                  src="/service06.jpg"
                  alt="Wedding Venue Coordination"
                  style={img3}
                  className="transition-all duration-500"
                  initial={{ 
                    filter: "saturate(0.3) blur(10px)",
                    scale: 1.1
                  }}
                  whileInView={{ 
                    filter: "saturate(1) blur(0px)",
                    scale: 1
                  }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                />
              </motion.div>
              
              {/* Image 4 - Enhanced fade in from left with complex motion */}
              <motion.div 
                style={imageContainer4}
                initial={{ 
                  opacity: 0, 
                  x: -160, 
                  y: 60,
                  scale: 0.5,
                  rotate: -15
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  scale: 1,
                  rotate: 0
                }}
                transition={{ 
                  duration: 1.8, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.7 
                }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ 
                  scale: 1.06,
                  rotate: 4,
                  x: 5,
                  transition: { 
                    duration: 0.7, 
                    type: "spring", 
                    stiffness: 150,
                    damping: 10
                  }
                }}
              >
                <motion.img
                  src="/service07.jpg"
                  alt="Celebration Moments"
                  style={img4}
                  className="transition-all duration-500"
                  initial={{ 
                    filter: "contrast(0.5) blur(12px)",
                    borderRadius: "20px"
                  }}
                  whileInView={{ 
                    filter: "contrast(1) blur(0px)",
                    borderRadius: "0px"
                  }}
                  transition={{ duration: 1.4, delay: 0.9 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1140px) {
          .sticky {
            position: relative !important;
          }
        }

        @media (max-width: 768px) {
          .flex {
            flex-direction: column !important;
          }
          
          div[style*="position: absolute"] {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            margin: 20px auto !important;
            display: flex !important;
            justify-content: center !important;
          }
          
          img[src="/service04.jpg"] {
            width: 280px !important;
            height: 280px !important;
          }
          img[src="/service05.jpg"] {
            width: 320px !important;
            height: 220px !important;
            border: 10px solid #FFFBF1 !important;
          }
          img[src="/service06.jpg"] {
            width: 230px !important;
            height: 290px !important;
            border: 10px solid #FFFBF1 !important;
          }
          img[src="/service07.jpg"] {
            width: 280px !important;
            height: 280px !important;
          }
        }

        @media (max-width: 480px) {
          img[src="/service04.jpg"] {
            width: 240px !important;
            height: 240px !important;
          }
          img[src="/service05.jpg"] {
            width: 280px !important;
            height: 190px !important;
            border: 5px solid #FFFBF1 !important;
          }
          img[src="/service06.jpg"] {
            width: 200px !important;
            height: 250px !important;
            border: 5px solid #FFFBF1 !important;
          }
          img[src="/service07.jpg"] {
            width: 240px !important;
            height: 240px !important;
          }
        }
      `}</style>
    </div>
  );
}