const LAYERS = [
  {
    layer: "LAYER 01",
    title: "Family Governance",
    descriptionLines: [
      "Sets long-term family purpose, reserved direction, and ultimate stewardship priorities. Authority originates with the family",
      "and delegates deliberately.",
    ],
  },
  {
    layer: "LAYER 02",
    title: "Family Office",
    descriptionLines: [
      "Coordinates capital, enterprise interests, governance, reporting, risk, and continuity within its authorized mandate.",
    ],
  },
  {
    layer: "LAYER 03",
    title: "Purpose-Specific Vehicles",
    descriptionLines: [
      "Carry distinct legal, ownership, or fiduciary responsibilities appropriate to their purpose and constitutional terms.",
    ],
  },
  {
    layer: "LAYER 04",
    title: "Operating Businesses",
    descriptionLines: [
      "Retain their own boards, executives, and day-to-day management. Ownership stewardship is distinct from executive",
      "management.",
    ],
  },
  {
    layer: "LAYER 05",
    title: "External Advisers",
    descriptionLines: [
      "Provide relevant specialist expertise or independent challenge where appropriate, without replacing entity accountability.",
    ],
  },
];

export function SeparateAuthorityCoordinatedStewardshipSection() {
  return (
    <section id="governance-framework" aria-labelledby="separate-authority-heading" className="w-full">
      <div className="max-w-[1216px]">
        <h2
          id="separate-authority-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Separate Authority. Coordinated Stewardship
        </h2>
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          Institutional oversight maintains clear boundaries between direction, office coordination, legal entities, enterprise boards, and advisers.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {LAYERS.map((item) => (
          <div
            key={item.layer}
            className="grid grid-cols-1 items-center gap-4 border border-[#D6D1C6] bg-[#FAF8F5] p-7 md:grid-cols-[240px_1fr] md:gap-6 md:p-[28px_36px]"
          >
            <div className="self-center">
              <p className="font-serif text-[18px] leading-[28.8px] text-[#C5A059]">
                {item.layer}
              </p>
              <h3 className="pt-1 font-sans text-[17px] font-semibold leading-[27.2px] text-[#34322E]">
                {item.title}
              </h3>
            </div>
            <div className="max-w-[878px] self-center">
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
