import type { ReactNode } from "react";

interface CoordinationCard {
  title: string;
  body: ReactNode;
}

const coordinationCards: CoordinationCard[] = [
  {
    title: "Material obligations",
    body: (
      <>
        Responsibilities may be tracked through
        <br className="hidden lg:inline" /> defined roles, appropriate records and
        <br className="hidden lg:inline" /> escalation where the relevant mandate
        <br className="hidden lg:inline" /> requires it.
      </>
    ),
  },
  {
    title: "Entities and advisers",
    body: (
      <>
        The Office may connect relevant
        <br className="hidden lg:inline" /> information and counterparties so
        <br className="hidden lg:inline" /> decisions reach the authorized people.
      </>
    ),
  },
  {
    title: "Reporting",
    body: (
      <>
        Reporting supports appropriate review,
        <br className="hidden lg:inline" /> accountability and continuity of decisions.
      </>
    ),
  },
];

export function CoordinationSection() {
  return (
    <section
      id="coordination-without-commingling"
      aria-label="Coordination without commingling responsibilities"
      className="w-full"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Coordination without commingling responsibilities.
      </h2>

      {/* Quote Callout */}
      <div className="pt-6">
        <div className="border-l-2 border-[#D3A75A] pl-6 max-w-[960px]">
          <p className="font-serif italic text-[20px] leading-[29px] text-[#23463A]">
            The Office provides the institutional coordination needed across entities, advisers, reporting, records
            <br className="hidden lg:inline" /> and material family-office obligations, while separating activities by purpose.
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[890px]">
        Coordination helps different responsibilities remain understood and connected. It does not change the legal
        <br className="hidden lg:inline" /> powers of a company, trustee, adviser, board or other responsible party, and it does not imply that all family
        <br className="hidden lg:inline" /> arrangements are operated through one organization.
      </p>

      {/* 3 Columns */}
      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coordinationCards.map((card) => (
            <div key={card.title} className="border-t border-[#D6D1C6] pt-6 flex flex-col">
              <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
                {card.title}
              </h3>
              <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[312px]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
