import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const services = [
    { img: '/service01.jpg', title: 'Custom Wedding Design', desc: 'Every wedding a royal masterpiece' },
    { img: '/service02.jpg', title: 'Luxury Guest Management', desc: 'Seamless Comfort for Every Guest' },
    { img: '/service04.jpg', title: 'Personalized Invitations & Gifting', desc: 'Stories Written in Every Invitation and Gift' },
    { img: '/service06.jpg', title: 'Vendor Coordination & Supervision', desc: 'Trusted Partners, Flawless Execution' },
    { img: '/service03.jpg', title: 'Ritual Coordination', desc: 'Seamlessly weaving sacred traditions into your celebration' },
    { img: '/service05.jpg', title: 'Grand Venue Selection', desc: 'Palaces and Heritage, Perfectly Chosen' }
  ];

  return (
    <section className="flex justify-between items-center bg-[#FFFBF1] min-h-screen relative overflow-hidden">
      {/* Left decorative image - simple fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute left-[-10vw] top-1/2 transform -translate-y-1/2 z-10"
      >
        <img
          src="/about_image_03.png"
          alt="Decorative Pattern"
          className="w-auto h-[50vh] object-contain opacity-100"
        />
      </motion.div>

      {/* Center text content */}
      <div className="flex-1 text-center relative px-12 z-30">
        {/* Top section - simple fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-lora text-xl text-[#BB7F2557] mb-4"
          >
            Begin your royal journey
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-cinzel-decorative text-4xl text-[#00223F] mb-8"
          >
            STEP INTO THE SPLENDOR
          </motion.h2>
        </motion.div>

        {/* Bottom section - simple fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <p className="font-lora text-lg text-[#BB7F25] leading-relaxed mb-12 z-40">
              Let EVARA be your gateway to celebrations conceived in regal imagination and crafted with flawless artistry. Our suite of exquisite services transforms every moment—from the entrance to the final blessing—into a story woven with tradition, joy, and luxury. Whether you desire a majestic palace gathering or an intimate affair drenched in heritage, our expertise ensures your experience is as extraordinary as your love story.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="font-cinzel group relative overflow-hidden bg-transparent border-b-2 border-[#BB7F25] text-[#BB7F25] py-3 px-2 font-medium text-xl transition-all duration-300 hover:text-black hover:px-4 rounded-sm"
          >
            <span className="relative z-10 font-cinzel">View Services</span>
            <div className="absolute px-4 inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </motion.button>
        </motion.div>
      </div>

      {/* Right grid - simple fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-1/2 grid grid-cols-2 gap-0 h-full"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1 + (index * 0.05), 
              ease: "easeOut" 
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-cover bg-center h-[calc(33vh)] rounded-lg grayscale hover:grayscale-0 hover:saturate-125 hover:brightness-110 hover:contrast-110 transition-all duration-500 ease-out cursor-pointer"
            style={{ backgroundImage: `url(${service.img})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 hover:bg-opacity-40 backdrop-blur-xs flex flex-col justify-center items-center text-white p-4 text-center transition-all duration-500">
              <h3 className="font-cinzel-decorative text-white text-base font-900">
                {service.title}
              </h3>
              <p className="font-lora mt-1 text-xs">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
