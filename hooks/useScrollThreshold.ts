import { useEffect, useState, useCallback } from 'react';

export interface UseScrollThresholdOptions {
  threshold?: number;
  throttleMs?: number;
}

/**
 * Custom hook to track if scroll position has passed a threshold
 *
 * @param options - Configuration options
 * @param options.threshold - Scroll position (in px) to trigger state change (default: 50)
 * @param options.throttleMs - Throttle delay in milliseconds (default: 100)
 * @returns Boolean indicating if scroll position is past threshold
 *
 * @example
 * ```tsx
 * function Navbar() {
 *   const isScrolled = useScrollThreshold({ threshold: 50 });
 *
 *   return (
 *     <header className={isScrolled ? 'bg-white shadow' : 'bg-transparent'}>
 *       Navigation
 *     </header>
 *   );
 * }
 * ```
 */
export function useScrollThreshold(options: UseScrollThresholdOptions = {}): boolean {
  const { threshold = 50, throttleMs = 100 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoized scroll handler to prevent recreating on every render
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const shouldBeScrolled = scrollY > threshold;

    // Only update state if it actually changed
    setIsScrolled((prevScrolled) => {
      if (prevScrolled !== shouldBeScrolled) {
        return shouldBeScrolled;
      }
      return prevScrolled;
    });
  }, [threshold]);

  useEffect(() => {
    // Check initial scroll position
    handleScroll();

    // Throttle function to limit how often the scroll handler runs
    let throttleTimeout: NodeJS.Timeout | null = null;

    const throttledScrollHandler = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, throttleMs);
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, [handleScroll, throttleMs]);

  return isScrolled;
}
