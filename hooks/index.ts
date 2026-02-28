/**
 * Custom React Hooks
 *
 * This file exports all custom hooks for the application.
 * Import hooks like:
 *
 * ```tsx
 * import { useContactForm } from "@/hooks";
 * ```
 */

export { useContactForm } from './useContactForm';
export type { ContactFormData, SubmitStatus, UseContactFormReturn } from './useContactForm';

export { useIntersectionObserver } from './useIntersectionObserver';
export type {
  UseIntersectionObserverOptions,
  UseIntersectionObserverReturn,
} from './useIntersectionObserver';

export { useScrollThreshold } from './useScrollThreshold';
export type { UseScrollThresholdOptions } from './useScrollThreshold';
