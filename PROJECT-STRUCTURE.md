# Project Structure

This project follows a logical organization of folders for clarity and scalability:

## Core Assets

1. `public/` - Static assets like images, fonts, and favicon
2. `styles/` - Global styles and Tailwind configuration

## UI Components

3. `components/` - Reusable UI building blocks
4. `sections/` - Larger page sections organized by page
5. `layouts/` - Full page layouts (Navbar, Footer)

## Data and Configuration

6. `data/` - Static marketing content and data
7. `icons/` - SVG icons and icon components
8. `constants/` - Static values and configuration

## Application Logic

9. `types/` - TypeScript types and interfaces
10. `lib/` - Core functionality and API functions
11. `hooks/` - Custom React hooks
12. `utils/` - General helper functions

## Other Project Files

13. `app/` - Next.js app directory (Legacy)
14. `README.md` - Project documentation
15. `package.json` - Dependencies and scripts
16. `tsconfig.json` - TypeScript configuration
17. `next.config.js` - Next.js configuration
18. `postcss.config.js` - PostCSS configuration

## Naming Conventions

The project follows these standardized naming conventions:

- `/app` route folders: **kebab-case** (e.g., `case-studies`, `how-it-works`)
- `/components/`: **PascalCase** (e.g., `Navbar.tsx`, `PageSection.tsx`)
- `/sections/`: **PascalCase** (e.g., `AboutIntro.tsx`, `PricingCards.tsx`)
- `/data/`: **camelCase** (e.g., `homePageData.ts`, `aboutPageData.ts`)
- Variables and functions: **camelCase** (e.g., `formatDate`, `generatePageMetadata`)
- Types and interfaces: **PascalCase** (e.g., `UserProps`, `ButtonVariant`)

## Development Notes

When working on this project:

- Place new UI components in the appropriate folder based on their size and scope
- Maintain the separation of concerns as outlined in this structure
- Follow the naming conventions established above
- Export components through index files in each directory

This organization is designed to enhance developer experience and maintainability as the project scales.
