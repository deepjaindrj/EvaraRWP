import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Wedding Planning',
    'Destination Weddings',
    'Event Design',
    'Vendor Coordination',
    'Guest Management',
    'Ritual Planning'
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              Evara
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Crafting royal wedding experiences with timeless elegance and unparalleled attention to detail. 
              Your love story deserves nothing less than perfection.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">hello@Evaraweddings.com</p>
                  <p className="text-gray-400 text-sm">For inquiries & bookings</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-400 text-sm">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mumbai, Delhi, Bangalore</p>
                  <p className="text-gray-400 text-sm">& destinations across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Evara Wedding Planners. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-red-400 fill-current" />
            <span>for couples in love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}