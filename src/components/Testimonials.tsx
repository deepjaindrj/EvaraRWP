import React, { useState, useEffect } from 'react';

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      image: "/service04.jpg", // Left column image
      avatarImage: "/service05.jpg", // Right column avatar (elliptical)
      text: "EVARA transformed our vision into a majestic reality. The attention to detail and cultural authenticity were unparalleled.",
      name: "Priya & Arjun"
    },
    {
      id: 2,
      image: "/service05.jpg",
      avatarImage: "/service07.jpg",
      text: "Our wedding was beyond our wildest dreams. Every moment was crafted with such elegance and perfection.",
      name: "Meera & Raj"
    },
    {
      id: 3,
      image: "/service07.jpg",
      avatarImage: "/service04.jpg",
      text: "The team at EVARA made our special day truly unforgettable. Their expertise in Indian weddings is unmatched.",
      name: "Ananya & Vikram"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full bg-[#FFFBF1] overflow-hidden" style={{ minHeight: '120vh' }}>
      
      {/* Title */}
      <div className="relative z-10 flex justify-center pt-16 pb-8">
        <h2 
          className="my-12"
          style={{
            fontFamily: 'Cinzel Decorative',
            fontWeight: 400,
            fontSize: 'clamp(32px, 6vw, 64px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#BB7F25',
          }}
        >
          Testimonials
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative flex-1 flex items-center justify-center ">
        
        {/* Previous Button - Left Arrow with #FAF3DF color */}
        <button 
          onClick={goToPrevious}
          className="absolute left-8 z-20 hover:opacity-70 transition-opacity"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#FAF3DF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Carousel Content */}
        <div className="w-full mx-auto">
          <div className="relative overflow-hidden h-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full" style={{ minHeight: '70vh' }}>
                    
                    {/* Left Column - Image */}
                    <div 
                      className="flex items-center justify-center p-12"
                      style={{ backgroundColor: '#CFC9B7' }}
                    >
                      <img 
                        src={testimonial.image}
                        alt={`Testimonial ${index + 1}`}
                        className=" object-cover max-w-full max-h-full"
                        style={{
                          width: 'clamp(250px, 35vw, 400px)',
                          height: 'clamp(350px, 38vw, 500px)',
                        }}
                      />
                    </div>

                    {/* Right Column - Content */}
                    <div 
                      className="flex flex-col items-center justify-center p-8 lg:p-12 space-y-8"
                      style={{ backgroundColor: '#FAF3DF' }}
                    >
                      
                      {/* Avatar Image - Elliptical */}
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.avatarImage}
                          alt={testimonial.name}
                          className="object-cover shadow-lg"
                          style={{
                            width: 'clamp(100px, 18vw, 180px)',
                            height: 'clamp(150px, 24vw, 210px)',
                            borderRadius: '50%',
                          }}
                        />
                      </div>

                      {/* Testimonial Text */}
                      <div className="text-center max-w-md">
                        <p 
                          className="italic leading-relaxed"
                          style={{
                            fontFamily: 'Lora',
                            fontSize: 'clamp(16px, 2vw, 20px)',
                            color: '#00223F',
                            lineHeight: '1.6',
                          }}
                        >
                          "{testimonial.text}"
                        </p>
                      </div>

                      {/* Divider Line */}
                      <div className=" h-px px-4 bg-[#BB7F25]">
                        <p 
                          style={{
                            fontFamily: 'Cinzel',
                            fontSize: '16px',
                            color: '#BB7F25',
                            fontWeight: 500,
                            marginTop: '4px',
                          }}
                        >
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Button - Right Arrow with #CFC9B7 color */}
        <button 
          onClick={goToNext}
          className="absolute right-8 z-20 hover:opacity-70 transition-opacity"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#CFC9B7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;