import React, { useState, useEffect, useRef } from 'react';

const TalesFramesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startMarquee, setStartMarquee] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [animationOffset, setAnimationOffset] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Trigger slide-in when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Start marquee after slide-in completes
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setStartMarquee(true);
        // Reset animation offset to 0 when starting marquee from center
        setAnimationOffset(0);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // TRUE infinite scroll - no resets, just keep moving
  useEffect(() => {
    if (!startMarquee || isDragging) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = () => {
      setAnimationOffset(prev => prev - 1); // Move 1px left every frame
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startMarquee, isDragging]);

  // Mouse/Touch event handlers for dragging
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    
    const deltaX = clientX - dragStartX;
    const sensitivity = 1;
    setCurrentOffset(deltaX * sensitivity);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragStartX(0);
    // Apply drag offset to animation offset so it continues from where user left it
    setAnimationOffset(prev => prev + currentOffset);
    setCurrentOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Calculate total transform - NO RESETS, JUST INFINITE MOVEMENT
  const getTransform = () => {
    if (!isVisible) {
      return 'translateY(-50%) translateX(120vw)'; // Start off-screen right
    }
    
    if (!startMarquee) {
      return 'translateY(-50%) translateX(-0%)'; // Centered position during slide-in
    }
    
    // TRUE infinite scroll - start from center then move left forever
    const totalOffset = animationOffset + currentOffset;
    return `translateY(-50%) translateX(calc(-0% + ${totalOffset}px))`;
  };

  // Create a MASSIVE array of images so it never runs out
  const createInfiniteImages = () => {
    const images = ['/service04.jpg', '/service05.jpg', '/service07.jpg'];
    const infiniteImages = [];
    
    // Create 100+ images to ensure true infinite scroll
    for (let i = 0; i < 150; i++) {
      const imageIndex = i % images.length;
      infiniteImages.push(
        <div key={i} className="flex-shrink-0">
          <img 
            src={images[imageIndex]}
            alt={`Wedding Service ${i + 1}`}
            className="object-cover pointer-events-none"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>
      );
    }
    
    return infiniteImages;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#FFFBF1] overflow-hidden" 
      style={{ height: '120vh' }}
    >
      {/* Background patterns remain the same */}
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
      <div className="relative z-10 flex justify-center pt-24">
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
      
      {/* TRUE INFINITE CAROUSEL - NO RESETS */}
      <div 
        ref={carouselRef}
        className="absolute z-10 flex items-start gap-3 sm:gap-4 lg:gap-6 select-none pt-24"
        style={{ 
          left: '50%',
          top: '58%',
          transform: getTransform(),
          transition: isVisible && !isDragging && !startMarquee ? 'transform 1500ms ease-out' : 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
          willChange: 'transform',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {createInfiniteImages()}
      </div>
    </section>
  );
};

export default TalesFramesSection;