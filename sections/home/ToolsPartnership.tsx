import React from 'react';
import Link from 'next/link';
import { PageSection } from '@/components/layout';

const ToolsPartnership: React.FC = () => {
  // AI tool logos data
  const aiTools = [
    {
      name: 'ChatGPT',
      logoSrc: '/logos/toolslogos/ChatGPT-Logo-Without-Background-Features-ChatGPT.png',
    },
    { name: 'Claude', logoSrc: '/logos/toolslogos/Claude_AI_logo.png' },
    { name: 'Gemini', logoSrc: '/logos/toolslogos/Google_Gemini_logo.png' },
    { name: 'Grok', logoSrc: '/logos/toolslogos/Grok-feb-2025-logo.png' },
    { name: 'Copilot', logoSrc: '/logos/toolslogos/Copilot-transparent-logo.png' },
    {
      name: 'Midjourney',
      logoSrc: '/logos/toolslogos/6785d9267c7132c7371dbea5_Midjourney-Full-Logo.png',
    },
    { name: 'Zapier', logoSrc: '/logos/toolslogos/Zapier-Logo.png' },
    { name: 'n8n', logoSrc: '/logos/toolslogos/N8n-logo-new.png' },
    { name: 'Slack', logoSrc: '/logos/toolslogos/Slack-logo.png' },
  ];

  return (
    <div
      style={{ backgroundColor: '#1a1a1d' }}
      className="py-16 md:py-24 shadow-[0_-8px_32px_rgba(0,0,0,0.15),0_8px_32px_rgba(0,0,0,0.15)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: '#F1F1F1' }}
            >
              Tools that work{' '}
              <span className="relative">
                <span className="font-extrabold" style={{ color: '#F1F1F1' }}>
                  with
                </span>
                <span
                  className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full"
                  style={{
                    transform: 'rotate(-0.5deg)',
                    borderRadius: '50% 20% 40% 30%',
                    background: 'white',
                    height: '3px',
                  }}
                ></span>
              </span>{' '}
              you
            </h2>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: '#F1F1F1', opacity: 0.9 }}
            >
              We partner with service-driven businesses to help take the first step in their AI
              journey.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-[#3A66F7] rounded-lg px-6 py-3 text-base font-semibold hover:bg-white/90 transition-colors duration-200 shadow-sm"
              >
                See what a tool like ChatGPT could do
                <svg
                  className="ml-2 w-5 h-5"
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
                  className="group relative bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40 hover:bg-white/40 hover:scale-105 transition-all duration-200 flex items-center justify-center"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center justify-center w-full h-20">
                    <img
                      src={tool.logoSrc}
                      alt={tool.name}
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
