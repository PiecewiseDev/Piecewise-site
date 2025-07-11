'use client';

import React, { ReactNode } from 'react';
import { RevealOnScroll } from '@/components/ui';

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'accent' | 'dark';
  width?: 'narrow' | 'wide' | 'full';
  padding?: 'normal' | 'large' | 'small';
  id?: string;
  centered?: boolean;
  animate?: boolean;
  animationDelay?: number;
};

/**
 * PageSection - A reusable section component for page layouts
 *
 * Usage example:
 * ```tsx
 * <PageSection background="light" width="narrow" centered>
 *   <h2>Section Title</h2>
 *   <p>Section content goes here</p>
 * </PageSection>
 * ```
 *
 * @param background - Background color: 'white', 'light', 'accent', or 'dark'
 * @param width - Content width: 'narrow' (max-w-4xl), 'wide' (max-w-7xl), or 'full'
 * @param padding - Section padding: 'normal' (default), 'large', or 'small'
 * @param centered - Whether to center the content horizontally
 * @param className - Additional CSS classes
 * @param id - Optional ID for the section (for anchor links)
 * @param animate - Whether to animate the section on scroll
 * @param animationDelay - Delay for the animation in ms
 */
export default function PageSection({
  children,
  className = '',
  background = 'white',
  width = 'wide',
  padding = 'normal',
  id,
  centered = false,
  animate = false,
  animationDelay = 100,
}: PageSectionProps) {
  // Background color classes
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-background',
    accent: 'bg-accent/10',
    dark: 'bg-[#1a2e3b] text-white',
  };

  // Width classes
  const widthClasses = {
    narrow: 'max-w-4xl',
    wide: 'max-w-7xl',
    full: 'w-full',
  };

  // Padding classes
  const paddingClasses = {
    small: 'py-8 px-4 md:px-6',
    normal: 'py-16 px-4 md:px-12',
    large: 'py-24 px-4 md:px-12',
  };

  // Text alignment
  const alignmentClasses = centered ? 'text-center' : '';

  const sectionContent = (
    <section id={id} className={`${bgClasses[background]} ${className}`}>
      <div
        className={`${widthClasses[width]} mx-auto ${paddingClasses[padding]} ${alignmentClasses}`}
      >
        {children}
      </div>
    </section>
  );

  return animate ? (
    <RevealOnScroll delay={animationDelay}>{sectionContent}</RevealOnScroll>
  ) : (
    sectionContent
  );
}
