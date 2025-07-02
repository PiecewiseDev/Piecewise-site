import React from 'react';
import Image from 'next/image';
import { founderNoteData } from '@/data/aboutPageData';

export default function FounderNote() {
  return (
    <div className="bg-white rounded-lg shadow-card p-8 lg:p-12 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-center">
        {/* Left Column - Founder Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-40 h-40 md:w-48 md:h-48 bg-gray-50 rounded-full overflow-hidden border-4 border-accent/10">
            <Image
              src="/images/kyle-profile.jpg"
              alt="Kyle Larsen - Founder & CEO"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right Column - Founder Note */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-navy font-dm-sans">Founder Note</h3>
          <div className="space-y-4 text-navy-light font-dm-sans text-lg">
            <p className="relative">
              <span className="text-accent text-2xl absolute -left-3 top-0">"</span>I built this
              because I've seen how much time and trust small business owners lose to repeated
              questions and inconsistent messaging. Walking alongside service providers for years, I
              noticed they were constantly pulled away from their craft to handle the same queries
              over and over.
            </p>
            <p>
              Our CustomGPTs aren't about replacing the human touch—they're about freeing you to be
              more present where it truly matters. They handle the routine so you can focus on the
              relationships and work that only you can do.
            </p>
            <p>
              What drives me is seeing business owners reclaim their time and confidence, knowing
              their values and expertise are consistently represented even when they can't be
              personally involved in every conversation.
              <span className="text-accent text-2xl">"</span>
            </p>
          </div>
          <p className="mt-6 text-navy font-medium">— Kyle Larsen</p>
        </div>
      </div>
    </div>
  );
}
