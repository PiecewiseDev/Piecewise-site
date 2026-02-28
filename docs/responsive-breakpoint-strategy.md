# Comprehensive Responsive Breakpoint Strategy

## Overview

This document outlines the strategy for implementing a full 5-breakpoint responsive design system across the Piecewise site.

## Breakpoint System

### Screen Size Targets

- **Base (Mobile)**: < 640px (iPhone SE, small phones)
- **sm**: 640px+ (large phones, small tablets in portrait)
- **md**: 768px+ (tablets in portrait, large phones in landscape)
- **lg**: 1024px+ (tablets in landscape, small laptops)
- **xl**: 1280px+ (desktop monitors, large laptops)
- **2xl**: 1536px+ (large desktop monitors, 4K displays)

## Design Principles by Breakpoint

### Base (< 640px) - Mobile First

- Single column layouts
- Compact spacing
- Smaller typography
- Stacked navigation
- Touch-friendly tap targets (min 44x44px)
- Full-width buttons
- Simplified interactions

### sm: 640px+ - Large Phones

- Introduction of 2-column grids where appropriate
- Slightly increased spacing
- Larger typography
- Still mobile-optimized
- Side-by-side CTAs begin appearing

### md: 768px+ - Tablets

- 2-3 column layouts
- Increased spacing between sections
- Desktop-class typography begins
- Horizontal navigation possible
- Images start showing alongside text
- Cards can be wider

### lg: 1024px+ - Small Desktop

- Full multi-column layouts (3-4 columns)
- Generous spacing
- Larger hero sections
- Complex grid layouts
- Full navigation with all items
- Sidebar layouts possible

### xl: 1280px+ - Desktop

- Maximum content width enforcement
- Even more generous spacing
- Larger typography for headings
- More whitespace
- Larger images and media
- Enhanced visual hierarchy

### 2xl: 1536px+ - Large Desktop

- Contained max-width with centering
- Prevent content from stretching too wide
- Optimal line length maintained
- Extra whitespace on sides
- Enhanced focus on content

## Typography Scale

### Heading Sizes (h1)

```
base:   text-4xl   (36px / 2.25rem)
sm:     text-4xl   (36px / 2.25rem)
md:     text-5xl   (48px / 3rem)
lg:     text-6xl   (60px / 3.75rem)
xl:     text-7xl   (72px / 4.5rem)
2xl:    text-7xl   (72px / 4.5rem)
```

### Heading Sizes (h2)

```
base:   text-3xl   (30px / 1.875rem)
sm:     text-3xl   (30px / 1.875rem)
md:     text-4xl   (36px / 2.25rem)
lg:     text-5xl   (48px / 3rem)
xl:     text-5xl   (48px / 3rem)
2xl:    text-6xl   (60px / 3.75rem)
```

### Heading Sizes (h3)

```
base:   text-2xl   (24px / 1.5rem)
sm:     text-2xl   (24px / 1.5rem)
md:     text-3xl   (30px / 1.875rem)
lg:     text-4xl   (36px / 2.25rem)
xl:     text-4xl   (36px / 2.25rem)
2xl:    text-4xl   (36px / 2.25rem)
```

### Body Text

```
base:   text-base  (16px / 1rem)
sm:     text-base  (16px / 1rem)
md:     text-lg    (18px / 1.125rem)
lg:     text-xl    (20px / 1.25rem)
xl:     text-xl    (20px / 1.25rem)
2xl:    text-xl    (20px / 1.25rem)
```

### Small Text / Captions

```
base:   text-sm    (14px / 0.875rem)
sm:     text-sm    (14px / 0.875rem)
md:     text-base  (16px / 1rem)
lg:     text-base  (16px / 1rem)
xl:     text-base  (16px / 1rem)
2xl:    text-base  (16px / 1rem)
```

## Spacing Scale

### Section Padding (py)

```
base:   py-16      (4rem / 64px)
sm:     py-20      (5rem / 80px)
md:     py-24      (6rem / 96px)
lg:     py-28      (7rem / 112px)
xl:     py-32      (8rem / 128px)
2xl:    py-36      (9rem / 144px)
```

