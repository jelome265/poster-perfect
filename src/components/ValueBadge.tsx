type ValueBadgeProps = { readonly label: string };

// One value point: a drawn check mark and its label. The check mark is decorative.
export function ValueBadge({ label }: ValueBadgeProps) {
  return (
    <li className="value-badge">
      <span className="value-badge__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M6.5 12.5l3.6 3.6L17.5 8.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="value-badge__label">{label}</span>
    </li>
  );
}
