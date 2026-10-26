import Image from "next/image";

export function ContinuityDisciplinesSection() {
  return (
    <section aria-label="Five Continuity Disciplines" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Five continuity disciplines
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          The following areas define how generational stewardship is operationalized within the institutional framework:
        </p>

        {/* 5 Disciplines List */}
        <div className="pt-10 max-w-[900px] flex flex-col gap-6">
          {/* Item 01 */}
          <div className="flex items-start gap-8 border-b border-[#d6d1c6] pb-6">
            <span className="font-serif text-[24px] leading-[30px] text-[#d3a75a] w-10 flex-shrink-0">
              01
            </span>
            <div className="flex-1">
              <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
                Succession
              </h3>
              <p className="pt-1 font-serif text-[17px] leading-[26px] text-[#34322e]">
                Leadership and ownership transitions are planned early and reviewed periodically.
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
                Next-generation preparation
              </h3>
              <p className="pt-1 font-serif text-[17px] leading-[26px] text-[#34322e]">
                Future stewards are prepared through education, exposure, responsibility and governance participation
                <br className="hidden lg:inline" />{" "}
                appropriate to readiness.
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
                Institutional memory
              </h3>
              <p className="pt-1 font-serif text-[17px] leading-[26px] text-[#34322e]">
                Material decisions, mandates, policies and records are documented so continuity does not depend on one
                <br className="hidden lg:inline" />{" "}
                person.
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
                Emergency authority
              </h3>
              <p className="pt-1 font-serif text-[17px] leading-[26px] text-[#34322e]">
                Critical functions have delegated authorities, escalation paths and continuity arrangements for unexpected
                <br className="hidden lg:inline" />{" "}
                absence or disruption.
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
                Review cadence
              </h3>
              <p className="pt-1 font-serif text-[17px] leading-[26px] text-[#34322e]">
                Governance and succession arrangements are living systems and are revisited as family, enterprise and
                <br className="hidden lg:inline" />{" "}
                jurisdictions evolve.
              </p>
            </div>
          </div>
        </div>

        {/* Image: Preparation and Mentorship */}
        <div className="mt-12 w-full overflow-hidden rounded-[2px]">
          <Image
            src="/images/generational-stewardship/preparation-mentorship.png"
            alt="Preparation and Mentorship"
            width={1184}
            height={501}
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
