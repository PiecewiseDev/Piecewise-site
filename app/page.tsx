import Image from 'next/image';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ContactButtons } from '@/components/ContactButtons';
import { site } from '@/site';
import kylePhoto from '@/assets/kyle.jpg';

const monthly = [
  'Reconcile every bank account, credit card and loan to its statement',
  'Match your Housecall Pro, Jobber, ServiceTitan or Stripe payments to the deposits in your bank',
  'Send you a P&L and balance sheet by the 15th, with each trade shown on its own if you run more than one (say, HVAC and plumbing)',
  'Keep your subcontractors’ W-9s and payments up to date, so 1099s are easy in January',
  'Get your CPA what they need at year end, and answer their questions',
  'Answer your emails within one business day',
];

const questions = [
  {
    q: 'How much does it cost?',
    a: 'It depends on how many accounts you have and how busy they are. After a short call, I’ll send you a flat monthly price within one business day.',
  },
  {
    q: 'What if my books are behind?',
    a: 'I can catch you up first. Catch-up work is priced by the number of months behind, and you’ll have the full price before I start.',
  },
  {
    q: 'Will you work with my CPA?',
    a: 'Yes. Keep your CPA. I’ll send them what they need and answer their questions directly.',
  },
];

// Structured data so search engines can show the business details correctly.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  ...(site.phone ? { telephone: `+1${site.phone}` } : {}),
  description: site.description,
  areaServed: { '@type': 'Country', name: 'United States' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.stateCode,
    addressCountry: 'US',
  },
  founder: { '@type': 'Person', name: site.owner },
};

function Tick() {
  return (
    <svg
      className="tick"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1.6 7.9c1.3.9 2.5 2.3 3.5 4C7.3 7.4 10.5 3.9 14.4 1.6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main">
        <div className="container">
          <section className="hero" aria-labelledby="page-title">
            <h1 id="page-title">Bookkeeping for contractors and home service companies</h1>
            <p className="lede">
              Each month I reconcile every account in your QuickBooks Online file and send you a
              P&amp;L and balance sheet by the 15th.
            </p>
            <ContactButtons />
          </section>

          <section className="section" aria-labelledby="who">
            <h2 id="who">Who I work with</h2>
            <div className="section-body">
              <p>
                Most owners I talk to started out doing the books themselves at night, or had a
                spouse or office manager fit them in around everything else. That works until the
                business gets bigger and the books start to fall behind.
              </p>
              <p>
                If that&rsquo;s where you are, and you&rsquo;re not ready to hire a full-time
                bookkeeper, I can help. The same goes if your CPA has to clean up QuickBooks every
                year before they can start your taxes.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="monthly">
            <h2 id="monthly">What I do each month</h2>
            <div className="section-body">
              <ul className="ledger">
                {monthly.map((item) => (
                  <li key={item}>
                    <Tick />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section" aria-labelledby="dont">
            <h2 id="dont">What I don&rsquo;t do</h2>
            <div className="section-body">
              <p>
                I don&rsquo;t do taxes or payroll, and I don&rsquo;t pay your bills or send your
                invoices. Your CPA does your taxes. I make sure they start with clean books.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="about">
            <h2 id="about">About me</h2>
            <div className="section-body about">
              <Image
                src={kylePhoto}
                alt={`${site.owner}, owner of Piecewise`}
                className="portrait"
                sizes="(min-width: 52rem) 9rem, 6rem"
                placeholder="blur"
              />
              <p>
                I&rsquo;m {site.owner}. I spent a year at RSM, a national accounting firm, and then
                two and a half years in investment banking at Citizens. I&rsquo;m in Charlotte,
                North Carolina, and I work with businesses anywhere in the US.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="questions">
            <h2 id="questions">Questions</h2>
            <div className="section-body">
              <dl className="faq">
                {questions.map(({ q, a }) => (
                  <div key={q}>
                    <dt>{q}</dt>
                    <dd>{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="section" aria-labelledby="start">
            <h2 id="start">Getting started</h2>
            <div className="section-body">
              <p>
                Email or call me to set up a 30-minute call. I&rsquo;ll ask how your business runs
                and look at where your books are now, and you&rsquo;ll have a flat monthly price the
                next business day.
              </p>
              <ContactButtons />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
