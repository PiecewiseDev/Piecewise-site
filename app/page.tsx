import Image from 'next/image';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ContactButtons } from '@/components/ContactButtons';
import { SampleClose } from '@/components/SampleClose';
import { Tick } from '@/components/Tick';
import { site } from '@/site';
import kylePhoto from '@/assets/kyle.jpg';

const tools = ['QuickBooks Online', 'Housecall Pro', 'Jobber', 'ServiceTitan', 'Stripe'];

const monthly = [
  'Reconcile every bank account, credit card and loan to its statement',
  'Match your Housecall Pro, Jobber, ServiceTitan or Stripe payments to the deposits in your bank',
  'Send you a P&L and balance sheet by the 15th, with each trade shown on its own if you run more than one (say, HVAC and plumbing)',
  'Keep your subcontractors’ W-9s and payments up to date, so 1099s are easy in January',
  'Get your CPA what they need at year end, and answer their questions',
  'Answer your emails within one business day',
];

const steps = [
  { title: 'Email or call me', body: 'Tell me a little about your business.' },
  {
    title: '30-minute call',
    body: 'I’ll ask how your business runs and look at where your books are now.',
  },
  { title: 'A flat monthly price', body: 'You’ll have it the next business day.' },
  { title: 'Books by the 15th', body: 'Every month, reconciled, with your P&L and balance sheet.' },
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main">
        {/* Hero: the promise on the left, the monthly deliverable on the right */}
        <section className="band band-stone hero" aria-labelledby="page-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Monthly bookkeeping in QuickBooks Online</p>
              <h1 id="page-title">Bookkeeping for contractors and home service companies</h1>
              <p className="lede">
                Each month I reconcile every account in your QuickBooks Online file and send you a
                P&amp;L and balance sheet by the 15th.
              </p>
              <ContactButtons />
              <p className="hero-note">
                {site.city}, {site.stateCode}. Working with businesses anywhere in the US.
              </p>
            </div>
            <div className="hero-visual">
              <SampleClose />
            </div>
          </div>
        </section>

        <section className="tools" aria-label="Software I work in">
          <div className="container tools-inner">
            <p className="tools-label">Works with</p>
            <ul className="tools-list">
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band" aria-labelledby="who">
          <div className="container split">
            <h2 id="who">Who I work with</h2>
            <div className="split-body">
              <p>
                Most owners I talk to started out doing the books themselves at night, or had a
                spouse or office manager fit them in around everything else. That works until the
                business gets bigger and the books start to fall behind.
              </p>
              <p>
                If that&rsquo;s where you are, and you&rsquo;re not ready to hire a full-time
                bookkeeper, I can help.
              </p>
              <p className="callout">
                The same goes if your CPA has to clean up QuickBooks every year before they can
                start your taxes.
              </p>
            </div>
          </div>
        </section>

        <section className="band band-stone" aria-labelledby="monthly">
          <div className="container split">
            <h2 id="monthly">What I do each month</h2>
            <div className="split-body">
              <ol className="ledger">
                {monthly.map((item, i) => (
                  <li key={item}>
                    <span className="ledger-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="ledger-text">{item}</span>
                    <Tick />
                  </li>
                ))}
              </ol>
              <p className="not-included">
                <strong>Not included:</strong> taxes, payroll, paying bills and sending invoices.
                Your CPA does your taxes. I make sure they start with clean books.
              </p>
            </div>
          </div>
        </section>

        <section className="band" aria-labelledby="about">
          <div className="container about">
            <div className="about-photo">
              <Image
                src={kylePhoto}
                alt={`${site.owner}, owner of Piecewise`}
                sizes="(min-width: 60rem) 22rem, 100vw"
                placeholder="blur"
              />
            </div>
            <div className="about-copy">
              <h2 id="about">About me</h2>
              <p className="about-lead">
                I&rsquo;m {site.owner}. I spent a year at RSM, a national accounting firm, and then
                two and a half years in investment banking at Citizens.
              </p>
              <dl className="facts">
                <div>
                  <dt>Based in</dt>
                  <dd>Charlotte, North Carolina</dd>
                </div>
                <div>
                  <dt>Clients</dt>
                  <dd>Anywhere in the US</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="band band-stone" aria-labelledby="start">
          <div className="container">
            <h2 id="start" className="section-title">
              How it starts
            </h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="step-num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band" aria-labelledby="questions">
          <div className="container split">
            <h2 id="questions">Questions</h2>
            <dl className="faq split-body">
              {questions.map(({ q, a }) => (
                <div key={q}>
                  <dt>{q}</dt>
                  <dd>{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="band band-ink cta" aria-labelledby="cta">
          <div className="container cta-inner">
            <div>
              <h2 id="cta">Set up a 30-minute call</h2>
              <p>Email or call me. You&rsquo;ll have a flat monthly price the next business day.</p>
            </div>
            <ContactButtons inverse />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
