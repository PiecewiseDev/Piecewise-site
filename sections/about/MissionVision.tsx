import React from 'react';

export default function MissionVision() {
  return (
    <div className="bg-white rounded-lg shadow-card p-8 lg:p-12 mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-navy animate-fade-in">
        Our Mission
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Mission */}
        <div className="relative animate-fade-in animation-delay-200">
          <div className="w-16 h-1 bg-accent/20 rounded-full mx-auto mb-8"></div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-navy">Mission</h3>
          <p className="text-navy-light max-w-md mx-auto font-dm-sans text-lg">
            To equip businesses with the tools and support they need to navigate emerging
            technologies with confidence, so they can grow with purpose and serve their communities
            faithfully.
          </p>
        </div>

        {/* Vision */}
        <div className="relative animate-fade-in animation-delay-400">
          <div className="w-16 h-1 bg-accent/20 rounded-full mx-auto mb-8"></div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-navy">Vision</h3>
          <p className="text-navy-light max-w-md mx-auto font-dm-sans text-lg">
            To be a trusted guide helping businesses lead with integrity and use AI wisely.
          </p>
        </div>
      </div>

      <div className="w-24 h-1 bg-accent/10 rounded-full mx-auto mt-12"></div>
    </div>
  );
}
