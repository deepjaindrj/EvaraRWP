import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="flex justify-between items-center bg-[#FFFBF1] min-h-screen relative">
      <div className="flex-1 text-center relative px-12 z-30">
        <p className="font-lora text-xl text-[#BB7F2557] mb-4">Begin your royal journey</p>
        <h2 className="font-cinzel-decorative text-4xl text-[#00223F] mb-8">STEP INTO THE SPLENDOR</h2>
        <div className="max-w-lg mx-auto">
          <p className="font-lora text-lg text-[#BB7F25] leading-relaxed mb-12 z-40">
            Let EVARA be your gateway to celebrations conceived in regal imagination and crafted with flawless artistry. Our suite of exquisite services transforms every moment—from the entrance to the final blessing—into a story woven with tradition, joy, and luxury. Whether you desire a majestic palace gathering or an intimate affair drenched in heritage, our expertise ensures your experience is as extraordinary as your love story.
          </p>
        </div>
        <button className="font-cinzel group relative overflow-hidden bg-transparent border-b-2 border-[#BB7F25] text-[#BB7F25] py-3 px-2 font-medium text-xl transition-all duration-300 hover:[#BB7F25] hover:text-black hover:px-4 rounded-sm">
          <span className="relative z-10 font-cinzel">View Services</span>
          <div className="absolute px-4 inset-0  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
        </button>
      </div>

      <div className="absolute left-[-10vw] top-1/2 transform -translate-y-1/2 z-10">
        <img
          src="/about_image_03.png"
          alt="Decorative Pattern"
          className="w-auto h-[50vh] object-contain opacity-100"
        />
      </div>

      <div className="w-1/2 grid grid-cols-2 gap-0 h-full">
        <div className="relative bg-cover bg-center h-[calc(33vh)] rounded-lg" style={{ backgroundImage: 'url(/service01.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-xs flex flex-col justify-center items-center text-white p-4 text-center">
            <h3 className="font-cinzel-decorative text-white text-base font-900">Custom Wedding Design</h3>
            <p className="font-lora mt-1 text-xs">Every wedding a royal masterpiece</p>
          </div>
        </div>
        <div className="relative bg-cover bg-center h-[calc(33vh)] rounded-lg" style={{ backgroundImage: 'url(/service02.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-xs flex flex-col justify-center items-center text-white p-4 text-center">
            <h3 className="font-cinzel-decorative text-white text-base font-900">Luxury Guest Management</h3>
            <p className="font-lora mt-1 text-xs">Seamless Comfort for Every Guest</p>
          </div>
        </div>
        <div className="relative bg-cover bg-center h-[calc(33vh)] rounded-lg" style={{ backgroundImage: 'url(/service04.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-xs flex flex-col justify-center items-center text-white p-4 text-center">
            <h3 className="font-cinzel-decorative text-white text-base font-900">Personalized Invitations & Gifting</h3>
            <p className="font-lora mt-1 text-xs">Stories Written in Every Invitation and Gift</p>
          </div>
        </div>
        <div className="relative bg-cover bg-center h-[calc(33vh)] rounded-lg" style={{ backgroundImage: 'url(/service06.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-xs flex flex-col justify-center items-center text-white p-4 text-center">
            <h3 className="font-cinzel-decorative text-white text-base font-900">Vendor Coordination & Supervision</h3>
            <p className="font-lora mt-1 text-xs">Trusted Partners, Flawless Execution</p>
          </div>
        </div>
        <div className="relative bg-cover bg-center h-[calc(33vh)] rounded-lg" style={{ backgroundImage: 'url(/service03.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-xs flex flex-col justify-center items-center text-white p-4 text-center">
            <h3 className="font-cinzel-decorative text-white text-base font-900">Ritual Coordination</h3>
            <p className="font-lora mt-1 text-xs">Seamlessly weaving sacred traditions into your celebration</p>
          </div>
        </div>
        <div className="relative bg-cover bg-center h-[calc(33vh)] rounded-lg" style={{ backgroundImage: 'url(/service05.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-xs flex flex-col justify-center items-center text-white p-4 text-center">
            <h3 className="font-cinzel-decorative text-white text-base font-900">Grand Venue Selection</h3>
            <p className="font-lora mt-1 text-xs">Palaces and Heritage, Perfectly Chosen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;