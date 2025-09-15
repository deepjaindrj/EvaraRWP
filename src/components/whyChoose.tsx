import React from 'react';

const WhyChooseEvara = () => {
  return (
    <section className="relative bg-[#FFFBF1] mb-56 px-24 ">
      {/* Background Pattern - Top Left */}
      {/* Background Pattern - Top Left */}
<div className="absolute top-0 left-0 pointer-events-none z-50">
  <img 
    src="/pattern03.png" 
    alt="" 
    className="w-[350px] h-[294px] lg:w-[490px] lg:h-[412px] transform rotate-[20.63deg] -translate-x-[120px] lg:-translate-x-[220px] -translate-y-[200px] opacity-100"
  />
</div>

{/* Background Pattern - Bottom Right */}
<div className="absolute bottom-0 right-0 pointer-events-none z-10" style={{ right: '-56px' }}>
  <img 
    src="/pattern04.png" 
    alt="" 
    className="w-[250px] h-[210px] lg:w-[369px] lg:h-[310px] translate-y-[220px] opacity-100"
  />
</div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-[45px] leading-[95%] mb-8"
            style={{
              fontFamily: 'Cinzel Decorative, serif',
              fontWeight: 400,
              color: '#BB7F25',
              letterSpacing: '0%'
            }}
          >
            Why Choose Evara?
          </h2>
          
          <p 
            className="text-sm lg:text-[18px] max-w-4xl mx-auto"
            style={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              color: '#00223F',
              letterSpacing: '0%'
            }}
          >
            Choosing EVARA is investing in legacy. We don't just create weddings—we create experiences worthy of legend: timeless, majestic, and forever remembered.
          </p>
        </div>

        {/* Horizontal Lines - Same width as grid container */}
        <div className="mb-16">
          <div className="border-t border-[#BB7F25] mb-3"></div>
          <div className="border-t border-[#BB7F25]"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1 pl-8">
            <div>
              <img 
                src="/whychoose.jpg" 
                alt="EVARA wedding ceremony" 
                className="w-[75vh] h-[84vh]  object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 relative border-l  border-[#BB7F25]">
            <div className="p-6 lg:p-12">
              <div 
                className="text-sm lg:text-[16px] leading-[120%] space-y-6 mb-12"
                style={{
                  fontFamily: 'Lora, serif',
                  fontWeight: 400,
                  color: '#00223F',
                  letterSpacing: '0%'
                }}
              >
                <p>Choosing EVARA is choosing a legacy, not just an event.</p>
                
                <p>We blend the artistry of ancient rituals with the precision of modern celebration—every detail, every moment, every guest seen and cherished.</p>
                
                <p>Here, your dreams are not just realized; they are elevated. Our creative maestros design weddings that are living romances, as stately as heritage and as personal as a secret vow.</p>
                
                <p>With trusted expertise, legendary partners, and a devotion to perfection, we transform fleeting celebrations into everlasting legend.</p>
                
                <p>At EVARA, your story becomes timeless. Your love becomes royal. Your wedding becomes a masterpiece woven for generations.</p>
              </div>

              {/* Contact Us Button */}
              <button className="font-cinzel group relative overflow-hidden bg-transparent border-b-2 border-[#BB7F25] text-[#BB7F25] py-3 px-2 font-medium text-xl transition-all duration-300 hover:[#BB7F25] hover:text-black hover:px-4 rounded-sm">
                  <span className="relative z-10 font-cinzel">Contact Us</span>
                  <div className="absolute px-4 inset-0  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseEvara;