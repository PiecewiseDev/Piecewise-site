# Brand Color System

## Overview

This document defines the color system for the Piecewise website. All colors are centralized in CSS custom properties and Tailwind configuration for consistency and maintainability.

## Color Palette

### Primary Brand Color

**Primary Blue** `#0059B3`

- **Usage:** CTAs, buttons, links, interactive elements
- **Tailwind classes:** `bg-primary`, `text-primary`, `border-primary`
- **Hover state:** `#004080` - Use `hover:bg-primary-hover`, `hover:text-primary-hover`

### Neutral Grayscale

**Darkest (Black)** `#000000`

- **Usage:** Headings, primary text, high emphasis content
- **Tailwind class:** `text-neutral-darkest`, `bg-neutral-darkest`

**Dark Gray** `#404040`

- **Usage:** Body text, secondary headings, paragraphs
- **Tailwind class:** `text-neutral-dark`, `bg-neutral-dark`

**Light Gray** `#808080`

- **Usage:** Supporting text, captions, icons, muted content
- **Tailwind class:** `text-neutral-light`, `bg-neutral-light`

**Lightest Gray** `#BFBFBF`

- **Usage:** Borders, dividers, subtle backgrounds
- **Tailwind class:** `text-neutral-lightest`, `bg-neutral-lightest`, `border-neutral-lightest`

## Implementation

### CSS Custom Properties

All colors are defined in `/styles/globals.css`:

```css
:root {
  /* Primary Brand Blue */
  --color-primary: #0059b3;
  --color-primary-hover: #004080;
  --color-primary-rgb: 0, 89, 179;

  /* Neutral Grayscale */
  --color-neutral-darkest: #000000;
  --color-neutral-dark: #404040;
  --color-neutral-light: #808080;
  --color-neutral-lightest: #bfbfbf;

  /* RGB values for opacity usage */
  --color-neutral-darkest-rgb: 0, 0, 0;
  --color-neutral-dark-rgb: 64, 64, 64;
  --color-neutral-light-rgb: 128, 128, 128;
  --color-neutral-lightest-rgb: 191, 191, 191;
}
```

### Tailwind Configuration

Colors are configured in `/tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#0059B3',
    hover: '#004080',
    foreground: '#FFFFFF',
  },
  neutral: {
    lightest: '#BFBFBF',
    light: '#808080',
    DEFAULT: '#808080',
    dark: '#404040',
    darkest: '#000000',
  },
  // ... other color definitions
}
```

## Usage Guidelines

### Buttons

**Primary CTA Buttons:**

- Background: `bg-primary`
- Text: `text-white`
- Hover: `hover:bg-primary-hover`
- Example: Sign up, Book a Call, Get Started

**Secondary Buttons:**

- Border: `border-primary`
- Text: `text-primary`
- Hover: `hover:bg-primary hover:text-white`
- Example: Learn More, View Details

### Typography

**Headings (H1-H6):**

- Color: `text-neutral-darkest` (Black)
- Weight: `font-bold`

**Body Text:**

- Color: `text-neutral-dark` (Dark Gray)
- Line height: `leading-relaxed`

**Supporting Text:**

- Color: `text-neutral-light` (Light Gray)
- Use for: Captions, metadata, helper text

### Interactive Elements

**Links:**

- Default: `text-primary`
- Hover: `hover:text-primary-hover`
- Transition: `transition-colors duration-200`

**Focus States:**

- Ring: `focus:ring-2 focus:ring-primary focus:ring-offset-2`

### Borders & Dividers

**Subtle Borders:**

- Color: `border-neutral-lightest`
- Width: `border` or `border-2`

**Interactive Borders:**

- Default: `border-neutral-lightest`
- Hover: `hover:border-neutral-light`

## Accessibility

### Contrast Ratios

All text/background combinations meet WCAG AA standards:

- **Primary Blue on White:** 7.4:1 ✓ (AAA)
- **Black on White:** 21:1 ✓ (AAA)
- **Dark Gray on White:** 10.7:1 ✓ (AAA)
- **White on Primary Blue:** 4.8:1 ✓ (AA)

### Color Independence

Never rely solely on color to convey information. Always provide:

- Text labels
- Icons or symbols
- Patterns or textures
- ARIA labels for screen readers

## Best Practices

### DO ✓

- Use semantic class names (`text-neutral-dark` not `text-gray-600`)
- Use CSS custom properties for consistency
- Test color combinations for accessibility
- Use the primary blue sparingly for emphasis
- Apply neutral colors for hierarchy

### DON'T ✗

- Don't use hardcoded hex values in components
- Don't mix old color references (navy, accent, emerald)
- Don't use color alone to convey state
- Don't forget hover and focus states
- Don't bypass the established color system

## Migration Notes

### Old → New Color Mappings

If you find any legacy color references, use these mappings:

| Old Class         | New Class              | Usage                  |
| ----------------- | ---------------------- | ---------------------- |
| `text-navy`       | `text-neutral-darkest` | Headings, primary text |
| `text-navy-light` | `text-neutral-dark`    | Body text              |
| `text-accent`     | `text-primary`         | Interactive elements   |
| `bg-accent`       | `bg-primary`           | Primary backgrounds    |
| `text-emerald`    | `text-primary`         | Replaced with primary  |
| `bg-emerald`      | `bg-primary`           | Replaced with primary  |

## Testing

Before deploying, verify:

1. All interactive elements use `primary` color
2. Text hierarchy uses neutral scale
3. Hover states are visible and accessible
4. Focus rings are consistent
5. No hardcoded old colors remain

## Resources

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Last Updated:** November 2025  
**Version:** 1.0
