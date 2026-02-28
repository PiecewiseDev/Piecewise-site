'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CallToAction } from '@/sections/shared';

// Featured blog posts for the hero carousel
const featuredPosts = [
  {
    id: 1,
    slug: 'how-custom-gpts-save-time',
    title: 'How Custom GPTs Save Service Businesses 30+ Hours Per Week',
    description:
      'Discover the exact strategies contractors and service business owners use to reclaim their time and scale operations with AI.',
    date: 'March 15, 2024',
    image: '/images/Blogbackground4.jpg',
  },
  {
    id: 2,
    slug: 'scaling-without-hiring',
    title: 'Scaling Your Service Business Without Hiring More Staff',
    description:
      'Learn how AI automation enables service businesses to handle 2-3x more clients without expanding headcount.',
    date: 'March 10, 2024',
    image: '/images/Blogbackground2.jpg',
  },
  {
    id: 3,
    slug: 'custom-gpt-vs-chatgpt',
    title: 'Custom GPT vs. ChatGPT: What Service Businesses Need to Know',
    description:
      'Understanding the difference between generic AI tools and custom-trained GPTs designed for your specific business.',
    date: 'March 5, 2024',
    image: '/images/Blogbackground3.jpg',
  },
  {
    id: 4,
    slug: 'roi-of-ai-automation',
    title: 'Calculating the ROI of AI Automation for Service Businesses',
    description:
      'A practical framework for measuring the return on investment when implementing AI solutions in your operations.',
    date: 'February 28, 2024',
    image: '/images/Blogbackground1.jpg',
  },
];

// All blog posts for the grid
const allBlogPosts = [
  {
    id: 1,
    slug: 'post-1',
    title: 'Getting Started with Custom GPTs',
    description: 'Learn the basics of custom GPTs and how they can transform your business.',
    date: 'March 15, 2024',
    image: '/images/Blogbackground4.jpg',
    category: 'Product',
    logo: '/logos/OpenAIlogowhite.png',
  },
  {
    id: 2,
    slug: 'post-2',
    title: '5 Tips for AI Implementation',
    description: 'Practical tips to successfully implement AI tools in your workflow.',
    date: 'March 10, 2024',
    image: '/images/Blogbackground2.jpg',
    category: 'Tips',
    logo: '/logos/OpenAIlogowhite.png',
  },
  {
    id: 3,
    slug: 'post-3',
    title: 'AI Research Findings 2024',
    description: 'Latest research on AI adoption in service businesses.',
    date: 'March 5, 2024',
    image: '/images/Blogbackground3.jpg',
    category: 'Research',
    logo: '/logos/OpenAIlogowhite.png',
  },
  {
    id: 4,
    slug: 'post-4',
    title: 'Building Better Prompts',
    description: 'Master the art of crafting effective prompts for AI tools.',
    date: 'February 28, 2024',
    image: '/images/Blogbackground4.jpg',
    category: 'Tips',
    logo: '/logos/OpenAIlogowhite.png',
  },
  {
    id: 5,
    slug: 'post-5',
    title: 'Custom GPT Success Stories',
    description: 'Real businesses sharing their AI transformation journeys.',
    date: 'February 20, 2024',
    image: '/images/Blogbackground5.jpg',
    category: 'Product',
    logo: '/logos/OpenAIlogowhite.png',
  },
  {
    id: 6,
    slug: 'post-6',
    title: 'AI Automation Trends',
    description: 'Emerging trends in AI automation for small businesses.',
    date: 'February 15, 2024',
    image: '/images/Blogbackground6.jpg',
    category: 'Research',
    logo: '/logos/OpenAIlogowhite.png',
  },
  {
    id: 7,
    slug: 'post-7',
    title: 'Maximizing GPT Efficiency',
    description: 'Advanced strategies to get the most out of your custom GPT.',
    date: 'February 10, 2024',
    image: '/images/Blogbackground7.jpg',
    category: 'Tips',
    logo: '/logos/OpenAIlogowhite.png',
  },
  {
    id: 8,
    slug: 'post-8',
    title: 'New Features Released',
    description: 'Explore the latest features added to custom GPT platforms.',
    date: 'February 5, 2024',
    image: '/images/Blogbackground8.jpg',
    category: 'Product',
    logo: '/logos/OpenAIlogowhite.png',
  },
  {
    id: 9,
    slug: 'post-9',
    title: 'AI Impact Study Results',
    description: 'Comprehensive study on AI impact on service business productivity.',
    date: 'January 30, 2024',
    image: '/images/Blogbackground9.jpg',
    category: 'Research',
    logo: '/logos/OpenAIlogowhite.png',
  },
];