### Container Padding (px)

```
base:   px-4       (1rem / 16px)
sm:     px-6       (1.5rem / 24px)
md:     px-8       (2rem / 32px)
lg:     px-12      (3rem / 48px)
xl:     px-16      (4rem / 64px)
2xl:    px-20      (5rem / 80px)
```

### Gap Between Elements

```
base:   gap-4      (1rem / 16px)
sm:     gap-6      (1.5rem / 24px)
md:     gap-8      (2rem / 32px)
lg:     gap-10     (2.5rem / 40px)
xl:     gap-12     (3rem / 48px)
2xl:    gap-16     (4rem / 64px)
```

## Grid Layouts

### Standard Content Grid

```
base:   grid-cols-1
sm:     grid-cols-2
md:     grid-cols-2
lg:     grid-cols-3
xl:     grid-cols-4
2xl:    grid-cols-4
```

### Feature Cards / Services

```
base:   grid-cols-1
sm:     grid-cols-1
md:     grid-cols-2
lg:     grid-cols-3
xl:     grid-cols-3
2xl:    grid-cols-3
```

### Content + Sidebar Layout (12-col grid)

```
base:   Content: col-span-12, Sidebar: col-span-12
sm:     Content: col-span-12, Sidebar: col-span-12
md:     Content: col-span-8,  Sidebar: col-span-4
lg:     Content: col-span-8,  Sidebar: col-span-4
xl:     Content: col-span-9,  Sidebar: col-span-3
2xl:    Content: col-span-9,  Sidebar: col-span-3
```

## Max Width Containers

### Content Width

```
base:   max-w-full
sm:     max-w-full
md:     max-w-3xl (48rem / 768px)
lg:     max-w-5xl (64rem / 1024px)
xl:     max-w-6xl (72rem / 1152px)
2xl:    max-w-7xl (80rem / 1280px)
```

### Hero/Full Width Sections

```
base:   max-w-full
sm:     max-w-full
md:     max-w-full
lg:     max-w-7xl (80rem / 1280px)
xl:     max-w-7xl (80rem / 1280px)
2xl:    max-w-[1920px]
```

## Implementation Strategy

### Phase 1: Foundation (Tokens & Config)

1. Update typography tokens with full breakpoint support
2. Update spacing tokens with full breakpoint support
3. Document component patterns

### Phase 2: Core Components

1. Hero section
2. Navigation
3. Footer
4. Section containers

### Phase 3: Page Sections

1. Home page sections
2. About page sections
3. Contact page sections
4. Case study sections

### Phase 4: Testing & Refinement

1. Test at each breakpoint
2. Adjust spacing and typography as needed
3. Ensure visual hierarchy works at all sizes
4. Performance optimization

## Best Practices

1. **Mobile First**: Start with base styles, layer up
2. **Consistent Scaling**: Use predictable scaling patterns
3. **Content First**: Let content dictate breakpoint changes
4. **Visual Hierarchy**: Maintain hierarchy at all sizes
5. **Performance**: Don't serve unnecessarily large assets to mobile
6. **Touch Targets**: Ensure 44x44px minimum on touch devices
7. **Line Length**: Keep 45-75 characters for optimal readability
8. **Whitespace**: Increase proportionally with screen size

## Testing Checklist

- [ ] iPhone SE (375px)
- [ ] iPhone 14 Pro (393px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] MacBook Air (1280px)
- [ ] Desktop 1440px
- [ ] Large Desktop 1920px
- [ ] 4K Display (2560px)

## Common Patterns

### Text & Image Side by Side

```jsx
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
  <div>Text content</div>
  <div>Image</div>
</div>
```

### Card Grid

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
  {/* Cards */}
</div>
```

### Section Padding

```jsx
<section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
  {/* Content */}
</section>
```

## Notes

- Keep consistency across similar components
- Document any deviations from these patterns
- Review quarterly and adjust as needed
- Monitor analytics for actual device usage
- Test on real devices, not just browser resize
