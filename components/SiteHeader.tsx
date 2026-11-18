import Link from 'next/link';
import { site, mailto, phoneHref, phoneDisplay } from '@/site';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="wordmark">
          {site.name}
        </Link>
        <div className="header-contact">
          <a className="header-link" href={mailto}>
            {site.email}
          </a>
          {site.phone && (
            <a className="header-link" href={phoneHref(site.phone)}>
              {phoneDisplay(site.phone)}
            </a>
          )}
          <a className="button button-small button-outline" href={mailto}>
            Email me
          </a>
        </div>
      </div>
    </header>
  );
}
