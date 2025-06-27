import React from 'react';

const ReferralBanner: React.FC = () => {
  return (
    <div className="mb-16 animate-fade-in animation-delay-600">
      <div className="bg-white border-2 border-dashed border-accent/60 rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="shrink-0">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
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
                  strokeWidth="1.5"
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
            </div>
          </div>

          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">
              Know Someone Who Could Use This?
            </h3>
            <p className="text-navy-light">
              Send them our way. If they become a client, your next month is free. No limit—get
              rewarded for every referral.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/contact"
              className="btn-outline px-6 py-3 inline-flex items-center gap-2 transition-all hover:bg-accent/5"
            >
              <span>Refer a friend</span>
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
