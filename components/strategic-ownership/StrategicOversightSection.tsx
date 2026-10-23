interface OversightCard {
  title: string;
  description: string;
}

const oversightCards: OversightCard[] = [
  {
    title: "Enterprise resilience",
    description:
      "Consider the ability of enterprise interests to endure disruption and changing conditions.",
  },
  {
    title: "Capital discipline",
    description:
      "Consider liquidity, concentration, leverage and downside exposure where relevant.",
  },
  {
    title: "Governance effectiveness",
    description:
      "Seek clarity about decision rights, reporting and escalation in appropriate structures.",
  },
  {
    title: "Continuity",
    description:
      "Consider succession of responsibility and preservation of institutional knowledge.",
  },
];

export function StrategicOversightSection() {
  return (
    <section
      id="strategic-oversight"
      aria-label="Strategic oversight is distinct from executive control"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          03. Strategic oversight is distinct from executive control.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1160px]">
          The Office may support a disciplined long-range view of family enterprise interests by coordinating appropriate reviews, reporting and the questions that owners or delegated bodies need to consider. The exact decision-making, monitoring and escalation arrangements depend on the relevant entity and its governance.
        </p>

        {/* 4 Cards Grid */}
        <div className="pt-8 max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oversightCards.map((card) => (
              <div
                key={card.title}
                className="border-t border-[#D6D1C6] pt-6 flex flex-col"
              >
                <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
                  {card.title}
                </h3>
                <p className="pt-3 pb-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[312px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
