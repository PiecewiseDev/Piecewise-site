'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useScrollThreshold } from '@/hooks';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // { name: 'Resources', href: '/resources' }, // Temporarily archived
  // { name: 'Blog', href: '/blog' }, // Temporarily archived
  // { name: 'Success Stories', href: '/customer-stories' }, // Temporarily archived
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollThreshold({ threshold: 50, throttleMs: 100 });
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-neutral-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/90'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-full items-center justify-between px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:no-underline">
          <Image
            src="/logos/piecewiselogo6.png"
            alt="Piecewise Logo"
            width={36}
            height={36}
            className="h-7 w-auto object-contain"
            priority
          />
          <span className="text-base font-semibold text-neutral-darkest">piecewise</span>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav
          className="hidden md:flex md:items-center md:gap-7 lg:gap-8"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                prefetch={link.href === '/contact'}
                className={`text-sm transition-colors duration-200 hover:text-gray-900 hover:no-underline ${
                  isActive ? 'font-semibold text-gray-900' : 'font-medium text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex md:items-center">
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center rounded-lg bg-blue-900 hover:bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:no-underline hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            Start for free today
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-dark transition-colors duration-200 hover:text-neutral-darkest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="h-5 w-5"
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
                className="h-5 w-5"
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

      {/* Mobile Menu Dropdown */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`border-t border-neutral-200 bg-white shadow-sm md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-full px-4 py-3 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={link.href === '/contact'}
                  className={`block rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-neutral-100 hover:text-gray-900 hover:no-underline ${
                    isActive
                      ? 'font-semibold text-gray-900 bg-neutral-100'
                      : 'font-medium text-gray-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="mt-3">
            <Link
              href="/contact"
              prefetch={true}
              className="flex w-full items-center justify-center rounded-lg bg-blue-900 hover:bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:no-underline hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Start for free today
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
