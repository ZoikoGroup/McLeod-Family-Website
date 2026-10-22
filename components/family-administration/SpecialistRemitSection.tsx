import type { ReactNode } from "react";

interface RemitCard {
  title: string;
  body: ReactNode;
}

const remitCards: RemitCard[] = [
  {
    title: "Identify responsibility",
    body: (
      <>
        Clarify which entity or role may decide or
        <br className="hidden lg:inline" /> receive information.
      </>
    ),
  },
  {
    title: "Engage relevant expertise",
    body: (
      <>
        Bring appropriate specialist perspectives to
        <br className="hidden lg:inline" /> a matter when the mandate calls for it.
      </>
    ),
  },
  {
    title: "Review and escalate",
    body: (
      <>
        Move material questions to appropriate
        <br className="hidden lg:inline" /> governance and decision-makers.
      </>
    ),
  },
  {
    title: "Preserve the outcome",
    body: (
      <>
        Keep necessary context and records with
        <br className="hidden lg:inline" /> authorized parties.
      </>
    ),
  },
];

export function SpecialistRemitSection() {
  return (
    <section
      id="specialist-expertise"
      aria-label="Specialist expertise remains accountable to its own remit"
      className="w-full border-t border-swirl pt-12"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Specialist expertise remains accountable to its own remit.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[890px]">
        The Office may coordinate with legal, tax, financial, operational and other specialists when appropriate. Their
        <br className="hidden lg:inline" /> professional responsibilities and any regulated functions remain with the relevant authorized parties. The
        <br className="hidden lg:inline" /> Office’s coordination role does not constitute public advice, a referral service or a representation that any
        <br className="hidden lg:inline" /> named adviser is retained.
      </p>

      <div className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remitCards.map((card) => (
            <div key={card.title} className="border-t border-swirl pt-6 flex flex-col">
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
