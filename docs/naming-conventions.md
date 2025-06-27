# Naming Conventions

This document outlines the standardized naming conventions used throughout the project to maintain code consistency and readability.

## Case Styles Used

| Style      | Example           | Description                                                          |
| ---------- | ----------------- | -------------------------------------------------------------------- |
| PascalCase | `ButtonComponent` | First letter of each word is capitalized, no separators              |
| camelCase  | `getUserData`     | First letter lowercase, first letter of subsequent words capitalized |
| kebab-case | `about-us`        | All lowercase with hyphens separating words                          |
| snake_case | `api_endpoint`    | All lowercase with underscores separating words (used rarely)        |

## Directory & File Naming

### App Router Pages

- **App Routes**: Use **kebab-case** for directories in the app router
  - `app/case-studies/`
  - `app/how-it-works/`
  - `app/contact/`

### Components

- **Component Files**: Use **PascalCase** for all component files

  - `Button.tsx`
  - `Navbar.tsx`
  - `HeroSection.tsx`
  - `PageSection.tsx`

- **Component Directories**: Use **kebab-case** for component directories
  - `components/ui/`
  - `components/form-elements/`

### Sections

- **Section Components**: Use **PascalCase** for section component files
  - `sections/home/Hero.tsx`
  - `sections/about/TeamMembers.tsx`
  - `sections/pricing/PricingCards.tsx`

### Data

- **Data Files**: Use **camelCase** for data files
  - `data/homePageData.ts`
  - `data/testimonials.ts`
  - `data/pricingPlans.ts`

### Utilities and Helpers

- **Utility Functions**: Use **camelCase** for utility functions and their files
  - `utils/formatDate.ts`
  - `utils/validateEmail.ts`
  - `hooks/useWindowSize.ts`

### Types and Interfaces

- **Types/Interfaces**: Use **PascalCase** with descriptive names
  - `types/ButtonProps.ts`
  - `types/UserData.ts`
  - Interface names often end with descriptive suffixes:
    - `interface ButtonProps { ... }`
    - `interface UserState { ... }`

## CSS and Styling

- **CSS Classes**: Use **kebab-case** for CSS class names

  - `hero-section`
  - `nav-item`
  - `card-container`

- **Tailwind Class Order**: Follow a consistent order for Tailwind classes
  - Layout → Spacing → Typography → Visual styles

## JavaScript/TypeScript Conventions

- **Variables**: Use **camelCase**

  - `const userName = 'John';`
  - `let isVisible = true;`

- **Constants**: Use **UPPER_SNAKE_CASE** for true constants

  - `const MAX_ITEMS = 10;`
  - `const API_KEY = 'abc123';`

- **Functions**: Use **camelCase** with verb prefixes when applicable

  - `function getUserData()`
  - `const handleSubmit = () => {}`
  - `const formatPrice = (num) => {}`

- **Private Properties**: Use underscore prefix for private or internal variables
  - `this._privateValue = 123;`

## Import Order

1. External libraries/dependencies
2. Internal modules
3. Components
4. Types/interfaces
5. Styles

## Best Practices

- Be descriptive and specific with names
- Avoid abbreviations unless universally understood
- Use consistent patterns across similar files
- Follow existing conventions when working on established code

Following these naming conventions ensures that our codebase remains consistent, readable, and maintainable as the project evolves.
