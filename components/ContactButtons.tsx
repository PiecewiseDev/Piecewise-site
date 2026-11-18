import { site, mailto, phoneHref } from '@/site';

export function ContactButtons({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="actions">
      <a className={`button ${inverse ? 'button-light' : 'button-primary'}`} href={mailto}>
        Email me
      </a>
      {site.phone && (
        <a
          className={`button ${inverse ? 'button-outline-light' : 'button-outline'}`}
          href={phoneHref(site.phone)}
        >
          Call me
        </a>
      )}
    </div>
  );
}
