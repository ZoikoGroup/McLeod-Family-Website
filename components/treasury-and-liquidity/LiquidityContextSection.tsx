const considerations = [
  {
    title: "Long horizon",
    description:
      "Liquidity is considered in relation to responsibilities over time, rather than only short reporting cycles.",
  },
  {
    title: "Obligations",
    description:
      "Potential needs and material obligations form part of prudent long-term planning.",
  },
  {
    title: "Downside scenarios",
    description:
      "Liquidity is one factor among concentration, leverage, counterparties and resilience.",
  },
  {
    title: "Risk concentration",
    description:
      "Counterparty and currency exposures may be relevant to broader risk review.",
  },
  {
    title: "Decision authority",
    description:
      "Responsibilities are addressed within defined mandates and purpose-specific entities.",
  },
  {
    title: "Independent expertise",
    description:
      "Specialists may be involved when regulation, independence or expertise calls for them.",
  },
];

export function LiquidityContextSection() {
  return (
    <section
      id="liquidity-context"
      aria-label="Liquidity considerations in context"
      className="w-full"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Liquidity considerations in context
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1126px]">
        The Office considers liquidity within a broader long-horizon view of family capital, alongside obligations, concentration, counterparty exposure and resilience. This public page describes considerations, not particular balances, policies, allocations or transaction authority.
      </p>

      {/* Golden Callout Box */}
      <div className="pt-6 max-w-[880px]">
        <blockquote className="border-l border-[#D3A75A] pl-6">
          <p className="font-serif italic text-[18px] sm:text-[20px] leading-[29px] text-[#23463A]">
            &ldquo;Family capital is considered on a long horizon, with deliberate attention to liquidity, concentration,
            <br className="hidden sm:inline" />{" "}
            resilience, risk and compounding across cycles. Detailed allocations and performance are private.&rdquo;
          </p>
        </blockquote>
      </div>

      {/* 6 Cards Grid */}
      <div className="pt-8 max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {considerations.map((item) => (
            <div
              key={item.title}
              className="border-t border-[#D6D1C6] pt-6 pb-6 flex flex-col justify-start"
            >
              <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="pt-3 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
