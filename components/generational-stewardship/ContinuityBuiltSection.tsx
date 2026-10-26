export function ContinuityBuiltSection() {
  return (
    <section aria-label="Continuity Built Before Transition" className="w-full">
      {/* Heading 2 */}
      <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
        Continuity is built before a transition.
      </h2>

      {/* Intro Paragraph */}
      <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[880px]">
        Durable institutions do not depend on a single person or a single decision cycle. Clear mandates, documented
        <br className="hidden lg:inline" />{" "}
        responsibilities, prepared participation and reliable records help maintain direction when circumstances
        <br className="hidden lg:inline" />{" "}
        change. The Office supports a long view while keeping personal succession arrangements and legal
        <br className="hidden lg:inline" />{" "}
        responsibilities where they belong: within their appropriate governing bodies and specialist structures.
      </p>

      {/* Heading 3 */}
      <h3 className="font-serif text-[24px] leading-[30px] sm:text-[28px] sm:leading-[34px] text-[#23463a] pt-12">
        Responsibility is prepared, not presumed.
      </h3>

      {/* 3 Cards Grid */}
      <div className="pt-6 max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="border-t border-[#d6d1c6] pt-6">
          <h4 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
            Authority is defined
          </h4>
          <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
            Roles and decision rights are deliberately
            <br className="hidden lg:inline" />{" "}
            documented rather than assumed.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-t border-[#d6d1c6] pt-6">
          <h4 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
            Knowledge is retained
          </h4>
          <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
            Essential records support transition
            <br className="hidden lg:inline" />{" "}
            without personal dependencies.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-t border-[#d6d1c6] pt-6">
          <h4 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
            Arrangements are reviewed
          </h4>
          <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
            Continuity plans remain aligned with
            <br className="hidden lg:inline" />{" "}
            evolving obligations and structures.
          </p>
        </div>
      </div>

      {/* Callout */}
      <div className="mt-8 max-w-[1000px] border-l-2 border-[#d3a75a] py-1 pl-4">
        <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
          This public overview does not disclose individual successors, authority registers, family agreements or
          <br className="hidden lg:inline" />{" "}
          transition timetables.
        </p>
      </div>
    </section>
  );
}
