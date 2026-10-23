const riskConsiderations = [
  {
    title: "Liquidity availability",
    description: "A component in understanding resilience and timing needs.",
  },
  {
    title: "Leverage",
    description: "One of several exposures considered when appropriate.",
  },
  {
    title: "Concentration",
    description: "Dependencies can be considered within institutional review.",
  },
  {
    title: "Downside scenarios",
    description: "Judgments should consider adverse possibilities.",
  },
  {
    title: "Review",
    description: "Capital exposures may be reviewed through governance/reporting cycles.",
  },
];

export function ObligationsContingencySection() {
  return (
    <section
      id="obligations-and-contingency"
      aria-label="Consider flexibility without promising certainty"
      className="w-full pt-16 sm:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Consider flexibility without promising certainty
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1186px]">
          Risk-aware capital stewardship may consider how liquidity interacts with obligations, leverage, concentration, counterparty exposures and downside scenarios. These considerations do not mean loss can be eliminated, funding is guaranteed or any particular reserve arrangement exists.
        </p>

        {/* Golden Callout Box */}
        <div className="pt-6 max-w-[920px]">
          <blockquote className="border-l border-[#D3A75A] pl-6">
            <p className="font-serif italic text-[18px] sm:text-[20px] leading-[29px] text-[#23463A]">
              &ldquo;Liquidity, concentration, leverage, counterparty exposure and downside scenarios are considered
              <br className="hidden sm:inline" />{" "}
              alongside expected opportunity.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* 5 Cards Grid */}
        <div className="pt-8 max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {riskConsiderations.map((item) => (
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
      </div>
    </section>
  );
}
