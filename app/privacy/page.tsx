import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { site, mailto } from '@/site';

export const metadata: Metadata = {
  title: 'Privacy | Piecewise',
  description: 'How the Piecewise website handles information about visitors.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <article className="prose">
            <h1>Privacy</h1>
            <p className="meta">Last updated November 17, 2026</p>

            <h2>What this site collects</h2>
            <p>
              This site has no forms and doesn&rsquo;t set cookies. It uses Vercel Web Analytics and
              Speed Insights to count visits and measure how fast pages load. Vercel says these
              tools don&rsquo;t use cookies and can&rsquo;t follow you from day to day or across
              other websites.
            </p>
            <p>
              Vercel, which hosts the site, also keeps standard server logs, such as IP addresses
              and browser types, to run and protect it.
            </p>

            <h2>If you contact me</h2>
            <p>
              If you email or call, I use what you send only to reply to you and, if you become a
              client, to do the work. I don&rsquo;t sell or share it.
            </p>

            <h2>Questions</h2>
            <p>
              Email <a href={mailto}>{site.email}</a>.
            </p>
            <p>
              {site.legalName}, {site.city}, {site.state}
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
