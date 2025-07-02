import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container-wide py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Contact Information */}
          <div>
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="mt-4 space-y-3 not-italic">
              <p className="text-sm text-navy-light">4201 Park Road</p>
              <p className="text-sm text-navy-light">Suite 305</p>
              <p className="text-sm text-navy-light">Charlotte, NC 28209</p>
              <p className="text-sm text-navy-light mt-4">
                <a href="mailto:info@company.com" className="hover:text-accent">
                  info@company.com
                </a>
              </p>
              <p className="text-sm text-navy-light">
                <a href="tel:+11234567890" className="hover:text-accent">
                  (123) 456-7890
                </a>
              </p>
            </address>
            <div className="mt-6 flex space-x-6">
              <a
                href="#"
                className="text-navy-light hover:text-accent hover:no-underline"
                aria-label="Twitter"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-navy-light hover:text-accent hover:no-underline"
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
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-navy-light hover:text-accent text-sm hover:no-underline focus-visible"
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
              To equip businesses with the clarity, tools, and support they need to navigate AI with confidence, so they can grow with purpose and serve their communities faithfully.
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
        <div className="mt-8 sm:mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-navy-light">
            © {new Date().getFullYear()} Piecewise, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
