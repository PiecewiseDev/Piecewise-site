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
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      borderRadius: spacing.borderRadius,
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
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.accent.DEFAULT'),
              '&:hover': {
                color: theme('colors.accent.dark'),
              },
            },
            h1: {
              color: theme('colors.gray.900'),
            },
            h2: {
              color: theme('colors.gray.900'),
            },
            h3: {
              color: theme('colors.gray.900'),
            },
            h4: {
              color: theme('colors.gray.900'),
            },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            hr: {
              borderColor: theme('colors.gray.200'),
            },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.accent.light'),
            },
            strong: {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.accent.dark'),
            },
          },
        },
      }),
    },
  },
  safelist: [
    'text-blue-600',
    'bg-accent',
    'text-accent',
    'bg-background',
    'text-navy',
    'bg-navy',
    'text-emerald',
    'bg-emerald',
    'prose',
    'prose-lg',
    'prose-xl',
  ],
  plugins: [require('@tailwindcss/typography')],
};
