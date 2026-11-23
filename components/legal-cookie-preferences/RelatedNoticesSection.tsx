import Link from "next/link";
import { bodyText, SectionShell } from "@/components/legal-accessibility-statement/shared";

const notices = [
  {
    title: "Cookie Notice",
    text: "Explains actual cookies and similar technologies, their purposes, providers and retention durations.",
    link: { label: "Read Cookie Notice", href: "/legal/cookie-notice" },
  },
  {
    title: "Privacy Notice",
    text: "Discloses how McLeod Family Office processes personal data, applicable legal bases and your rights.",
    link: { label: "Read Privacy Notice", href: "/privacy" },
  },
  {
    title: "Verification Centre",
    text: "Confirm official domains and independently verify sensitive communications without consenting to optional tracking.",
    link: { label: "Open Verification Centre", href: "/verification" },
  },
];

export function RelatedNoticesSection() {
  return (
    <SectionShell
      id="related-notices"
      title="Related legal & privacy surfaces"
      intro={
        <p>
          Cookie Preferences operates alongside our factual notices so you can review full
          disclosures before deciding.
        </p>
      }
    >
      <ul className="grid max-w-[1000px] grid-cols-1 gap-8 pt-9 md:grid-cols-3">
        {notices.map((item) => (
          <li key={item.title} className="border-t border-swirl pt-6">
            <h3 className="font-serif text-xl leading-7 text-te-papa-green">{item.title}</h3>
            <p className={`pt-2 ${bodyText}`}>{item.text}</p>
            <Link
              href={item.link.href}
              className="inline-flex gap-1.5 font-serif text-[17px] leading-[27px] text-te-papa-green underline-offset-4 transition-colors hover:text-kumera hover:underline"
            >
              {item.link.label}
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
