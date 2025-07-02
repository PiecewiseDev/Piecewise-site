'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About Us', href: '/about' },
  // { name: 'Services', href: '/services' }, // Temporarily archived
  // { name: 'How It Works', href: '/how-it-works' }, // Temporarily archived
  // { name: 'Pricing', href: '/pricing' }, // Temporarily archived
  // { name: 'Case Studies', href: '/case-studies' }, // Temporarily archived
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
      >
        <div
          className={`container-wide transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-sm rounded-full shadow-md mx-auto px-6'
              : 'bg-white'
          }`}
        >
          <div className="flex justify-between items-center h-14 py-2">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 hover:no-underline">
                <Image
                  src="/logos/PiecewiseLogo1.png"
                  alt="Piecewise Logo"
                  width={36}
                  height={36}
                  className="h-8 w-auto object-contain"
                  priority
                />
                <span className="text-lg font-semibold text-gray-900">Piecewise</span>
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:ml-6 md:flex md:space-x-8 md:items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={
                    link.href === '/contact' ||
                    link.href === '/pricing' ||
                    link.href === '/services'
                  }
                  className="relative inline-flex items-center text-navy-light hover:text-accent hover:no-underline group px-1 text-sm font-medium transition-colors duration-200"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span
                    className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:flex md:items-center">
              <Link
                href="/contact"
                prefetch={true}
                className="bg-[#4b6a88] text-white rounded-lg px-4 py-1.5 text-sm font-bold shadow-sm hover:bg-[#3d5a75] ring-accent hover:no-underline flex items-center gap-2 transition-all duration-200"
              >
                Book a Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-navy inline-flex items-center justify-center p-2 rounded-md hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger or X icon based on menu state */}
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown - Positioned below the header */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden fixed top-[calc(4rem+1.5rem)] left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40 transition-all duration-300`}
        id="mobile-menu"
        aria-label="Mobile navigation menu"
      >
        <div className="container-wide">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                prefetch={
                  link.href === '/contact' || link.href === '/pricing' || link.href === '/services'
                }
                className="relative inline-block text-navy-light hover:text-accent hover:no-underline group block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            ))}
            <div className="mt-4 px-3 py-2">
              <Link
                href="/contact"
                prefetch={true}
                className="bg-[#4b6a88] text-white rounded-lg px-4 py-2 text-sm font-bold shadow-sm hover:bg-[#3d5a75] ring-accent w-full flex justify-center items-center gap-2 hover:no-underline transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
