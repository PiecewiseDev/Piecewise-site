'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorImage: string;
  image: string;
  featured: boolean;
}

// Featured blog posts data
const featuredPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'how-custom-gpts-save-time',
    title: 'How Custom GPTs Save Service Businesses 30+ Hours Per Week',
    excerpt:
      'Discover the exact strategies contractors and service business owners use to reclaim their time and scale operations with AI.',
    category: 'AI Strategy',
    readTime: '8 min read',
    date: 'Mar 15, 2024',
    author: 'Kyle Larsen',
    authorImage: '/images/kyle-profile.webp',
    image: '/images/Blogbackground4.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'scaling-without-hiring',
    title: 'Scaling Your Service Business Without Hiring More Staff',
    excerpt:
      'Learn how AI automation enables service businesses to handle 2-3x more clients without expanding headcount.',
    category: 'Scaling',
    readTime: '6 min read',
    date: 'Mar 10, 2024',
    author: 'Kyle Larsen',
    authorImage: '/images/kyle-profile.webp',
    image: '/images/Blogbackground2.jpg',
    featured: false,
  },
  {
    id: 3,
    slug: 'custom-gpt-vs-chatgpt',
    title: 'Custom GPT vs. ChatGPT: What Service Businesses Need to Know',
    excerpt:
      'Understanding the difference between generic AI tools and custom-trained GPTs designed for your specific business.',
    category: 'AI Basics',
    readTime: '5 min read',
    date: 'Mar 5, 2024',
    author: 'Kyle Larsen',
    authorImage: '/images/kyle-profile.webp',
    image: '/images/Blogbackground3.jpg',
    featured: false,
  },
  {
    id: 4,
    slug: 'ai-implementation-guide',
    title: 'The Complete Guide to Implementing AI in Your Service Business',
    excerpt:
      'A step-by-step roadmap for service business owners ready to integrate AI automation into their operations.',
    category: 'Implementation',
    readTime: '10 min read',
    date: 'Mar 1, 2024',
    author: 'Kyle Larsen',
    authorImage: '/images/kyle-profile.webp',
    image: '/images/Blogbackground1.jpg',
    featured: false,
  },
];

export default function BlogPreview() {
  const { isVisible, ref: containerRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 md:py-20 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex items-end justify-between mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Sharing What We've Learned
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors group"
          >
            <span>View All</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {featuredPosts.slice(0, 3).map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={`md:col-span-6 lg:col-span-4 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 80}ms` : '0ms',
              }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-slate-200 rounded-2xl mb-4 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                {/* OpenAI Logo overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/logos/OpenAIlogowhite.png"
                      alt="OpenAI Logo"
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                {/* Blog Label and Date */}
                <div className="text-xs text-slate-600 font-semibold mb-3 flex items-center gap-2">
                  <span>BLOG</span>
                  <span className="text-slate-400">•</span>
                  <span className="font-normal">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-700 leading-snug line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Follow Piecewise Section */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-slate-900 mb-6">
            Follow Piecewise for news and insights
          </p>
          <div className="flex items-center justify-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/piecewise-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-600 transition-colors duration-300"
              aria-label="Follow us on LinkedIn"
            >
              <svg
                className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/piecewise_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-900 transition-colors duration-300"
              aria-label="Follow us on X (Twitter)"
            >
              <svg
                className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/piecewise.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300"
              aria-label="Follow us on Instagram"
            >
              <svg
                className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@piecewise-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 hover:bg-red-600 transition-colors duration-300"
              aria-label="Subscribe on YouTube"
            >
              <svg
                className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors"
          >
            <span>View All Articles</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
