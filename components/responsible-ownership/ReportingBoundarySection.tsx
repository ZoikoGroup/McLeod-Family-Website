import Image from "next/image";

export function ReportingBoundarySection() {
  return (
    <section aria-label="Reporting Boundary" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Understand the decision. Respect the reporting boundary.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          A responsible ownership perspective asks whether material matters are clearly reported, appropriately
          <br className="hidden lg:inline" />{" "}
          understood and considered by those with the right authority. The Office may coordinate access to suitable
          <br className="hidden lg:inline" />{" "}
          information and periodic review within its mandate. Company performance information and entity-level
          <br className="hidden lg:inline" />{" "}
          governance materials remain subject to the relevant confidentiality and legal obligations.
        </p>

        {/* 4 Cards Grid */}
        <div className="pt-8 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Relevant reporting
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Responsible decision-makers have
              <br className="hidden lg:inline" />{" "}
              information appropriate to their duties.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Appropriate escalation
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Questions requiring action move to the
              <br className="hidden lg:inline" />{" "}
              authorized roles or bodies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Proportionate review
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Material concerns may be revisited as
              <br className="hidden lg:inline" />{" "}
              enterprise circumstances evolve.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-t border-[#d6d1c6] pt-6">
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              Reliable sources
            </h3>
            <p className="pt-3 pb-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
              Information is sourced from the entity or
              <br className="hidden lg:inline" />{" "}
              qualified adviser responsible.
            </p>
          </div>
        </div>

        {/* Image: Professional Document Review */}
        <div className="mt-12 w-full overflow-hidden rounded-[2px]">
          <Image
            src="/images/responsible-ownership/professional-document-review.png"
            alt="Professional Document Review"
            width={1184}
            height={512}
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
