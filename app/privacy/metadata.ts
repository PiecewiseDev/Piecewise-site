import type { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy | Piecewise',
  description:
    'Learn how Piecewise LLC collects, uses, and protects your personal information. We do not sell your data or use marketing trackers.',
  path: '/privacy',
});

export const viewport = defaultViewport;
