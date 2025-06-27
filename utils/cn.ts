/**
 * Simple utility to combine class names
 */
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
