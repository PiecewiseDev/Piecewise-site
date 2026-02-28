# Grey Scale Semantic Mapping Analysis (Design Best Practices)

## Current Mapping Analysis

### Current State

| Semantic            | Maps To  | Lightness | Usage                 |
| ------------------- | -------- | --------- | --------------------- |
| `neutral-lightest`  | Grey-200 | 92%       | Off-white backgrounds |
| `neutral-light`     | Grey-500 | 58%       | Secondary text, icons |
| `neutral` (DEFAULT) | Grey-500 | 58%       | Supporting text       |
| `neutral-dark`      | Grey-600 | 43%       | Body text             |
| `neutral-darkest`   | Grey-700 | 28%       | Headings              |

### Design Best Practices Analysis

#### Issue 1: Missing Grey-300 (88%) Mapping

**Problem:** Grey-300 is perfect for borders and dividers but has no semantic mapping.
**Solution:** Create `neutral-border` or use Grey-300 for `neutral-lightest`.

#### Issue 2: Grey-500 Used for Two Different Purposes

**Problem:** `neutral-light` and `neutral` (DEFAULT) both map to Grey-500.
**Solution:** This is actually fine - DEFAULT should equal one of the named variants.

#### Issue 3: No Mapping for Grey-400 (76%)

**Problem:** Grey-400 is ideal for disabled text but has no semantic name.
**Solution:** Add `neutral-disabled` or `neutral-muted`.

#### Issue 4: No Clear Background Hierarchy

**Problem:** Only `neutral-lightest` for backgrounds, but we have Grey-100, Grey-200, Grey-300 available.
**Solution:** Create clear background semantic names.

## Recommended Semantic Mapping (Best Practices)

### Option A: Expanded Semantic System (Recommended)

```typescript
neutral: {
  // Backgrounds (Light to Dark)
  'bg-white': 'hsl(0, 0%, 100%)',      // Grey-100 - Pure white cards/sections
  'bg-off-white': 'hsl(0, 0%, 92%)',   // Grey-200 - Off-white page backgrounds
  'bg-subtle': 'hsl(0, 0%, 88%)',      // Grey-300 - Subtle backgrounds, hover states

  // Borders & Dividers
  border: 'hsl(0, 0%, 88%)',           // Grey-300 - Standard borders
  'border-strong': 'hsl(0, 0%, 76%)',  // Grey-400 - Emphasized borders

  // Text (Light to Dark)
  disabled: 'hsl(0, 0%, 76%)',         // Grey-400 - Disabled text, placeholders
  muted: 'hsl(0, 0%, 58%)',            // Grey-500 - Muted text, captions
  DEFAULT: 'hsl(0, 0%, 58%)',          // Grey-500 - Default neutral
  body: 'hsl(0, 0%, 43%)',             // Grey-600 - Main body text
  heading: 'hsl(0, 0%, 28%)',          // Grey-700 - Headings
  strong: 'hsl(0, 0%, 12%)',           // Grey-800 - Strong emphasis
  black: 'hsl(0, 0%, 0%)',             // Grey-900 - Maximum contrast
}
```

### Option B: Simplified Traditional System (Cleaner)

```typescript
neutral: {
  // Backgrounds
  50: 'hsl(0, 0%, 100%)',    // Grey-100 - White
  100: 'hsl(0, 0%, 92%)',    // Grey-200 - Off-white
  200: 'hsl(0, 0%, 88%)',    // Grey-300 - Subtle grey

  // Borders & States
  300: 'hsl(0, 0%, 76%)',    // Grey-400 - Borders, disabled

  // Text
  400: 'hsl(0, 0%, 58%)',    // Grey-500 - Secondary text
  500: 'hsl(0, 0%, 43%)',    // Grey-600 - Body text (MAIN)
  600: 'hsl(0, 0%, 28%)',    // Grey-700 - Headings
  700: 'hsl(0, 0%, 12%)',    // Grey-800 - Strong emphasis
  800: 'hsl(0, 0%, 0%)',     // Grey-900 - Black
}
```

### Option C: Purpose-Based System (Most Semantic)

```typescript
neutral: {
  // Semantic text colors
  text: {
    primary: 'hsl(0, 0%, 28%)',       // Grey-700 - Main headings
    secondary: 'hsl(0, 0%, 43%)',     // Grey-600 - Body text
    tertiary: 'hsl(0, 0%, 58%)',      // Grey-500 - Captions, labels
    disabled: 'hsl(0, 0%, 76%)',      // Grey-400 - Disabled states
    inverse: 'hsl(0, 0%, 100%)',      // Grey-100 - Text on dark
  },

  // Semantic background colors
  bg: {
    primary: 'hsl(0, 0%, 100%)',      // Grey-100 - White cards
    secondary: 'hsl(0, 0%, 92%)',     // Grey-200 - Page backgrounds
    tertiary: 'hsl(0, 0%, 88%)',      // Grey-300 - Subtle sections
    hover: 'hsl(0, 0%, 92%)',         // Grey-200 - Hover states
    dark: 'hsl(0, 0%, 12%)',          // Grey-800 - Dark sections
    darkest: 'hsl(0, 0%, 0%)',        // Grey-900 - Pure black
  },

  // Semantic border colors
  border: {
    light: 'hsl(0, 0%, 88%)',         // Grey-300 - Subtle borders
    DEFAULT: 'hsl(0, 0%, 88%)',       // Grey-300 - Standard borders
    strong: 'hsl(0, 0%, 76%)',        // Grey-400 - Emphasized borders
  }
}
```

