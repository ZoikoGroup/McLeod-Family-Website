import Image from "next/image";

export function OwnershipResponsibilitySection() {
  return (
    <section aria-label="Ownership Responsibility" className="w-full">
      {/* Heading 2 */}
      <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
        Ownership carries responsibility beyond the immediate decision.
      </h2>

      {/* Intro Paragraph */}
      <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
        A long-term ownership perspective considers the resilience of enterprise interests, the authority of those who
        <br className="hidden lg:inline" />{" "}
        govern them and the people who will inherit responsibility. Appropriate oversight depends on defined roles,
        <br className="hidden lg:inline" />{" "}
        reliable information, independent challenge and disciplined review. These principles guide the Office’s
        <br className="hidden lg:inline" />{" "}
        coordinating role; they do not replace the duties of any relevant company, entity or adviser.
      </p>

      {/* 5 Principles Rows */}
      <div className="pt-12 max-w-[1000px] flex flex-col gap-6">
        {/* Purpose */}
        <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
          <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
            Purpose
          </h3>
          <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
            Consider the long-term purpose and obligations of an interest before promoting an
            <br className="hidden lg:inline" />{" "}
            action.
          </p>
        </div>

        {/* Authority */}
        <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
          <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
            Authority
          </h3>
          <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
            Match material decisions to approved mandates and reserved matters.
          </p>
        </div>

        {/* Accountability */}
        <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
          <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
            Accountability
          </h3>
          <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
            Keep appropriate reporting and governance review close to those entitled to act.
          </p>
        </div>

        {/* Judgment */}
        <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
          <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
            Judgment
          </h3>
          <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
            Consider risk, expertise and possible adverse consequences.
          </p>
        </div>

        {/* Continuity */}
        <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
          <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
            Continuity
          </h3>
          <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
            Prepare for leadership and ownership transitions over time.
          </p>
        </div>
      </div>

      {/* Image: Institutional Governance Framework */}
      <div className="mt-12 w-full overflow-hidden rounded-[2px]">
        <Image
          src="/images/responsible-ownership/institutional-governance-framework.png"
          alt="Institutional Governance Framework"
          width={1184}
          height={574}
          sizes="(max-width: 1280px) 100vw, 1184px"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
