import Image from "next/image";

export function DownsideRiskSection() {
  return (
    <section aria-label="Downside Risk" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Responsibility includes understanding downside risk.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          Long-term stewardship considers how enterprise resilience, liquidity, concentration, continuity and external
          <br className="hidden lg:inline" />{" "}
          circumstances can affect the family’s interests. Independent expertise and challenge are used where
          <br className="hidden lg:inline" />{" "}
          appropriate. These are governance principles; they are not claims about particular investment results, operating
          <br className="hidden lg:inline" />{" "}
          resilience, financial strength or guaranteed preservation of capital.
        </p>

        {/* 4 Rows */}
        <div className="pt-12 max-w-[1000px] flex flex-col gap-6">
          {/* Durable enterprise purpose */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Durable enterprise purpose
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Align long-range concerns with entity-specific governance.
            </p>
          </div>

          {/* Financial & operational resilience */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Financial & operational resilience
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Consider concentration, liquidity, counterparty and operating exposures as relevant.
            </p>
          </div>

          {/* Specialist & independent challenge */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Specialist & independent
              <br className="hidden lg:inline" />{" "}
              challenge
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Use appropriate professional advice where judgment, regulation or jurisdiction requires.
            </p>
          </div>

          {/* Responsible communication */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Responsible communication
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Protect confidentiality and verify important instructions.
            </p>
          </div>
        </div>

        {/* Image: Coverage Framework and Continuity */}
        <div className="mt-12 w-full overflow-hidden rounded-[2px]">
          <Image
            src="/images/responsible-ownership/coverage-framework-continuity.png"
            alt="Coverage Framework and Continuity"
            width={1184}
            height={484}
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
