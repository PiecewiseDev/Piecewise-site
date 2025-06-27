'use client';

import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  threshold?: number;
  delay?: number; // delay in ms
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  threshold = 0.1,
  delay = 100,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to observe anymore
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully in view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const delayClass = `delay-${delay}`;

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${delayClass} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
