import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // List of archived/blocked paths that should redirect to home
  const blockedPaths = ['/how-it-works', '/pricing', '/case-studies'];

  // Check if the request path starts with any blocked path
  // This covers both exact matches and subpaths (like /case-studies/anything)
  const isBlockedPath = blockedPaths.some(
    (path) => url.pathname === path || url.pathname.startsWith(path + '/')
  );

  if (isBlockedPath) {
    // Redirect to home page
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/how-it-works/:path*', '/pricing/:path*', '/case-studies/:path*'],
};
