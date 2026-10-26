export function DifferentResponsibilitiesSection() {
  return (
    <section aria-label="Different Responsibilities" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Different responsibilities. Separate accountability.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          To ensure resilient stewardship, decision rights are distinctly allocated. Continuity relies on preserving these
          <br className="hidden lg:inline" />{" "}
          boundaries.
        </p>

        {/* 5 Rows */}
        <div className="pt-12 max-w-[1000px] flex flex-col gap-6">
          {/* Row 1: Family governance */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Family governance
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Sets family purpose, reserved matters and the ultimate direction of stewardship.
              <br className="hidden lg:inline" />{" "}
              Authority originates with the family and is delegated deliberately.
            </p>
          </div>

          {/* Row 2: Family Office */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Family Office
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Coordinates strategy, capital, governance, risk, reporting and continuity within its
              <br className="hidden lg:inline" />{" "}
              mandate.
            </p>
          </div>

          {/* Row 3: Purpose-specific vehicles */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Purpose-specific vehicles
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Hold or conduct distinct activities under their own legal and fiduciary requirements.
            </p>
          </div>

          {/* Row 4: Operating businesses */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Operating businesses
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Execute commercial strategy through their own boards and executive teams.
            </p>
          </div>

          {/* Row 5: External advisers */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              External advisers
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Provide specialist expertise, independent judgment or regulated services where needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
