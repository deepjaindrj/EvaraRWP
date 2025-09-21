import React from 'react';


export default function AboutHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#FFFBF1] pt-20">
      {/* Container with proper margins - matching Hero layout */}
      <div className="relative w-full px-7 pb-7">
        {/* Background Image Container with rounded corners - matching Hero dimensions */}
        <div 
          className="relative h-[calc(100vh-5rem-1.75rem)] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: 'url("/serviceherobg.png")',
          }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/60 "></div>


          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            
            {/* Full Width Strip Container */}
            <div className="flex items-center justify-center h-[30vh] w-full bg-[#FFFBF1]">
              
              {/* OUR Text */}
              <div className="flex-1 flex items-center justify-end pr-24">
                <span className="font-cinzel text-[#FDD894] text-4xl sm:text-7xl font-light tracking-wider">
                  OUR
                </span>
              </div>
              
              {/* Central Rectangular Image */}
              <div className="flex-shrink-0 mx-4 md:mx-6 h-[24vh] w-auto overflow-hidden shadow-lg">
                <img 
                  src="/abouthero.png" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* STORY Text */}
              <div className="flex-1 flex items-center justify-start pl-24">
                <span className="font-cinzel text-[#FDD894] text-4xl sm:text-7xl font-light tracking-wider">
                  STORY
                </span>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}