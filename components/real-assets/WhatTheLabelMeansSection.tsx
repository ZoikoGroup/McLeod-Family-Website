interface LabelPillar {
  title: string;
  description: string;
}

const LABEL_PILLARS: LabelPillar[] = [
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

export default function WhatTheLabelMeansSection() {
  return (
    <section
      id="what-the-label-means"
      aria-label="What the label means"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Heading & Intro */}
        <div className="mb-12">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a] mb-4">
            What the label means
          </h2>
          <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85 max-w-[760px]">
            The public account concerns institutional responsibilities, not a
            catalogue of property, private companies, collections or other
            assets. The relevant owner, operator and decision-maker are
            determined separately for each matter.
          </p>
        </div>

        {/* Rows List */}
        <div className="max-w-[1040px] divide-y divide-[#e5e0d5] border-b border-[#e5e0d5]">
          {LABEL_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <h3 className="font-serif text-[18px] leading-[25px] text-[#23463a]">
                  {pillar.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
