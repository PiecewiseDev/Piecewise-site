import { site, mailto, phoneHref } from '@/site';

export function ContactButtons() {
  return (
    <div className="actions">
      <a className="button button-primary" href={mailto}>
        Email me
      </a>
      {site.phone && (
        <a className="button button-secondary" href={phoneHref(site.phone)}>
          Call me
        </a>
      )}
    </div>
  );
}
