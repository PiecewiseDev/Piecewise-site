# Color System Implementation Guide

## Brand Color Palette

### Core Colors

- **Primary Blue**: `#0059B3` - Main CTAs, buttons, links, focus states
- **Black**: `#000000` - Headings, primary text, high emphasis
- **Dark Gray**: `#404040` - Body text, secondary headings
- **Medium Gray**: `#808080` - Supporting text, captions, icons
- **Light Gray**: `#BFBFBF` - Borders, dividers, subtle backgrounds

---

## Usage Patterns

### 1. **Buttons & CTAs**

```tsx
// Primary button (main actions)
<button className="bg-primary hover:bg-primary-hover text-primary-foreground">
  Book a Call
</button>

// Secondary button (less emphasis)
<button className="bg-white text-neutral-darkest border-2 border-neutral-lightest hover:border-neutral-light">
  Learn More
</button>

// Text link
<a className="text-primary hover:text-primary-hover">
  Read more
</a>
```

### 2. **Typography**

```tsx
// Headings (H1, H2, H3)
<h1 className="text-neutral-darkest">Main Heading</h1>

// Body text
<p className="text-neutral-dark">Body content goes here</p>

// Supporting/caption text
<span className="text-neutral-light">Posted 2 days ago</span>

// Muted text
<small className="text-neutral">Optional details</small>
```

### 3. **Borders & Dividers**

```tsx
// Subtle border
<div className="border border-neutral-lightest">

// Divider
<hr className="border-neutral-lightest" />

// Input field
<input className="border-2 border-neutral-lightest focus:border-primary" />
```

### 4. **Backgrounds**

```tsx
// Section backgrounds
<section className="bg-white">
<section className="bg-neutral-lightest bg-opacity-20">

// Card backgrounds
<div className="bg-white border border-neutral-lightest">

// Hover states
<div className="hover:bg-neutral-lightest hover:bg-opacity-10">
```

### 5. **Icons**

```tsx
// Primary icons (interactive)
<svg className="text-primary" />

// Secondary icons
<svg className="text-neutral-light" />

// Decorative icons
<svg className="text-neutral-lightest" />
```

---

## Component-Specific Guidelines

### Navigation

- Background: White or very light gray
- Links: `text-neutral-dark hover:text-primary`
- Active state: `text-primary`
- CTA button: `bg-primary text-primary-foreground`

### Hero Section

- Heading: `text-neutral-darkest`
- Subheading: `text-neutral-dark`
- CTA: `bg-primary hover:bg-primary-hover text-primary-foreground`

### Cards

- Background: `bg-white`
- Border: `border border-neutral-lightest`
- Heading: `text-neutral-darkest`
- Body: `text-neutral-dark`
- Hover: `hover:border-neutral-light`

### Forms

- Label: `text-neutral-darkest`
- Input border: `border-neutral-lightest focus:border-primary`
- Helper text: `text-neutral-light`
- Error text: Keep red for accessibility

### Footer

- Background: `bg-neutral-lightest bg-opacity-30` or white
- Text: `text-neutral-dark`
- Links: `hover:text-primary`

---

## Migration Strategy

### Phase 1: Update Core Components (Priority)

1. **Hero section** (`sections/shared/Hero.tsx`)
   - Change `bg-blue-600` → `bg-primary`
   - Change text colors to neutral palette

2. **Navbar** (`components/layout/Navbar.tsx`)
   - Update link colors to `text-neutral-dark hover:text-primary`
   - Update CTA to `bg-primary hover:bg-primary-hover`

3. **Footer** (`components/layout/Footer.tsx`)
   - Update text colors to neutral palette
   - Update links to primary color

4. **Buttons across site**
   - Primary buttons: `bg-primary hover:bg-primary-hover text-primary-foreground`
   - Secondary buttons: Use neutral colors

### Phase 2: Update Sections

5. **ClientLogoStrip**
6. **CustomGPTIntro2**
7. **OurWork**
8. **HowItWorks**
9. **ClientQuotes**
10. **FitFlowchart**

### Phase 3: Update Remaining Components

11. All other sections
12. Case study pages
13. Contact page
14. About page

---

## Quick Reference

### Do's ✅

- Use `bg-primary` for main CTAs
- Use `text-neutral-darkest` for headings
- Use `text-neutral-dark` for body text
- Use `border-neutral-lightest` for subtle borders
- Use semantic names (`primary`, `neutral-dark`) over specific values
- Add opacity with `/50`, `/70` for subtle effects

### Don'ts ❌

- Don't use `bg-blue-600` (use `bg-primary` instead)
- Don't use `text-slate-900` (use `text-neutral-darkest` instead)
- Don't hardcode hex values in className
- Don't use random colors outside the palette
- Don't use `style={{ color: '#...' }}` for brand colors

---

## Color Accessibility

Ensure sufficient contrast ratios:

- **Primary text on white**: `text-neutral-darkest` or `text-neutral-dark` (both pass WCAG AA)
- **White text on primary**: Always use `text-primary-foreground` (white)
- **Links**: `text-primary` has sufficient contrast on white backgrounds

---

## Testing Checklist

Before committing color changes:

- [ ] Buttons have correct hover states
- [ ] Links are visible and accessible
- [ ] Text is readable on all backgrounds
- [ ] Focus states are visible (keyboard navigation)
- [ ] Color consistency across similar elements
- [ ] Mobile view is properly styled

---

## Tools & Resources

### VS Code Extensions

- **Tailwind CSS IntelliSense** - Shows color previews
- **Color Highlight** - Highlights hex codes

### Color Contrast Checker

Use: https://webaim.org/resources/contrastchecker/

- Primary Blue (#0059B3) on white: Passes WCAG AAA
- Dark Gray (#404040) on white: Passes WCAG AA
- Light Gray (#BFBFBF) on white: Fails - use for borders only, not text

---

## Examples of Common Patterns

### Hero CTA

```tsx
<Link
  href="/contact"
  className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-full font-semibold transition-colors"
>
  Book a Free Strategy Call
</Link>
```

### Section Heading

```tsx
<h2 className="text-4xl font-bold text-neutral-darkest mb-4">
  Our Services
</h2>
<p className="text-lg text-neutral-dark mb-8">
  Supporting text goes here
</p>
```

### Card Component

```tsx
<div className="bg-white border border-neutral-lightest rounded-lg p-6 hover:border-neutral-light transition-colors">
  <h3 className="text-xl font-semibold text-neutral-darkest mb-2">Card Title</h3>
  <p className="text-neutral-dark mb-4">Card description</p>
  <a className="text-primary hover:text-primary-hover font-medium">Learn more →</a>
</div>
```

### Form Input

```tsx
<div>
  <label className="block text-sm font-medium text-neutral-darkest mb-2">Email Address</label>
  <input
    type="email"
    className="w-full px-4 py-2 border-2 border-neutral-lightest rounded-lg focus:border-primary focus:outline-none text-neutral-darkest"
    placeholder="you@example.com"
  />
  <p className="text-sm text-neutral-light mt-1">We'll never share your email</p>
</div>
```
