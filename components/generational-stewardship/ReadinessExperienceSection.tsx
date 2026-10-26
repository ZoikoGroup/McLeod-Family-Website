import Image from "next/image";

export function ReadinessExperienceSection() {
  return (
    <section aria-label="Readiness and Experience" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Readiness develops through experience and responsibility.
        </h2>

        {/* Paragraph 1 */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          Preparing future stewards can involve education, exposure to the responsibilities of ownership, proportionate
          <br className="hidden lg:inline" />{" "}
          participation and opportunities to learn how governance works.
        </p>

        {/* Callout */}
        <div className="mt-6 max-w-[800px] border-l-2 border-[#d3a75a] py-1 pl-4">
          <p className="font-serif italic text-[18px] sm:text-[20px] leading-[29px] text-[#23463a]">
            Future stewards are prepared through education, exposure, responsibility and governance
            <br className="hidden lg:inline" />{" "}
            participation appropriate to readiness.
          </p>
        </div>

        {/* Paragraph 2 */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e]">
          Participation should be appropriate to readiness and mandate.
        </p>

        {/* List of 4 items */}
        <div className="pt-6 flex flex-wrap items-center gap-6 max-w-[800px]">
          <span className="border-b border-[#23463a] pb-1 font-serif text-[17px] leading-[26px] text-[#34322e]">
            Education
          </span>
          <span className="border-b border-[#23463a] pb-1 font-serif text-[17px] leading-[26px] text-[#34322e]">
            Exposure
          </span>
          <span className="border-b border-[#23463a] pb-1 font-serif text-[17px] leading-[26px] text-[#34322e]">
            Responsibility
          </span>
          <span className="border-b border-[#23463a] pb-1 font-serif text-[17px] leading-[26px] text-[#34322e]">
            Participation
          </span>
        </div>

        {/* Image: Institutional Memory and Records */}
        <div className="mt-12 w-full overflow-hidden rounded-[2px]">
          <Image
            src="/images/generational-stewardship/institutional-memory-records.png"
            alt="Institutional Memory and Records"
            width={1184}
            height={492}
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
