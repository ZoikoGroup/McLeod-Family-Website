import Image from "next/image";

const capitalPrinciples = [
  {
    number: "01",
    title: "Long horizon",
    description:
      "Capital decisions are evaluated across cycles and generations rather than against short reporting periods.",
  },
  {
    number: "02",
    title: "Resilience",
    description:
      "Liquidity, concentration, leverage, counterparty exposure and downside scenarios are considered alongside expected opportunity.",
  },
  {
    number: "03",
    title: "Selective concentration",
    description:
      "Concentration may be appropriate where the family has deep knowledge, control or a durable advantage; concentration is governed, not accidental.",
  },
  {
    number: "04",
    title: "Diversification of risk",
    description:
      "Risks are considered across asset, geography, currency, counterparty and operating exposures rather than through labels alone.",
  },
  {
    number: "05",
    title: "Independent expertise",
    description:
      "External investment, tax, legal, banking, insurance and specialist advice is used when independence, regulation or domain expertise requires it.",
  },
  {
    number: "06",
    title: "Measurement & review",
    description:
      "Material exposures, performance, costs and policy compliance are reviewed through defined reporting and governance cycles.",
  },
];

export function CapitalDisciplineSection() {
  return (
    <section
      id="capital-discipline"
      aria-label="Capital discipline considers opportunity and downside together"
      className="mt-24 w-full"
    >
      <div className="border-t border-[#d6d1c6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] lg:text-[40px] lg:leading-[44px] text-[#23463a] max-w-[1095px]">
          Capital discipline considers opportunity and downside together.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
          Capital stewardship takes a long view of liquidity needs, concentration, resilience, cost and governance. Choices are evaluated with appropriate expertise and review; they do not remove risk, guarantee preservation or create any public offer to invest.
        </p>

        <div className="mt-12 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {capitalPrinciples.map((item) => (
            <div
              key={item.number}
              className="border-t border-[#d6d1c6] pt-4"
            >
              <span className="font-serif text-[16px] leading-[25px] text-[#d3a75a]">
                {item.number}
              </span>
              <h3 className="pt-2 font-serif text-[20px] leading-[25px] text-[#23463a]">
                {item.title}
              </h3>
              <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Analysis Image */}
      <div className="mt-12 w-full max-w-[1184px] overflow-hidden rounded-[2px]">
        <div className="relative aspect-[1184/502] w-full">
          <Image
            src="/images/long-term-value-creation/strategic-analysis.png"
            alt="Strategic Analysis"
            fill
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
