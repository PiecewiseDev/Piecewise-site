import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <article className="prose">
            <h1>Page not found</h1>
            <p>
              That page doesn&rsquo;t exist. <Link href="/">Go to the home page</Link>.
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