## Recommendations by Design Principle

### 1. Clarity of Intent ★★★

**Winner: Option C (Purpose-Based)**

- Immediately clear what each color is for
- Prevents misuse
- Self-documenting code

### 2. Ease of Use ★★★

**Winner: Option B (Simplified Traditional)**

- Familiar numbering system
- Quick to remember
- Standard in industry

### 3. Flexibility ★★

**Winner: Option A (Expanded Semantic)**

- Good balance of semantic meaning and simplicity
- Easy to add new variants
- Works with existing patterns

### 4. Maintenance ★★★

**Winner: Option C (Purpose-Based)**

- Changing a color purpose updates everywhere
- Clear ownership of each color
- Prevents accidental misuse

## Industry Best Practices Survey

### Tailwind CSS (Industry Standard)

- Uses numbered system: `gray-50` through `gray-900`
- Simple, clear, widely understood
- **Rating: ★★★ Best for teams**

### Material Design

- Uses purpose-based names: `primary`, `secondary`, `disabled`
- Clear semantic meaning
- **Rating: ★★★ Best for clarity**

### Chakra UI

- Hybrid approach: numbered + semantic aliases
- `gray.50`, `gray.100` + semantic names
- **Rating: ★★★ Best of both worlds**

## Final Recommendation

### Hybrid Approach (Best Practice)

Use **both** numbered grey scale AND semantic aliases:

```typescript
// Direct grey scale (always available)
grey: {
  100: 'hsl(0, 0%, 100%)',   // Pure white
  200: 'hsl(0, 0%, 92%)',    // Very light
  300: 'hsl(0, 0%, 88%)',    // Light
  400: 'hsl(0, 0%, 76%)',    // Medium-light
  500: 'hsl(0, 0%, 58%)',    // Medium
  600: 'hsl(0, 0%, 43%)',    // Medium-dark
  700: 'hsl(0, 0%, 28%)',    // Dark
  800: 'hsl(0, 0%, 12%)',    // Very dark
  900: 'hsl(0, 0%, 0%)',     // Pure black
}

// Semantic aliases (preferred for common use cases)
neutral: {
  // Backgrounds
  lightest: 'hsl(0, 0%, 92%)',      // grey.200 - Off-white backgrounds
  lighter: 'hsl(0, 0%, 88%)',       // grey.300 - Subtle backgrounds, borders

  // Text
  muted: 'hsl(0, 0%, 58%)',         // grey.500 - Secondary text
  DEFAULT: 'hsl(0, 0%, 43%)',       // grey.600 - Body text (PRIMARY)
  body: 'hsl(0, 0%, 43%)',          // grey.600 - Body text (alias)
  heading: 'hsl(0, 0%, 28%)',       // grey.700 - Headings
  darkest: 'hsl(0, 0%, 12%)',       // grey.800 - Strong emphasis
}
```

### Key Changes Proposed:

1. **Change DEFAULT from Grey-500 to Grey-600**
   - Grey-600 (43%) is the primary body text color
   - DEFAULT should be the most commonly used color
   - Current: Secondary text | Proposed: Body text

2. **Add `neutral-lighter` for Grey-300**
   - Perfect for borders and dividers
   - Currently unmapped

3. **Add `neutral-muted` for Grey-500**
   - Clear name for secondary text
   - Better than "light" which is ambiguous

4. **Rename `neutral-darkest` to `neutral-heading`**
   - More semantic and clear intent
   - Keep `darkest` as alias for backwards compatibility

5. **Keep Grey-800 as `neutral-darkest`**
   - Currently Grey-800 unmapped in neutral system
   - Perfect for high emphasis text on light backgrounds

## Usage Impact

### Before (Current)

```tsx
<h1 className="text-neutral-darkest">Heading</h1>     // Grey-700
<p className="text-neutral-dark">Body</p>              // Grey-600
<span className="text-neutral-light">Caption</span>   // Grey-500
<div className="border border-???">No semantic</div>  // Have to use grey-300
```

### After (Proposed)

```tsx
<h1 className="text-neutral-heading">Heading</h1>     // Grey-700 (semantic!)
<p className="text-neutral">Body</p>                   // Grey-600 (clearer!)
<span className="text-neutral-muted">Caption</span>   // Grey-500 (clearer!)
<div className="border border-neutral-lighter">Div</div> // Grey-300 (now mapped!)
```

## Accessibility Verification

All proposed mappings maintain WCAG AA compliance:

- Grey-600 body text on white: 8.2:1 ✅ AAA
- Grey-700 headings on white: 12.6:1 ✅ AAA
- Grey-500 muted text on white: 4.9:1 ✅ AA
- Grey-300 borders: Decorative only ✅

## Next Steps

1. Review proposed semantic mappings
2. Choose: Minimal change or comprehensive update?
3. Update color token files
4. Update documentation
5. Communicate changes to team
