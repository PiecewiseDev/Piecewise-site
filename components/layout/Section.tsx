'use client';

import { ReactNode } from 'react';
import { RevealOnScroll } from '@/components/ui';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'accent' | 'dark' | 'none';
  as?: keyof JSX.IntrinsicElements;
  animate?: boolean;
  animationDelay?: number;
}

export function Section({
  children,
  className = '',
  id,
  background = 'white',
  as: Component = 'section',
  animate = true,
  animationDelay = 100,
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    accent: 'bg-accent-light',
    dark: 'bg-navy',
    none: '',
  };

  const sectionContent = (
    <Component id={id} className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}>
      {children}
    </Component>
  );

  return animate ? (
    <RevealOnScroll delay={animationDelay}>{sectionContent}</RevealOnScroll>
  ) : (
    sectionContent
  );
}

export default Section;
