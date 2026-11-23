import { SectionShell } from "@/components/legal-accessibility-statement/shared";

const faqs = [
  {
    q: "Do I need to accept optional cookies to use this website?",
    a: "No. All public institutional information, official verification guidance and legitimate contact routes remain available if you reject optional technologies.",
  },
  {
    q: "How do I change or withdraw my choices later?",
    a: "Select “Cookie Preferences” in the Legal column of the global footer on any page to view your current effective settings and update them.",
  },
  {
    q: "Why can’t strictly necessary technologies be turned off here?",
    a: "Strictly necessary technologies are limited to essential site delivery, security integrity and remembering your privacy preference state itself.",
  },
  {
    q: "Does withdrawing consent delete all past data?",
    a: "Withdrawing consent prevents future optional collection and removes locally accessible optional cookies where possible, but cannot retroactively undo data already processed prior to withdrawal.",
  },
];

export function CookieFaqSection() {
  return (
    <SectionShell id="direct-answers" title="Direct answers">
      <dl className="max-w-[900px] pt-2">
        {faqs.map((item) => (
          <div key={item.q} className="border-b border-swirl py-8">
            <dt className="font-serif text-xl leading-7 text-dune">{item.q}</dt>
            <dd className="max-w-[800px] pt-3 font-serif text-[17px] leading-[27px] text-dune/80">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
