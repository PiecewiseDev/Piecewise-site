import React from 'react';
import Image from 'next/image';

export default function OurTeam() {
  return (
    <div className="py-16 md:py-24" style={{ backgroundColor: '#1a1a1d' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-12 text-left"
          style={{ color: '#f1f1f1' }}
        >
          Our Team
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-12 items-start max-w-5xl">
          {/* Left Column - Profile Image */}
          <div className="flex justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/kyle-profile.jpg"
                alt="Kyle Larsen - Founder & Lead Consultant"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105 rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="flex flex-col h-64 md:h-80 text-left">
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#f1f1f1' }}>
                Kyle Larsen
              </h3>
              <p className="text-lg md:text-xl font-semibold" style={{ color: '#3daeff' }}>
                Founder & Lead Consultant
              </p>
            </div>

            <div className="flex-1 space-y-3 mb-4">
              <p
                className="text-xs md:text-sm leading-relaxed"
                style={{ color: '#f1f1f1', opacity: 0.9 }}
              >
                Kyle is passionate about helping business owners embrace technology without the
                overwhelm. With a background in investment banking, he understands the demands of
                running a business and the importance of maximizing time and resources. His mission
                is to make AI simple, accessible, and empowering-so business owners can stay ahead
                without feeling left behind.
              </p>
              <p
                className="text-xs md:text-sm leading-relaxed"
                style={{ color: '#f1f1f1', opacity: 0.9 }}
              >
                Kyle believes that technology should serve people, not replace them. By introducing
                AI solutions that streamline operations, he helps business owners focus on what
                truly matters-family, faith, and the life they&apos;re building beyond work.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start space-x-3">
              <a
                href="https://linkedin.com/in/kyle-larsen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: '#0077b5' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
              </a>

              <a
                href="https://twitter.com/kyle_larsen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: '#1da1f2' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a
                href="mailto:kyle@piecewise.ai"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                aria-label="Email"
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: '#ea4335' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
