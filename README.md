# Professional Business Website

A clean, modern business website built with Next.js and Tailwind CSS, inspired by Asana's design style.

## Features

- Responsive design that works on all devices
- Fixed top navigation bar with logo and navigation links
- Three-column footer with contact information, quick links, and mission statement
- Dynamic routing for each page
- Clean, professional design with light background, navy text, and ample spacing

## Pages

- Home
- About
- Services
- How It Works
- Pricing
- Case Studies
- Contact

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install the dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

The project follows a logical organization for clarity and scalability:

### Core Assets

1. `public/` - Static assets like images, fonts, and favicon
2. `styles/` - Global styles and Tailwind configuration

### UI Components

3. `components/` - Reusable UI building blocks
4. `sections/` - Larger page sections organized by page
5. `layouts/` - Full page layouts (Navbar, Footer)

### Data and Configuration

6. `data/` - Static marketing content and data
7. `icons/` - SVG icons and icon components
8. `constants/` - Static values and configuration

### Application Logic

9. `types/` - TypeScript types and interfaces
10. `lib/` - Core functionality and API functions
11. `hooks/` - Custom React hooks
12. `utils/` - General helper functions

### Other Project Files

13. `app/` - Next.js app directory (Legacy)
14. `README.md` - Project documentation
15. `package.json` - Dependencies and scripts
16. `tsconfig.json` - TypeScript configuration
17. `next.config.js` - Next.js configuration
18. `postcss.config.js` - PostCSS configuration

## Customization

- Update the content in each page component to match your business information
- Replace placeholder text in the footer with your contact information
- Add your logo in the Navbar component
- Customize colors in the `tailwind.config.js` file

## License

This project is licensed under the MIT License.
