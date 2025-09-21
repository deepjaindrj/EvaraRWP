import React from 'react';
import CircleRoundCopy from './circleRound copy';

const SplendorSection: React.FC = () => {
  return (
   <section className="relative w-full bg-[#FFFBF1] overflow-hidden pt-48 " style={{ minHeight: '125vh' }}>
      {/* Background Patterns */}
      <div 
        className="absolute opacity-90 z-0"
        style={{
          backgroundImage: 'url("/pattern02.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: 'clamp(250px, 30vw, 355px)',
          height: 'clamp(300px, 32vw, 375px)',
          top: '8%',
          left: '-140px',
          transform: 'rotate(0deg)',
        }}
      />


      {/* Two-column layout with custom widths and reduced gap */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45vw_1fr] gap-2 items-start">
          {/* Left: FAQ */}
          <div className="space-y-8 ml-2">
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

            {/* Paragraphs - NO WIDTH RESTRICTIONS */}
            <div className="space-y-6">
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
     
          {/* Right: SplendourVisual */}
          <div>
            <CircleRoundCopy />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplendorSection;
