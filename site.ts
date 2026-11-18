// Business details used across the site. Change them here, not in the pages.

export const site = {
  name: 'Piecewise',
  legalName: 'Piecewise LLC',
  url: 'https://www.piecewisellc.com',
  owner: 'Kyle Larsen',
  email: 'kyle@piecewisellc.com',
  // Add the business phone number (digits only, e.g. '7045550123') to show it on the site.
  phone: '',
  city: 'Charlotte',
  state: 'North Carolina',
  stateCode: 'NC',
  title: 'Piecewise | Bookkeeping for contractors and home service companies',
  description:
    'Monthly bookkeeping in QuickBooks Online for contractors and home service companies. Every account reconciled, with a P&L and balance sheet by the 15th. Charlotte, NC.',
} as const;

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Bookkeeping')}`;

export function phoneHref(digits: string) {
  return `tel:+1${digits}`;
}

export function phoneDisplay(digits: string) {
  return digits.length === 10
    ? `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    : digits;
}
