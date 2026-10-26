export function DefineAuthoritySection() {
  return (
    <section aria-label="Define Authority" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Define authority before asking for action.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          Responsible stewardship starts with knowing which body or person is authorized to decide. Family governance
          <br className="hidden lg:inline" />{" "}
          sets purpose and reserved matters where applicable; legal entities act through their own governance; and the
          <br className="hidden lg:inline" />{" "}
          Family Office coordinates only what falls within its mandate. Authority should be established from the
          <br className="hidden lg:inline" />{" "}
          relevant legal and governance records, not inferred from this website or a communication carrying the McLeod
          <br className="hidden lg:inline" />{" "}
          name.
        </p>

        {/* 4 Cards Grid */}
        <div className="pt-8 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              What grants authority?
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Applicable mandates, entity governance,
              <br className="hidden lg:inline" />{" "}
              delegated roles and formal decision rights.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              What does the Office coordinate?
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Owner-level strategy, governance, risk,
              <br className="hidden lg:inline" />{" "}
              reporting and continuity within its
              <br className="hidden lg:inline" />{" "}
              mandate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              What must be verified?
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Entity identity, role, transaction authority
              <br className="hidden lg:inline" />{" "}
              and changed sensitive instructions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              What is not proven here?
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              That McLeod Family Office legally owns or
              <br className="hidden lg:inline" />{" "}
              signs for any specific enterprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
