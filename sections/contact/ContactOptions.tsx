'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Turnstile } from '@marsidev/react-turnstile';
import { useContactForm, useIntersectionObserver } from '@/hooks';
import { FormStatusMessages } from '@/components/ui';

const ContactOptions: React.FC = () => {
  const { isVisible, ref: containerRef } = useIntersectionObserver({
    threshold: 0.2,
  });
  const { formData, submitStatus, isSubmitting, handleInputChange, handleSubmit } =
    useContactForm();
  const [turnstileToken, setTurnstileToken] = useState('');

  return (
    <section
      aria-label="Contact form and client testimonial"
      className="bg-slate-100 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-32"
      ref={containerRef}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 md:gap-8 lg:gap-8 xl:gap-10 2xl:gap-12">
          {/* Left Side - Contact Form (6/12 width) */}
          <div className="lg:col-span-6">
            {/* Status Messages */}
            <FormStatusMessages status={submitStatus} />

            <form
              className="space-y-3 md:space-y-4"
              onSubmit={(e) => handleSubmit(e, { turnstileToken })}
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name || ''}
                  onChange={handleInputChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-3 md:px-4 xl:px-5 py-2.5 md:py-3 xl:py-3.5 2xl:py-4 text-sm md:text-base 2xl:text-lg bg-white border border-slate-200 rounded-lg placeholder:text-slate-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="website" className="sr-only">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  autoComplete="url"
                  value={formData.website || ''}
                  onChange={handleInputChange}
                  placeholder="Company Website"
                  className="w-full px-3 md:px-4 xl:px-5 py-2.5 md:py-3 xl:py-3.5 2xl:py-4 text-sm md:text-base 2xl:text-lg bg-white border border-slate-200 rounded-lg placeholder:text-slate-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Email on full line */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email || ''}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                  className="w-full px-3 md:px-4 xl:px-5 py-2.5 md:py-3 xl:py-3.5 2xl:py-4 text-sm md:text-base 2xl:text-lg bg-white border border-slate-200 rounded-lg placeholder:text-slate-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  value={formData.message || ''}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Anything to add?"
                  className="w-full px-3 md:px-4 xl:px-5 py-2.5 md:py-3 xl:py-3.5 2xl:py-4 text-sm md:text-base 2xl:text-lg bg-white border border-slate-200 rounded-lg placeholder:text-slate-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Cloudflare Turnstile - invisible bot protection */}
              <Turnstile
                siteKey={
                  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'
                }
                onSuccess={(token) => setTurnstileToken(token)}
                options={{ size: 'invisible' }}
              />

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10 py-2 md:py-2.5 xl:py-3 2xl:py-3.5 text-sm md:text-base bg-primary hover:bg-primary-hover rounded-lg font-semibold transition-colors duration-200 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>

            {/* Direct Email Alternative */}
            <div className="mt-4 md:mt-5">
              <p className="text-xs md:text-sm 2xl:text-base text-slate-500 text-center md:text-left">
                Prefer to reach out directly? Email us at{' '}
                <a
                  href="mailto:kyle@piecewiseai.com"
                  className="font-medium text-primary no-underline hover:text-primary-hover transition-colors"
                >
                  kyle@piecewiseai.com
                </a>
              </p>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right Side - Testimonial Image Overlay (4/12 width) */}
          <div className="lg:col-span-4 lg:-mt-32 xl:-mt-36 2xl:-mt-40">
            <div className="relative h-72 sm:h-80 md:h-96 lg:h-full rounded-xl overflow-hidden">
              {/* Background Image */}
              <Image
                src="/images/LegacyRR5.jpg"
                alt="Legacy Repairs & Remodeling team at work"
                fill
                priority
                className="object-cover object-[30%_20%] grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Green Tint Overlay */}
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 2xl:p-12">
                {/* Logo at Top */}
                <div>
                  <Image
                    src="/logos/Legacy+Logo+Black.webp"
                    alt="Legacy Repairs & Remodeling"
                    width={160}
                    height={54}
                    className="h-8 sm:h-9 md:h-10 lg:h-10 xl:h-11 2xl:h-12 w-auto brightness-0 invert"
                  />
                </div>

                {/* Quote and Attribution at Bottom */}
                <div className="mt-8 md:mt-12 lg:mt-16">
                  <blockquote className="mt-4 mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal text-white/80 leading-relaxed">
                      &ldquo;Piecewise took my business from{' '}
                      <strong className="font-bold text-white">potentially</strong> to{' '}
                      <strong className="font-bold text-white">imminently</strong> scalable.&rdquo;
                    </p>
                  </blockquote>

                  <cite className="not-italic mt-4 block">
                    <p className="font-semibold text-white/70 text-xs md:text-xs xl:text-sm 2xl:text-base leading-none">
                      Luke Plescia
                    </p>
                    <p className="text-xs md:text-xs xl:text-xs 2xl:text-sm text-white/65 leading-none -mt-3 xl:whitespace-nowrap">
                      Owner, Legacy Repairs &amp; Remodeling
                    </p>
                  </cite>
                </div>
              </div>
            </div>
          </div>

          {/* Trailing Spacer Column */}
          <div className="hidden lg:block lg:col-span-1" />
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
