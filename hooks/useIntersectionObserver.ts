import { useEffect, useState, useRef, RefObject } from 'react';

export interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export interface UseIntersectionObserverReturn {
  isVisible: boolean;
  ref: RefObject<HTMLDivElement>;
}

/**
 * Custom hook for IntersectionObserver with fade-in animations
 *
 * @param options - IntersectionObserver configuration options
 * @returns Object containing visibility state and ref to attach to element
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { isVisible, ref } = useIntersectionObserver({ threshold: 0.2 });
 *
 *   return (
 *     <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'}>
 *       Content fades in when visible
 *     </div>
 *   );
 * }
 * ```
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const { threshold = 0.2, root = null, rootMargin = '0px', freezeOnceVisible = true } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already visible and freezeOnceVisible is true, don't observe again
    if (isVisible && freezeOnceVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer once element is visible (if freezeOnceVisible)
          if (freezeOnceVisible) {
            observer.disconnect();
          }
        } else if (!freezeOnceVisible) {
          // Allow element to become invisible again
          setIsVisible(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isVisible]);

  return { isVisible, ref };
}
