import React from 'react';
import Image from 'next/image';

export default function OurMission() {
  return (
    <div className="py-16 md:py-24" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mission Content */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-left"
              style={{ color: '#1a1a1d' }}
            >
              Our Mission
            </h2>
            
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#1a1a1d', opacity: 0.9 }}
            >
              To equip businesses with the tools and support they need to navigate emerging
              technologies with confidence, so they can grow with purpose and serve their
              communities faithfully.
            </p>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-64 md:h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              {/* Placeholder content */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 