const categories = ['All', 'Product', 'Tips', 'Research'];

export default function BlogPage() {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const currentFeatured = featuredPosts[currentFeaturedIndex];

  // Filter posts by category
  const filteredPosts =
    selectedCategory === 'All'
      ? allBlogPosts
      : allBlogPosts.filter((post) => post.category === selectedCategory);

  // CTA section data
  const ctaData = {
    title: 'Explore more resources',
    primaryButton: {
      text: "Let's talk",
      link: '/contact',
      description: 'Schedule a discovery call to explore AI solutions for your business',
    },
    secondaryButton: {
      text: 'Browse AI tools',
      link: '/resources',
      description: 'Explore our curated directory of AI tools and resources',
    },
  };

  return (
    <>
      {/* Hero Section - Grey Background */}
      <section className="relative -mt-20 pt-32 pb-0 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-left tracking-tight">
            What We've Learned
          </h1>

          {/* Featured Post Carousel */}
          <div className="pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Side - Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl max-w-2xl group">
                <Image
                  src={currentFeatured.image}
                  alt={currentFeatured.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 blur-[0.5px]"
                  priority
                />
                {/* Grain overlay */}
                <div className="absolute inset-0 opacity-[0.6] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')]" />
                {/* OpenAI Logo overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/logos/OpenAIlogowhite.png"
                      alt="OpenAI Logo"
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="text-left space-y-4">
                <p className="text-sm text-slate-500">{currentFeatured.date}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {currentFeatured.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {currentFeatured.description}
                </p>
              </div>
            </div>

            {/* Dots Indicator and Navigation Arrows */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex items-center gap-3">
                {featuredPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeaturedIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentFeaturedIndex ? 'bg-slate-900' : 'bg-slate-300'
                    }`}
                    aria-label={`Go to featured post ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                {/* Left Arrow */}
                <button
                  onClick={() =>
                    setCurrentFeaturedIndex((prev) =>
                      prev === 0 ? featuredPosts.length - 1 : prev - 1
                    )
                  }
                  className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-slate-900 hover:bg-slate-50 transition-all"
                  aria-label="Previous post"
                >
                  <svg
                    className="w-5 h-5 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() =>
                    setCurrentFeaturedIndex((prev) =>
                      prev === featuredPosts.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-slate-900 hover:bg-slate-50 transition-all"
                  aria-label="Next post"
                >
                  <svg
                    className="w-5 h-5 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section - White Background */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-0 border-b border-slate-200">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`pb-4 px-8 text-lg font-semibold transition-colors relative ${
                    selectedCategory === category
                      ? 'text-slate-900'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="space-y-3">
                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{
                        filter: 'blur(2px) brightness(1.1)',
                      }}
                    />
                    {/* Grain overlay */}
                    <div className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.25] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')]" />

                    {/* Logo overlay for all posts with logos */}
                    {post.logo && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div className="relative w-16 h-16">
                          <Image
                            src={post.logo}
                            alt="Logo"
                            fill
                            className="object-contain drop-shadow-lg"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{post.title}</h3>

                  {/* Description */}
                  <p className="text-base text-slate-600 group-hover:text-slate-900 transition-colors leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  {/* Date */}
                  <p className="text-xs text-slate-500">{post.date}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title={ctaData.title}
        primaryButton={ctaData.primaryButton}
        secondaryButton={ctaData.secondaryButton}
      />
    </>
  );
}
