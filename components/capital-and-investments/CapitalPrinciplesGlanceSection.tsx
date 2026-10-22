import type { ReactNode } from "react";

interface Principle {
  number: string;
  title: string;
  body: ReactNode;
}

const principles: Principle[] = [
  {
    number: "01",
    title: "Long horizon",
    body: (
      <>
        Capital decisions are evaluated across cycles and generations rather than against
        <br className="hidden lg:inline" /> short reporting periods.
      </>
    ),
  },
  {
    number: "02",
    title: "Resilience",
    body: (
      <>
        Liquidity, concentration, leverage, counterparty exposure and downside
        <br className="hidden lg:inline" /> scenarios are considered alongside expected opportunity.
      </>
    ),
  },
  {
    number: "03",
    title: "Selective concentration",
    body: (
      <>
        Concentration may be appropriate where the family has deep knowledge,
        <br className="hidden lg:inline" /> control or a durable advantage; concentration is governed, not accidental.
      </>
    ),
  },
  {
    number: "04",
    title: "Diversification of risk",
    body: (
      <>
        Risks are considered across asset, geography, currency, counterparty and
        <br className="hidden lg:inline" /> operating exposures rather than through labels alone.
      </>
    ),
  },
  {
    number: "05",
    title: "Independent expertise",
    body: (
      <>
        External investment, tax, legal, banking, insurance and specialist advice is used
        <br className="hidden lg:inline" /> when independence, regulation or domain expertise requires it.
      </>
    ),
  },
  {
    number: "06",
    title: "Measurement & review",
    body: (
      <>
        Material exposures, performance, costs and policy compliance are reviewed
        <br className="hidden lg:inline" /> through defined reporting and governance cycles.
      </>
    ),
  },
];

export function CapitalPrinciplesGlanceSection() {
  return (
    <section
      id="capital-principles-at-a-glance"
      aria-label="Capital principles at a glance"
      className="w-full"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Capital principles at a glance
      </h2>

      {/* Quote Callout */}
      <div className="pt-12">
        <div className="border-l-2 border-[#23463A] pl-6">
          <p className="font-serif italic text-[17px] leading-[26.35px] text-[#23463A] max-w-[1020px]">
            &ldquo;Family capital is considered on a long horizon, with deliberate attention to liquidity, concentration, resilience, risk and compounding
            <br className="hidden lg:inline" /> across cycles. Detailed allocations and performance are private.&rdquo;
          </p>
        </div>
      </div>

      {/* 6 Principles Grid */}
      <div className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 lg:gap-x-16 xl:gap-x-[96px]">
          {principles.map((item) => (
            <div key={item.number} className="flex flex-col">
              <div className="border-b border-[#D6D1C6] pb-2">
                <span className="font-serif text-[13px] leading-[20.15px] text-[#23463A]">
                  {item.number}
                </span>
              </div>
              <h3 className="pt-2 font-serif text-[22px] leading-[27.5px] text-[#23463A] min-h-[36px] flex items-center">
                {item.title}
              </h3>
              <p className="pt-4 pb-6 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
