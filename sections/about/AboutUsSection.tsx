import React from 'react';

export default function AboutUsSection() {
  return (
    <div className="py-16 md:py-24" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-left"
          style={{ color: '#1a1a1d' }}
        >
          About Us
        </h2>
        
        <div className="space-y-4">
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: '#1a1a1d', opacity: 0.9 }}
          >
            At Piecewise, we specialize in building custom AI solutions that help service 
            businesses work smarter, not harder. We understand that every business has unique 
            challenges, which is why we take a personalized approach to each project.
          </p>
          
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: '#1a1a1d', opacity: 0.9 }}
          >
            Our team combines deep technical expertise with real-world business experience 
            to create AI tools that actually solve problems. From automating repetitive tasks 
            to improving customer interactions, we help you leverage technology to grow your business.
          </p>
          
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: '#1a1a1d', opacity: 0.9 }}
          >
            Based in Charlotte, NC, we&apos;re passionate about helping local and national 
            service businesses discover how AI can transform their operations while maintaining 
            the personal touch that sets them apart.
          </p>
        </div>
      </div>
    </div>
  );
}
