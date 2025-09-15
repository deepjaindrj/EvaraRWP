// import React, { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// interface ProcessStep {
//   number: string;
//   title: string;
//   description: string;
//   image: string;
//   alt: string;
// }

// export function WeddingTimelineDemo() {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   const processSteps: ProcessStep[] = [
//     {
//       number: "01",
//       title: "DISCOVERY & VISION",
//       description: "We begin by understanding your love story, personality, and dreams to create a celebration uniquely yours.",
//       image: "service04.jpg",
//       alt: "Couple in traditional wedding attire during ceremony"
//     },
//     {
//       number: "02", 
//       title: "DESIGN & PLANNING",
//       description: "Our expert team curates every detail: venue, décor, ritual, blending tradition with luxurious elegance. All with your approval of course",
//       image: "service05.jpg",
//       alt: "Wedding ceremony with floral decorations"
//     },
//     {
//       number: "03",
//       title: "VENDOR COORDINATION", 
//       description: "We carefully select and manage trusted partners, ensuring seamless execution and flawless experiences",
//       image: "service06.jpg",
//       alt: "Wedding ceremony coordination"
//     },
//     {
//       number: "04",
//       title: "CELEBRATION AND BEYOND",
//       description: "From the grand ceremony to heartfelt moments, we orchestrate your wedding journey with grace and joy",
//       image: "service07.jpg", 
//       alt: "Joyful wedding celebration with couple and guests"
//     }
//   ];

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div 
//       className="w-full bg-gradient-to-br from-amber-50 to-orange-50 font-sans py-48 relative overflow-hidden"
//       ref={containerRef}
//     >
//       {/* Background Feathers - You can adjust positions by changing top, left, right values */}
      
//       {/* Feather 1 - Top Left */}
//       <div 
//         className="absolute opacity-10 pointer-events-none z-10"
//         style={{ 
//           top: '10%', 
//           left: '5%', 
//           transform: 'rotate(-15deg)',
//           width: '120px',
//           height: '120px'
//         }}
//       >
//         <img src="/feather.png" alt="" className="w-full h-full object-contain" />
//       </div>

//       {/* Feather 2 - Top Right */}
//       <div 
//         className="absolute opacity-15 pointer-events-none z-10"
//         style={{ 
//           top: '15%', 
//           right: '8%', 
//           transform: 'rotate(25deg)',
//           width: '100px',
//           height: '100px'
//         }}
//       >
//         <img src="/feather.png" alt="" className="w-full h-full object-contain" />
//       </div>

//       {/* Feather 3 - Middle Left */}
//       <div 
//         className="absolute opacity-12 pointer-events-none z-10"
//         style={{ 
//           top: '40%', 
//           left: '3%', 
//           transform: 'rotate(45deg)',
//           width: '80px',
//           height: '80px'
//         }}
//       >
//         <img src="/feather.png" alt="" className="w-full h-full object-contain" />
//       </div>

//       {/* Feather 4 - Middle Right */}
//       <div 
//         className="absolute opacity-10 pointer-events-none z-10"
//         style={{ 
//           top: '55%', 
//           right: '10%', 
//           transform: 'rotate(-30deg)',
//           width: '110px',
//           height: '110px'
//         }}
//       >
//         <img src="/feather.png" alt="" className="w-full h-full object-contain" />
//       </div>

//       {/* Feather 5 - Bottom Left */}
//       <div 
//         className="absolute opacity-8 pointer-events-none z-10"
//         style={{ 
//           top: '75%', 
//           left: '7%', 
//           transform: 'rotate(10deg)',
//           width: '90px',
//           height: '90px'
//         }}
//       >
//         <img src="/feather.png" alt="" className="w-full h-full object-contain" />
//       </div>

//       {/* Feather 6 - Bottom Center */}
//       <div 
//         className="absolute opacity-12 pointer-events-none z-10"
//         style={{ 
//           bottom: '10%', 
//           left: '50%', 
//           transform: 'translateX(-50%) rotate(-45deg)',
//           width: '70px',
//           height: '70px'
//         }}
//       >
//         <img src="/feather.png" alt="" className="w-full h-full object-contain" />
//       </div>

//       <div className="flex-1 text-center relative px-12 z-30">
//         <h2 className="font-cinzel tracking-[-0.07em] text-6xl text-[#BB7F25] mb-8">OUR PROCESS</h2>
//       </div>
      
