# Common Issues & Solutions

This document outlines common issues you may encounter while working on the project and how to resolve them.

## Next.js Warnings & Errors

### 1. Metadata Viewport Warning

**Warning:**

```
⚠ Unsupported metadata viewport is configured in metadata export in /. Please move it to viewport export instead.
Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport
```

**Solution:**

Move viewport configuration from the metadata export to a dedicated viewport export:

```typescript
// Before
export const metadata = {
  title: 'My Page',
  description: 'Page description',
  viewport: 'width=device-width, initial-scale=1',
};

// After
export const metadata = {
  title: 'My Page',
  description: 'Page description',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
```

### 2. Images Domain Configuration Warning

**Warning:**

```
⚠ The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead.
```

**Solution:**

Update the `next.config.js` file:

```javascript
// Before
module.exports = {
  images: {
    domains: ['example.com'],
  },
};

// After
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '**',
      },
    ],
  },
};
```

### 3. Client Component Error

**Error:**

```
Error: /app/error.tsx must be a Client Component. Add the "use client" directive the top of the file to resolve this issue.
```

**Solution:**

Add the `'use client'` directive at the top of the file:

```typescript
'use client';

import React from 'react';
// Rest of the component
```

This is already fixed in our error.tsx file but may occur in other components that use client-side features.

## Build & Development Issues

### 1. Port Already in Use

**Issue:**

```
⚠ Port 3000 is in use, trying 3001 instead.
```

**Solution:**

This is automatically handled by Next.js, which will try the next available port. However, if you need to use a specific port, you can:

1. Find and stop the process using port 3000:

   ```bash
   # For macOS/Linux
   lsof -i :3000
   kill -9 <PID>

   # For Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

2. Or specify a different port when starting:
   ```bash
   npm run dev -- -p 3002
   ```

### 2. Webpack Caching Issues

**Warning:**

```
[webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory
```

**Solution:**

This is typically a temporary issue with webpack's cache. You can fix it by:

1. Clearing the Next.js cache:

   ```bash
   rm -rf .next/cache
   ```

2. Restarting the development server:
   ```bash
   npm run dev
   ```

## TypeScript Issues

### 1. Type Errors After Enabling Strict Mode

**Issue:**

After enabling `strict`, `noImplicitAny`, or `strictNullChecks` in `tsconfig.json`, you may encounter many TypeScript errors.

**Solution:**

1. Fix the issues incrementally, starting with the most critical components
2. Use proper type annotations:

   ```typescript
   // Before
   function formatData(data) {
     // ...
   }

   // After
   function formatData(data: unknown): string {
     // ...
   }
   ```

3. For third-party libraries without types, add type declarations or use:
   ```typescript
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const data: any = thirdPartyFunction();
   ```

## Styling Issues

### 1. Tailwind Classes Not Applying

**Issue:**

Custom Tailwind classes don't seem to be working or styles aren't being applied.

**Solution:**

1. Make sure the class is defined in your `tailwind.config.js`
2. Check for typos in class names
3. Restart the dev server and clear the cache:

   ```bash
   rm -rf .next
   npm run dev
   ```

4. Ensure the proper PostCSS configuration is in place:
   ```javascript
   // postcss.config.js
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   };
   ```

## Performance Issues

If you encounter slow build times or performance issues:

1. Check for and remove unused imports and dependencies
2. Use dynamic imports for large components that aren't needed immediately
3. Optimize images using Next.js Image component
4. Run Lighthouse audits to identify specific performance bottlenecks:
   ```bash
   npm run audit
   ```

## Getting Additional Help

If you encounter issues not covered in this guide:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Search for error messages on [Stack Overflow](https://stackoverflow.com)
3. Review issues in the project's repository
4. Reach out to the development team
