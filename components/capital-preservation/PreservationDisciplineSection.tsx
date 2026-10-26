import Image from "next/image";

export function PreservationDisciplineSection() {
  return (
    <section aria-label="Preservation is a Discipline" className="w-full">
      {/* Heading 2 */}
      <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
        Preservation is a discipline, not a guarantee.
      </h2>

      {/* Paragraph:margin #363:2232 - padding: 24px 0px 0px, width: 800 */}
      <div className="pt-6">
        <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
          Decisions about capital consider both long-term opportunity and the ability to withstand adverse conditions.
          <br className="hidden lg:inline" />{" "}
          The six principles below describe a discipline, not a disclosed portfolio, approved performance target or
          <br className="hidden lg:inline" />{" "}
          guarantee.
        </p>
      </div>

      {/* Container:margin #363:2234 - padding: 48px 0px 0px, grid gap: 32px */}
      <div className="pt-12 max-w-[900px] flex flex-col gap-8">
        {/* Item 01 */}
        <div className="flex items-start gap-8 border-b border-[#d6d1c6] pb-6">
          <span className="font-serif text-[24px] leading-[30px] text-[#d3a75a] w-10 flex-shrink-0">
            01
          </span>
          <div className="flex-1">
            <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
              Long horizon
            </h3>
            {/* Paragraph padding: 8px 0px 0px */}
            <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              Capital decisions are evaluated across cycles and generations rather than against short reporting periods.
            </p>
          </div>
        </div>

        {/* Item 02 */}
        <div className="flex items-start gap-8 border-b border-[#d6d1c6] pb-6">
          <span className="font-serif text-[24px] leading-[30px] text-[#d3a75a] w-10 flex-shrink-0">
            02
          </span>
          <div className="flex-1">
            <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
              Resilience
            </h3>
            <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              Liquidity, concentration, leverage, counterparty exposure and downside scenarios are considered alongside
              <br className="hidden lg:inline" />{" "}
              expected opportunity.
            </p>
          </div>
        </div>

        {/* Item 03 */}
        <div className="flex items-start gap-8 border-b border-[#d6d1c6] pb-6">
          <span className="font-serif text-[24px] leading-[30px] text-[#d3a75a] w-10 flex-shrink-0">
            03
          </span>
          <div className="flex-1">
            <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
              Selective concentration
            </h3>
            <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              Concentration may be appropriate where the family has deep knowledge, control or a durable advantage;
              <br className="hidden lg:inline" />{" "}
              concentration is governed, not accidental.
            </p>
          </div>
        </div>

        {/* Item 04 */}
        <div className="flex items-start gap-8 border-b border-[#d6d1c6] pb-6">
          <span className="font-serif text-[24px] leading-[30px] text-[#d3a75a] w-10 flex-shrink-0">
            04
          </span>
          <div className="flex-1">
            <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
              Diversification of risk
            </h3>
            <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              Risks are considered across asset, geography, currency, counterparty and operating exposures rather than
              <br className="hidden lg:inline" />{" "}
              through labels alone.
            </p>
          </div>
        </div>

        {/* Item 05 */}
        <div className="flex items-start gap-8 border-b border-[#d6d1c6] pb-6">
          <span className="font-serif text-[24px] leading-[30px] text-[#d3a75a] w-10 flex-shrink-0">
            05
          </span>
          <div className="flex-1">
            <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
              Independent expertise
            </h3>
            <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              External investment, tax, legal, banking, insurance and specialist advice is used when independence,
              <br className="hidden lg:inline" />{" "}
              regulation or domain expertise requires it.
            </p>
          </div>
        </div>

        {/* Item 06 */}
        <div className="flex items-start gap-8 border-b border-[#d6d1c6] pb-6">
          <span className="font-serif text-[24px] leading-[30px] text-[#d3a75a] w-10 flex-shrink-0">
            06
          </span>
          <div className="flex-1">
            <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
              Measurement &amp; review
            </h3>
            <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              Material exposures, performance, costs and policy compliance are reviewed through defined reporting and
              <br className="hidden lg:inline" />{" "}
              governance cycles.
            </p>
          </div>
        </div>
      </div>

      {/* Image: Analysis and Risk Consideration */}
      <div className="mt-12 w-full overflow-hidden rounded-[2px]">
        <Image
          src="/images/capital-preservation/analysis-risk-consideration.png"
          alt="Analysis and Risk Consideration"
          width={1184}
          height={654}
          sizes="(max-width: 1280px) 100vw, 1184px"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
