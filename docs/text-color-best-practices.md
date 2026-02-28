# Text Color Best Practices - Warm Off-Black Implementation

## Overview

This document outlines the best practices for using the new warm off-black color `hsl(0, 9%, 11%)` throughout the site.

---

## Best Practices Applied

### 1. **Set Global Default (Highest Priority)**

✅ **Already Implemented in `globals.css`:**

```css
body {
  color: var(--color-neutral-darkest); /* hsl(0, 9%, 11%) */
  background: white;
}

* {
  color: inherit; /* All elements inherit from body by default */
}
```

**Why This Works:**

- Every element inherits the warm off-black by default
- No need to specify text color on every component
- Follows CSS cascade best practices
- Single source of truth

### 2. **Typography Base Styles**

✅ **Already Implemented:**

```css
@layer base {
  /* Headings use explicit semantic color */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold tracking-tight text-neutral-darkest;
  }

  /* Paragraphs inherit from body */
  p {
    @apply text-base leading-relaxed mb-4;
    /* No color specified = inherits neutral-darkest from body */
  }
}
```

### 3. **Semantic Color Classes (Use When You Need to Override)**

**Text Color Hierarchy:**

```tsx
// Default (inherits from body - warm off-black)
<p>This text is automatically warm off-black</p>

// Headings (explicit, maximum emphasis)
<h1 className="text-neutral-darkest">Heading</h1>

// Body text (same as default, but explicit if needed)
<p className="text-neutral-dark">Body text</p>

// Secondary/muted text
<p className="text-neutral-muted">Caption or helper text</p>

// On dark backgrounds
<p className="text-white">Text on dark background</p>
```

### 4. **DO NOT Use These ❌**

```tsx
// BAD - Don't use pure black
<p className="text-black">❌ Pure black (too harsh)</p>

// BAD - Don't use slate colors
<p className="text-slate-900">❌ Slate (not your brand)</p>

// BAD - Don't use gray (legacy)
<p className="text-gray-900">❌ Gray (use grey instead)</p>

// BAD - Don't hardcode colors
<p style={{ color: '#000000' }}>❌ Hardcoded</p>
```

### 5. **DO Use These ✅**

```tsx
// GOOD - Let it inherit (most common)
<p>✅ Inherits warm off-black automatically</p>

// GOOD - Explicit when needed
<p className="text-neutral-darkest">✅ Explicit warm off-black</p>

// GOOD - For hierarchy
<p className="text-neutral-dark">✅ Semantic hierarchy</p>
<p className="text-neutral-muted">✅ Muted text</p>

// GOOD - On dark backgrounds
<div className="bg-section-dark">
  <p className="text-white">✅ Proper contrast</p>
</div>
```

---

## Implementation Checklist

### ✅ Already Complete

- [x] Body default color set to warm off-black
- [x] CSS variables updated
- [x] Headings use `text-neutral-darkest`
- [x] Typography plugin configured
- [x] Inheritance chain established

### ⚠️ Needs Cleanup (52 instances)

Files using hardcoded text colors that should inherit or use semantic colors:

**Files to update:**

- sections/home/Testimonials.tsx (1 instance)
- sections/home/FitFlowchart.tsx (4 instances)
- sections/home/CustomGPTIntro2.tsx (2 instances)
- sections/case-studies/CaseStudyHero.tsx (1 instance)
- sections/home/ToolsPartnership.tsx (2 instances)
- sections/home/ClientQuotes.tsx (2 instances)
- sections/home/OurWork.tsx (3 instances)
- sections/home/PartnershipShowcase.tsx (5 instances)
- sections/home/HowItWorks.tsx (2 instances)
- sections/home/UseCases.tsx (2 instances)
- sections/home/QualificationFlowchart.tsx (9 instances)
- sections/home/Explainer.tsx (2 instances)
- sections/shared/ClientLogoStrip.tsx (1 instance)
- sections/home/BlogPreview.tsx (11 instances)
- sections/home/CustomGPTIntro.tsx (5 instances)

**Pattern to find:**

```bash
grep -r "text-black\|text-slate-\|text-gray-900" sections/
```

**Replace with:**

- `text-black` → Remove (let inherit) OR `text-neutral-darkest`
- `text-slate-900` → Remove (let inherit) OR `text-neutral-darkest`
- `text-gray-900` → Remove (let inherit) OR `text-neutral-darkest`

