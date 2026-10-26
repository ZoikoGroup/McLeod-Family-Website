export function FutureStewardshipSection() {
  return (
    <section aria-label="Future Stewardship" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Prepare future stewardship before a transition.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          Ownership responsibilities do not end with a current decision-maker. Prepared succession, documented
          <br className="hidden lg:inline" />{" "}
          mandates, institutional memory and proportionate education help future stewards understand what they are
          <br className="hidden lg:inline" />{" "}
          responsible for. The Office’s continuity role is about readiness and coordinating responsibilities, rather than
          <br className="hidden lg:inline" />{" "}
          revealing family succession plans or the ownership arrangements of any particular asset.
        </p>

        {/* 5 Cards Grid */}
        <div className="pt-8 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Succession */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Succession
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Plan for leadership and ownership
              <br className="hidden lg:inline" />{" "}
              responsibilities before transitions become
              <br className="hidden lg:inline" />{" "}
              urgent.
            </p>
          </div>

          {/* Card 2: Institutional memory */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Institutional memory
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Retain relevant mandates, records and
              <br className="hidden lg:inline" />{" "}
              decision context through approved
              <br className="hidden lg:inline" />{" "}
              processes.
            </p>
          </div>

          {/* Card 3: Preparation of future stewards */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Preparation of future stewards
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Support suitable understanding of
              <br className="hidden lg:inline" />{" "}
              governance duties over time.
            </p>
          </div>

          {/* Card 4: Emergency authority */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Emergency authority
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Maintain clear paths for critical decisions
              <br className="hidden lg:inline" />{" "}
              where applicable.
            </p>
          </div>

          {/* Card 5: Reassessment */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Reassessment
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Review arrangements as governance and
              <br className="hidden lg:inline" />{" "}
              circumstances change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
