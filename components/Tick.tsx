// The red check a bookkeeper puts beside a line once it's been checked.
export function Tick({ className = 'tick' }: { className?: string }) {
  return (
    <svg
      className={className}
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
