import { SectionIntro } from "./SectionIntro";

const STEPS = [
  {
    num: "1.",
    title: "Orient:",
    text: "Read the institutional definition and public perimeter on our official site.",
  },
  {
    num: "2.",
    title: "Check:",
    text: "Use independently verified official information if a message or instruction seems uncertain.",
  },
  {
    num: "3.",
    title: "Contact:",
    text: "Use Contact the Office for a concise, non-sensitive initial enquiry.",
  },
  {
    num: "4.",
    title: "Qualify:",
    text: "Share sensitive information only after identifying the recipient and purpose through secure arrangements.",
  },
];

export function VerifiedRelationshipSection() {
  return (
    <section
      id="verified-relationship"
      aria-labelledby="verified-relationship-heading"
      className="w-full"
    >
      <SectionIntro
        id="verified-relationship-heading"
        title={
          <>
            A Verified Relationship Begins Through an Official<br className="hidden sm:inline" /> Channel
          </>
        }
        text={
          <>
            Structured onboarding for legal, banking, corporate, and professional<br className="hidden sm:inline" /> institutional counterparties.
          </>
        }
      />

      <div className="mt-8 border border-swirl bg-[#faf8f5] p-8 md:p-9">
        <ol className="flex flex-col gap-4">
          {STEPS.map((s) => (
            <li key={s.num} className="flex items-start gap-3 text-[15px] leading-6">
              <span className="font-semibold text-dune">{s.num}</span>
              <p className="text-[#5a5752]">
                <strong className="font-semibold text-dune">{s.title}</strong> {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
