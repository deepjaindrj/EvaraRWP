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

  // Navigation links - 2 on left, 2 on right (original spacing preserved)
  const leftNavLinks = [
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
  ];

  const rightNavLinks = [   
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' },
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'backdrop-blur-xl'
          : 'backdrop-blur-sm'
      }`}
      style={{
        transform: `translateY(${
          !isVisible ? '-100%' : 
          !isNavbarVisible ? '-100%' : 
          '0%'
        })`,
        opacity: isVisible ? 1 : 0,
        transitionDuration: !isVisible ? '1000ms' : '500ms',
        // Apple Liquid Glass Effect with #FFFBF1 Tint
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(255, 251, 241, 0.85) 0%, rgba(255, 251, 241, 0.75) 20%, rgba(255, 251, 241, 0.65) 40%, rgba(255, 251, 241, 0.55) 60%, rgba(255, 251, 241, 0.45) 80%, rgba(255, 251, 241, 0.35) 100%)'
          : 'linear-gradient(135deg, rgba(255, 251, 241, 0.25) 0%, rgba(255, 251, 241, 0.18) 30%, rgba(255, 251, 241, 0.12) 60%, rgba(255, 251, 241, 0.08) 100%)',
        backdropFilter: isScrolled ? 'blur(40px) saturate(180%)' : 'blur(20px) saturate(140%)',
        WebkitBackdropFilter: isScrolled ? 'blur(40px) saturate(180%)' : 'blur(20px) saturate(140%)',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 251, 241, 0.8), inset 0 -1px 0 rgba(255, 251, 241, 0.4)'
          : '0 4px 16px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 251, 241, 0.5)',
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation - No text animations */}
        <div className="hidden lg:flex items-center justify-between h-18 xl:h-20">
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-5 items-center justify-items-center gap-8 xl:gap-12">
              {/* Left Navigation Links */}
              {leftNavLinks.map((link, index) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={`font-roboto text-base relative transition-all duration-300 ${
                      isActiveRoute(link.href) ? 'text-[#BB7F25]' : 'text-[#BB7F25]'
                    } hover:text-[#BB7F25] hover:scale-105 group`}
                    style={{ fontWeight: 400 }}
                  >
                    {link.name}
                    <span 
                      className="absolute block w-0 h-[2px] transition-all duration-300 transform group-hover:w-full bottom-0 left-0"
                      style={{
                        background: 'linear-gradient(90deg, #BB7F25 0%, rgba(187, 127, 37, 0.8) 50%, #BB7F25 100%)'
                      }}
                    />
                  </Link>
                </div>
              ))}

              {/* Center Logo - Animation maintained */}
              <div 
                className={`flex items-center justify-center transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 transform scale-100' 
                    : 'opacity-0 transform scale-95'
                }`}
                style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
              >
                <Link to="/" className="flex items-center justify-center group">
                  <img
                    src="/logo.png"
                    alt="Evara Logo"
                    className="h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                    style={{
                      filter: isScrolled 
                        ? 'drop-shadow(0 8px 16px rgba(187, 127, 37, 0.15)) drop-shadow(0 0 20px rgba(255, 251, 241, 0.3))'
                        : 'drop-shadow(0 4px 8px rgba(187, 127, 37, 0.1))',
                      WebkitFilter: isScrolled 
                        ? 'drop-shadow(0 8px 16px rgba(187, 127, 37, 0.15)) drop-shadow(0 0 20px rgba(255, 251, 241, 0.3))'
                        : 'drop-shadow(0 4px 8px rgba(187, 127, 37, 0.1))'
                    }}
                  />
                </Link>
              </div>

              {/* Right Navigation Links */}
              {rightNavLinks.map((link, index) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={`font-normal text-base relative transition-all duration-300 ${
                      isActiveRoute(link.href) ? 'text-[#BB7F25]' : 'text-[#BB7F25]'
                    } hover:text-[#BB7F25] hover:scale-105 group`}
                    style={{ fontWeight: 400 }}
                  >
                    {link.name}
                    <span 
                      className="absolute block w-0 h-[2px] transition-all duration-300 transform group-hover:w-full bottom-0 left-0"
                      style={{
                        background: 'linear-gradient(90deg, #BB7F25 0%, rgba(187, 127, 37, 0.8) 50%, #BB7F25 100%)'
                      }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-14 sm:h-16 mx-4">
          {/* Mobile Logo */}
          <div 
            className={`flex items-center transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-8'
            }`}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <Link to="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Evara Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(187, 127, 37, 0.1)) drop-shadow(0 0 12px rgba(255, 251, 241, 0.2))',
                  WebkitFilter: 'drop-shadow(0 4px 8px rgba(187, 127, 37, 0.1)) drop-shadow(0 0 12px rgba(255, 251, 241, 0.2))'
                }}
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
              className="p-2 rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 251, 241, 0.6) 0%, rgba(255, 251, 241, 0.45) 50%, rgba(255, 251, 241, 0.3) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 251, 241, 0.8)',
                color: '#BB7F25',
                border: 'none'
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 251, 241, 0.8) 0%, rgba(255, 251, 241, 0.7) 25%, rgba(255, 251, 241, 0.6) 50%, rgba(255, 251, 241, 0.5) 75%, rgba(255, 251, 241, 0.4) 100%)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 251, 241, 0.9)'
          }}
        >
          <nav className="px-4 sm:px-6 py-6 space-y-2">
            {allNavLinks.map((link, index) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className={`block px-4 py-3 text-gray-800 hover:text-[#BB7F25] rounded-xl transition-all duration-300 font-normal tracking-wide text-sm ${
                    isActiveRoute(link.href) ? 'text-[#BB7F25]' : ''
                  }`}
                  style={{ 
                    fontWeight: 400,
                    background: isActiveRoute(link.href) 
                      ? 'linear-gradient(135deg, rgba(187, 127, 37, 0.15) 0%, rgba(187, 127, 37, 0.08) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 251, 241, 0.6) 0%, rgba(255, 251, 241, 0.4) 50%, rgba(255, 251, 241, 0.25) 100%)',
                    backdropFilter: 'blur(20px) saturate(140%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(140%)',
                    boxShadow: isActiveRoute(link.href) 
                      ? '0 4px 16px rgba(187, 127, 37, 0.1), inset 0 1px 0 rgba(255, 251, 241, 0.6)'
                      : '0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 251, 241, 0.5)'
                  }}
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