//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20 mt-48">
//         {processSteps.map((step, index) => (
//           <div
//             key={index}
//             className="flex justify-center items-center md:gap-16 h-[80vh] mb-16 relative"
//           >
//             {/* Left Column - Content */}
//             <div className="flex-1 max-w-lg text-right pr-8">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: false, amount: 0.8 }}
//               >
//                 <div className="text-6xl font-medium tracking-[-0.1em] text-[#BB7F25] mb-4 font-cinzel-decorative">
//                   {step.number}
//                 </div>
//                 <h3 className="text-3xl tracking-[-0.07em] text-[#00223F] font-cinzel mb-4">
//                   {step.title}
//                 </h3>
//                 <p className="text-[#00223F8C] font-roboto text-md leading-relaxed">
//                   {step.description}
//                 </p>
//               </motion.div>
//             </div>

//             {/* Center - Pin Point */}
//             <div className="flex items-center justify-center z-40">
//               <motion.div 
//                 className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center shadow-lg"
//                 initial={{ scale: 0, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.4, delay: 0.2 }}
//                 viewport={{ once: false, amount: 0.8 }}
//               >
//                 <motion.div 
//                   className="h-6 w-6 rounded-full bg-amber-600 border-2 border-amber-200"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ duration: 0.3, delay: 0.4 }}
//                   viewport={{ once: false, amount: 0.8 }}
//                 />
//               </motion.div>
//             </div>

//             {/* Right Column - Images */}
//             <div className="flex-1 max-w-lg pl-8">
//               <motion.div 
//                 className="relative rounded-2xl overflow-hidden shadow-2xl group"
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 viewport={{ once: true, amount: 0.5 }}
//               >
//                 <img 
//                   src={step.image} 
//                   alt={step.alt}
//                   className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//               </motion.div>
//             </div>

