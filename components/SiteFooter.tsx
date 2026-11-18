import Link from 'next/link';
import { site, mailto, phoneHref, phoneDisplay } from '@/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-mark">{site.name}</p>
        <ul className="footer-items">
          <li>{site.legalName}</li>
          <li>
            {site.city}, {site.state}
          </li>
          <li>
            <a href={mailto}>{site.email}</a>
          </li>
          {site.phone && (
            <li>
              <a href={phoneHref(site.phone)}>{phoneDisplay(site.phone)}</a>
            </li>
          )}
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
