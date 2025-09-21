import React, { useState } from 'react';

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    typeOfService: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="bg-[#FFFBF1] pt-48 pb-32 px-8 lg:px-16 relative overflow-hidden">
      {/* Background Pattern - Top Left */}
      <div className="absolute top-36 left-0 pointer-events-none z-0">
        <img 
          src="/pillar.png" 
          alt="" 
          className="w-[350px] h-[294px] transform -translate-x-[60px] -translate-y-[130px] opacity-100"
        />
      </div>

      <div 
        className="absolute opacity-90 z-0"
        style={{
          backgroundImage: 'url("/pattern03.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: 'clamp(400px, 35vw, 619px)',
          height: 'clamp(300px, 35vw, 504px)',
          top: '-5%',
          right: '-30px',
          transform: 'rotate(12deg)',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#D19E66] text-lg font-normal tracking-[10%] uppercase" 
             style={{ 
               fontFamily: 'Lora, serif', 
               fontSize: '14.21px', 
               lineHeight: '160%',
               fontWeight: '400'
             }}>
            Get In Touch
          </p>
          <h1 className="text-[#00223F] font-normal tracking-wide" 
              style={{ 
                fontFamily: 'Cinzel Decorative, serif', 
                fontSize: '56.84px', 
                lineHeight: '110%',
                fontWeight: '400'
              }}>
            Contact Us
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div 
              className="w-full h-96 lg:h-full bg-gray-300"
              style={{
                backgroundImage: `url('/contactform.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            </div>
          </div>

          {/* Right Column - Contact Information and Form */}
          <div className="order-1 lg:order-2 flex flex-col space-y-6">
            {/* First Row - Office and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Office Section */}
              <div>
                <h3 className="text-[#FDD894] text-xl font-lora mb-4">Office</h3>
                <div className="space-y-1 text-[#00223F]">
                  <p>Boutique Bloom, 123 Petal Lane,</p>
                  <p>Floral City, FL 54321, USA</p>
                </div>
              </div>

              {/* Email Section */}
              <div>
                <h3 className="text-[#FDD894] text-xl font-lora mb-4">E-mail</h3>
                <div className="space-y-1 text-[#00223F]">
                  <p>abc@gmail.com</p>
                  <p>bcd@gmail2.com</p>
                </div>
              </div>
            </div>

            {/* Second Row - Call Section */}
            <div>
              <h3 className="text-[#FDD894] text-xl font-lora mb-4">Call</h3>
              <div className="space-y-1 text-[#00223F]">
                <p>+91 9630000080</p>
                <p>+91 9926446622</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6 pt-4 flex-1">
              {/* First Row - Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-300 text-[#00223F] placeholder-gray-500 py-3 text-sm focus:outline-none focus:border-[#2D1B69] transition-colors font-roboto"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-300 text-[#00223F] placeholder-gray-500 py-3 text-sm focus:outline-none focus:border-[#2D1B69] transition-colors font-roboto"
                  />
                </div>
              </div>

              {/* Second Row - Phone and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-300 text-[#00223F] placeholder-gray-500 py-3 text-sm focus:outline-none focus:border-[#2D1B69] transition-colors font-roboto"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-300 text-[#00223F] placeholder-gray-500 py-3 text-sm focus:outline-none focus:border-[#2D1B69] transition-colors font-roboto"
                  />
                </div>
              </div>

              {/* Third Row - Type of Service */}
              <div>
                <input
                  type="text"
                  name="typeOfService"
                  placeholder="Type of Service"
                  value={formData.typeOfService}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-300 text-[#00223F] placeholder-gray-500 py-3 text-sm focus:outline-none focus:border-[#2D1B69] transition-colors font-roboto"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-transparent border border-[#D4B08A] text-[#D4B08A] px-8 py-3 text-sm hover:bg-[#D4B08A] hover:text-white transition-all duration-300 font-lora tracking-wide rounded-full"
                >
                  Submit →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;
