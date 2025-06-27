# Project Structure

This document outlines the organization of our Next.js website project for clarity and maintainability.

## Core Assets

1. **`public/`** - Static assets like images, logos, and favicons

   - All site images, including hero backgrounds and testimonial photos
   - Favicon and site icons
   - Downloadable assets (if any)

2. **`styles/`** - Global styling and Tailwind configuration
   - Global CSS styles and variables
   - Tailwind utility classes and overrides
   - Theme configuration (colors, spacing, typography)

## UI Components

3. **`components/`** - Reusable UI building blocks

   - Buttons, form elements, cards, and other atomic components
   - UI utilities like modals, tooltips, and accordions
   - Shared components used across multiple pages

4. **`sections/`** - Larger page sections organized by page

   - Home page sections (Hero, Benefits, Explainer, etc.)
   - Page-specific content blocks
   - Organized by page for easier maintenance

5. **`layouts/`** - Full page layouts and structural components
   - Navbar and navigation components
   - Footer layout
   - Common page wrappers and containers

## Data and Configuration

6. **`data/`** - Static marketing content and structured data

   - Page content organized by section
   - Testimonials, features, and other marketing content
   - Structured data for SEO

7. **`icons/`** - SVG icons and icon components

   - Custom SVG icons
   - Icon wrapper components
   - Icon utilities and helpers

8. **`constants/`** - Static values and configuration
   - Site-wide constants
   - Feature flags
   - Configuration objects

## Application Logic

9. **`types/`** - TypeScript types and interfaces

   - Shared type definitions
   - Component prop interfaces
   - Data schema types

10. **`lib/`** - Core functionality and API functions

    - API client functions
    - Core business logic
    - Utility libraries

11. **`hooks/`** - Custom React hooks

    - Shared stateful logic
    - Data fetching hooks
    - UI behavior hooks

12. **`utils/`** - General helper functions
    - String and array helpers
    - Date formatting
    - Validation helpers

## Next.js App Structure

13. **`app/`** - Next.js App Router structure
    - Page components for each route
    - Layout components
    - Route groups and dynamic routes
    - API route handlers (if used)

## Configuration Files

- **`tsconfig.json`** - TypeScript configuration
- **`next.config.js`** - Next.js configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`postcss.config.js`** - PostCSS configuration
- **`package.json`** - Dependencies and scripts
- **`.eslintrc.json`** - ESLint configuration
- **`.prettierrc`** - Prettier configuration

## Documentation

- **`README.md`** - Project overview and setup instructions
- **`docs/`** - Detailed documentation
  - Development guides
  - Project conventions
  - Setup instructions

This organization is designed to enhance developer experience and maintainability as the project scales.