//             {/* Mobile Layout */}
//             <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center p-8">
//               <div className="text-4xl font-bold text-amber-600 mb-4 font-serif">
//                 {step.number}
//               </div>
//               <h3 className="text-xl font-bold text-amber-900 mb-4 tracking-wide text-center">
//                 {step.title}
//               </h3>
//               <p className="text-amber-800 text-sm leading-relaxed text-center mb-6">
//                 {step.description}
//               </p>
//               <div className="w-full max-w-sm">
//                 <img 
//                   src={step.image} 
//                   alt={step.alt}
//                   className="w-full h-64 object-cover rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Timeline Line - Centered and only between pin points */}
//         <div
//           style={{
//             height: height * 0.8 + "px", // Reduced height to not extend beyond
//             top: "10%", // Start from first pin point area
//           }}
//           className="absolute left-1/2 transform -translate-x-1/2 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-[5%] via-amber-300 to-transparent to-[95%] opacity-40 hidden md:block"
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-amber-600 via-amber-500 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import  { useEffect, useRef, useState } from "react";
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
      image: "service04.jpg",
      alt: "Couple in traditional wedding attire during ceremony"
    },
    {
      number: "02", 
      title: "DESIGN & PLANNING",
      description: "Our expert team curates every detail: venue, décor, ritual, blending tradition with luxurious elegance. All with your approval of course",
      image: "service05.jpg",
      alt: "Wedding ceremony with floral decorations"
    },
    {
      number: "03",
      title: "VENDOR COORDINATION", 
      description: "We carefully select and manage trusted partners, ensuring seamless execution and flawless experiences",
      image: "service06.jpg",
      alt: "Wedding ceremony coordination"
    },
    {
      number: "04",
      title: "CELEBRATION AND BEYOND",
      description: "From the grand ceremony to heartfelt moments, we orchestrate your wedding journey with grace and joy",
      image: "service07.jpg", 
      alt: "Joyful wedding celebration with couple and guests"
    }
  ];

  // Provide position, marginTop, and size for each image step
  const getImageConfig = (index: number) => {
    const configs = [
      { position: "justify-end", marginTop: "mt-0", marginLeft:"ml-32" , size: "w-full max-w-xl h-[500px]" },
      { position: "justify-start", marginTop: "mt-0", size: "w-full max-w-xl h-[450px]" },
      { position: "justify-end", marginTop: "mt-0", marginLeft:"ml-32", size: "w-full max-w-xl h-[400px]" },
      { position: "justify-start", marginTop: "mt-0", size: "w-full max-w-xl h-[450px]" }
    ];
    return configs[index] || configs[0];
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
      className="w-full bg-gradient-to-br from-amber-50 to-orange-50 font-sans py-48 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background Feather Images - positioned absolutely behind all content */}
      
      {/* Feather 1 - Top Left */}
      <div 
        className="absolute top-20 left-10 opacity-10 pointer-events-none z-0"
        style={{ transform: 'rotate(-15deg)' }}
      >
        <img src="/feather.png" alt="" className="w-32 h-32" />
      </div>
      
      {/* Feather 2 - Top Right */}
      <div 
        className="absolute top-32 right-20 opacity-15 pointer-events-none z-0"
        style={{ transform: 'rotate(25deg)' }}
      >
        <img src="/feather.png" alt="" className="w-24 h-24" />
      </div>
      
      {/* Feather 3 - Middle Left */}
      <div 
        className="absolute top-1/3 left-0 opacity-8 pointer-events-none z-0"
        style={{ transform: 'rotate(-45deg) translateX(-20px)' }}
      >
        <img src="/feather.png" alt="" className="w-40 h-40" />
      </div>
      
      {/* Feather 4 - Middle Right */}
      <div 
        className="absolute top-1/2 right-10 opacity-12 pointer-events-none z-0"
        style={{ transform: 'rotate(60deg)' }}
      >
        <img src="/feather.png" alt="" className="w-28 h-28" />
      </div>
      
      {/* Feather 5 - Bottom Left */}
      <div 
        className="absolute bottom-40 left-16 opacity-10 pointer-events-none z-0"
        style={{ transform: 'rotate(-30deg)' }}
      >
        <img src="/feather.png" alt="" className="w-36 h-36" />
      </div>
      
      {/* Feather 6 - Bottom Right */}
      <div 
        className="absolute bottom-20 right-5 opacity-12 pointer-events-none z-0"
        style={{ transform: 'rotate(45deg)' }}
      >
        <img src="/feather.png" alt="" className="w-30 h-30" />
      </div>

        <div className="flex-1 text-center relative px-12 z-30">
            <h2 className="font-cinzel tracking-[-0.07em] text-6xl text-[#BB7F25] mb-8">OUR PROCESS</h2>
        </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 mt-48">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex justify-start md:gap-8 h-[90vh] mb-8"
          >
            {/* Left Column - Sticky Content */}
            <div className="sticky flex flex-col md:flex-row z-40 items-start top-16 self-start max-w-xs lg:max-w-lg md:w-full h-fit">
              {/* Pin Point */}
              <motion.div 
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-amber-50 flex items-center justify-center border-2 border-amber-300/50 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <motion.div 
                  className="h-4 w-4 rounded-full bg-amber-600 border-2 border-amber-200 p-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
                  viewport={{ once: false, amount: 0.8 }}
                />
              </motion.div>
              
              {/* Step Content */}
              <div className="hidden md:block md:pl-20 md:w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <motion.div 
                    className="text-6xl font-medium tracking-[-0.1em] text-[#BB7F25] mb-4 font-cinzel-decorative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: false, amount: 0.8 }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.h3 
                    className="text-3xl tracking-[-0.07em] text-[#00223F] font-cinzel mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.8 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[#00223F8C] font-roboto text-md leading-relaxed max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: false, amount: 0.8 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Staggered Layout Images */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full flex items-start">
              {/* Mobile Content */}
              <div className="md:hidden block mb-8 absolute top-16">
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

              {/* Staggered Image Layout */}
              <div className={`w-full flex ${getImageConfig(index).position} ${getImageConfig(index).marginTop}`}>
                <div className={`${getImageConfig(index).size} relative`}>
                  {/* Corner borders */}
                  <motion.div 
                    className="absolute -top-2 -left-2 w-8 h-8 border-l-3 border-t-3 border-amber-400 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    viewport={{ once: false, amount: 0.4 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 border-r-3 border-t-3 border-amber-400 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    viewport={{ once: false, amount: 0.4 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-8 h-8 border-l-3 border-b-3 border-amber-400 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.3 }}
                    viewport={{ once: false, amount: 0.4 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute -bottom-2 -right-2 w-8 h-8 border-r-3 border-b-3 border-amber-400 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.3 }}
                    viewport={{ once: false, amount: 0.4 }}
                  ></motion.div>

                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl group h-full border-2 border-amber-200/40"
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeOut",
                      delay: 0.3
                    }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: false, amount: 0.4 }}
                  >
                    <img 
                      src={step.image} 
                      alt={step.alt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent group-hover:from-black/15 transition-all duration-300"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Timeline Line - Now properly constrained */}
        <div
          style={{
            height: height - 650 + "px", // Adjusted for reduced gaps
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
    </div>
  );
}