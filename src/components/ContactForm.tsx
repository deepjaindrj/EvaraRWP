import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: ''
  });

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="relative h-[90vh] flex flex-col items-center justify-start pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/contactform.png')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-[#FDD894] text-lg font-light mb-2 tracking-wide font-lora">Contact Us</h3>
          <h1 className="text-[#FDD894] text-4xl font-light font-cinzel tracking-tighter">
            PLAN YOUR WEDDING TODAY
          </h1>
        </div>

        {/* Form */}
        <div className="space-y-16">
          {/* First Row - Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full font-lora bg-transparent border border-[#FDD894] text-[#FDD894] placeholder-[#FDD894] px-4 py-2 text-sm focus:outline-none focus:border-[#BB7F25] transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full font-lora bg-transparent border border-[#FDD894] text-[#FDD894] placeholder-[#FDD894] px-4 py-2 text-sm focus:outline-none focus:border-[#BB7F25] transition-colors"
              />
            </div>
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full font-lora bg-transparent border border-[#FDD894] text-[#FDD894] px-4 py-2 text-sm hover:bg-[#FDD894] hover:text-black transition-colors duration-300 font-medium tracking-wide"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Horizontal Line */}
          <div className="w-full h-px bg-[#FDD894] opacity-100"></div>

          {/* Second Row - Contact Information Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-lora text-[#FDD894] text-sm border border-[#FDD894] px-4 py-2">
                Contact: +91 8989076231
              </p>
            </div>
            <div>
              <p className="font-lora text-[#FDD894] text-sm border border-[#FDD894] px-4 py-2">
                E-mail: evara.info@gmail.com
              </p>
            </div>
            <div>
              <p className="font-lora text-[#FDD894] text-sm border border-[#FDD894] px-4 py-2">
                Address: 21, Navneet Tower
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;