interface ContinuityCard {
  title: string;
  description: string;
}

const continuityCards: ContinuityCard[] = [
  {
    title: "Succession",
    description:
      "Prepare ownership and leadership transitions before they become urgent.",
  },
  {
    title: "Institutional memory",
    description:
      "Keep material mandates, decisions, policies and records so stewardship does not depend on one person.",
  },
  {
    title: "Emergency authority",
    description:
      "Define coverage and escalation for unexpected absence or disruption.",
  },
  {
    title: "Next-generation preparation",
    description:
      "Education and graduated governance participation are part of continuity.",
  },
  {
    title: "Estate-specific work",
    description:
      "Where involved, licensed advisers and authorized legal representatives control legal estate processes.",
  },
];

export function ContinuityPlanningSection() {
  return (
    <section
      id="continuity-planning"
      aria-label="Continuity extends beyond a single estate event"
      className="w-full pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Continuity extends beyond a single estate event.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
          Long-term continuity includes leadership succession, transfer of responsibility, documented decision rights, institutional records and preparation for unexpected change. Estate-related legal matters, if relevant, are handled according to the governing arrangements and applicable professional responsibilities.
        </p>

        <div className="pt-8 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {continuityCards.map((card) => (
            <div
              key={card.title}
              className="border-t border-[#D6D1C6] pt-6 flex flex-col justify-start min-h-[163px]"
            >
              <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
                {card.title}
              </h3>
              <p className="pt-3 pb-6 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
