export function DefinedAuthoritySection() {
  return (
    <section aria-label="Defined Authority" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Preservation depends on defined authority.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[880px]">
          Capital-related responsibility is exercised through defined mandates, decision rights, reporting and
          <br className="hidden lg:inline" />{" "}
          appropriate specialist input. Family governance, the Family Office, purpose-specific vehicles and operating
          <br className="hidden lg:inline" />{" "}
          businesses have distinct responsibilities; this page does not transfer legal authority between them.
        </p>

        {/* 5 Cards Grid */}
        <div className="pt-8 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Family governance
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Purpose, reserved matters and the ultimate
              <br className="hidden lg:inline" />{" "}
              direction of stewardship.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              McLeod Family Office
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Coordinates within defined institutional
              <br className="hidden lg:inline" />{" "}
              mandates and controls.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Purpose-specific vehicles
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Carry their own legally governed
              <br className="hidden lg:inline" />{" "}
              responsibilities; no diagram of actual
              <br className="hidden lg:inline" />{" "}
              family structures.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Operating businesses
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Their own boards, executives and day-to-
              <br className="hidden lg:inline" />{" "}
              day management.
            </p>
          </div>

          {/* Card 5 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              External advisers
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Provide specialist advice, independent
              <br className="hidden lg:inline" />{" "}
              challenge and regulated services where
              <br className="hidden lg:inline" />{" "}
              applicable; no implied universal
              <br className="hidden lg:inline" />{" "}
              delegation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
