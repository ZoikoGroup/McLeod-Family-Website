export function EnduringChoicesSection() {
  return (
    <section aria-label="Enduring Choices" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Resilience supports enduring choices.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[880px]">
          A long horizon can make room for deliberate choices, but it does not remove uncertainty. McLeod’s public
          <br className="hidden lg:inline" />{" "}
          stewardship principles consider optionality, liquidity needs, downside resilience, reporting and continuity
          <br className="hidden lg:inline" />{" "}
          alongside the possibility of long-term opportunity. Trade-offs belong within governed decision processes—not
          <br className="hidden lg:inline" />{" "}
          a public website calculator.
        </p>

        {/* 4 Rows List */}
        <div className="pt-10 max-w-[1000px] flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Optionality
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Capacity to respond to change is a stewardship consideration, not a promised liquid
              <br className="hidden lg:inline" />{" "}
              reserve.
            </p>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Capital and enterprise
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Capital discipline and enterprise oversight are not the same decision body.
            </p>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Continuity
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Transfer of responsibility and institutional memory affect enduring stewardship.
            </p>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Measurement
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Review is a governance practice, not evidence of demonstrated returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
