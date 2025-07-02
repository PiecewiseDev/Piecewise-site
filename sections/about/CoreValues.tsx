import React from 'react';

export default function CoreValues() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-center"
          style={{ color: '#1a1a1d' }}
        >
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Value Card 1: Service First */}
          <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-8 w-8 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-navy">Service First</h3>
            <p className="text-navy-light">
              We serve with humility and care, putting our clients&apos; needs first.
            </p>
          </div>

          {/* Value Card 2: Clarity Over Complexity */}
          <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-8 w-8 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-navy">Clarity Over Complexity</h3>
            <p className="text-navy-light">
              We simplify the complex and provide clear, accessible solutions.
            </p>
          </div>

          {/* Value Card 3: Integrity Always */}
          <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-8 w-8 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-navy">Integrity Always</h3>
            <p className="text-navy-light">
              We do what&apos;s right, even when it&apos;s difficult or no one is watching.
            </p>
          </div>

          {/* Value Card 4: Stewardship */}
          <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-8 w-8 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-navy">Stewardship</h3>
            <p className="text-navy-light">
              We carefully manage resources and relationships entrusted to us.
            </p>
          </div>

          {/* Value Card 5: Faith in Action */}
          <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-8 w-8 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-navy">Faith in Action</h3>
            <p className="text-navy-light">
              We embody our beliefs through meaningful work and genuine relationships.
            </p>
          </div>

          {/* Value Card 6: Long-Term Partnership */}
          <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-8 w-8 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-navy">Long-Term Partnership</h3>
            <p className="text-navy-light">
              We build enduring relationships focused on sustained mutual success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
