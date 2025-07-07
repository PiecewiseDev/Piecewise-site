import React from 'react';

export default function AboutIntro() {
  return (
    <div className="bg-white rounded-lg shadow-card p-8 lg:p-12 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column - Story */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy font-dm-sans">
            Why This Exists
          </h2>
          <div className="prose prose-lg text-navy-light font-dm-sans">
            <p>
              We created this service after seeing too many talented service business owners
              stretched thin, wearing every hat in their business and constantly interrupted by
              routine questions.
            </p>
            <p>
              Your expertise should be focused on delivering exceptional service to your customers,
              not answering the same policy questions or writing routine emails all day.
            </p>
            <p>
              Our Custom GPTs act as your personal assistant who understands your business from the
              inside out—freeing you to focus on what matters while maintaining the personal touch
              your customers value.
            </p>
            <p>
              We believe that with the right tools, service business owners can reduce their stress,
              increase their impact, and find more joy in the work they do every day.
            </p>
          </div>
        </div>

        {/* Right Column - Founder Image */}
        <div className="relative h-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden">
            {/* Image placeholder - replace with actual founder image when available */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-10 w-10 text-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <p className="text-navy-light text-sm">Founder image</p>
              <p className="text-navy font-medium mt-2">(Coming soon)</p>
            </div>

            {/* Uncomment and use this when you have a real image */}
            {/* 
            <Image
              src="/images/founder.jpg"
              alt="Founder"
              fill
              style={{ objectFit: 'cover' }}
            />
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
