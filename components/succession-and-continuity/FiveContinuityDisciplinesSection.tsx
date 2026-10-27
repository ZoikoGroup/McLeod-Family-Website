const DISCIPLINES = [
  {
    discipline: "DISCIPLINE 01",
    title: "Succession",
    descriptionLines: [
      "Leadership and ownership transitions are planned early and reviewed periodically across all family and office",
      "structures.",
    ],
  },
  {
    discipline: "DISCIPLINE 02",
    title: "Next-Generation Preparation",
    descriptionLines: [
      "Future stewards are prepared through education, exposure, responsibility, and governance participation appropriate",
      "to readiness.",
    ],
  },
  {
    discipline: "DISCIPLINE 03",
    title: "Institutional Memory",
    descriptionLines: [
      "Material decisions, mandates, policies, and records are documented so continuity does not depend on one person.",
    ],
  },
  {
    discipline: "DISCIPLINE 04",
    title: "Emergency Authority",
    descriptionLines: [
      "Critical functions have delegated authorities, escalation paths, and continuity arrangements for unexpected",
      "absence or disruption.",
    ],
  },
  {
    discipline: "DISCIPLINE 05",
    title: "Review Cadence",
    descriptionLines: [
      "Governance and succession arrangements are living systems and are revisited as family, enterprise, and",
      "jurisdictions evolve.",
    ],
  },
];

export function FiveContinuityDisciplinesSection() {
  return (
    <section aria-labelledby="disciplines-heading" className="w-full">
      <div className="max-w-[1216px]">
        <h2
          id="disciplines-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Five Disciplines That Support Continuity
        </h2>
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          Five source-established disciplines guiding leadership transitions, institutional knowledge, and operational resilience.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {DISCIPLINES.map((item) => (
          <div
            key={item.discipline}
            className="grid grid-cols-1 items-center gap-4 border border-[#D6D1C6] bg-[#FAF8F5] p-8 md:grid-cols-[280px_1fr] md:gap-8 md:p-[32px_40px]"
          >
            <div className="self-center">
              <p className="font-serif text-[20px] leading-8 text-[#C5A059]">
                {item.discipline}
              </p>
              <h3 className="pt-1 font-sans text-[18px] font-semibold leading-[28.8px] text-[#34322E]">
                {item.title}
              </h3>
            </div>
            <div className="max-w-[822px] self-center">
              <p className="font-sans text-[15px] leading-6 text-[#5A5752]">
                {item.descriptionLines.map((line, idx) => (
                  <span
                    key={idx}
                    className="block whitespace-normal lg:whitespace-nowrap"
                  >
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
