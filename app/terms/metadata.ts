import type { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Service | Piecewise',
  description:
    'Terms of Service for piecewiseai.com. Read the terms governing your use of the Piecewise website and services.',
  path: '/terms',
});

export const viewport = defaultViewport;
