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
        className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? 'backdrop-blur-sm rounded-full shadow-md mx-4 sm:mx-auto px-6 max-w-3xl border border-gray-200/50'
              : 'max-w-7xl mx-4 sm:mx-auto px-6 sm:px-8 rounded-2xl shadow-sm border border-gray-200/30'
          }`}
          style={{ backgroundColor: '#f1f1f1' }}
        >
          <div className="flex justify-between items-center h-12 py-1">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 hover:no-underline">
                <Image
                  src="/logos/piecewiselogo6.png"
                  alt="Piecewise Logo"
                  width={36}
                  height={36}
                  className="h-7 w-auto object-contain"
                  priority
                />
                <span className="text-lg font-semibold text-gray-900">piecewise</span>
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
                  className="inline-flex items-center text-navy-light hover:text-[#3daeff] hover:no-underline px-1 text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:flex md:items-center">
              <Link
                href="/contact"
                prefetch={true}
                className="bg-blue-600 text-white rounded-lg px-4 py-1.5 text-sm font-bold shadow-sm hover:text-gray-100 focus:ring-2 focus:ring-blue-500 hover:no-underline flex items-center gap-2 transition-all duration-200"
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
        } md:hidden fixed top-[calc(3rem+1rem+0.75rem)] left-4 right-4 bg-white border-t border-gray-100 shadow-lg z-40 transition-all duration-300 rounded-b-xl`}
        id="mobile-menu"
        aria-label="Mobile navigation menu"
        style={{ backgroundColor: '#f1f1f1' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                prefetch={
                  link.href === '/contact' || link.href === '/pricing' || link.href === '/services'
                }
                className="inline-block text-navy-light hover:text-[#3daeff] hover:no-underline block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3 py-2">
              <Link
                href="/contact"
                prefetch={true}
                className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-bold shadow-sm hover:text-gray-100 focus:ring-2 focus:ring-blue-500 w-full flex justify-center items-center gap-2 hover:no-underline transition-all duration-200"
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
