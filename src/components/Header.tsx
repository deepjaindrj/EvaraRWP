import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const location = useLocation();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are scrolling down or up
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setIsNavbarVisible(false);
      } else {
        // If scrolling up, show the navbar
        setIsNavbarVisible(true);
      }

      // Update the last scroll position
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links - 3 on left, 3 on right
  const leftNavLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
  ];

  const rightNavLinks = [
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'BLOG', href: '/blog' },
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isNavbarVisible
          ? isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
          : '-top-24'
      }`}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-24 xl:h-28">
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-7 items-center justify-items-center w-full gap-8 xl:gap-12">
              {/* Left Navigation Links */}
              {leftNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-normal text-xl relative transition-colors duration-200 ${
                    isActiveRoute(link.href) ? 'text-[#BB7F25]' : 'text-[#BB7F25]'
                  } hover:text-[#BB7F25] group`}
                  style={{ fontWeight: 400 }}
                >
                  {link.name}
                  <span className="absolute block w-0 h-[2px] bg-[#BB7F25] transition-all duration-300 transform group-hover:w-full bottom-0 left-0" />
                </Link>
              ))}

              {/* Center Logo */}
              <Link to="/" className="flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Evara Logo"
                  className="h-32 w-auto object-contain"
                />
              </Link>

              {/* Right Navigation Links */}
              {rightNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-normal text-xl relative transition-colors duration-200 ${
                    isActiveRoute(link.href) ? 'text-[#BB7F25]' : 'text-[#BB7F25]'
                  } hover:text-[#BB7F25] group`}
                  style={{ fontWeight: 400 }}
                >
                  {link.name}
                  <span className="absolute block w-0 h-[2px] bg-[#BB7F25] transition-all duration-300 transform group-hover:w-full bottom-0 left-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-16 sm:h-20 mx-4">
          {/* Mobile Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Evara Logo"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="px-4 sm:px-6 py-6 space-y-2">
            {allNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-4 py-3 text-gray-800 hover:text-[#BB7F25] hover:bg-[#BB7F25] rounded-lg transition-colors duration-200 font-normal tracking-wide text-base ${
                  isActiveRoute(link.href) ? 'text-[#BB7F25] bg-[#BB7F25]' : ''
                }`}
                style={{ fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
