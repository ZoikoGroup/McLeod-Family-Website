type IconProps = { className?: string };

const base = {
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" strokeWidth={2} className={className}>
      <path d="m3 8.5 3.2 3L13 4.5" />
    </svg>
  );
}

export function CrossIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" strokeWidth={2} className={className}>
      <path d="m4 4 8 8M12 4l-8 8" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" strokeWidth={1.75} className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" strokeWidth={1.75} className={className}>
      <path d="M8 3v10M4 9l4 4 4-4" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" strokeWidth={2} className={className}>
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

export function BadgeCheckIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
      <circle cx="8" cy="8" r="7" fill="currentColor" />
      <path
        d="m5 8.2 2 2 4-4.2"
        fill="none"
        stroke="#1a332a"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LandmarkIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1.5 2 6.5V9h20V6.5l-10-5Zm0 3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
      <path d="M4 10.5h3v7H4zM10.5 10.5h3v7h-3zM17 10.5h3v7h-3zM2.5 19h19v3.5h-19z" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 1 2.5 3.2v4.1c0 3.5 2.3 6.4 5.5 7.7 3.2-1.3 5.5-4.2 5.5-7.7V3.2L8 1Zm0 1.7v10.6c-2.3-1.1-3.9-3.4-3.9-6V4.3L8 2.7Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" strokeWidth={1.5} className={className}>
      <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1" />
      <path d="m2.25 4 5.75 4.5L13.75 4" />
    </svg>
  );
}

export function WarningIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
      <path d="M8 1.5 15 14H1L8 1.5Z" fill="currentColor" />
      <path d="M8 6v3.5" stroke="#f4f1ea" strokeWidth={1.5} strokeLinecap="round" />
      <circle cx="8" cy="11.75" r="0.85" fill="#f4f1ea" />
    </svg>
  );
}
