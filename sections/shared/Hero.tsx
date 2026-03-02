'use client';

import React, { useEffect, useState } from 'react';
import { HeroProps } from '@/lib/types';

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink, imageAlt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const words = ['Lead.', 'Serve.', 'Grow.'];
  const staticText = title || 'Custom AI Tools Built to Help You ';

  const handleTrialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setFormStatus('success');
        setEmail('');
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  // Animation classes for fade-in effect
  const getFadeInClasses = (delay: string, visible: boolean) => {
    const baseClasses = `transition-[opacity,transform] duration-300 ${delay}`;
    const stateClasses = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
    return `${baseClasses} ${stateClasses}`;
  };

  // Initial fade-in effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative -mt-20 overflow-hidden bg-[linear-gradient(175deg,#f1f5f9_55%,#cbd5e1_55%)] lg:bg-[linear-gradient(110deg,#f1f5f9_55%,#cbd5e1_55%)]">
      {/* Main Content */}
      <div className="relative z-10 w-full inner-section-container pt-36 md:pt-44 xl:pt-52 pb-20 md:pb-28 xl:pb-36">
        <div className="w-full max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Left: Main hero message */}
          <div className="lg:col-span-6 space-y-4 md:space-y-6 text-center lg:text-left">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-slate-900 leading-[1.08] tracking-tight ${getFadeInClasses('delay-75', isVisible)}`}
            >
              {title ? (
                <span className="block">{title}</span>
              ) : (
                <>
                  <span className="block mb-6">{staticText}</span>
                  <span
                    className="text-flip-frame inline-block relative overflow-hidden text-primary align-baseline h-[var(--line-height-hero)] leading-[var(--line-height-hero)]"
                    aria-live="polite"
                  >
                    <span className="text-flip-word">
                      {[...words, words[0]].map((word, index) => (
                        <span key={`${word}-${index}`} className="word-container">
                          <span>{word}</span>
                          <span className="word-fill" aria-hidden="true">
                            {word}
                          </span>
                        </span>
                      ))}
                    </span>
                  </span>
                </>
              )}
            </h1>

            <p
              className={`max-w-[54ch] text-lg md:text-xl xl:text-2xl text-slate-500 leading-[1.6] font-normal ${getFadeInClasses('delay-100', isVisible)}`}
            >
              {subtitle}
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

          {/* Right: Free trial copy + form */}
          <div
            className={`lg:col-span-5 lg:translate-y-4 ${getFadeInClasses('delay-150', isVisible)}`}
          >
            <div className="flex flex-col gap-3 sm:gap-4 rounded-xl bg-white px-6 sm:px-8 py-10 sm:py-12">
              <div>
                <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 flex-shrink-0">
                    <svg aria-hidden="true" className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-blue-900 leading-tight">
                    Try before you buy
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal leading-snug text-center lg:text-left">
                  We build. You try. Pay nothing unless you love it.
                </p>
              </div>
              {formStatus === 'success' ? (
                <div className="flex items-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 text-emerald-700">
                  <svg aria-hidden="true" className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm sm:text-base font-medium">We&apos;ll be in touch soon!</p>
                </div>
              ) : (
                <form
                  onSubmit={handleTrialSubmit}
                  className="flex flex-col sm:flex-row w-full gap-0"
                >
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    disabled={formStatus === 'submitting'}
                    className="flex-1 min-w-0 px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base leading-normal font-normal text-slate-900 bg-slate-50 border border-slate-300 rounded-t-xl sm:rounded-none sm:rounded-l-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary placeholder:text-slate-400 text-center sm:text-left disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 text-sm sm:text-base leading-normal font-semibold text-white bg-primary hover:bg-primary-hover rounded-b-xl sm:rounded-none sm:rounded-r-xl border border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting'
                      ? 'Sending...'
                      : ctaText || 'Start your free trial'}
                  </button>
                </form>
              )}
              {formStatus === 'error' && (
                <p className="text-sm text-red-500 mt-1">Something went wrong. Please try again.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
