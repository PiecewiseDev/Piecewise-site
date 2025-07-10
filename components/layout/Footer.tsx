import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] rounded-t-[40px] relative shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="container-wide py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Logo and Contact Information */}
          <div>
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="mt-4 space-y-3 not-italic">
              <p className="text-sm text-navy-light mt-4">
                <a
                  href="mailto:kyle@piecewiseai.com"
                  className="hover:text-[#3daeff] transition-colors duration-200"
                >
                  kyle@piecewiseai.com
                </a>
              </p>
            </address>
            <div className="mt-6 flex space-x-6">
              <a
                href="#"
                className="text-navy-light hover:text-navy hover:no-underline transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-navy-light hover:text-[#3daeff] text-sm hover:no-underline focus-visible transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-navy-light hover:text-[#3daeff] text-sm hover:no-underline focus-visible transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                {/* Services page temporarily archived
                <li>
                  <Link
                    href="/services"
                    prefetch={true}
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
                  >
                    Services
                  </Link>
                </li>
                */}
                {/* How It Works page temporarily archived
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
                  >
                    How It Works
                  </Link>
                </li>
                */}
                {/* Case Studies page temporarily archived
                <li>
                  <Link
                    href="/case-studies"
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
                  >
                    Case Studies
                  </Link>
                </li>
                */}
                {/* Pricing page temporarily archived
                <li>
                  <Link
                    href="/pricing"
                    prefetch={true}
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
                  >
                    Pricing
                  </Link>
                </li>
                */}
                <li>
                  <Link
                    href="/contact"
                    prefetch={true}
                    className="text-navy-light hover:text-[#3daeff] text-sm hover:no-underline focus-visible transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Mission Statement */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
              Our Mission
            </h3>
            <p className="mt-4 text-sm text-navy-light leading-relaxed">
              To equip businesses with the tools and support they need to navigate emerging
              technologies with confidence, so they can grow with purpose and serve their
              communities faithfully.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="btn-secondary hover:no-underline text-sm focus-visible"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
