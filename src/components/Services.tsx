import React from 'react';
import { Palette, Gift, Users, Crown, Sparkles, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Custom Wedding Design',
      description: 'Bespoke wedding designs tailored to your vision, incorporating cultural traditions with modern elegance.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Gift,
      title: 'Personalized Invitations & Gifting',
      description: 'Exquisite invitation suites and curated gift collections that reflect your unique style and story.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Vendor Coordination & Supervision',
      description: 'Seamless coordination with trusted vendors, ensuring quality and timely execution of every detail.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Crown,
      title: 'Luxury Guest Management',
      description: 'White-glove guest experience management, from accommodation to hospitality and everything in between.',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Sparkles,
      title: 'Ritual Coordination',
      description: 'Expert coordination of traditional ceremonies and rituals with cultural authenticity and reverence.',
      color: 'from-rose-500 to-red-500'
    },
    {
      icon: MapPin,
      title: 'Grand Venue Selection',
      description: 'Access to extraordinary venues, from heritage palaces to exotic destinations, perfect for your celebration.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Step into the{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Splendor
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of luxury wedding services, each crafted to perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}