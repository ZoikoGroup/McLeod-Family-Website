export default function RiskAndDisclosureSection() {
  return (
    <section
      id="risk-and-disclosure"
      aria-label="Risk and responsible review and Public disclosure boundary"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Part 1: Risk and responsible review */}
        <div className="border-t border-[#e5e0d5] pt-12 pb-20">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a] mb-4">
            Risk and responsible review
          </h2>
          <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85 max-w-[820px]">
            Relevant stewardship questions may include legal title and
            obligations, concentration, liquidity, upkeep, resilience,
            specialist expertise and appropriate review. The existence of a
            consideration is not evidence of any specific asset or policy.
          </p>
        </div>

        {/* Part 2: Public disclosure boundary */}
        <div className="border-t border-[#e5e0d5] pt-12">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a] mb-4">
            Public disclosure boundary
          </h2>
          <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85 max-w-[820px]">
            The website does not publish a family asset register, addresses of
            private holdings, valuations, beneficial ownership detail, financing
            arrangements, security protocols or transaction opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
