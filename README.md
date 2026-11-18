# Piecewise website

The one-page site for Piecewise LLC, a bookkeeping business for contractors and home service companies. Built with Next.js and hosted on Vercel at https://www.piecewisellc.com.

The previous AI-consulting site is preserved in the GitHub release `ai-site-archive` and in the history of `main`.

## Where things are

- `site.ts`: business details (name, email, phone, domain). Add the phone number here to show it on the site.
- `app/page.tsx`: the home page copy.
- `app/privacy/page.tsx`: the privacy page.
- `app/globals.css`: all styles. The comments at the top explain the design.
- `assets/kyle.jpg`: the headshot.
- `next.config.js`: security headers and redirects from old pages.

## Working on it

```bash
npm install
npm run dev     # http://127.0.0.1:3000
npm run build   # check before opening a pull request
npm run lint
```

Changes go on a branch and through a pull request. Vercel builds a preview for every pull request. Merging to `main` updates the live site.
