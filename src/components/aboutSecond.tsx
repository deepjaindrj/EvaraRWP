import React, { useEffect, useState } from 'react';

export default function AboutSecond() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="py-32 bg-[#FFFBF1] relative min-h-[100vh] overflow-hidden"
    >
      <div className="w-full h-full">
        {/* Main Content Row */}
        <div className="flex items-center justify-between gap-10 h-full py-20">
          {/* Left Image */}
          <div
            className={`transition-all duration-[2500ms] ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
              hasLoaded 
                ? 'transform -rotate-[8.53deg] opacity-100 translate-x-[-3vw]' 
                : 'transform rotate-0 opacity-0 -translate-x-[-3vw]'
            }`}
          >
            <img 
              src="/about_image_01.png" 
              alt="Couple Photo 1" 
              className="w-[24vw] h-[70vh] object-cover rounded-lg shadow-2xl"
            />
          </div>
{/* Center Content */}
<div className="flex-1 text-center relative  min-w-0 flex flex-col items-center"> {/* Added flex properties */}

  <p className='font-lora text-2xl text-[#BB7F2557] mb-4'>Welcome to Evara</p>

  <h2 className="font-cinzel-decorative text-5xl text-[#00223F] mb-8 w-full">
    <span className="block">Where Every Love Story</span>
    <span className="block">Finds Its Magic</span>
  </h2>

  <div className="max-w-lg mx-auto">
    <p className="font-roboto text-base text-[#BB7F25] leading-relaxed mb-12">
      Let your royal love story unfold in a canvas of timeless elegance—where every detail is artfully curated and every memory becomes a masterpiece. Step into EVARA's world of everlasting celebration, where moments shine with grandeur and passion, echoing through eternity. <br />Let your royal love story unfold in a canvas of timeless elegance—where every detail is artfully curated and every memory becomes a masterpiece. Step into EVARA's world of everlasting celebration, where moments shine with grandeur and passion, echoing through eternity.
<br />At EVARA, we believe every love story is both a heritage and a new beginning. Founded with reverence for India's regal traditions and a passion for contemporary artistry, EVARA transforms the ordinary into the legendary. From palatial settings to intimate heritage venues, our team weaves every detail of your celebration into a tapestry worthy of dynasty.
    </p>
  </div>
</div>

          {/* Right Image */}
          <div
            className={`transition-all duration-[2500ms] ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
              hasLoaded 
                ? 'transform rotate-[8.53deg] opacity-100 translate-x-[3vw]' 
                : 'transform rotate-0 opacity-0 translate-x-[3vw]'
            }`}
          >
            <img 
              src="/about_image_02.png" 
              alt="Couple Photo 2" 
              className="w-[24vw] h-[70vh] object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div
          className="absolute bottom-80 left-60 transform  -translate-x-10 translate-y-2/3 z-20"
        >
          <img
            src="/about_image_03.png"
            alt="Decorative Pattern"
            className="w-auto h-[40vh] object-contain opacity-100"
          />
        </div>
      </div>
    </section>
  );
}