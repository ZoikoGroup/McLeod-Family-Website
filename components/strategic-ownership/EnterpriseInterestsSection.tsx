import type { ReactNode } from "react";

interface EnterpriseCard {
  title: string;
  description: ReactNode;
}

const enterpriseCards: EnterpriseCard[] = [
  {
    title: "What the Office coordinates",
    description: (
      <>
        Long-term institutional perspective, owner-level principles, access to appropriate reporting and alignment of responsibilities.
      </>
    ),
  },
  {
    title: "Who runs the enterprises",
    description: (
      <>
        The boards and executive teams of each operating business, acting within their own responsibilities.
      </>
    ),
  },
  {
    title: "How interests are held",
    description: (
      <>
        Through the legal entities or arrangements applicable to the particular activity; this page does not characterize ownership for any specific company.
      </>
    ),
  },
  {
    title: "What visitors can verify",
    description: (
      <>
        Public institutional identity, official communications and legitimate contact channels—not underlying holdings.
      </>
    ),
  },
];

export function EnterpriseInterestsSection() {
  return (
    <section
      id="enterprise-interests"
      aria-label="Enterprise interests, considered on a long horizon"
      className="w-full"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Enterprise interests, considered on a long horizon.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1181px]">
        Enterprise stewardship concerns the family’s long-term interests in operating businesses and other appropriate enterprise arrangements. The Family Office supports coordination and oversight within its mandates, with attention to organizational resilience, accountable governance and continuity across time.
      </p>

      {/* Callout */}
      <div className="pt-6">
        <div className="border-l border-[#D3A75A] pl-6 max-w-[880px]">
          <p className="font-serif italic text-[18px] sm:text-[20px] leading-[29px] text-[#23463A]">
            A public description of enterprise interests is not an inventory of family assets. Particular holdings,
            <br className="hidden sm:inline" />{" "}
            ownership positions, control rights or company-level strategy are not disclosed through this page.
          </p>
        </div>
      </div>

      {/* 4 Cards Grid - 3 columns matching Figma */}
      <div className="pt-8 max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {enterpriseCards.map((card) => (
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
    </section>
  );
}
