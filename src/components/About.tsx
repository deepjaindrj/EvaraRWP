import React from 'react';
import { Heart, Sparkles, Crown } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Where Every Love Story Finds Its{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Magic
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              At Evara, we believe that every love story deserves to be celebrated with unparalleled elegance and personal touch. 
              Our approach to wedding planning transcends traditional boundaries, creating bespoke experiences that reflect 
              your unique journey together.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              From intimate ceremonies to grand celebrations, we craft each wedding with flawless artistry, 
              ensuring that your special day becomes a timeless masterpiece that you and your loved ones will 
              treasure forever.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">Personalized Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              Every detail is carefully curated to reflect your unique personality and love story.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">Flawless Execution</h3>
            <p className="text-gray-600 leading-relaxed">
              From concept to celebration, we ensure every moment unfolds with precision and grace.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Crown className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">Royal Experience</h3>
            <p className="text-gray-600 leading-relaxed">
              Experience the luxury and grandeur befitting your once-in-a-lifetime celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}