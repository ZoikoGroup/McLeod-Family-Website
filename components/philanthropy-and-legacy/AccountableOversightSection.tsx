interface OversightCard {
  title: string;
  description: string;
}

const oversightCards: OversightCard[] = [
  {
    title: "Family Office",
    description: "Coordinates approved institutional mandates, records and counterparties.",
  },
  {
    title: "Commercial & enterprise",
    description: "Separate operating boards, commercial obligations and ownership rights.",
  },
  {
    title: "Capital & investment",
    description: "Long-horizon family capital discipline and separate investment governance.",
  },
  {
    title: "Philanthropic structure",
    description: "Own purpose and legal duties under verified governing documents (if established).",
  },
  {
    title: "External specialists",
    description: "Independent legal, tax, philanthropic or fiduciary advice when engaged under proper authority.",
  },
];

export function AccountableOversightSection() {
  return (
    <section
      id="separate-purpose-accountable-oversight"
      aria-label="Separate purpose. Accountable oversight."
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Separate purpose. Accountable oversight.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1194px]">
          Commercial ownership, capital stewardship, family administration and philanthropic purposes do not become the same activity merely because they share long-term objectives. Each responsibility belongs to its proper mandate, entity governance and applicable controls.
        </p>

        <div className="pt-8 max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
