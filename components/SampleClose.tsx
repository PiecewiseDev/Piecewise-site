import { Tick } from '@/components/Tick';

// An illustration of the monthly deliverable, with a made-up company and numbers.
// It's labeled as an example on the page so no one mistakes it for a real client.

const accounts = [
  { name: 'Operating checking', status: 'Reconciled' },
  { name: 'Payroll checking', status: 'Reconciled' },
  { name: 'Business credit card', status: 'Reconciled' },
  { name: 'Truck loan', status: 'Reconciled' },
  { name: 'Housecall Pro payouts', status: 'Matched to deposits' },
];

const rows = [
  { label: 'Revenue', hvac: '184,250', plumbing: '96,410', total: '280,660' },
  { label: 'Gross profit', hvac: '79,230', plumbing: '43,380', total: '122,610' },
  { label: 'Net income', hvac: '31,120', plumbing: '14,870', total: '45,990' },
];

export function SampleClose() {
  return (
    <figure className="sample" aria-label="Example of a monthly close, with made-up numbers">
      <div className="sample-head">
        <div>
          <p className="sample-kicker">Example</p>
          <p className="sample-title">October close</p>
          <p className="sample-sub">Example Heating &amp; Plumbing Co.</p>
        </div>
        <p className="sample-date">
          Sent
          <br />
          Nov 14
        </p>
      </div>

      <ul className="sample-accounts">
        {accounts.map((a) => (
          <li key={a.name}>
            <span>{a.name}</span>
            <span className="sample-status">
              <Tick className="tick tick-small" />
              {a.status}
            </span>
          </li>
        ))}
      </ul>

      <table className="sample-table">
        <caption className="visually-hidden">Profit and loss summary by trade, October</caption>
        <thead>
          <tr>
            <th scope="col">P&amp;L</th>
            <th scope="col">HVAC</th>
            <th scope="col">Plumbing</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope="row">{r.label}</th>
              <td>{r.hvac}</td>
              <td>{r.plumbing}</td>
              <td>{r.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="sample-caption">
        Illustration. The company and numbers are made up.
      </figcaption>
    </figure>
  );
}
