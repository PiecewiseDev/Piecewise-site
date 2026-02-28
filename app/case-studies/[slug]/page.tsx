'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function CaseStudyRedirect() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const slug = params?.slug;
    if (slug) {
      router.replace(`/customer-stories/${slug}`);
    } else {
      router.replace('/customer-stories');
    }
  }, [router, params]);

  return null;
}
