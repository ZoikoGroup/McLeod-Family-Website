import type { NavIcon as NavIconName } from "@/lib/navigation";

const paths: Record<NavIconName, React.ReactNode> = {
  // Columned building
  office: (
    <>
      <path d="M2 7 12 2 22 7H2Z" />
      <path d="M4 9v10M9 9v10M15 9v10M20 9v10" />
      <path d="M2 20h20M2 22h20" />
    </>
  ),
  // Crossed tools
  activities: (
    <>
      <path d="M5 19 15 9" />
      <path d="M13.5 4.5a3.5 3.5 0 0 0 5 5L21 7l-4-4-3.5 1.5Z" />
      <path d="M19 19 9 9" />
      <path d="M7.5 4.5 5 3 3 5l1.5 2.5L7 8l1-1-.5-2.5Z" />
    </>
  ),
  // Sprout
  stewardship: (
    <>
      <path d="M12 22v-10" />
      <path d="M12 12c-2.2 0-3.5-1.6-3.5-4.2S9.8 3 12 3" />
      <path d="M12 12c2.2 0 3.5-1.6 3.5-4.2S14.2 3 12 3" />
      <path d="M8.5 22h7" />
    </>
  ),
  // Scales
  governance: (
    <>
      <path d="M12 3v18" />
      <path d="M3 21h18" />
      <path d="M8 6h8" />
      <path d="M8 6 5 15h6L8 6Z" />
      <path d="M16 6l-3 9h6l-3-9Z" />
    </>
  ),
  // Shield with check
  verification: (
    <>
      <path d="M12 2 4 5v6.5c0 4.8 3.4 8.8 8 10.5 4.6-1.7 8-5.7 8-10.5V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  // Page with folded corner
  document: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
      <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" />
    </>
  ),
  // Envelope
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </>
  ),
  // Map pin
  pin: (
    <>
      <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

type Props = {
  name: NavIconName;
  /** Rendered size in px; the stroke stays 1.2px at any size. */
  size?: 20 | 32;
  className?: string;
};

export default function NavIcon({ name, size = 32, className = "text-bronze" }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={(1.2 * 24) / size}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      {paths[name]}
    </svg>
  );
}
