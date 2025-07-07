'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { PageSection } from '@/components/layout';

const ToolsPartnership: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // AI tool logos data
  const aiTools = [
    {
      name: 'ChatGPT',
      logoSrc: '/logos/ToolsLogos/Chatgptlogo.png',
    },
    {
      name: 'Claude',
      logoSrc: '/logos/ToolsLogos/Claudelogo.png',
    },
    {
      name: 'Gemini',
      logoSrc: '/logos/ToolsLogos/Geminilogo.png',
    },
    {
      name: 'Grok',
      logoSrc: '/logos/ToolsLogos/Groklogo.png',
    },
    {
      name: 'Copilot',
      logoSrc: '/logos/ToolsLogos/Copilotlogo.png',
    },
    {
      name: 'Midjourney',
      logoSrc: '/logos/ToolsLogos/Midjouneylogo.png',
    },
    {
      name: 'Zapier',
      logoSrc: '/logos/ToolsLogos/Zapierlogo.png',
    },
    {
      name: 'n8n',
      logoSrc: '/logos/ToolsLogos/N8nlogo.png',
    },
    {
      name: 'Slack',
      logoSrc: '/logos/ToolsLogos/Slacklogo.png',
    },
  ];

  // IntersectionObserver for fade-in animation
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: '#1a1a1d' }}
      className="py-16 md:py-24 shadow-[0_-8px_32px_rgba(0,0,0,0.15),0_8px_32px_rgba(0,0,0,0.15)] overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight text-center md:text-left transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ color: '#F1F1F1' }}
            >
              Tools that work{' '}
              <span className="relative">
                <span className="font-extrabold" style={{ color: '#F1F1F1' }}>
                  with
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-1 bg-white rounded-full transition-all duration-1000 delay-500 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  style={{
                    transform: 'rotate(-0.5deg)',
                    borderRadius: '50% 20% 40% 30%',
                    background: 'white',
                    height: '3px',
                    transformOrigin: 'left',
                  }}
                ></span>
              </span>{' '}
              you
            </h2>

            <p
              className={`text-lg md:text-xl leading-relaxed max-w-lg text-center md:text-left transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ color: '#F1F1F1', opacity: 0.9 }}
            >
              We partner with service-driven businesses to help take the first step in their AI
              journey.
            </p>

            <div
              className={`flex justify-center md:justify-start transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-[#3A66F7] rounded-lg px-6 py-3 text-base font-semibold hover:bg-white/90 hover:text-[#2d52e3] hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-lg"
              >
                See what a tool like ChatGPT could do
                <svg
                  className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - AI Tools Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-6 p-8">
              {aiTools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`group relative bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40 hover:bg-white/40 hover:scale-105 transition-all duration-200 flex items-center justify-center ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  }}
                >
                  <div className="flex items-center justify-center w-full h-20">
                    <img
                      src={tool.logoSrc}
                      alt={`${tool.name} AI tool logo - Integrated with Piecewise custom AI solutions`}
                      className="max-w-full max-h-full object-contain"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                    />
                  </div>

                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
              ))}
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPartnership;
