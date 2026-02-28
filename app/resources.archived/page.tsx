'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { aiToolsData } from '@/data/aiTools';
import { resourcesPageSchema, organizationSchema } from '@/lib/structured-data';
import { CallToAction } from '@/sections/shared';

export default function ResourcesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryColors = (iconName: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string; hover: string }> = {
      chat: {
        bg: 'from-blue-50 to-blue-100/50',
        border: 'border-blue-200/60',
        icon: 'text-blue-600',
        hover: 'hover:border-blue-400 hover:bg-blue-50',
      },
      image: {
        bg: 'from-purple-50 to-purple-100/50',
        border: 'border-purple-200/60',
        icon: 'text-purple-600',
        hover: 'hover:border-purple-400 hover:bg-purple-50',
      },
      video: {
        bg: 'from-pink-50 to-pink-100/50',
        border: 'border-pink-200/60',
        icon: 'text-pink-600',
        hover: 'hover:border-pink-400 hover:bg-pink-50',
      },
      automation: {
        bg: 'from-amber-50 to-amber-100/50',
        border: 'border-amber-200/60',
        icon: 'text-amber-600',
        hover: 'hover:border-amber-400 hover:bg-amber-50',
      },
      microphone: {
        bg: 'from-green-50 to-green-100/50',
        border: 'border-green-200/60',
        icon: 'text-green-600',
        hover: 'hover:border-green-400 hover:bg-green-50',
      },
      document: {
        bg: 'from-slate-50 to-slate-100/50',
        border: 'border-slate-200/60',
        icon: 'text-slate-600',
        hover: 'hover:border-slate-400 hover:bg-slate-50',
      },
      code: {
        bg: 'from-cyan-50 to-cyan-100/50',
        border: 'border-cyan-200/60',
        icon: 'text-cyan-600',
        hover: 'hover:border-cyan-400 hover:bg-cyan-50',
      },
      chart: {
        bg: 'from-indigo-50 to-indigo-100/50',
        border: 'border-indigo-200/60',
        icon: 'text-indigo-600',
        hover: 'hover:border-indigo-400 hover:bg-indigo-50',
      },
      support: {
        bg: 'from-teal-50 to-teal-100/50',
        border: 'border-teal-200/60',
        icon: 'text-teal-600',
        hover: 'hover:border-teal-400 hover:bg-teal-50',
      },
      design: {
        bg: 'from-fuchsia-50 to-fuchsia-100/50',
        border: 'border-fuchsia-200/60',
        icon: 'text-fuchsia-600',
        hover: 'hover:border-fuchsia-400 hover:bg-fuchsia-50',
      },
      productivity: {
        bg: 'from-emerald-50 to-emerald-100/50',
        border: 'border-primary-200/60',
        icon: 'text-primary-600',
        hover: 'hover:border-primary-400 hover:bg-primary-50',
      },
      meeting: {
        bg: 'from-violet-50 to-violet-100/50',
        border: 'border-violet-200/60',
        icon: 'text-violet-600',
        hover: 'hover:border-violet-400 hover:bg-violet-50',
      },
      marketing: {
        bg: 'from-rose-50 to-rose-100/50',
        border: 'border-rose-200/60',
        icon: 'text-rose-600',
        hover: 'hover:border-rose-400 hover:bg-rose-50',
      },
      seo: {
        bg: 'from-orange-50 to-orange-100/50',
        border: 'border-orange-200/60',
        icon: 'text-orange-600',
        hover: 'hover:border-orange-400 hover:bg-orange-50',
      },
      voice: {
        bg: 'from-lime-50 to-lime-100/50',
        border: 'border-lime-200/60',
        icon: 'text-lime-600',
        hover: 'hover:border-lime-400 hover:bg-lime-50',
      },
      project: {
        bg: 'from-sky-50 to-sky-100/50',
        border: 'border-sky-200/60',
        icon: 'text-sky-600',
        hover: 'hover:border-sky-400 hover:bg-sky-50',
      },
      builder: {
        bg: 'from-yellow-50 to-yellow-100/50',
        border: 'border-yellow-200/60',
        icon: 'text-yellow-600',
        hover: 'hover:border-yellow-400 hover:bg-yellow-50',
      },
    };
    return colors[iconName] || colors.chat;
  };

  const getCategoryIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      chat: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      image: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      video: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      automation: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      microphone: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      document: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      code: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      chart: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      support: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      design: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      productivity: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      meeting: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      marketing: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      seo: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      voice: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ),
      project: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      builder: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    };
    return icons[iconName] || icons.chat;
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const clearAllCategories = () => {
    setSelectedCategories([]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 120; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Handle scroll for back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll carousel with custom timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentCategoryIndex((prev) => (prev + 1) % aiToolsData.length);
    }, 3000); // 3 seconds between transitions

    return () => clearTimeout(timer);
  }, [currentCategoryIndex]);

  // Filter categories based on selection and search
  const filteredCategories =
    selectedCategories.length === 0 && !searchQuery
      ? aiToolsData
      : aiToolsData
          .filter(
            (category) =>
              selectedCategories.length === 0 || selectedCategories.includes(category.id)
          )
          .map((category) => ({
            ...category,
            tools: category.tools.filter(
              (tool) =>
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchQuery.toLowerCase())
            ),
          }))
          .filter((category) => category.tools.length > 0);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section className="relative -mt-20 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30 border-b border-slate-200 pt-40 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-6">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                AI Tool Directory
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              AI Tools & Resources
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              Browse 100+ AI tools across 17 categories. From LLMs to automation, design to
              analytics — find the perfect tool for any task.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 hover:gap-3 hover:shadow-xl"
            >
              <span>Get Started with AI</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Category - Netflix-Style Hero Carousel */}
      <section className="relative bg-white overflow-hidden py-16 md:py-20 border-b border-slate-200">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Quick Jump</h2>
            <p className="text-slate-600">Browse by category</p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Category Cards - Stacked with transitions */}
            <div className="relative h-[400px] md:h-[500px]">
              {aiToolsData.map((category, index) => {
                const colors = getCategoryColors(category.icon);
                const isActive = index === currentCategoryIndex;
                const isPrev =
                  index === (currentCategoryIndex - 1 + aiToolsData.length) % aiToolsData.length;
                const isNext = index === (currentCategoryIndex + 1) % aiToolsData.length;

                return (
                  <div
                    key={category.id}
                    className={`absolute inset-0 transition-all duration-700 ${
                      isActive
                        ? 'opacity-100 scale-100 z-20'
                        : isPrev || isNext
                          ? 'opacity-0 scale-95 z-10'
                          : 'opacity-0 scale-90 z-0'
                    }`}
                  >
                    <button
                      onClick={() => {
                        scrollToCategory(category.id);
                      }}
                      className={`w-full h-full bg-gradient-to-br ${colors.bg} backdrop-blur-sm border-2 ${colors.border} rounded-3xl p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300 shadow-2xl`}
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        {/* Icon */}
                        <div
                          className={`w-24 h-24 md:w-32 md:h-32 mb-6 rounded-2xl bg-white/90 border-2 ${colors.border} flex items-center justify-center ${colors.icon} shadow-lg`}
                        >
                          <div className="transform scale-150 md:scale-[2]">
                            {getCategoryIcon(category.icon)}
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-3xl md:text-5xl font-bold ${colors.icon} text-center mb-4`}
                        >
                          {category.name}
                        </h3>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-slate-600 text-center mb-6 max-w-2xl">
                          {category.description}
                        </p>

                        {/* Tool Count Badge */}
                        <div
                          className={`inline-flex items-center gap-2 px-6 py-3 bg-white/90 border-2 ${colors.border} rounded-full shadow-md`}
                        >
                          <svg
                            className={`w-5 h-5 ${colors.icon}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                          <span className={`text-lg font-semibold ${colors.icon}`}>
                            {category.tools.length} Tools
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentCategoryIndex(
                  (prev) => (prev - 1 + aiToolsData.length) % aiToolsData.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Previous category"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => setCurrentCategoryIndex((prev) => (prev + 1) % aiToolsData.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Next category"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {aiToolsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCategoryIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentCategoryIndex
                      ? 'w-8 h-2 bg-slate-900'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  } rounded-full`}
                  aria-label={`Go to category ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Search Bar - Left Side */}
            <div className="relative flex-shrink-0 w-full sm:w-80">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filters - Right Side */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 flex-1 min-w-0">
              <button
                onClick={clearAllCategories}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 shadow-sm ${
                  selectedCategories.length === 0
                    ? 'bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>All Tools</span>
                {selectedCategories.length === 0 && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              {aiToolsData.map((category) => {
                const isSelected = selectedCategories.includes(category.id);
                const colors = getCategoryColors(category.icon);
                return (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 shadow-sm ${
                      isSelected
                        ? `bg-gradient-to-r ${colors.bg} ${colors.icon} border ${colors.border} shadow-md font-semibold`
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{category.name}</span>
                    {isSelected && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="bg-gradient-to-b from-slate-50/50 to-white py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {filteredCategories.map((category) => (
              <div key={category.id} id={category.id}>
                {/* Category Header */}
                <div className="flex items-start justify-between mb-7">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${getCategoryColors(category.icon).bg} border ${getCategoryColors(category.icon).border} flex items-center justify-center ${getCategoryColors(category.icon).icon} shadow-sm`}
                    >
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div className="mt-2">
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight tracking-tight">
                        {category.name}
                      </h2>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 px-2.5 py-1.5 rounded-full border border-slate-200/50">
                    <span className="font-medium">Scroll</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>

                {/* Horizontal Scrollable Row */}
                <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
                  <div className="flex gap-4 min-w-max">
                    {category.tools.map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg transition-all duration-200 w-[280px] h-[280px] flex-shrink-0 flex flex-col ${getCategoryColors(category.icon).hover}`}
                      >
                        {/* Top Row: Popular badge & External link icon */}
                        <div className="flex items-start justify-between mb-4">
                          {/* Popular Badge - Top Left */}
                          {tool.featured && (
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColors(category.icon).bg} ${getCategoryColors(category.icon).icon} border ${getCategoryColors(category.icon).border}`}
                            >
                              ★ Popular
                            </span>
                          )}
                          <div className="flex-1"></div>
                          {/* External Link Icon - Top Right */}
                          <svg
                            className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>

                        {/* Top 50% - Icon & Name */}
                        <div className="flex flex-col items-center justify-center flex-1 mb-3">
                          {/* Logo */}
                          <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden p-2 mb-5">
                            <Image
                              src={tool.logo}
                              alt={`${tool.name} logo`}
                              width={56}
                              height={56}
                              className="w-full h-full object-contain"
                              unoptimized
                            />
                          </div>
                          {/* Name */}
                          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight text-center">
                            {tool.name}
                          </h3>
                        </div>

                        {/* Bottom 50% - Description & Users */}
                        <div className="flex flex-col gap-1 flex-1">
                          {/* Description */}
                          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 text-center">
                            {tool.description}
                          </p>
                          {/* User Estimate */}
                          {tool.userEstimate && (
                            <p className="text-xs text-slate-500 text-center font-medium mb-auto">
                              {tool.userEstimate}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CallToAction
        title="Need Help Choosing the Right Tools?"
        primaryButton={{
          text: "Let's talk",
          link: '/contact',
          description: 'Schedule a discovery call to explore AI solutions for your business',
        }}
        secondaryButton={{
          text: 'View case studies',
          link: '/case-studies',
          description: 'See how other businesses have successfully implemented AI',
        }}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-blue-500/50"
          aria-label="Back to top"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          <svg
            className="relative w-6 h-6 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
