import { SectionIntro } from "./SectionIntro";

const PRINCIPLES: { title: string; text: string }[] = [
  {
    title: "Stewardship before spectacle",
    text: "The Office prioritizes durable outcomes, control and continuity over public visibility.",
  },
  {
    title: "Clarity of authority",
    text: "Material decisions sit with named roles or bodies under documented mandates and reserved matters.",
  },
  {
    title: "Separation of purpose",
    text: "Commercial, investment, administrative and philanthropic activities are placed in structures appropriate to their purpose and are not casually commingled.",
  },
  {
    title: "Long-horizon discipline",
    text: "Decisions are tested against multi-generational objectives, liquidity needs and downside resilience — not only near-term opportunity.",
  },
  {
    title: "Professional execution",
    text: "The Office uses institutional processes, specialist expertise, reporting and independent challenge where appropriate.",
  },
  {
    title: "Privacy by design",
    text: "Information is disclosed on a need-to-know basis through controlled, authenticated channels.",
  },
  {
    title: "Trust with verification",
    text: "Important instructions, counterparties and changes to sensitive details are independently verified before action.",
  },
  {
    title: "Continuity by preparation",
    text: "Key-person dependencies, succession, records and decision rights are addressed in advance.",
  },
];

export function GuidingPrinciplesSection() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="mx-auto w-full max-w-[1280px] px-6 pt-20 lg:px-8 lg:pt-28"
    >
      <SectionIntro
        id="values-heading"
        title="What Guides Our Work"
        text="Our institutional approach is defined by eight core operating principles derived from our controlling governance framework."
      />

      <ol className="mt-8 flex flex-col gap-6">
        {PRINCIPLES.map((item, i) => (
          <li
            key={item.title}
            className="grid grid-cols-1 gap-y-3 border border-swirl bg-[#faf8f5] px-6 py-6 sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-y-0 sm:py-7"
          >
            <span aria-hidden="true" className="font-serif text-2xl leading-7 text-twine sm:text-[30px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-serif text-xl leading-6 text-dune">{item.title}</h3>
              <p className="max-w-[794px] pt-2 text-base leading-6 text-[#57534e]">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
