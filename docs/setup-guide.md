# Setup Guide

This guide will help you set up the development environment for the Notation Website project.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd notation-website
```

### 2. Install Dependencies

```bash
npm install
```

or if you prefer using Yarn:

```bash
yarn install
```

This will install all the required dependencies listed in `package.json`.

### 3. Environment Setup

If the project requires environment variables, create a `.env.local` file in the root directory:

```bash
touch .env.local
```

Add any necessary environment variables to this file. Check with the team for required values.

## Development Workflow

### Running the Development Server

To start the development server:

```bash
npm run dev
```

This will start the Next.js development server, usually at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production build:

```bash
npm run build
```

### Starting the Production Server

To start the production server with the built assets:

```bash
npm run start
```

### Linting

To run ESLint for code quality checks:

```bash
npm run lint
```

### Performance Auditing

The project includes Lighthouse for performance auditing:

```bash
npm run audit
```

This will generate a Lighthouse report at `./lighthouse-report.html`.

## Project Structure Overview

The project follows a modular structure as outlined in `docs/project-structure.md`. Familiarize yourself with the main directories:

- `app/` - Next.js pages and routes
- `components/` - Reusable UI components
- `sections/` - Larger page sections
- `styles/` - Global styling and Tailwind configuration

## Code Conventions

Please review and follow the project's code conventions:

- **Naming conventions**: See `docs/naming-conventions.md`
- **TypeScript**: The project uses strict TypeScript configuration
- **Formatting**: Prettier is configured for consistent code formatting
- **Linting**: ESLint rules are defined in `.eslintrc.json`

## Helpful Commands

### Type Checking

To run TypeScript type checking:

```bash
npx tsc --noEmit
```

### Code Formatting

To format code using Prettier:

```bash
npx prettier --write .
```

## Deployment

The deployment process will depend on your hosting environment. Common options include:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

Consult with your team for the specific deployment workflow used for this project.

## Troubleshooting

### Common Issues

1. **Port already in use**: If port 3000 is already in use, Next.js will automatically try the next available port.

2. **TypeScript errors**: Run `npx tsc --noEmit` to see detailed type errors.

3. **Module not found errors**: Make sure all dependencies are installed correctly with `npm install`.

4. **Client/Server mismatch warnings**: This is usually due to hydration errors. Check that components render the same content on server and client.

### Getting Help

If you encounter issues not covered in this guide, reach out to the development team or check the project's collaboration platform.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
