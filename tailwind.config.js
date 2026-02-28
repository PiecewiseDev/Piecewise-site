/** @type {import('tailwindcss').Config} */
const { colors } = require('./styles/tokens/colors');
const { typography } = require('./styles/tokens/typography');
const { spacing } = require('./styles/tokens/spacing');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/sections/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx,css}',
  ],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: typography.fontSize,
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: spacing.boxShadow,
      spacing: {
        card: spacing.card,
        section: spacing.section,
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      transitionDuration: {
        200: '200ms',
        300: '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.dark'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.hover'),
              },
            },
            h1: {
              color: theme('colors.neutral.darkest'),
            },
            h2: {
              color: theme('colors.neutral.darkest'),
            },
            h3: {
              color: theme('colors.neutral.darkest'),
            },
            h4: {
              color: theme('colors.neutral.darkest'),
            },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.neutral.light'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.neutral.light'),
            },
            hr: {
              borderColor: theme('colors.grey.200'),
            },
            blockquote: {
              color: theme('colors.neutral.darkest'),
              borderLeftColor: theme('colors.primary.DEFAULT'),
            },
            strong: {
              color: theme('colors.neutral.darkest'),
            },
            code: {
              color: theme('colors.primary.DEFAULT'),
            },
          },
        },
      }),
      colors: {
        ...colors, // Import all colors from colors.ts
        // shadcn UI colors (these use CSS variables and aren't in colors.ts)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  safelist: [
    'text-primary',
    'bg-primary',
    'text-neutral-darkest',
    'text-neutral-dark',
    'text-neutral-light',
    'text-neutral-lightest',
    'bg-neutral-lightest',
    'bg-background',
    'prose',
    'prose-lg',
    'prose-xl',
  ],
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
