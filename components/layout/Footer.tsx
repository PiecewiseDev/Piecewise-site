import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-wide py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
          {/* Column 1: Logo and Contact Information */}
          <div>
            <h3 className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base font-semibold text-gray-700 uppercase tracking-wider mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5">
              Contact Us
            </h3>
            <address className="mt-3 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-5 2xl:mt-5 space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4 not-italic">
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base text-gray-600">
                436 East 36th Street
                <br />
                Charlotte, NC 28205
              </p>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                <a
                  href="tel:+19802180346"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  (980) 218-0346
                </a>
              </p>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                <a
                  href="mailto:kyle@piecewiseai.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  kyle@piecewiseai.com
                </a>
              </p>
            </address>
            <div className="mt-5 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-7 2xl:mt-8 flex space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-6 xl:space-x-7 2xl:space-x-8">
              <a
                href="https://www.linkedin.com/company/piecewiseai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 hover:no-underline transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-7 2xl:w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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
            <h3 className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base font-semibold text-gray-700 uppercase tracking-wider mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="mt-3 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-5 2xl:mt-5 space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 text-xs md:text-sm 2xl:text-base transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 text-xs md:text-sm 2xl:text-base transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                {/* Temporarily archived
                <li>
                  <Link
                    href="/resources"
                    className="text-neutral-dark hover:text-primary text-sm focus-visible transition-colors duration-200 underline"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-neutral-dark hover:text-primary text-sm focus-visible transition-colors duration-200 underline"
                  >
                    Blog
                  </Link>
                </li>
                */}
                {/* Temporarily archived Success Stories link
                <li>
                  <Link
                    href="/customer-stories"
                    className="group inline-flex items-center gap-0.5 sm:gap-0.5 md:gap-1 lg:gap-1 xl:gap-1 2xl:gap-1.5 text-gray-600 hover:text-gray-900 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base focus-visible transition-colors duration-200"
                  >
                    <span>Success Stories</span>
                    <svg
                      className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-3.5 2xl:h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </li>
                */}
                <li>
                  <Link
                    href="/contact"
                    prefetch={true}
                    className="text-gray-600 hover:text-gray-900 text-xs md:text-sm 2xl:text-base transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Mission Statement */}
          <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
            <h3 className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base font-semibold text-gray-700 uppercase tracking-wider mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5">
              Our Mission
            </h3>
            <p className="mt-3 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-5 2xl:mt-5 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base text-gray-600 leading-relaxed">
              To help entrepreneurs build better businesses, to magnify their impact and improve the
              communities they serve.
            </p>
            <Link
              href="/about"
              className="inline-block mt-3 text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
