import { SectionIntro } from "./SectionIntro";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the vision of McLeod Family Office?",
    a: "Its vision is to build an enduring family institution that preserves independence, strengthens enterprise, compounds capital responsibly, and carries stewardship across generations.",
  },
  {
    q: "What is its core mission?",
    a: "Its mission is to steward the family’s capital, enterprise interests, and governance through clear decision rights, disciplined allocation, risk management, and prepared succession.",
  },
  {
    q: "Does the Office manage capital for external clients or families?",
    a: "No. McLeod Family Office is a single-family office serving exclusively the McLeod family and purpose-specific family entities. It does not manage external client funds or offer advisory services.",
  },
  {
    q: "How does the Office treat sensitive communications and payment requests?",
    a: "Under our “Trust with verification” principle, all sensitive transaction changes or instructions require independent out-of-band verification prior to execution.",
  },
  {
    q: "Does the Office run the family’s operating companies?",
    a: "No. Operating businesses are governed and managed through their own boards and executives. The Office coordinates within its defined mandate and does not take on day-to-day management.",
  },
];

export function VmvFaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8 lg:pt-28"
    >
      <SectionIntro
        id="faq-heading"
        title="Institutional Questions"
        text="Direct answers regarding our vision, mission, and operational boundaries."
      />

      <dl className="flex flex-col gap-4 pt-8">
        {FAQS.map((item) => (
          <div key={item.q} className="border border-swirl bg-[#faf8f5] px-6 py-6 sm:px-7">
            <dt className="font-serif text-lg leading-6 text-dune">{item.q}</dt>
            <dd className="max-w-[866px] pt-3 text-base leading-6 text-[#57534e]">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
