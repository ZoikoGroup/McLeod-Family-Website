export default function WhatTheLabelMeansSection() {
  const labelRows = [
    {
      title: "Purpose",
      description:
        "Activities are considered in the context of enduring responsibilities and the purpose of the relevant legal structure; no particular family property is identified.",
    },
    {
      title: "Governance",
      description:
        "Mandates, delegated roles and reserved matters provide a framework for clarifying who may review or act; public copy does not create those rights.",
    },
    {
      title: "Continuity",
      description:
        "Records, risk review and succession of responsibility support long-horizon stewardship where applicable; no specific internal policy or asset fact is disclosed.",
    },
  ];

  return (
    <section
      id="what-the-label-means"
      aria-label="What the label means"
      className="w-full bg-[#F4F1EA] border-t border-[#DDD6C8]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16">
        {/* Section Heading */}
        <h2 className="mb-4 font-serif text-[34px] sm:text-[40px] lg:text-[44px] leading-[40px] sm:leading-[48px] text-[#1A332A]">
          What the label means
        </h2>

        {/* Description Paragraph */}
        <p className="mb-8 max-w-[920px] font-serif text-[15px] sm:text-[16.5px] leading-[26px] sm:leading-[28px] text-[#34322E]/90">
          The public account concerns institutional responsibilities, not a catalogue of property,
          private companies, collections or other assets. The relevant owner, operator and
          decision-maker are determined separately for each matter.
        </p>

        {/* 3-Row Breakdown Grid */}
        <div className="w-full border-t border-[#DDD6C8]">
          {labelRows.map((row) => (
            <div
              key={row.title}
              className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 border-b border-[#DDD6C8] items-baseline gap-2 md:gap-6"
            >
              <div className="md:col-span-3">
                <span className="font-serif text-[16px] sm:text-[17px] font-medium text-[#1A332A]">
                  {row.title}
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="font-serif text-[15px] sm:text-[16px] leading-[24px] text-[#34322E]/90">
                  {row.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
