interface ClarityCard {
  title: string;
  description: string;
}

const clarityCards: ClarityCard[] = [
  {
    title: "Enterprise interests",
    description:
      "Describe high-level function, not a company inventory. No company names, percentage holdings, valuations, portfolio logos or contracts.",
  },
  {
    title: "Performance & strategy",
    description:
      "Publicly discuss long-horizon principles only. No actual operating KPIs, financial performance, forecasts or transactions.",
  },
  {
    title: "Individual identities",
    description:
      "No private family or employee detail unless specifically approved. No family genealogy, residential addresses, itinerary or direct staff contacts.",
  },
];

export function InstitutionalClaritySection() {
  return (
    <section
      id="institutional-clarity"
      aria-label="Institutional clarity without unnecessary disclosure"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Institutional clarity without unnecessary disclosure.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
          The public page describes this discipline without claiming particular shareholder rights, voting thresholds, governance documents, investment returns or strategic decisions. The applicable legal entity and authorized process are determined case by case.
        </p>

        {/* 3 Cards Grid */}
        <div className="pt-8 max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clarityCards.map((card) => (
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