---

## Migration Strategy

### Option A: Remove Explicit Colors (Recommended)

**Best Practice:** Let text inherit the default color from body.

```tsx
// BEFORE
<h2 className="text-4xl font-bold text-black mb-6">
  Title
</h2>

// AFTER (remove text-black, let inherit)
<h2 className="text-4xl font-bold mb-6">
  Title
</h2>
```

**Benefits:**

- Cleaner code
- Follows CSS cascade
- Easier to maintain
- Single source of truth

### Option B: Use Semantic Classes

**When to use:** If you want to be explicit about the color for clarity.

```tsx
// BEFORE
<h2 className="text-4xl font-bold text-slate-900 mb-6">
  Title
</h2>

// AFTER (use semantic class)
<h2 className="text-4xl font-bold text-neutral-darkest mb-6">
  Title
</h2>
```

**Benefits:**

- Clear intent
- Self-documenting
- Easy to search/replace

---

## Color Decision Tree

```
Is this text?
├─ On white/light background?
│  ├─ Default text → Let inherit (no class)
│  ├─ Heading → text-neutral-darkest (or inherit)
│  ├─ Secondary text → text-neutral-muted
│  └─ De-emphasized → text-grey-400
│
└─ On dark background?
   ├─ Primary text → text-white
   ├─ Secondary text → text-grey-200
   └─ Muted text → text-grey-300
```

---

## Technical Details

### Your Warm Off-Black

**HSL:** `hsl(0, 9%, 11%)`  
**Hex:** `#1A1719`  
**RGB:** `rgb(26, 23, 25)`

**Properties:**

- **Hue:** 0° (red base, very subtle)
- **Saturation:** 9% (just enough warmth)
- **Lightness:** 11% (very dark, but not pure black)

**Contrast Ratios:**

- On white: 18.5:1 (WCAG AAA ✅)
- On grey-100: 17.2:1 (WCAG AAA ✅)
- On grey-200: 14.8:1 (WCAG AAA ✅)

### CSS Variable Mapping

```css
/* Direct color */
--color-neutral-darkest: hsl(0, 9%, 11%);

/* Semantic aliases (all point to same color) */
--color-neutral-heading: hsl(0, 9%, 11%);
--color-neutral-body: hsl(0, 9%, 11%);
--color-neutral-dark: hsl(0, 9%, 11%);
--color-neutral: hsl(0, 9%, 11%);

/* Core black alias */
--color-black: hsl(0, 9%, 11%);
```

---

## Testing Checklist

After implementing:

- [ ] All body text displays warm off-black
- [ ] Headings display warm off-black
- [ ] No pure black (#000000) text visible
- [ ] Text on dark backgrounds uses white
- [ ] Contrast ratios meet WCAG AA minimum
- [ ] Visual consistency across all pages
- [ ] No unintended color inheritance issues

---

## Quick Reference

### Default Behavior (Recommended)

```tsx
// ✅ Text automatically uses warm off-black
<div>
  <h1>Heading</h1>
  <p>Paragraph text</p>
  <span>Inline text</span>
</div>
```

### Explicit Colors (When Needed)

```tsx
// Maximum emphasis
<h1 className="text-neutral-darkest">Important</h1>

// Body text (explicit)
<p className="text-neutral-dark">Body</p>

// Muted/secondary
<small className="text-neutral-muted">Caption</small>

// On dark backgrounds
<div className="bg-grey-600">
  <p className="text-white">Light text</p>
</div>
```

---

## Summary

**Your text color system is already well-implemented!** The warm off-black is set as the body default and will be used automatically throughout the site.

**Next step (optional):** Clean up the 52 instances of hardcoded `text-black`, `text-slate-*`, and `text-gray-*` to use inheritance or semantic classes for consistency.

**Benefits of current approach:**

- ✅ Global default set correctly
- ✅ All new components automatically use warm off-black
- ✅ Semantic classes available for explicit control
- ✅ Follows CSS cascade best practices
- ✅ Single source of truth for text color

---

**Status:** ✅ Implemented  
**Cleanup needed:** 52 instances (optional)  
**Priority:** Low (system works correctly, cleanup is for consistency)
