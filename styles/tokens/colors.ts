/**
 * Brand Color Palette
 *
 * Usage Guidelines (Design Best Practices):
 * - primary: Main CTAs, buttons, interactive elements (Blue-700)
 * - white/black: Pure colors for text and backgrounds
 * - grey.XXX: Mid-tone greys (200-600) for borders, disabled states, muted text
 * - neutral.XXX: Semantic aliases for common use cases (PREFERRED)
 *
 * Color Structure:
 * - white (100%): Default light backgrounds, text on dark
 * - black (0%): Default text color [ORIGINAL]
 * - Grey-200-600: Mid-tone greys only (no pure white/black in grey scale)
 *
 * Text Colors:
 * - Default text: black (0%)
 * - Text on dark backgrounds: white (100%)
 * - Muted/secondary text: Grey-400 (50%)
 *
 * Semantic Neutral Mapping:
 * - neutral.lightest (white): Default backgrounds
 * - neutral.lighter (grey-200): Borders, subtle backgrounds
 * - neutral.muted (grey-400): Secondary text
 * - neutral (DEFAULT/body/dark/heading/darkest): Black text
 */

export const colors = {
  background: 'hsl(var(--background) / <alpha-value>)',
  foreground: 'hsl(var(--foreground) / <alpha-value>)',

  // Brand Color Palette (HSL format)
  brand: {
    blue: 'hsl(210, 100%, 35%)', // Blue-700 - Primary brand blue
    grey: 'hsl(0, 0%, 50%)', // Grey-400 - Medium grey [ORIGINAL]
  },

  // Blue Scale (9 shades)
  blue: {
    100: 'hsl(210, 100%, 95%)', // Lightest - backgrounds, subtle highlights
    200: 'hsl(210, 100%, 88%)', // Very light - hover states for light backgrounds
    300: 'hsl(210, 97%, 75%)', // Light - borders, disabled states
    400: 'hsl(210, 95%, 55%)', // Medium-light - secondary actions
    500: 'hsl(210, 100%, 45%)', // Medium - active states, focus rings
    600: 'hsl(210, 100%, 40%)', // Medium-dark - secondary CTAs
    700: 'hsl(210, 100%, 35%)', // Primary - main CTAs, links, brand color
    800: 'hsl(210, 100%, 25%)', // Dark - hover states, pressed states
    900: 'hsl(210, 100%, 18%)', // Darkest - high contrast text, headers
  },

  // Core Colors - Pure black and white for text and backgrounds
  white: 'hsl(0, 0%, 100%)', // Pure white - default light backgrounds, text on dark
  black: 'hsl(0, 9%, 11%)', // Off-black - softer than pure black, better readability

  // Grey Scale (6 shades) - Mid-tone greys only
  // Based on original palette: 75%, 50%, 25%
  grey: {
    100: 'hsl(36, 24%, 96%)', // Warmest lightest - subtle warm backgrounds
    200: 'hsl(0, 0%, 88%)', // Lightest - subtle backgrounds, dividers, borders
    300: 'hsl(0, 0%, 75%)', // Light - disabled text, placeholder text [ORIGINAL]
    400: 'hsl(0, 0%, 50%)', // Medium - muted text, captions, icons [ORIGINAL]
    500: 'hsl(0, 0%, 43%)', // Medium-dark - intermediate elements
    600: 'hsl(0, 0%, 25%)', // Dark - dark backgrounds, special use [ORIGINAL]
  },

  // Semantic color mappings using design best practices
  // Hybrid approach: Keep numbered grey scale available + semantic aliases
  primary: {
    DEFAULT: 'hsl(210, 100%, 45%)', // Blue-500 - Main CTAs, buttons, links
    hover: 'hsl(210, 100%, 35%)', // Blue-700 - Hover states
    foreground: 'hsl(0, 0%, 100%)', // White - Text on primary
  },
  neutral: {
    // Backgrounds
    lightest: 'hsl(0, 0%, 100%)', // Pure white - default page backgrounds
    lighter: 'hsl(0, 0%, 88%)', // Grey-200 - subtle backgrounds, borders, dividers

    // Text (use off-black by default, white on dark backgrounds)
    muted: 'hsl(36, 14%, 28%)', // Warm brown-grey - secondary text, captions
    light: 'hsl(36, 14%, 28%)', // Warm brown-grey - alias for backwards compatibility
    DEFAULT: 'hsl(0, 9%, 11%)', // Off-black - PRIMARY BODY TEXT ★
    body: 'hsl(0, 9%, 11%)', // Off-black - body text (semantic alias)
    dark: 'hsl(0, 9%, 11%)', // Off-black - alias for backwards compatibility
    heading: 'hsl(0, 9%, 11%)', // Off-black - headings
    darkest: 'hsl(0, 9%, 11%)', // Off-black - maximum emphasis
  },

  // Semantic section colors
  section: {
    dark: 'hsl(0, 0%, 25%)', // Grey-600 - Dark section backgrounds
    light: 'hsl(0, 0%, 100%)', // White - Light section backgrounds
  },
  // Legacy gray scale (for backwards compatibility - prefer grey scale above)
  gray: {
    100: '#f8f9fa',
    200: '#e2e8f0',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};
