import React from 'react';

const TalesFramesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FFFBF1] overflow-hidden" style={{ height: '160vh' }}>
      {/* Background Pattern Left */}
      <div 
        className="absolute opacity-80 z-0"
        style={{
          backgroundImage: 'url("/pattern02.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: 'clamp(300px, 40vw, 520px)',
          height: 'clamp(250px, 33vw, 437px)',
          top: 'clamp(20%, 25vh, 30%)',
          left: 'clamp(-150px, -15vw, -220px)',
          transform: 'rotate(-155.06deg)',
        }}
      />
      
      {/* Background Pattern Right */}
      <div 
        className="absolute opacity-80 z-0"
        style={{
          backgroundImage: 'url("/pattern03.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: 'clamp(350px, 42vw, 552px)',
          height: 'clamp(280px, 35vw, 464px)',
          top: 'clamp(1%, 5vh, 10%)',
          right: 'clamp(-250px, -20vw, -200px)',
          transform: 'rotate(0deg)',
        }}
      />
      
      {/* Title */}
      <div className="relative z-10 flex justify-center pt-36">
        <h2 
          style={{
            fontFamily: 'Cinzel Decorative',
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#BB7F25',
          }}
        >
          Tales Told in Timeless Frames
        </h2>
      </div>
      
      {/* Images Container - First image's center aligns with screen center */}
      <div 
        className="absolute z-10 flex items-start gap-3 sm:gap-4 lg:gap-6"
        style={{ 
          left: '47%',
          top: '58%',
          transform: 'translateY(-50%)',
          marginLeft: 'clamp(-90px, -11vw, -140px)' // Half width of first image to center it
        }}
      >
        {/* Service Image 1 - Centered */}
        <div className="flex-shrink-0">
          <img 
            src="/service04.jpg" 
            alt="Wedding Service 1"
            className="  object-cover"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>
        
        {/* Service Image 2 */}
        <div className="flex-shrink-0">
          <img 
            src="/service05.jpg" 
            alt="Wedding Service 2"
            className="  object-cover"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>
        
        {/* Service Image 3 */}
        <div className="flex-shrink-0">
          <img 
            src="/service07.jpg" 
            alt="Wedding Service 3"
            className="object-cover"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TalesFramesSection;