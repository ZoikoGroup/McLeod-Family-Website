import Image from "next/image";

export function DownsideResilienceSection() {
  return (
    <section aria-label="Consider the Downside" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Consider the downside without assuming the outcome.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[880px]">
          Long-term decisions also account for uncertainty. Liquidity needs, concentrated exposures, leverage, changing
          <br className="hidden lg:inline" />{" "}
          counterparties and downside scenarios can affect resilience across cycles. The role of this framework is to
          <br className="hidden lg:inline" />{" "}
          inform judgment and independent challenge, not to eliminate market, operational, legal or other risks.
        </p>

        {/* 6 Rows List */}
        <div className="pt-10 max-w-[1000px] flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Liquidity / obligations
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Liquidity needs and obligations are considered when evaluating resilience.
            </p>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Concentration
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Concentration is governed and considered in the risk context.
            </p>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Leverage
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Debt/leverage exposure is a category of risk assessment.
            </p>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Counterparty
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Counterparty risk and identity checks matter.
            </p>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Downside scenarios
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Scenarios are considered in decision-making.
            </p>
          </div>

          {/* Row 6 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Broader perimeter
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Financial, legal, cyber, operational and continuity risks interrelate.
            </p>
          </div>
        </div>

        {/* Image: Institutional Governance Boundary */}
        <div className="mt-12 w-full overflow-hidden rounded-[2px]">
          <Image
            src="/images/capital-preservation/institutional-governance-boundary.png"
            alt="Institutional Governance Boundary"
            width={1184}
            height={399}
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
