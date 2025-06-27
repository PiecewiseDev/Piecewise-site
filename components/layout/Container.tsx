'use client';

import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  width?: 'narrow' | 'wide' | 'full';
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
  width = 'wide',
}: ContainerProps) {
  const widthClasses = {
    narrow: 'max-w-4xl',
    wide: 'max-w-7xl',
    full: 'w-full',
  };

  return (
    <Component className={`mx-auto px-4 sm:px-6 lg:px-8 ${widthClasses[width]} ${className}`}>
      {children}
    </Component>
  );
}

export default Container;
