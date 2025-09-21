import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // Animation state
  const location = useLocation();

  const lastScrollY = useRef(0);

  // Animation trigger - same timing as Hero component
  useEffect(() => {
    if (location.pathname === '/') {
      // On landing page, controlled by animation timing
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      // On other pages, show immediately
      setIsVisible(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are scrolling down or up
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
        // If scrolling down and past 50px, hide the navbar
        setIsNavbarVisible(false);
      } else if (window.scrollY < lastScrollY.current) {
        // If scrolling up, show the navbar
        setIsNavbarVisible(true);
      }

      // Update the last scroll position with current scroll
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links - 3 on left, 3 on right
  const leftNavLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
  ];

  const rightNavLinks = [
    { name: 'SERVICES', href: '/services' },
    { name: 'GALLERY', href: '/gallery' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  // Function to check if current route is active
  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        transform: `translateY(${
          !isVisible ? '-100%' : 
          !isNavbarVisible ? '-100%' : 
          '0%'
        })`,
        opacity: isVisible ? 1 : 0,
        transitionDuration: !isVisible ? '1000ms' : '300ms'
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-24 xl:h-28">
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-5 items-center justify-items-center gap-8 xl:gap-12">
              {/* Left Navigation Links */}
              {leftNavLinks.map((link, index) => (
                <div
                  key={link.name}
                  className={`transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms' 
                  }}
                >
                  <Link
                    to={link.href}
                    className={`font-roboto text-xl relative transition-colors duration-200 ${
                      isActiveRoute(link.href) ? 'text-[#BB7F25]' : 'text-[#BB7F25]'
                    } hover:text-[#BB7F25] group`}
                    style={{ fontWeight: 400 }}
                  >
                    {link.name}
                    <span className="absolute block w-0 h-[2px] bg-[#BB7F25] transition-all duration-300 transform group-hover:w-full bottom-0 left-0" />
                  </Link>
                </div>
              ))}

              {/* Center Logo */}
              <div 
                className={`flex items-center justify-center transition-all duration-800 ease-out ${
                  isVisible 
                    ? 'opacity-100 transform scale-100' 
                    : 'opacity-0 transform scale-95'
                }`}
                style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
              >
                <Link to="/" className="flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Evara Logo"
                    className="h-32 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Right Navigation Links */}
              {rightNavLinks.map((link, index) => (
                <div
                  key={link.name}
                  className={`transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms' 
                  }}
                >
                  <Link
                    to={link.href}
                    className={`font-normal text-xl relative transition-colors duration-200 ${
                      isActiveRoute(link.href) ? 'text-[#BB7F25]' : 'text-[#BB7F25]'
                    } hover:text-[#BB7F25] group`}
                    style={{ fontWeight: 400 }}
                  >
                    {link.name}
                    <span className="absolute block w-0 h-[2px] bg-[#BB7F25] transition-all duration-300 transform group-hover:w-full bottom-0 left-0" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-16 sm:h-20 mx-4">
          {/* Mobile Logo */}
          <div 
            className={`flex items-center transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-8'
            }`}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Evara Logo"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div 
            className={`transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-8'
            }`}
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-[#BB7F25] hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="px-4 sm:px-6 py-6 space-y-2">
            {allNavLinks.map((link, index) => (
              <div
                key={link.name}
                className={`transition-all duration-400 ease-out ${
                  isMenuOpen 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform -translate-x-4'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
                }}
              >
                <Link
                  to={link.href}
                  className={`block px-4 py-3 text-gray-800 hover:text-[#BB7F25] hover:bg-[#BB7F25] rounded-lg transition-colors duration-200 font-normal tracking-wide text-base ${
                    isActiveRoute(link.href) ? 'text-[#BB7F25] bg-[#BB7F25]' : ''
                  }`}
                  style={{ fontWeight: 400 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}