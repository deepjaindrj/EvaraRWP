'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';

// Types
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

interface ExpandedViewProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onImageChange: (index: number) => void;
}

// Full Screen Gallery View
const FullScreenGalleryView: React.FC<ExpandedViewProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onImageChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const navButtonsRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    if (isOpen && containerRef.current) {
      // Entrance animation
      const tl = gsap.timeline();
      
      tl.set(containerRef.current, { scale: 0.8, opacity: 0 })
        .set(overlayRef.current, { opacity: 0 })
        .set(titleRef.current, { y: 50, opacity: 0 })
        .set(thumbnailsRef.current, { y: 30, opacity: 0 })
        .set(navButtonsRef.current, { opacity: 0 })
        
        .to(containerRef.current, { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out" 
        })
        .to(overlayRef.current, { 
          opacity: 1, 
          duration: 0.6 
        }, "-=0.4")
        .to(titleRef.current, { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out" 
        }, "-=0.3")
        .to(thumbnailsRef.current, { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power2.out" 
        }, "-=0.4")
        .to(navButtonsRef.current, { 
          opacity: 1, 
          duration: 0.4 
        }, "-=0.2");
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'Escape':
          e.preventDefault();
          handleClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    
    // Smooth transition animation
    if (titleRef.current && containerRef.current) {
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: "power2.inOut"
      })
      .to(containerRef.current.querySelector('.relative'), {
        opacity: 0.7,
        duration: 0.3,
        ease: "power2.inOut"
      }, 0)
      .call(() => {
        onImageChange(newIndex);
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(containerRef.current.querySelector('.relative'), {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.4");
    }
  }, [currentIndex, images.length, onImageChange]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    
    // Smooth transition animation
    if (titleRef.current && containerRef.current) {
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.3,
        ease: "power2.inOut"
      })
      .to(containerRef.current.querySelector('.relative'), {
        opacity: 0.7,
        duration: 0.3,
        ease: "power2.inOut"
      }, 0)
      .call(() => {
        onImageChange(newIndex);
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(containerRef.current.querySelector('.relative'), {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.4");
    }
  }, [currentIndex, images.length, onImageChange]);

  const handleClose = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: onClose
      });
    }
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 w-full h-full bg-[#FFFBF1]"
      style={{ top: 0, left: 0 }}
    >
      {/* Main Image - Full Screen */}
      <div 
        className="relative w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out"
        style={{ backgroundImage: `url(${currentImage.src})` }}
      >
        {/* Dark overlay for text readability */}
        <div ref={overlayRef} className="absolute inset-0 bg-black/30"></div>

        {/* Navigation Buttons Container */}
        <div ref={navButtonsRef}>
          {/* Left Navigation Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl font-light z-40 hover:text-gray-300 transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            +
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl font-light z-40 hover:text-gray-300 transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            +
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-white text-3xl font-light z-50 hover:text-gray-300 transition-all duration-300 hover:scale-110"
          aria-label="Close gallery"
        >
          ×
        </button>

        {/* Image Title - Center */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center z-30">
          <h1 
            ref={titleRef}
            className="text-white px-8"
            style={{
              fontFamily: 'Cinzel',
              fontWeight: 400,
              fontSize: '51.14px',
              lineHeight: '95%',
              letterSpacing: '-9%',
              textAlign: 'center',
              background: '#FDD894',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {currentImage.title}
          </h1>
        </div>

        {/* Image Counter - Center Bottom */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white text-lg font-light z-30">
          {currentIndex + 1}-{images.length}
        </div>

        {/* Thumbnails - Bottom */}
        <div ref={thumbnailsRef} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => {
                if (index !== currentIndex) {
                  // Smooth thumbnail transition
                  if (titleRef.current && containerRef.current) {
                    const tl = gsap.timeline();
                    
                    tl.to(titleRef.current, {
                      opacity: 0,
                      scale: 0.9,
                      duration: 0.25,
                      ease: "power2.inOut"
                    })
                    .to(containerRef.current.querySelector('.relative'), {
                      opacity: 0.6,
                      duration: 0.25,
                      ease: "power2.inOut"
                    }, 0)
                    .call(() => {
                      onImageChange(index);
                    })
                    .to(titleRef.current, {
                      opacity: 1,
                      scale: 1,
                      duration: 0.35,
                      ease: "power2.out"
                    })
                    .to(containerRef.current.querySelector('.relative'), {
                      opacity: 1,
                      duration: 0.35,
                      ease: "power2.out"
                    }, "-=0.35");
                  }
                }
              }}
              className={`w-16 h-12 overflow-hidden transition-all duration-300 hover:scale-105 ${
                index === currentIndex ? 'opacity-100 ring-2 ring-white shadow-lg' : 'opacity-60 hover:opacity-80'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Gallery Component
const Gallery: React.FC<GalleryProps> = ({ images, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const openExpanded = (index: number) => {
    setCurrentImageIndex(index);
    setIsExpanded(true);
  };

  const closeExpanded = () => {
    setIsExpanded(false);
  };

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Grid hover animations
  useEffect(() => {
    if (gridRef.current && !isExpanded) {
      const items = gridRef.current.querySelectorAll('.gallery-item');
      
      items.forEach((item, index) => {
        const handleMouseEnter = () => {
          gsap.to(item, {
            scale: 1.05,
            rotationY: 5,
            z: 50,
            duration: 0.4,
            ease: "power2.out"
          });
        };
        
        const handleMouseLeave = () => {
          gsap.to(item, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        };
        
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
        
        // Cleanup
        return () => {
          item.removeEventListener('mouseenter', handleMouseEnter);
          item.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    }
  }, [isExpanded]);

  // Don't prevent body scroll - let it stay where it is
  useEffect(() => {
    // Store the current scroll position when opening
    let scrollPosition = 0;
    
    if (isExpanded) {
      scrollPosition = window.pageYOffset;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isExpanded]);

  if (isExpanded) {
    return (
      <>
        {/* Blank Screen Overlay to prevent footer visibility */}
        <div className="fixed inset-0 z-40 bg-[#FFFBF1] w-full h-full"></div>
        
        {/* Full Screen Gallery */}
        <FullScreenGalleryView
          images={images}
          currentIndex={currentImageIndex}
          isOpen={isExpanded}
          onClose={closeExpanded}
          onImageChange={handleImageChange}
        />
      </>
    );
  }

  // Show only first 4 images in initial grid
  const displayImages = images.slice(0, 4);

  return (
    <div className={`relative w-full bg-[#FFFBF1] min-h-screen pt-20 px-8 overflow-hidden ${className}`}>
      {/* Background Patterns - Now properly behind all content */}
      <div 
        className="absolute opacity-100 pointer-events-none -z-10"
        style={{ 
          top: '105px',
          left: '-140px', 
          transform: 'rotate(20deg)',
          width: '300px',
          height: '336px'
        }}
      >
        <img src="/pattern02.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Feather 2 - Top Right */}
      <div 
        className="absolute opacity-100 pointer-events-none -z-10"
        style={{ 
          top: '75px',
          right: '-100px',
          transform: 'rotate(193.26deg) scaleY(-1) scaleX(-1)', // Flip horizontally
          width: '450px',
          height: '300px'
        }}
      >
        <img src="/pattern03.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 pt-12">
        <h2 className="font-cinzel-decorative tracking-[-0.01em] text-5xl text-[#BB7F25]">Tales Told in Timeless Frames</h2>
      </div>

      {/* Gallery Grid */}
      <div ref={gridRef} className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item h-[50vh] overflow-hidden cursor-pointer perspective-1000"
              onClick={() => openExpanded(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

export type { GalleryImage, GalleryProps };