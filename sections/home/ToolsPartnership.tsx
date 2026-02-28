'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

const ToolsPartnership: React.FC = () => {
  const { isVisible, ref: containerRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  // AI tool logos data
  const aiTools = [
    {
      name: 'ChatGPT',
      logoSrc: '/logos/ToolsLogos/Chatgptlogo.png',
      description: 'Conversational AI',
    },
    {
      name: 'Claude',
      logoSrc: '/logos/ToolsLogos/Claudelogo.png',
      description: 'Advanced reasoning',
    },
    {
      name: 'Gemini',
      logoSrc: '/logos/ToolsLogos/Geminilogo.png',
      description: 'Multimodal AI',
    },
    {
      name: 'Grok',
      logoSrc: '/logos/ToolsLogos/Groklogo.png',
      description: 'Real-time insights',
    },
    {
      name: 'Copilot',
      logoSrc: '/logos/ToolsLogos/Copilotlogo.png',
      description: 'Productivity AI',
    },
    {
      name: 'Midjourney',
      logoSrc: '/logos/ToolsLogos/Midjouneylogo.png',
      description: 'Visual generation',
    },
    {
      name: 'Zapier',
      logoSrc: '/logos/ToolsLogos/Zapierlogo.png',
      description: 'Automation platform',
    },
    {
      name: 'n8n',
      logoSrc: '/logos/ToolsLogos/N8nlogo.png',
      description: 'Workflow automation',
    },
    {
      name: 'Slack',
      logoSrc: '/logos/ToolsLogos/Slacklogo.png',
      description: 'Team collaboration',
    },
  ];

  return (
    <section
      className="relative bg-neutral-darkest py-20 md:py-32 overflow-hidden"
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Tools that work{' '}
              <span className="relative inline-block">
                <span className="relative z-10">with</span>
                <span
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-white"
                  style={{
                    transform: 'rotate(-1deg)',
                    borderRadius: '50% 40% 60% 30%',
                  }}
                ></span>
              </span>{' '}
              you
            </h2>

            <p
              className={`text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              We partner with service-driven businesses to help take the first step in their AI
              journey. Leverage the power of leading AI platforms tailored to your needs.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link
                href="/customer-stories"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
              >
                <span>See what&apos;s possible</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-full font-semibold hover:-translate-y-0.5 transition-all duration-300 hover:gap-3 border border-slate-700 hover:border-slate-600 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <span className="relative text-white">Browse AI Tools</span>
                <svg
                  className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - AI Tools Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {aiTools.map((tool, index) => {
                const delay = isVisible ? `${(index + 1) * 80}ms` : '0ms';
                return (
                  <div
                    key={tool.name}
                    className={`group relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: delay }}
                    aria-label={tool.name}
                    title={tool.name}
                  >
                    {/* Card Container */}
                    <div className="relative bg-white/[0.12] backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-white/25 hover:bg-white/[0.20] hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 group-hover:scale-[1.06] aspect-square flex items-center justify-center overflow-hidden">
                      {/* Logo */}
                      <div className="relative w-full h-full flex items-center justify-center z-10 p-2">
                        <Image
                          src={tool.logoSrc}
                          alt={`${tool.name} - AI tool integration`}
                          fill
                          className="object-contain !relative !w-full !h-full filter brightness-[1.3] contrast-[1.08] saturate-[1.1] transition-all duration-300 group-hover:brightness-[1.4] group-hover:scale-110 group-hover:drop-shadow-lg"
                          sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 160px"
                        />
                      </div>

                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/8 group-hover:via-purple-500/8 group-hover:to-blue-500/8 rounded-2xl transition-all duration-500"></div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-purple-400/15 blur-xl rounded-2xl"></div>
                      </div>

                      {/* Brighter background on hover for better contrast */}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.08] rounded-2xl transition-all duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsPartnership;
