import React from 'react';

const WhatWeOffer: React.FC = () => {
  const offerings = [
    {
      phase: '01',
      title: 'Discovery & Strategy',
      description:
        'We understand your business, identify opportunities, and map out an AI implementation plan that fits your workflow.',
      features: ['Business assessment', 'Workflow analysis', 'Custom strategy roadmap'],
    },
    {
      phase: '02',
      title: 'Custom AI Development',
      description:
        'We build and train AI tools specifically for your business, using your data, processes, and business knowledge.',
      features: ['Custom AI training', 'Integration setup', 'Knowledge base creation'],
    },
    {
      phase: '03',
      title: 'Implementation & Support',
      description:
        'We ensure smooth adoption with training, ongoing support, and continuous optimization as your business evolves.',
      features: ['Team training', 'Ongoing support', 'Performance optimization'],
    },
  ];

  return (
    <div
      style={{ backgroundColor: '#1a1a1d' }}
      className="py-16 md:py-24 shadow-[0_-8px_32px_rgba(0,0,0,0.15),0_8px_32px_rgba(0,0,0,0.15)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ color: '#f1f1f1' }}
          >
            What We Offer
          </h2>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {offerings.map((offering, index) => (
            <div key={index} className="relative">
              {/* Phase Number */}
              <div className="mb-6">
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg"
                  style={{
                    backgroundColor:
                      offering.phase === '02'
                        ? '#3DAEFF'
                        : offering.phase === '03'
                          ? '#9A8CFB'
                          : '#3a66f7',
                  }}
                >
                  {offering.phase}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#f1f1f1' }}>
                  {offering.title}
                </h3>

                <p className="text-base leading-relaxed" style={{ color: '#f1f1f1', opacity: 0.9 }}>
                  {offering.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-2">
                  {offering.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mt-2.5 mr-3 flex-shrink-0"
                        style={{
                          backgroundColor:
                            offering.phase === '02'
                              ? '#3DAEFF'
                              : offering.phase === '03'
                                ? '#9A8CFB'
                                : '#3a66f7',
                        }}
                      ></span>
                      <span className="text-sm" style={{ color: '#f1f1f1', opacity: 0.8 }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connecting Line (for first two phases only) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-white/30 to-transparent transform translate-x-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
