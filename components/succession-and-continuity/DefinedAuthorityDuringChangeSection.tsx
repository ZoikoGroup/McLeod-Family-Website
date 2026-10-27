import Image from "next/image";

export function DefinedAuthorityDuringChangeSection() {
  return (
    <section aria-labelledby="defined-authority-heading" className="w-full">
      <div className="max-w-[1216px]">
        <h2
          id="defined-authority-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Authority Remains Defined During Change
        </h2>
        <div className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            Transitions affect responsibility as well as people. The relevant governing body must determine the scope of a decision, the
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            authority under which it is taken, and the accountability that follows.
          </span>
        </div>
      </div>

      {/* Featured Overview Card with Image */}
      <div className="mt-10 overflow-hidden border border-[#D6D1C6] bg-[#FAF8F5] grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <div className="relative h-[280px] sm:h-[340px] lg:h-[391.44px] w-full">
          <Image
            src="/images/succession-and-continuity/governance-leadership-transition.png"
            alt="Governance and Leadership Transition Review"
            fill
            sizes="(max-width: 1024px) 100vw, 583px"
            className="object-cover object-center rounded-[2px]"
          />
        </div>
        <div className="p-8 sm:p-10 lg:p-12">
          <h3 className="font-serif text-[22px] leading-[26px] sm:text-[24px] sm:leading-[27.6px] text-[#34322E]">
            Defined Scope &amp; Authority
          </h3>
          <div className="pt-3 max-w-[487px] font-sans text-[15px] leading-6 text-[#5A5752]">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              The Family Office coordinates across boundaries within its mandate;
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              a public description does not itself create delegated power or
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              establish an authorized signatory.
            </span>
          </div>
        </div>
      </div>

      {/* Two-paragraph Card */}
      <div className="mt-10 border border-[#D6D1C6] bg-[#FAF8F5] p-8 md:p-10">
        <div className="max-w-[1134px] font-sans text-[16px] leading-[25.6px] text-[#34322E]">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            <strong className="font-bold text-[#34322E]">
              Purpose and Reserved Direction:
            </strong>{" "}
            Family governance provides the long-horizon purpose and direction of stewardship. Matters reserved to the family
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            or an appropriate governing body remain there until lawfully delegated under documented arrangements.
          </span>
        </div>
        <p className="mt-4 max-w-[1134px] font-sans text-[15px] leading-6 text-[#5A5752]">
          <strong className="font-bold text-[#5A5752]">
            Entity-Level Responsibility:
          </strong>{" "}
          Purpose-specific vehicles and operating businesses retain their own legal, fiduciary, and management responsibilities during any leadership transition.
        </p>
      </div>
    </section>
  );
}
