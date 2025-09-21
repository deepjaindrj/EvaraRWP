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
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Animation loop for automatic scrolling
  useEffect(() => {
    if (!startMarquee || isDragging) return;

    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const elapsed = timestamp - startTime;
      const duration = 8000; // 8 seconds for full cycle (faster than 20s)
      const progress = (elapsed % duration) / duration;
      
      // Calculate offset for seamless loop
      const maxOffset = -50; // -50% for seamless loop
      setAnimationOffset(progress * maxOffset);
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
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
    const sensitivity = 0.5; // Adjust drag sensitivity
    setCurrentOffset(deltaX * sensitivity);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragStartX(0);
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

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#FFFBF1] overflow-hidden" 
      style={{ height: '160vh' }}
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
      
      {/* Draggable Images Carousel */}
      <div 
        ref={carouselRef}
        className="absolute z-10 flex items-start gap-3 sm:gap-4 lg:gap-6 select-none"
        style={{ 
          left: '47%',
          top: '58%',
          transform: `translateY(-50%) translateX(${
            isVisible 
              ? `calc(${animationOffset}% + ${currentOffset}px)` 
              : '120vw'
          })`,
          marginLeft: 'clamp(-90px, -11vw, -140px)',
          transition: isVisible && !isDragging && !startMarquee ? 'transform 1500ms ease-out' : 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* All images with pointer-events-none to prevent interference */}
        <div className="flex-shrink-0">
          <img 
            src="/service04.jpg" 
            alt="Wedding Service 1"
            className="object-cover pointer-events-none"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>
        
        <div className="flex-shrink-0">
          <img 
            src="/service05.jpg" 
            alt="Wedding Service 2"
            className="object-cover pointer-events-none"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>
        
        <div className="flex-shrink-0">
          <img 
            src="/service07.jpg" 
            alt="Wedding Service 3"
            className="object-cover pointer-events-none"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>

        {/* Enhanced duplicates for seamless dragging */}
        <div className="flex-shrink-0">
          <img 
            src="/service04.jpg" 
            alt="Wedding Service 4"
            className="object-cover pointer-events-none"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>

        <div className="flex-shrink-0">
          <img 
            src="/service05.jpg" 
            alt="Wedding Service 5"
            className="object-cover pointer-events-none"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>

        <div className="flex-shrink-0">
          <img 
            src="/service07.jpg" 
            alt="Wedding Service 6"
            className="object-cover pointer-events-none"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>

        <div className="flex-shrink-0">
          <img 
            src="/service04.jpg" 
            alt="Wedding Service 7"
            className="object-cover pointer-events-none"
            style={{
              width: 'clamp(180px, 22vw, 280px)',
              height: 'clamp(320px, 40vw, 500px)',
            }}
          />
        </div>

        <div className="flex-shrink-0">
          <img 
            src="/service05.jpg" 
            alt="Wedding Service 8"
            className="object-cover pointer-events-none"
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
