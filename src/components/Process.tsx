import React from 'react';
import { Search, Palette, Users, Sparkles } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Vision',
      description: 'Understanding your love story, personality, and dreams to create a customized wedding plan that reflects your unique journey together.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Design & Planning',
      description: 'Curating every detail, including venue, décor, and rituals, blending tradition with luxurious elegance and modern sophistication.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Vendor Coordination',
      description: 'Carefully selecting and managing trusted partners to ensure seamless execution and exceptional quality throughout your celebration.',
      color: 'from-amber-500 to-yellow-600'
    },
    {
      icon: Sparkles,
      title: 'Celebration & Beyond',
      description: 'Orchestrating the entire wedding journey, ensuring every moment is memorable and your day unfolds as the masterpiece you envisioned.',
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From initial consultation to your perfect day, we guide you through every step with expertise and care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Step Number */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}