import type { NavIcon as NavIconName } from "@/lib/navigation";

const paths: Record<NavIconName, React.ReactNode> = {
  // Columned building
  office: (
    <>
      <path d="M3 7 12 2.5 21 7H3Z" />
      <path d="M5 9.5v9M9 9.5v9M15 9.5v9M19 9.5v9" />
      <path d="M2 21h20" />
    </>
  ),
  // Ascending bars
  activities: (
    <>
      <path d="M5 20v-8h3.5v8" />
      <path d="M10.25 20V8h3.5v12" />
      <path d="M15.5 20V4H19v16" />
      <path d="M3 20h18" />
    </>
  ),
  // Sprout
  stewardship: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-3.5-2.25-5.5-5.5-5.5 0 3.5 2.25 5.5 5.5 5.5Z" />
      <path d="M12 12c0-3.5 2.25-5.5 5.5-5.5 0 3.5-2.25 5.5-5.5 5.5Z" />
      <path d="M6 21h12" />
    </>
  ),
  // Scales
  governance: (
    <>
      <path d="M12 3v18" />
      <path d="M7 21h10" />
      <path d="M5 6h14" />
      <path d="M5 6 2.5 13a3 3 0 0 0 5 0L5 6Z" />
      <path d="M19 6l-2.5 7a3 3 0 0 0 5 0L19 6Z" />
    </>
  ),
  // Shield with check
  verification: (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.4 7.5 10 4.4-1.6 7.5-5.4 7.5-10v-6L12 2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export default function NavIcon({ name }: { name: NavIconName }) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6 shrink-0 text-sand"
    >
      {paths[name]}
    </svg>
  );
}
