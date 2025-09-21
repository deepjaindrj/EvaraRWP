// import React from 'react';

// const SplendourVisual: React.FC = () => {
//   return (
//     <div className="relative flex justify-end items-center h-full">
//       <div
//         className="relative"
//         style={{
//           width: 'clamp(420px, 38vw, 600px)',
//           height: 'clamp(420px, 38vw, 600px)',
//           marginRight: 'clamp(-340px, -28vw, -420px)',
//           overflow: 'visible',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'flex-end',
//         }}
//       >
//         {/* Circular Arc Text */}
//         <div
//           className="absolute top-1/2 left-1/2 pointer-events-none"
//           style={{
//             transform: 'translate(-50%, -50%) rotate(120deg)',
//             zIndex: 3,
//             width: '120%',
//             height: '120%',
//             left: '50%',
//             top: '50%',
//           }}
//         >
//           <svg viewBox="0 0 520 520" width="100%" height="100%">
//             <defs>
//               <path
//                 id="textcircle"
//                 d="M 260,80 m 0,0 a 180,180 0 1,1 0,360 a 180,180 0 1,1 0,-360"
//               />
//             </defs>
//             <text
//               style={{
//                 fontFamily: 'Cinzel',
//                 fontSize: 'clamp(18px, 1.5vw, 26px)',
//                 fill: '#BB7F25',
//                 letterSpacing: '3px',
//                 fontWeight: 500,
//               }}
//             >
//               <textPath href="#textcircle" startOffset="0%">
//                 CURATING ROYAL EXPERIENCES • ONE CELEBRATION AT A TIME
//               </textPath>
//             </text>
//           </svg>
//         </div>
//         {/* Circle Image */}
//         <div
//           className="absolute left-1/2 z-10 overflow-hidden rounded-full"
//           style={{
//             width: '100%',
//             height: '100%',
//             top: '40%', // Move image upward (was 50%)
//             transform: 'translate(-50%, -40%)',
//           }}
//         >
//           <img
//             src="/service04.jpg"
//             alt="Wedding celebration"
//             className="w-full h-full object-cover"
//             style={{ display: 'block' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplendourVisual;

import React from 'react';

const CircleRound: React.FC = () => {
  const containerWidth = 900;
  const containerHeight = 700;

  const imageDiameter = 560;
  const imageRightOffset = 50;
  const verticalShiftImage = '-8%'; // Image vertical shift (unchanged)
  const verticalShiftText = '-12%';  // Text arc shifted further up by 4% more

  const textArcDiameter = 610;
  const textArcRadius = textArcDiameter / 2;

  return (
    <div
      style={{
        position: 'relative',
        width: containerWidth,
        height: containerHeight,
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      {/* Circular Rotating Text shifted slightly up */}
      <svg
        style={{
          position: 'absolute',
          top: verticalShiftText,   // shifted more upwards than image
          right: imageRightOffset + (imageDiameter / 2) - textArcRadius,
          width: textArcDiameter,
          height: textArcDiameter,
          pointerEvents: 'none',
          animation: 'spin 30s linear infinite',
          zIndex: 10,
          overflow: 'visible',
        }}
        viewBox={`0 0 ${textArcDiameter} ${textArcDiameter}`}
      >
        <defs>
          <path
            id="arc"
            d={`
              M ${textArcRadius},${textArcRadius}
              m -${textArcRadius - 3},0
              a ${textArcRadius - 3},${textArcRadius - 3} 0 1,1 ${textArcDiameter - 6},0
              a ${textArcRadius - 3},${textArcRadius - 3} 0 1,1 -${textArcDiameter - 6},0
            `}
            fill="none"
          />
        </defs>
        <text
          style={{
            fontFamily: 'Cinzel',
            fontSize: 32,
            fill: '#BB7F25',
            letterSpacing: 2,
            fontWeight: 550,
          }}
        >
          <textPath href="#arc" startOffset="2%">
            BOOKING * PLANNING * DESIGNING * MANAGING * EXECUTIONS * CELEBRATIONS * EVENT
          </textPath>
        </text>
      </svg>

      {/* Circular Image unchanged vertical shift */}
      <div
        style={{
          position: 'absolute',
          top: verticalShiftImage,
          right: imageRightOffset,
          width: imageDiameter,
          height: imageDiameter,
          borderRadius: '50%',
          overflow: 'hidden',
          transform: 'translateY(0%)',
          boxShadow: '0 0 24px rgba(0,0,0,0.13)',
          backgroundColor: '#fff',
          zIndex: 5,
        }}
      >
        <img
          src="/service04.jpg"
          alt="Wedding celebration"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CircleRound;
