import Image from "next/image";

export default function MandateSection() {
  const mandateRows = [
    {
      title: "Strategy & Capital",
      description:
        "Coordinates long-term capital allocation, resilience and liquidity disciplines.",
    },
    {
      title: "Governance & Risk",
      description:
        "Supports defined mandates, independent challenge and appropriate review.",
    },
    {
      title: "Reporting & Continuity",
      description:
        "Preserves institutional memory, accountability and prepared transitions.",
    },
  ];

  return (
    <section
      id="mandate"
      aria-label="Mandate"
      className="w-full bg-[#F4F1EA] border-t border-[#DDD6C8]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16">
        {/* Section Heading */}
        <h2 className="mb-4 font-serif text-[34px] sm:text-[40px] lg:text-[44px] leading-[40px] sm:leading-[48px] text-[#1A332A]">
          Mandate
        </h2>

        {/* Subtitle with vertical gold accent bar */}
        <div className="mb-6 border-l-2 border-[#C6A15B] pl-3 py-0.5">
          <p className="font-serif italic text-[17px] sm:text-[19px] leading-[26px] text-[#34322E]">
            The Office operates as a coordinating institutional layer under the scope of its mandate.
            It does not automatically legally own or bind every related entity.
          </p>
        </div>

        {/* Description Paragraph */}
        <p className="mb-8 max-w-[920px] font-serif text-[15px] sm:text-[16.5px] leading-[26px] sm:leading-[28px] text-[#34322E]/90">
          Specific decision and execution powers must be determined by relevant documents, law and
          verified authorization. A family-level objective does not, by itself, confer authority
          over a separate legal entity or the management of an operating company.
        </p>

        {/* 3-Row Discipline / Responsibility Grid */}
        <div className="mb-10 w-full border-t border-[#DDD6C8]">
          {mandateRows.map((row) => (
            <div
              key={row.title}
              className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 border-b border-[#DDD6C8] items-baseline gap-2 md:gap-6"
            >
              <div className="md:col-span-4">
                <span className="font-serif text-[16px] sm:text-[17px] font-medium text-[#1A332A]">
                  {row.title}
                </span>
              </div>
              <div className="md:col-span-8">
                <p className="font-serif text-[15px] sm:text-[16px] leading-[24px] text-[#34322E]/90">
                  {row.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Image atf2 */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden">
          <Image
            src="/images/About-the-Office/atf2.jpg"
            alt="Mandate and document signing"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
