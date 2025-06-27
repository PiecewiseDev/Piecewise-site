# Design System Documentation

This design system provides a consistent set of UI components, styles, and patterns for our business website. It is built with Tailwind CSS and follows modern design principles.

## Core Principles

- **Clean & Professional**: Light backgrounds, navy text, and ample spacing create a professional appearance
- **Consistent**: Standardized components ensure a unified user experience across the site
- **Responsive**: All components are designed to work on all device sizes
- **Accessible**: Focus states, color contrast, and semantic markup ensure accessibility

## Colors

- **Background**: `#f8f9fa` - Soft blue-gray used for page backgrounds
- **Navy**: `#1a2e3b` - Dark navy used for text and primary elements
- **Accent**: `#48bb78` - Green accent color for highlights and CTAs
- **Variations**: Each color has light and dark variations available

## Typography

- **Font**: Inter (with DM Sans as an alternative) for clean, readable text
- **Headings**: Bold weight with xl-4xl sizes
- **Body Text**: Base size with medium weight
- **Links**: Navy text with underline on hover, 200ms transition

## Components

### Buttons

```jsx
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<button className="btn-accent">Accent Button</button>
```

Or use the Button component:

```jsx
import { Button } from '@/app/components/DesignShowcase';

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="accent">Accent Button</Button>
<Button href="/contact">Button Link</Button>
```

### Cards

```jsx
<div className="card">
  <h4>Card Title</h4>
  <p>Card content</p>
</div>
```

Or use the Card component:

```jsx
import { Card } from '@/app/components/DesignShowcase';

<Card>
  <h4>Card Title</h4>
  <p>Card content</p>
</Card>;
```

### Containers

```jsx
<div className="container-wide">Wide container</div>
<div className="container-narrow">Narrow container</div>
```

Or use the Container components:

```jsx
import { ContainerWide, ContainerNarrow } from '@/app/components/DesignShowcase';

<ContainerWide>Wide container content</ContainerWide>
<ContainerNarrow>Narrow container content</ContainerNarrow>
```

### Sections

```jsx
<section className="section bg-white">
  <div className="container-wide">
    <!-- Content -->
  </div>
</section>
```

Or use the Section component:

```jsx
import { Section, ContainerWide } from '@/app/components/DesignShowcase';

<Section background="white">
  <ContainerWide>
    <!-- Content -->
  </ContainerWide>
</Section>
```

## Getting Started

1. Import the global CSS in your layout:

```jsx
import '@/styles/globals.css';
```

2. Use the components directly with the provided utility classes:

```jsx
<button className="btn-primary">Get Started</button>
```

3. Or import the component library for more advanced usage:

```jsx
import { Button, Card, Section } from '@/app/components/DesignShowcase';
```

## Customization

To customize the design system, edit the following files:

- `tailwind.config.js` - Core theme settings
- `styles/globals.css` - Global styles and component definitions
- `app/components/DesignShowcase.tsx` - Component definitions

## Example Usage

Check out the design system showcase page at `/demo` to see all components in action.
