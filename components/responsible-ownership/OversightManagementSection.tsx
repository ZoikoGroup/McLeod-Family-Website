export function OversightManagementSection() {
  return (
    <section aria-label="Oversight and Management" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Oversight must not displace management.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          Where there are enterprise interests, appropriate owner-level oversight respects the governing board’s
          <br className="hidden lg:inline" />{" "}
          responsibilities and the executive team’s role in managing operations. The Office may help coordinate long-
          <br className="hidden lg:inline" />{" "}
          range questions, reporting or information flow within a defined remit. That coordination must not be
          <br className="hidden lg:inline" />{" "}
          described as day-to-day management or as authority to instruct a company on a particular matter.
        </p>

        {/* 5 Rows */}
        <div className="pt-12 max-w-[1000px] flex flex-col gap-6">
          {/* Family governance */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Family governance
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Purpose and ultimate stewardship direction; deliberate delegation.
            </p>
          </div>

          {/* McLeod Family Office */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              McLeod Family Office
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Coordinates within defined institutional mandate.
            </p>
          </div>

          {/* Purpose-specific legal vehicles */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Purpose-specific legal vehicles
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Hold or conduct distinct activities under their own requirements, where applicable.
            </p>
          </div>

          {/* Operating-company boards / executives */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Operating-company boards /
              <br className="hidden lg:inline" />{" "}
              executives
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Govern and execute company strategy and operations.
            </p>
          </div>

          {/* External advisers */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              External advisers
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Provide independent specialist judgment within professional scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
