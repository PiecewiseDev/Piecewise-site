import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';
import { generatePageMetadata, SITE_CONFIG } from '@/lib/metadata';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Piecewise',
      description: 'The requested case study could not be found.',
    };
  }

  // Use the case study's image if available, otherwise use default logo
  const ogImage = caseStudy.image || '/logos/piecewiselogo7.png';

  return generatePageMetadata({
    title: `${caseStudy.title} | Piecewise Case Study`,
    description: caseStudy.description,
    path: `/case-studies/${slug}`,
    type: 'article',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: caseStudy.imageAlt || `${caseStudy.title} - Piecewise Case Study`,
      },
    ],
    // Add publication date if available in your case study data
    // publishedTime: caseStudy.publishedDate,
    // modifiedTime: caseStudy.modifiedDate,
  });
}

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  // Helper function to convert markdown bold (**text**) to HTML and handle paragraphs
  const parseMarkdownBold = (text: string) => {
    // First convert bold markers to strong tags
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Convert double line breaks to paragraph breaks
    html = html
      .split('\n\n')
      .map((p) => `<p>${p.trim()}</p>`)
      .join('');
    return html;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NEW LAYOUT FOR LEGACY - Hero + Sticky Sidebar */}
      {caseStudy.slug === 'legacy-repairs-remodeling' && caseStudy.companyInfo ? (
        <>
          {/* HERO SECTION - Two Column Layout */}
          <section className="relative -mt-20 pt-32 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 bg-gray-100 overflow-hidden">
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
              {/* Breadcrumbs - Above everything */}
              <div className="mb-8 inline-block">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2">
                  <Link
                    href="/case-studies"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    Success Stories
                  </Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-500">Legacy Repairs & Remodeling</span>
                </nav>
                <div className="h-px bg-gray-300"></div>
              </div>

              {/* Main Content Grid - 12 columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Side - Logo & Headline (5 columns) */}
                <div className="lg:col-span-5 space-y-12 lg:pr-8">
                  {/* Headline */}
                  <h1
                    className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 text-left max-w-2xl"
                    style={{ lineHeight: '1.3' }}
                  >
                    {caseStudy.title}
                  </h1>

                  {/* Featuring Label + Logo (grouped together) */}
                  <div className="space-y-3 -mt-6">
                    {/* Featuring Label */}
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Featuring
                    </p>

                    {/* Logo */}
                    <div className="w-52 h-20">
                      <div className="relative w-full h-full">
                        <Image
                          src="/logos/Legacy+Logo+Black.png"
                          alt={`${caseStudy.client} logo`}
                          fill
                          className="object-contain object-left grayscale opacity-60"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Team Image (7 columns) */}
                <div className="lg:col-span-7 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/LegacyRRteam1.jpg"
                    alt="Legacy Repairs & Remodeling team"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* STICKY SIDEBAR SECTION */}
          <section className="relative py-16 md:py-24 lg:py-32 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
              {/* Main Grid: 3 cols sticky sidebar + 9 cols content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-32">
                {/* LEFT SIDEBAR - STICKY (3 columns) */}
                <div className="lg:col-span-3 bg-gray-100 lg:py-8 lg:px-6">
                  <div className="lg:sticky lg:top-24">
                    <div className="space-y-8">
                      {/* Logo */}
                      <div className="w-32 h-12">
                        <div className="relative w-full h-full">
                          <Image
                            src="/logos/Legacy+Logo+Black.png"
                            alt={caseStudy.client}
                            fill
                            className="object-contain object-left grayscale opacity-60"
                          />
                        </div>
                      </div>

                      {/* About */}
                      <div>
                        <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2">
                          About
                        </h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {caseStudy.companyInfo.about}
                        </p>
                      </div>

                      {/* Industry */}
                      <div>
                        <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2">
                          Industry
                        </h3>
                        <p className="text-base text-gray-700">{caseStudy.category}</p>
                      </div>

                      {/* Company Size */}
                      {caseStudy.companyInfo.companySize && (
                        <div>
                          <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2">
                            Company Size
                          </h3>
                          <p className="text-base text-gray-700">
                            {caseStudy.companyInfo.companySize}
                          </p>
                        </div>
                      )}

                      {/* Location */}
                      {caseStudy.companyInfo.headquarters && (
                        <div>
                          <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2">
                            Location
                          </h3>
                          <p className="text-base text-gray-700">
                            {caseStudy.companyInfo.headquarters}
                          </p>
                        </div>
                      )}

                      {/* Founded */}
                      {caseStudy.companyInfo.founded && (
                        <div>
                          <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2">
                            Founded
                          </h3>
                          <p className="text-base text-gray-700">{caseStudy.companyInfo.founded}</p>
                        </div>
                      )}

                      {/* What They Do */}
                      <div>
                        <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4">
                          What They Do
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="text-base text-gray-700">
                              Handyman & Maintenance Repairs
                            </span>
                          </div>

                          <div className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                            <span className="text-base text-gray-700">Custom Home Remodeling</span>
                          </div>

                          <div className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                            <span className="text-base text-gray-700">
                              Exterior & Structural Upgrades
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT - SCROLLS (9 columns) */}
                <div className="lg:col-span-9 space-y-12">
                  {/* Challenge & Solution - Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Challenge</h3>
                      <p className="text-base text-gray-700 leading-normal max-w-prose">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Solution</h3>
                      <p className="text-base text-gray-700 leading-normal max-w-prose">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results - Two Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Results Title + First 2 bullets */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Results</h3>
                      <ul className="space-y-4 max-w-prose">
                        {caseStudy.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-base text-gray-700 leading-normal">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column - Remaining bullets */}
                    <div className="md:pt-11">
                      <ul className="space-y-4 max-w-prose">
                        {caseStudy.results.slice(2).map((result, idx) => (
                          <li key={idx + 2} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-base text-gray-700 leading-normal">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Story - Full Width Narrative */}
                  {caseStudy.story && (
                    <div className="mt-16">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                        Legacy's Story
                      </h2>
                      <div
                        className="text-base text-gray-600 leading-relaxed max-w-prose [&>p]:mb-6 [&>p:last-child]:mb-0 [&_strong]:block [&_strong]:text-lg [&_strong]:font-semibold [&_strong]:text-gray-800 [&_strong]:mt-10 [&_strong]:mb-3"
                        dangerouslySetInnerHTML={{ __html: parseMarkdownBold(caseStudy.story) }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : caseStudy.slug === 'trinity-parking' ||
        caseStudy.slug === 'fresh-events-services' ||
        caseStudy.slug ===
          'lake-norman-fence' ? // Trinity, Fresh Events, and Lake Norman Fence have their own custom hero sections below
      null : (
        <section className="relative -mt-20 pt-36 pb-16 md:pt-44 md:pb-24 lg:pt-52 lg:pb-32 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 overflow-hidden">
          {/* Background with subtle pattern - matching home page */}
          <div className="absolute inset-0 z-0">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.08),_transparent_50%)]"></div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest text-center mb-12 md:mb-16 lg:mb-20 leading-tight tracking-tight max-w-3xl mx-auto">
              {caseStudy.title}
            </h1>

            {/* Info Card */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-b from-[#e8ebf6]/40 to-[#f2f4f9]/40 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-10 items-center">
                  {/* Logo Section */}
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-full h-24 flex items-center justify-center bg-gradient-to-br from-slate-100/80 to-slate-50/80 rounded-[1rem] p-6">
                      <div className="text-3xl font-bold text-slate-800 tracking-tight">
                        {caseStudy.client
                          .split(' ')
                          .map((word) => word[0])
                          .join('')}
                      </div>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                    {/* Industry */}
                    <div>
                      <div className="text-[0.8rem] font-normal text-slate-600 mb-1.5">
                        Industry
                      </div>
                      <div className="text-[0.95rem] text-slate-800 font-normal leading-relaxed">
                        {caseStudy.category}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <div className="text-[0.8rem] font-normal text-slate-600 mb-1.5">
                        Headquarters
                      </div>
                      <div className="text-[0.95rem] text-slate-800 font-normal leading-relaxed">
                        Louisville, KY
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <div className="text-[0.8rem] font-normal text-slate-600 mb-1.5">
                        Use Cases
                      </div>
                      <div className="text-[0.95rem] text-slate-800 font-normal leading-relaxed">
                        Client communication
                        <br />
                        Project estimation
                        <br />
                        Scheduling
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trinity Parking redesigned content is rendered below after Legacy sections */}

      {/* The Problem Section - Challenge One */}
      {caseStudy.slug === 'legacy-repairs-remodeling' && (
        <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/60 via-yellow-50/40 to-orange-50/60">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest text-center mb-12 md:mb-16">
              The Problem
            </h2>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                  A business owner at breaking point
                </h3>
                <div className="text-base md:text-lg leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Luke ran a thriving home improvement business with two divisions—repairs and
                    remodeling—managing 3-7 projects simultaneously with a team of five. But success
                    came at a devastating personal cost. He was working 60-70 hours per week, with
                    30-40 of those hours spent firefighting: constant phone calls, texts, and emails
                    (even while driving), supervising all repairs projects personally, managing
                    client communication for both divisions, and coordinating people, materials, and
                    timelines across multiple job sites.
                  </p>

                  <p>
                    &quot;I loved the business, but I had to choose to love my family more,&quot;
                    Luke explains. With a baby on the way and no consistent lunch breaks, an
                    irregular workout schedule, and a frustrated team unable to get quick responses,
                    he faced an impossible choice: make significant investments to change how the
                    business ran, significantly reduce his workforce, or in a worst case, shutter
                    the company. His team&apos;s end-of-year feedback was blunt: &quot;You
                    can&apos;t pick up the phone.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* The Solution Section - Challenge One */}
      {caseStudy.slug === 'legacy-repairs-remodeling' && (
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-blue-50/60">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest text-center mb-12 md:mb-16">
              The Solution
            </h2>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                  A custom-trained business intelligence tool for rapid system building
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-slate-700">
                  Piecewise built a custom GPT trained on Luke&apos;s company operations, enabling
                  him to rapidly create and implement systems. The transformation process felt like
                  exponential leaps in capability: &quot;Every step of the way, it basically just
                  felt like my head was exploding because I was so excited about what this tool
                  could do. It&apos;s like I&apos;d been breaking two-by-fours over my knee to make
                  processes. Then general GPT was like someone put a hammer in my hand. But then
                  every step—now I have a handsaw, then a circular saw—every step was like an
                  unfathomable leap.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Third Quote Section - Split Layout (Text Left, Image Right) */}
      {caseStudy.slug === 'legacy-repairs-remodeling' && caseStudy.quote && (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Quote Text - Left Side */}
              <div className="space-y-6">
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-slate-900">
                  &ldquo;My system can grow and adapt and change as fast as my company is growing,
                  adapting, and changing. As new changes are coming, or even if it&apos;s not a
                  system change but a tariff issue or something like that, I&apos;m able to
                  essentially see how an issue will affect every little piece of my company, fix
                  that issue, and then update everything. I can create training documents, memos
                  instantly to bring my team up to speed.&rdquo;
                </blockquote>
                <div className="text-sm md:text-base text-slate-600">
                  <div className="font-medium text-slate-900">{caseStudy.quote.author}</div>
                  <div>Owner, {caseStudy.client}</div>
                </div>
              </div>

              {/* Visual Element - Right Side */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/LegacyRR5.jpg"
                  alt="Legacy Repairs & Remodeling project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* The Vision Section */}
      {caseStudy.slug === 'legacy-repairs-remodeling' && (
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Side - Text Content */}
              <div className="lg:col-span-7">
                {/* Eyebrow */}
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  The Vision
                </p>
                {/* Main Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
                  What does the future hold?
                </h2>

                <div className="text-base md:text-lg leading-relaxed text-slate-700 space-y-6 max-w-prose">
                  <p>
                    &quot;I recommend Piecewise to at least two people every week,&quot; Luke says.
                    His vision goes beyond his own business. &quot;Piecewise took my company from
                    potentially scalable to actively scalable, and I want every business I work with
                    to experience the same growth. I want my subcontractors using this
                    tool—otherwise, they simply won&apos;t be able to keep up.&quot;
                  </p>

                  <p>
                    The shift from 70-hour weeks to true strategic leadership, from constant
                    firefighting to purposeful building, from survival mode to sustainable
                    growth—this is what a well-trained AI tool makes possible. Today, Luke&apos;s
                    business runs on documented systems, clear processes, and scalable operations,
                    all while giving him back the time to be present for what matters most.
                  </p>

                  <p>
                    The future is one of more projects, a stronger team, and continued
                    success—without sacrificing the life he worked so hard to create.
                  </p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="lg:col-span-5 relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/LukePHeadshot.jpg"
                  alt="Luke Plescia, Owner of Legacy Repairs & Remodeling"
                  fill
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fourth Quote Section - Final Testimonial */}
      {caseStudy.slug === 'legacy-repairs-remodeling' && caseStudy.quote && (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-neutral-darkest mb-8">
              &ldquo;Piecewise has made running my business more efficient, and in the long run it
              will be a lot cheaper and faster—I&apos;m getting more done with less stress.&rdquo;
            </blockquote>
            <div className="text-base md:text-lg text-slate-600">
              <div className="font-semibold text-neutral-darkest">{caseStudy.quote.author}</div>
              <div>Owner, {caseStudy.client}</div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section - Legacy */}
      {caseStudy.slug === 'legacy-repairs-remodeling' && (
        <section className="bg-section-light py-16 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-12 md:mb-14 max-w-3xl mx-auto md:mx-0 md:whitespace-nowrap text-neutral-darkest">
              Take the First Step
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 space-y-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-between w-full px-6 py-4 border-2 border-gray-400 rounded-lg hover:border-neutral-darkest transition-all duration-200 hover:shadow-md"
                >
                  <span className="text-lg font-semibold text-neutral-darkest">Work with us</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 text-neutral-darkest"
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
                <p className="text-sm text-gray-600">
                  Schedule a discovery call to explore AI solutions for your business
                </p>
              </div>

              <div className="md:col-span-6 space-y-3">
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-between w-full px-6 py-4 border-2 border-gray-400 rounded-lg hover:border-neutral-darkest transition-all duration-200 hover:shadow-md"
                >
                  <span className="text-lg font-semibold text-neutral-darkest">
                    Learn more about us
                  </span>
                  <svg
                    className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 text-neutral-darkest"
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
                <p className="text-sm text-gray-600">
                  Discover our mission and approach to custom AI development
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trinity Case Study Content Sections */}

      {/* ============================================ */}
      {/* TRINITY PARKING - REDESIGNED CASE STUDY */}
      {/* ============================================ */}

      {/* HERO SECTION - Trinity */}
      {caseStudy.slug === 'trinity-parking' && (
        <section className="relative -mt-20 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-white overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(148 163 184 / 0.03) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(148 163 184 / 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '48px 48px',
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
            {/* Breadcrumbs */}
            <nav className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <Link
                  href="/customer-stories"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Success Stories
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-500">Trinity Parking</span>
              </div>
            </nav>

            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="lg:col-span-6 space-y-8">
                {/* Logo */}
                <div className="w-56 h-20 relative">
                  <Image
                    src="/logos/Trinity+Logo+Wordmark.png"
                    alt="Trinity Parking logo"
                    fill
                    sizes="224px"
                    className="object-contain object-left"
                  />
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-darkest leading-[1.1]">
                  From Chaos to <span className="text-blue-500">100% Growth</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  How a valet company doubled their client base while cutting the owner&apos;s hours
                  in half—all in six months.
                </p>

                {/* Key Stats Row */}
                <div className="flex flex-wrap gap-8 pt-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-darkest">2x</div>
                    <div className="text-sm text-gray-500 font-medium">Client growth</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-darkest">50%</div>
                    <div className="text-sm text-gray-500 font-medium">Hours reduced</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-darkest">50</div>
                    <div className="text-sm text-gray-500 font-medium">Staff managed</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Hero Image */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[400px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/HunterAllisonHeadshot2.jpeg"
                    alt="Hunter Allison, Founder of Trinity Parking"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {/* Name badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-semibold text-lg">Hunter Allison</p>
                    <p className="text-white/80 text-sm">Founder, Trinity Parking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE STORY INTRO - Trinity */}
      {caseStudy.slug === 'trinity-parking' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {/* Section Label */}
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                The Story
              </p>

              {/* Lead paragraph */}
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-darkest leading-relaxed font-medium">
                Hunter Allison built Trinity Parking from the ground up. But everything that made
                the business successful lived in his head—and that was becoming a problem.
              </p>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  Every client question, every process decision, every training need required
                  Hunter&apos;s direct involvement. His team was capable, but without documented
                  systems, they couldn&apos;t operate independently. He was working 40+ hours a week
                  on internal problems, leaving little time for what actually grows a business:
                  winning new clients.
                </p>

                <p>
                  After two years with the wrong person in a critical role, Hunter realized the real
                  bottleneck wasn&apos;t just finding the right people—it was having systems that
                  could make anyone successful. That&apos;s when he called Piecewise.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FEATURED QUOTE - Trinity */}
      {caseStudy.slug === 'trinity-parking' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="relative">
              {/* Large quote mark */}
              <div className="absolute -top-4 -left-4 text-8xl md:text-9xl text-blue-100 font-serif leading-none select-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10 pl-8 md:pl-12">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-darkest leading-relaxed">
                  We were spending so much time brainstorming and trying to develop regular systems.
                  Most of our time was spent going back and forth about &apos;okay, we tried this,
                  it didn&apos;t work. Let&apos;s try this and see if this works.&apos;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/images/HunterAllisonHeadshot2.jpeg"
                      alt="Hunter Allison"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-darkest">Hunter Allison</div>
                    <div className="text-gray-500 text-sm">Founder, Trinity Parking</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* THE CHALLENGE - Trinity */}
      {caseStudy.slug === 'trinity-parking' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left Column - Section Header */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                    The Challenge
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight">
                    Trapped in the Founder&apos;s Head
                  </h2>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-8 space-y-12">
                {/* Challenge 1 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                      Knowledge Bottleneck
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Every decision, every client question, every process lived exclusively in
                    Hunter&apos;s head. Creating service agreements, training manuals, and policy
                    documents required hours of manual work—time that could have been spent growing
                    the business.
                  </p>
                </div>

                {/* Challenge 2 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                      Trial and Error Chaos
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Without documented systems, everything was trial and error. &quot;We tried this,
                    it didn&apos;t work. Let&apos;s try something else.&quot; The team struggled
                    without clear processes, and inconsistency crept into every client interaction.
                  </p>
                </div>

                {/* Challenge 3 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                      Scaling Was Impossible
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Working 40+ hours on internal problems left no time for business development.
                    Opportunities passed by because Trinity lacked the operational foundation to
                    take on more clients—even when the demand was there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE SOLUTION - Trinity */}
      {caseStudy.slug === 'trinity-parking' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left Column - Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/Trinityphoto2.jpg"
                    alt="Trinity Parking valet operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
                <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                  The Solution
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight mb-8">
                  Extracting Expertise Into Systems
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    In March 2024, Piecewise built a Custom GPT through detailed knowledge
                    extraction sessions that captured Hunter&apos;s expertise, processes, and
                    decision-making frameworks.
                  </p>

                  <p>
                    Existing policies, procedures, and business documents were integrated into the
                    GPT, creating a unified knowledge base. Key team members were trained to
                    leverage it for their specific roles—transforming how Trinity operated
                    day-to-day.
                  </p>
                </div>

                {/* Feature list */}
                <div className="mt-10 space-y-4">
                  {[
                    'Knowledge extraction sessions to capture expertise',
                    'Integration of existing policies and procedures',
                    'Team training for operations managers',
                    'Document generation in minutes, not hours',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE RESULTS - Trinity */}
      {caseStudy.slug === 'trinity-parking' && (
        <section className="py-20 md:py-28 lg:py-32 bg-neutral-darkest">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                The Results
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                From 3 Clients to 6 in Six Months
              </h2>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Result 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">100%</div>
                <div className="text-lg font-semibold text-white mb-2">Revenue Growth</div>
                <p className="text-gray-400 text-sm">
                  Doubled client base from 3 to 6 annual recurring accounts.
                </p>
              </div>

              {/* Result 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">50%</div>
                <div className="text-lg font-semibold text-white mb-2">Fewer Hours</div>
                <p className="text-gray-400 text-sm">
                  Hunter&apos;s work hours dropped from 40 to 20 per week.
                </p>
              </div>

              {/* Result 3 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">95%</div>
                <div className="text-lg font-semibold text-white mb-2">Document Complete</div>
                <p className="text-gray-400 text-sm">
                  GPT generates documents that need only light editing.
                </p>
              </div>

              {/* Result 4 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">3mo</div>
                <div className="text-lg font-semibold text-white mb-2">Black Book Done</div>
                <p className="text-gray-400 text-sm">
                  Operations manual completed in 3 months instead of 8.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TRANSFORMATION QUOTE - Trinity */}
      {caseStudy.slug === 'trinity-parking' && caseStudy.quote && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-darkest leading-relaxed mb-8">
              &ldquo;{caseStudy.quote.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/HunterAllisonHeadshot2.jpeg"
                  alt="Hunter Allison"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-darkest">{caseStudy.quote.author}</div>
                <div className="text-gray-500 text-sm">Founder, {caseStudy.client}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TEAM ADOPTION - Trinity */}
      {caseStudy.slug === 'trinity-parking' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                Team Transformation
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight max-w-3xl mx-auto">
                The Whole Team Now Works at a Higher Level
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-darkest mb-3">Hunter</h3>
                <p className="text-gray-600 text-sm">
                  Generates training materials, contracts, and policy documents on demand—cutting
                  document creation from hours to minutes.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-darkest mb-3">Aiden</h3>
                <p className="text-gray-600 text-sm">
                  Leverages the GPT for LinkedIn content creation, maintaining consistent brand
                  voice across all social channels.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-darkest mb-3">Christie</h3>
                <p className="text-gray-600 text-sm">
                  Transforms rough notes into polished, professional client emails—elevating every
                  customer interaction.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* LOOKING AHEAD - Trinity */}
      {caseStudy.slug === 'trinity-parking' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                Looking Ahead
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight">
                Built for Continued Growth
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                With 100% growth achieved and systems in place, Trinity is now focused on continued
                scaling. Hunter&apos;s vision includes capturing each team member&apos;s unique
                communication style within the GPT, making it even more versatile for different use
                cases—from social media content to client emails to internal documentation.
              </p>

              <p>
                The transformation proves a fundamental truth: the combination of the right people
                and the right systems is what scales businesses. Trinity has built the scalable
                infrastructure needed for continued growth, with systems that evolve as the business
                evolves.
              </p>
            </div>

            {/* Future vision callout */}
            <div className="mt-12 bg-blue-50 rounded-2xl p-8 md:p-10 border border-blue-100">
              <p className="text-lg md:text-xl text-neutral-darkest font-medium leading-relaxed">
                &ldquo;I can proofread a document and feel 100% good about putting that out in five
                or ten minutes, whereas it would take me two hours to physically create the document
                from scratch. The GPT gets me to the same level of quality in a fraction of the
                time.&rdquo;
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA - Trinity */}
      {caseStudy.slug === 'trinity-parking' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Trinity doubled their clients while cutting Hunter&apos;s hours in half. Let&apos;s
              explore what&apos;s possible for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Your Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/customer-stories"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-blue-500 border-2 border-gray-200 hover:border-blue-200 rounded-xl transition-all duration-200"
              >
                Read More Success Stories
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* FRESH EVENTS SERVICES - REDESIGNED CASE STUDY */}
      {/* ============================================ */}

      {/* HERO SECTION - Fresh Events */}
      {caseStudy.slug === 'fresh-events-services' && (
        <section className="relative -mt-20 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-white overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(148 163 184 / 0.03) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(148 163 184 / 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '48px 48px',
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
            {/* Breadcrumbs */}
            <nav className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <Link
                  href="/customer-stories"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Success Stories
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-500">Fresh Event Services</span>
              </div>
            </nav>

            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="lg:col-span-6 space-y-8">
                {/* Logo */}
                <div className="w-48 h-16 relative">
                  <Image
                    src="/logos/Fresheventsserviceslogo.png"
                    alt="Fresh Event Services logo"
                    fill
                    sizes="192px"
                    className="object-contain object-left"
                  />
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-darkest leading-[1.1]">
                  From Overwhelmed to <span className="text-blue-500">Unstoppable</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  How a solo event planner reclaimed 15 hours per week and transformed her business
                  with a custom AI assistant.
                </p>

                {/* Key Stats Row */}
                <div className="flex flex-wrap gap-8 pt-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-darkest">15+</div>
                    <div className="text-sm text-gray-500 font-medium">Hours saved weekly</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-darkest">3x</div>
                    <div className="text-sm text-gray-500 font-medium">Event capacity</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-darkest">1st</div>
                    <div className="text-sm text-gray-500 font-medium">Organic Google lead</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Hero Image */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[400px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/JennFrontieroHeadshot.jpeg"
                    alt="Jen Frontiero, Founder of Fresh Event Services"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {/* Name badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-semibold text-lg">Jen Frontiero</p>
                    <p className="text-white/80 text-sm">Founder, Fresh Event Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE STORY INTRO - Fresh Events */}
      {caseStudy.slug === 'fresh-events-services' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {/* Section Label */}
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                The Story
              </p>

              {/* Lead paragraph with drop cap effect */}
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-darkest leading-relaxed font-medium">
                Jen Frontiero loved creating unforgettable events. What she didn&apos;t love was
                spending every spare moment drafting emails, updating her website, and wrestling
                with pricing decisions.
              </p>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  Running Fresh Event Services as a solo entrepreneur meant wearing every hat. Event
                  coordinator. Marketing manager. Sales rep. Customer service. Each role demanded
                  attention, and administrative tasks were winning the battle for her time.
                  Operating part-time while maintaining other employment, Jen faced a ceiling she
                  couldn&apos;t break through—there simply weren&apos;t enough hours to grow.
                </p>

                <p>
                  She wasn&apos;t looking for a magic bullet. She needed a partner who understood
                  her business—someone who could help her move faster without losing the personal
                  touch that made her clients love working with her.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FEATURED QUOTE - Fresh Events */}
      {caseStudy.slug === 'fresh-events-services' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="relative">
              {/* Large quote mark */}
              <div className="absolute -top-4 -left-4 text-8xl md:text-9xl text-blue-100 font-serif leading-none select-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10 pl-8 md:pl-12">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-darkest leading-relaxed">
                  I was spending so much time on communications and administrative work that I
                  wasn&apos;t able to focus on the creative side of why I started this business.
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/images/JennFrontieroHeadshot.jpeg"
                      alt="Jen Frontiero"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-darkest">Jen Frontiero</div>
                    <div className="text-gray-500 text-sm">Founder, Fresh Event Services</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* THE CHALLENGE - Fresh Events */}
      {caseStudy.slug === 'fresh-events-services' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left Column - Section Header */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                    The Challenge
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight">
                    Drowning in Details
                  </h2>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-8 space-y-12">
                {/* Challenge 1 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                      Administrative Overwhelm
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Every client interaction required careful attention—crafting emails, creating
                    proposals, managing follow-ups. Hours disappeared into tasks that felt necessary
                    but didn&apos;t grow the business. Operating part-time meant every minute
                    counted, but admin work was consuming the time she needed to actually serve
                    clients.
                  </p>
                </div>

                {/* Challenge 2 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                      Decision Paralysis
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Without a thought partner, every decision stalled. How should she price this
                    complex project? Should she accept that event? What&apos;s the right way to
                    phrase this email? Solo entrepreneurship meant second-guessing became the norm,
                    and momentum was impossible to maintain.
                  </p>
                </div>

                {/* Challenge 3 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                      A Growth Ceiling
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    The math didn&apos;t work. More clients meant more admin work. More admin work
                    meant less time for clients. The business couldn&apos;t scale because Jen
                    couldn&apos;t clone herself. Something fundamental had to change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE SOLUTION - Fresh Events */}
      {caseStudy.slug === 'fresh-events-services' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left Column - Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/fresheventsservicesflower1.png"
                    alt="Fresh Event Services floral arrangement"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
                <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                  The Solution
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight mb-8">
                  An AI Assistant That Actually Knows Her Business
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Piecewise didn&apos;t build a generic chatbot. They created a Custom GPT trained
                    specifically on Jen&apos;s business—her brand voice, her pricing philosophy, her
                    processes, and her past decisions.
                  </p>

                  <p>
                    The result? An AI assistant that sounds like Jen, thinks like Jen, and helps Jen
                    move faster without losing what makes her business special.
                  </p>
                </div>

                {/* Feature list */}
                <div className="mt-10 space-y-4">
                  {[
                    'Trained on existing content to match authentic brand voice',
                    'Embedded knowledge of services, pricing, and best practices',
                    'Strategic thought partnership for faster decision-making',
                    'Document generation that maintains consistency',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE RESULTS - Fresh Events */}
      {caseStudy.slug === 'fresh-events-services' && (
        <section className="py-20 md:py-28 lg:py-32 bg-neutral-darkest">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                The Results
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                The Numbers Speak for Themselves
              </h2>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Result 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">10-15</div>
                <div className="text-lg font-semibold text-white mb-2">Hours Saved Weekly</div>
                <p className="text-gray-400 text-sm">
                  Administrative tasks that once consumed entire days now take minutes.
                </p>
              </div>

              {/* Result 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">Same-Call</div>
                <div className="text-lg font-semibold text-white mb-2">Pricing Capability</div>
                <p className="text-gray-400 text-sm">
                  Accurate quotes during initial calls lead to faster booking decisions.
                </p>
              </div>

              {/* Result 3 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">Multi</div>
                <div className="text-lg font-semibold text-white mb-2">Event Capacity</div>
                <p className="text-gray-400 text-sm">
                  Confidence to book multiple events per week that would have been declined before.
                </p>
              </div>

              {/* Result 4 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">1st</div>
                <div className="text-lg font-semibold text-white mb-2">Organic Google Lead</div>
                <p className="text-gray-400 text-sm">
                  Improved online presence through consistent, optimized content creation.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TRANSFORMATION QUOTE - Fresh Events */}
      {caseStudy.slug === 'fresh-events-services' && caseStudy.quote && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-darkest leading-relaxed mb-8">
              &ldquo;{caseStudy.quote.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/JennFrontieroHeadshot.jpeg"
                  alt="Jen Frontiero"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-darkest">{caseStudy.quote.author}</div>
                <div className="text-gray-500 text-sm">Founder, {caseStudy.client}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* LOOKING AHEAD - Fresh Events */}
      {caseStudy.slug === 'fresh-events-services' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                Looking Ahead
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight">
                From Part-Time to Full Potential
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                The efficiency gains have positioned Jen to make the leap she&apos;d been dreaming
                of—from part-time entrepreneur to full-time business owner. With systems in place to
                handle increased demand, there&apos;s finally capacity to develop new services and
                explore opportunities without sacrificing quality.
              </p>

              <p>
                The documented processes and systems created with the GPT&apos;s help provide a
                blueprint for onboarding future team members when the time comes. What started as a
                tool to save time has become the foundation for sustainable growth.
              </p>
            </div>

            {/* Future vision callout */}
            <div className="mt-12 bg-blue-50 rounded-2xl p-8 md:p-10 border border-blue-100">
              <p className="text-lg md:text-xl text-neutral-darkest font-medium leading-relaxed">
                &ldquo;Building the Custom GPT is just the tip of the iceberg. There&apos;s so much
                potential here—not just for my business, but for any event coordinator or small
                business owner who&apos;s been held back by administrative tasks.&rdquo;
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA - Fresh Events */}
      {caseStudy.slug === 'fresh-events-services' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Jen went from overwhelmed to unstoppable. Let&apos;s explore what&apos;s possible for
              your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Your Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/customer-stories"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-blue-500 border-2 border-gray-200 hover:border-blue-200 rounded-xl transition-all duration-200"
              >
                Read More Success Stories
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* LAKE NORMAN FENCE - REDESIGNED CASE STUDY */}
      {/* ============================================ */}

      {/* HERO SECTION - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && (
        <section className="relative -mt-20 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-white overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(148 163 184 / 0.03) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(148 163 184 / 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '48px 48px',
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
            {/* Breadcrumbs */}
            <nav className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <Link
                  href="/customer-stories"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Success Stories
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-500">Lake Norman Fence</span>
              </div>
            </nav>

            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="lg:col-span-6 space-y-8">
                {/* Logo */}
                <div className="w-56 h-20 relative">
                  <Image
                    src="/logos/LKNF-Logo-2022-06.webp"
                    alt="Lake Norman Fence logo"
                    fill
                    sizes="224px"
                    className="object-contain object-left"
                  />
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-darkest leading-[1.1]">
                  Zero Learning Curve, <span className="text-blue-500">Instant Results</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  How a solo salesman reclaimed 2+ hours every week—while responding to customers
                  faster than ever.
                </p>

                {/* Key Stats Row */}
                <div className="flex flex-wrap gap-8 pt-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-darkest">2+</div>
                    <div className="text-sm text-gray-500 font-medium">Hours saved/week</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-darkest">0</div>
                    <div className="text-sm text-gray-500 font-medium">Learning curve</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-darkest">Fast</div>
                    <div className="text-sm text-gray-500 font-medium">Response times</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Hero Image */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[400px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/LKNFBackground2.webp"
                    alt="Lake Norman Fence installation"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {/* Name badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-semibold text-lg">Chase Foley</p>
                    <p className="text-white/80 text-sm">Sales Manager, Lake Norman Fence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE STORY INTRO - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {/* Section Label */}
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                The Story
              </p>

              {/* Lead paragraph */}
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-darkest leading-relaxed font-medium">
                Chase Foley knew AI was the future. But as someone who describes himself as
                &quot;very basic, kind of old school&quot; with technology, he wasn&apos;t sure
                where to start.
              </p>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  As the primary salesperson for Lake Norman Fence, Chase spent most of his days on
                  the road—meeting with customers, doing site visits, and closing deals. But that
                  left a problem: customer emails piled up, documents took forever to create, and
                  quick questions went unanswered while he was driving.
                </p>

                <p>
                  He needed something that could help immediately—without a steep learning curve or
                  major time investment. That&apos;s exactly what Piecewise delivered.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FEATURED QUOTE - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="relative">
              {/* Large quote mark */}
              <div className="absolute -top-4 -left-4 text-8xl md:text-9xl text-blue-100 font-serif leading-none select-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10 pl-8 md:pl-12">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-darkest leading-relaxed">
                  I have trouble finding time to answer every call that comes in or respond to every
                  email quickly when I&apos;m driving around doing sales on the road.
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">CF</span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-darkest">Chase Foley</div>
                    <div className="text-gray-500 text-sm">Sales Manager, Lake Norman Fence</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* THE CHALLENGE - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left Column - Section Header */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                    The Challenge
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight">
                    Always on the Road, Always Behind
                  </h2>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-8 space-y-12">
                {/* Challenge 1 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                      Emails Piling Up
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Customer questions would come in while Chase was driving or on-site with
                    clients. Every unanswered email meant a potential opportunity slipping away.
                  </p>
                </div>

                {/* Challenge 2 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                      Document Creation Drain
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Business documents, Excel formulas, and spreadsheets took hours to create
                    manually—time that could have been spent closing deals.
                  </p>
                </div>

                {/* Challenge 3 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-darkest">
                      No Sounding Board
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    As a solo operator, Chase had no one to bounce ideas off of—whether it was
                    planning time off or thinking through new business strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE SOLUTION - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left Column - Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/lakenormanfenceimage2.jpg"
                    alt="Lake Norman Fence project"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
                <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                  The Solution
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight mb-8">
                  A Custom GPT That Just Works
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Piecewise built a Custom GPT trained specifically on Lake Norman Fence&apos;s
                    operations—understanding the fencing industry, Chase&apos;s communication style,
                    and the company&apos;s daily workflow.
                  </p>

                  <p>
                    The setup was fast and minimally time-consuming, requiring only brief
                    conversations to understand the business needs. Most importantly: there was zero
                    learning curve.
                  </p>
                </div>

                {/* Feature list */}
                <div className="mt-10 space-y-4">
                  {[
                    'Trained on fencing industry context',
                    "Understands Chase's communication style",
                    'Fast setup with minimal time investment',
                    'Zero learning curve—intuitive from day one',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE RESULTS - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && (
        <section className="py-20 md:py-28 lg:py-32 bg-neutral-darkest">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                The Results
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Immediate Impact, Zero Friction
              </h2>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Result 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">2+</div>
                <div className="text-lg font-semibold text-white mb-2">Hours Saved Weekly</div>
                <p className="text-gray-400 text-sm">
                  Document creation that took hours now takes minutes.
                </p>
              </div>

              {/* Result 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">0</div>
                <div className="text-lg font-semibold text-white mb-2">Learning Curve</div>
                <p className="text-gray-400 text-sm">
                  Intuitive enough for immediate adoption, even for self-described &quot;old
                  school&quot; users.
                </p>
              </div>

              {/* Result 3 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">Fast</div>
                <div className="text-lg font-semibold text-white mb-2">Response Times</div>
                <p className="text-gray-400 text-sm">
                  Customer emails answered quickly, even while on the road.
                </p>
              </div>

              {/* Result 4 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">Daily</div>
                <div className="text-lg font-semibold text-white mb-2">Workflow Integration</div>
                <p className="text-gray-400 text-sm">
                  Keeps the tool open in browser as a supplemental resource.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* KEY USE CASES - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                How It&apos;s Used
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight max-w-3xl mx-auto">
                Four Ways the GPT Helps Every Week
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Use Case 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-darkest mb-3">
                  Email Response Assistance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Quick customer questions get answered fast—even when Chase is driving or on-site
                  with another client. Professional responses, every time.
                </p>
              </div>

              {/* Use Case 2 */}
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-darkest mb-3">
                  Document &amp; Formula Creation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Business documents and Excel spreadsheets with formulas that used to take hours
                  now take minutes—freeing Chase to focus on sales.
                </p>
              </div>

              {/* Use Case 3 */}
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-darkest mb-3">
                  Business Strategy Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When planning time off, the GPT helps develop comprehensive plans so nothing falls
                  through the cracks during absences.
                </p>
              </div>

              {/* Use Case 4 */}
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-darkest mb-3">
                  Strategic Brainstorming Partner
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The GPT serves as a sounding board for business ideas, providing feedback based on
                  knowledge of Chase&apos;s specific operations and goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EXPERIENCE QUOTE - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && caseStudy.quote && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-darkest leading-relaxed mb-8">
              &ldquo;Everything&apos;s been great. The initial call was great, all the onboarding
              stuff was awesome. It was super easy, not too time-consuming, and they built a really
              good model that&apos;s super useful.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">CF</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-darkest">{caseStudy.quote.author}</div>
                <div className="text-gray-500 text-sm">{caseStudy.client}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WHY IT WORKED - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && (
        <section className="py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-4">
                Why It Worked
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest leading-tight">
                The Perfect Fit for Busy Operators
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-lg font-semibold text-neutral-darkest mb-3">
                  Tailored to Specific Needs
                </h3>
                <p className="text-gray-600">
                  Unlike generic AI, this GPT understood Lake Norman Fence&apos;s specific context,
                  industry, and operational style.
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-lg font-semibold text-neutral-darkest mb-3">
                  Zero Learning Curve
                </h3>
                <p className="text-gray-600">
                  Intuitive enough for immediate adoption—even for someone who calls themselves
                  &quot;old school&quot; with technology.
                </p>
              </div>

              <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
                <h3 className="text-lg font-semibold text-neutral-darkest mb-3">
                  Solves Real Problems
                </h3>
                <p className="text-gray-600">
                  Addresses genuine pain points—time management, document creation, and strategic
                  planning—not technology for technology&apos;s sake.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <h3 className="text-lg font-semibold text-neutral-darkest mb-3">Non-Disruptive</h3>
                <p className="text-gray-600">
                  Integrates seamlessly into existing workflows without requiring business process
                  changes or significant time investment.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA - Lake Norman Fence */}
      {caseStudy.slug === 'lake-norman-fence' && (
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkest mb-6">
              Ready to Save Hours Every Week?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Chase went from struggling with emails and documents to having a tool that just works.
              Let&apos;s build the same for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Your Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/customer-stories"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-blue-500 border-2 border-gray-200 hover:border-blue-200 rounded-xl transition-all duration-200"
              >
                Read More Success Stories
              </Link>
            </div>

            {/* Final quote */}
            <div className="mt-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-100 text-left max-w-2xl mx-auto">
              <blockquote className="text-lg md:text-xl text-neutral-darkest font-medium leading-relaxed mb-4">
                &ldquo;There was no learning curve at all. It&apos;s pretty intuitive. I just keep
                it up in my browser and have it as a supplemental tool, and it fits right into my
                workflow.&rdquo;
              </blockquote>
              <div className="text-gray-500 text-sm">
                <span className="font-semibold text-neutral-darkest">Chase Foley</span> — Lake
                Norman Fence
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
