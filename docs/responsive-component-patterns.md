# Responsive Component Patterns

## Purpose

This guide provides copy-paste patterns for implementing responsive design across all 5 breakpoints consistently.

## Typography Patterns

### Page Title (H1 - Hero)

```jsx
className = 'text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl';
```

- Mobile: 36px
- Small: 48px
- Medium: 48px
- Large: 60px
- XL: 72px
- 2XL: 72px

### Section Heading (H2)

```jsx
className = 'text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl';
```

- Mobile: 30px
- Small: 30px
- Medium: 36px
- Large: 48px
- XL: 48px
- 2XL: 60px

### Subsection Heading (H3)

```jsx
className = 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl';
```

- Mobile: 24px
- Small: 24px
- Medium: 30px
- Large: 36px
- XL: 36px
- 2XL: 36px

### Body Text (Large)

```jsx
className = 'text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl';
```

- Mobile: 16px
- Small: 16px
- Medium: 18px
- Large: 20px
- XL: 20px
- 2XL: 20px

### Body Text (Normal)

```jsx
className = 'text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg';
```

- Mobile: 14px
- Small: 14px
- Medium: 16px
- Large: 16px
- XL: 18px
- 2XL: 18px

### Caption / Small Text

```jsx
className = 'text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base';
```

- Mobile: 12px
- Small: 12px
- Medium: 14px
- Large: 14px
- XL: 14px
- 2XL: 16px

## Spacing Patterns

### Section Vertical Padding

```jsx
className = 'py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36';
```

- Mobile: 64px
- Small: 80px
- Medium: 96px
- Large: 112px
- XL: 128px
- 2XL: 144px

### Container Horizontal Padding

```jsx
className = 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20';
```

- Mobile: 16px
- Small: 24px
- Medium: 32px
- Large: 48px
- XL: 64px
- 2XL: 80px

### Gap Between Grid Items

```jsx
className = 'gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16';
```

- Mobile: 16px
- Small: 24px
- Medium: 32px
- Large: 40px
- XL: 48px
- 2XL: 64px

### Margin Bottom (Between Sections)

```jsx
className = 'mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32';
```

- Mobile: 48px
- Small: 64px
- Medium: 80px
- Large: 96px
- XL: 112px
- 2XL: 128px

## Layout Patterns

### Two Column Text + Image

```jsx
className =
  'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24';
```

### Three Column Card Grid

```jsx
className =
  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16';
```

### Four Column Feature Grid

```jsx
className =
  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16';
```

### Content (8 cols) + Sidebar (4 cols)

```jsx
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
  <div className="md:col-span-8 lg:col-span-8 xl:col-span-9 2xl:col-span-9">
    {/* Main content */}
  </div>
  <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-3">{/* Sidebar */}</div>
</div>
```

## Max Width Patterns

### Standard Content Container

```jsx
className = 'max-w-full sm:max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto';
```

### Wide Content Container

```jsx
className =
  'max-w-full sm:max-w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px] mx-auto';
```

### Narrow Content (Text Heavy)

```jsx
className = 'max-w-full sm:max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto';
```

## Complete Section Example

Here's a complete section with all patterns applied:

```jsx
<section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-white">
  <div className="max-w-full sm:max-w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
    {/* Eyebrow Label */}
    <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
      Section Label
    </p>

    {/* Section Heading */}
    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-darkest mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32">
      Section Title
    </h2>

    {/* Content Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
      {/* Grid items */}
    </div>
  </div>
</section>
```

## Usage Notes

1. **Copy these patterns exactly** - They're designed for consistency
2. **Adjust only when needed** - Document why you deviated
3. **Test at all breakpoints** - Use browser dev tools
4. **Mobile first** - Base styles should always work on smallest screens
5. **Performance** - These utility classes are tree-shaken by Tailwind

## Quick Reference

| Element           | Classes to Use                                                          |
| ----------------- | ----------------------------------------------------------------------- |
| Hero H1           | `text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl` |
| Section H2        | `text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl` |
| Subsection H3     | `text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl` |
| Body (Large)      | `text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl`   |
| Section Padding   | `py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36`                   |
| Container Padding | `px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20`                      |
| Grid Gap          | `gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16`                |
