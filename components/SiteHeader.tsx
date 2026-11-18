import Link from 'next/link';
import { site, mailto, phoneHref, phoneDisplay } from '@/site';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="wordmark">
          {site.name}
        </Link>
        <ul className="header-contact">
          <li>
            <a href={mailto}>{site.email}</a>
          </li>
          {site.phone && (
            <li>
              <a href={phoneHref(site.phone)}>{phoneDisplay(site.phone)}</a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
