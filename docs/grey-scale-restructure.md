# Grey Scale Restructure - 8-Shade System

**Date**: November 13, 2025  
**Status**: ✅ Complete

## Overview

Restructured the grey scale from 9 shades to 8 shades by removing Grey-200 (92%) and re-mapping all colors. Enforced strict rule that **text should ONLY use Grey-800 or Grey-900** for maximum readability and contrast.

## Changes Made

### Grey Scale Renumbering (100-800 + 900)

**Old Grey Scale (9 shades):**

- Grey-100: hsl(0, 0%, 100%)
- Grey-200: hsl(0, 0%, 92%) ← **REMOVED**
- Grey-300: hsl(0, 0%, 88%)
- Grey-400: hsl(0, 0%, 75%)
- Grey-500: hsl(0, 0%, 50%)
- Grey-600: hsl(0, 0%, 43%)
- Grey-700: hsl(0, 0%, 25%)
- Grey-800: hsl(0, 0%, 12%)
- Grey-900: hsl(0, 0%, 0%)

**New Grey Scale (8 shades):**

- **Grey-100**: hsl(0, 0%, 100%) - Pure white (backgrounds, cards)
- **Grey-200**: hsl(0, 0%, 88%) - Light grey (borders, subtle backgrounds)
- **Grey-300**: hsl(0, 0%, 75%) - Medium-light [ORIGINAL] (disabled text, placeholders)
- **Grey-400**: hsl(0, 0%, 50%) - Medium [ORIGINAL] (muted text, captions)
- **Grey-500**: hsl(0, 0%, 43%) - Medium-dark (intermediate shade)
- **Grey-600**: hsl(0, 0%, 25%) - Dark [ORIGINAL] (special use only)
- **Grey-700**: hsl(0, 0%, 12%) - Very dark (placeholder, not actively used)
- **Grey-800**: hsl(0, 0%, 12%) - **PRIMARY BODY TEXT** [TEXT ONLY]
- **Grey-900**: hsl(0, 0%, 0%) - **BLACK TEXT** [TEXT ONLY] [ORIGINAL]

### Text Color Rule

**IMPORTANT**: Text should **ONLY** use Grey-800 or Grey-900:

- **Grey-800** (12%): Default body text, headings, most readable text
- **Grey-900** (0%): Maximum emphasis, pure black text for highest contrast

### Semantic Mapping Updates

#### Background Colors

- `neutral.lightest`: Grey-100 (100%) - Pure white backgrounds
- `neutral.lighter`: Grey-200 (88%) - Subtle backgrounds, borders, dividers
- `section.light`: Grey-100 (100%) - Light section backgrounds (pure white)
- `section.dark`: Grey-800 (12%) - Dark section backgrounds

#### Text Colors (ONLY use Grey-800 or Grey-900)

- `neutral.muted`: Grey-400 (50%) [ORIGINAL] - Secondary text, captions
- `neutral.light`: Grey-400 (50%) [ORIGINAL] - Alias for backwards compatibility
- `neutral.DEFAULT`: **Grey-800 (12%)** - PRIMARY BODY TEXT ★
- `neutral.body`: **Grey-800 (12%)** - Body text (semantic alias)
- `neutral.dark`: **Grey-800 (12%)** - Alias for backwards compatibility
- `neutral.heading`: **Grey-800 (12%)** - Headings
- `neutral.darkest`: **Grey-900 (0%)** - Maximum emphasis, pure black text

#### Brand Colors

- `brand.blue`: hsl(210, 100%, 35%) - Blue-700 [ORIGINAL]
- `brand.grey`: Grey-400 (50%) [ORIGINAL] - Medium grey

## Files Updated

1. `/styles/tokens/colors.ts` - Grey scale definition and semantic mappings
2. `/tailwind.config.js` - Tailwind color configuration
3. `/styles/globals.css` - CSS custom properties and RGB values

## Key Changes Summary

1. ❌ **Removed**: Grey-200 (92%)
2. ✅ **Kept**: Grey 100-800 + Grey-900
3. ✅ **Text Rule**: ONLY use Grey-800 or Grey-900 for text
4. ✅ **Original Colors**: 75%, 50%, 25%, 0% preserved in Grey-300, Grey-400, Grey-600, Grey-900
5. ✅ **Section Light**: Changed from Grey-200 (92%) to Grey-100 (100%) - pure white

## Benefits

- **Simpler color scale**: 8 shades instead of 9
- **Better contrast**: Text is exclusively Grey-800 or Grey-900
- **Cleaner backgrounds**: Pure white (100%) instead of off-white (92%)
- **Preserved original colors**: 75%, 50%, 25%, 0% maintained
- **Backwards compatible**: Aliases maintained for `neutral.light` and `neutral.dark`

## Usage Examples

### Backgrounds

```tsx
// Pure white backgrounds
className = 'bg-neutral-lightest'; // Grey-100 (100%)
className = 'bg-section-light'; // Grey-100 (100%)

// Subtle backgrounds
className = 'bg-neutral-lighter'; // Grey-200 (88%)

// Dark backgrounds
className = 'bg-section-dark'; // Grey-800 (12%)
```

### Text

```tsx
// Primary body text (most common)
className = 'text-neutral'; // Grey-800 (12%)
className = 'text-neutral-body'; // Grey-800 (12%)

// Headings
className = 'text-neutral-heading'; // Grey-800 (12%)

// Maximum contrast
className = 'text-neutral-darkest'; // Grey-900 (0%)

// Secondary text (muted)
className = 'text-neutral-muted'; // Grey-400 (50%)
```

## Next Steps

- ✅ Grey scale restructured and renumbered
- ✅ Text colors simplified to Grey-800/900 only
- ✅ Section backgrounds updated to pure white
- ✅ Original color palette preserved
- ⏳ Verify all text throughout site uses Grey-800 or Grey-900
- ⏳ Audit for any hardcoded grey values that need updating
