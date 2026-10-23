interface ResponsibilityCard {
  title: string;
  description: string;
}

const responsibilityCards: ResponsibilityCard[] = [
  {
    title: "Family governance",
    description:
      "Sets family-level purpose and reserved matters; delegates deliberately.",
  },
  {
    title: "Family Office",
    description:
      "Coordinates governance, capital, risk, reporting, records and continuity within its mandate.",
  },
  {
    title: "Purpose-specific vehicles",
    description:
      "Hold or conduct specific activities with their own legal and fiduciary requirements.",
  },
  {
    title: "Operating businesses",
    description:
      "Boards and executives retain commercial management and applicable company obligations.",
  },
  {
    title: "External advisers",
    description:
      "Provide independent, specialist or regulated input where appropriate.",
  },
];

export function CoordinationResponsibilitySection() {
  return (
    <section
      id="coordination-responsibility"
      aria-label="Coordination is not a substitute for legal responsibility"
      className="w-full"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Coordination is not a substitute for legal responsibility.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
        The Office helps maintain continuity of purpose and coordination where responsibilities span separate entities and advisers. Legal and fiduciary decisions remain with those authorized under the relevant arrangements, and specialist advice is provided by appropriately qualified professionals.
      </p>

      <div className="pt-8 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {responsibilityCards.map((card) => (
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
    </section>
  );
}
