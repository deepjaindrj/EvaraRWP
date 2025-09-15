import React from 'react';

const SplendorSection: React.FC = () => {
  return (
<section className="relative w-full bg-gradient-to-b from-[#FFFBF1] to-[#F8F4E6] overflow-hidden" style={{ minHeight: '130vh', paddingTop: '28vh', paddingBottom: '8vh' }}>
      
      {/* Background Pattern - Left feather */}
      <div 
        className="absolute opacity-100 z-0"
        style={{
          backgroundImage: 'url("/feather.png")',
     backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 'clamp(400px, 60vw, 1000px)',
    height: 'clamp(335px, 50vw, 840px)',
    top: '-10%',
    left: 'clamp(-330px, -27vw, -530px)',
    transform: 'rotate(16.74deg)',
    opacity: 1,
  }}
/>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          
          {/* Left Side - Text Content */}
          <div className="lg:col-span-6 space-y-8 ml-12">
            {/* Title */}
            <h2 
              style={{
                fontFamily: 'Cinzel Decorative',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3.5vw, 48px)',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: '#4A5568',
              }}
            >
              Step Into<br />
              The Splendor
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 max-w-lg">
              <p 
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 'clamp(12px, 1.3vw, 16px)',
                  lineHeight: '1.7',
                  color: '#BB7F25',
                }}
              >
                Let EVARA be your gateway to celebrations conceived in 
                regal imagination and crafted with flawless artistry. Our 
                suite of exquisite services transforms every moment—from 
                the grand entrance to the final blessing—into a tapestry 
                woven with tradition, joy, and luxury. Whether you desire a 
                majestic palace gathering or an intimate affair drenched in 
                heritage, our expertise ensures your experience is as 
                extraordinary as your love story.
              </p>

              <p 
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 'clamp(12px, 1.3vw, 16px)',
                  lineHeight: '1.7',
                  color: '#BB7F25',
                }}
              >
                Let EVARA be your gateway to celebrations conceived in 
                regal imagination and crafted with flawless artistry. Our 
                suite of exquisite services transforms every moment—from 
                the grand entrance to the final blessing—into a tapestry 
                woven with tradition, joy, and luxury. Whether you desire a 
                majestic palace gathering or an intimate affair drenched in 
                heritage, our expertise ensures your experience as 
                extraordinary as your love story.
              </p>
            </div>
          </div>

          {/* Right Side - Circle Image with Circular Arc Text */}
          <div className="lg:col-span-6 relative flex justify-end">
            <div className="relative" style={{ 
              width: 'clamp(450px, 55vw, 700px)', 
              height: 'clamp(450px, 55vw, 700px)',
              marginRight: 'clamp(-250px, -30vw, -400px)' // Increased negative margin to push further right
            }}>
              
              {/* Circular Arc Text - No Animation */}
<div 
  className="absolute top-0 left-0 w-full h-full pointer-events-none z-30"
  style={{ transform: 'rotate(120deg)' }} // Rotate to start from bottom
>
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <path 
  id="textcircle" 
  d="M 200,40 m 0,0 a 160,160 0 1,1 0,320 a 160,160 0 1,1 0,-320"
/>
    </defs>
    <text 
      style={{
        fontFamily: 'Cinzel',
        fontSize: 'clamp(14px, 1.6vw, 20px)',
        fill: '#BB7F25',
        letterSpacing: '3px',
        fontWeight: 500,
      }}
    >
      <textPath href="#textcircle" startOffset="0%">
        CURATING ROYAL EXPERIENCES • ONE CELEBRATION AT A TIME
      </textPath>
    </text>
  </svg>
</div>

              {/* Circle Image - Only left half visible */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 overflow-hidden rounded-full"
                style={{
                  width: '70%', // Increased image size
                  height: '70%', // Increased image size
                }}
              >
                <img 
                  src="/service04.jpg" 
                  alt="Wedding celebration"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplendorSection;