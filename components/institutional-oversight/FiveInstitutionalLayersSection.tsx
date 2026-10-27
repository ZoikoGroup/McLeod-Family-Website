import React from "react";

const LAYERS = [
  {
    layer: "LAYER 01",
    title: "Family Governance",
    line1: "Sets family purpose, reserved matters, and the ultimate direction of stewardship. Authority originates with the",
    line2: "family and is delegated deliberately under documented mandates.",
  },
  {
    layer: "LAYER 02",
    title: "Family Office",
    line1: "Coordinates strategy, capital, governance, risk, reporting, and continuity under defined mandates. Operates",
    line2: "exclusively within documented controls and does not offer public financial services.",
  },
  {
    layer: "LAYER 03",
    title: "Purpose-Specific Vehicles",
    line1: "Hold or conduct distinct activities under their own legal and fiduciary requirements. Separate legal structures are",
    line2: "maintained to preserve fiduciary clarity.",
  },
  {
    layer: "LAYER 04",
    title: "Operating Businesses",
    line1: "Execute commercial strategy through their respective boards and executive teams. Ownership-level stewardship is",
    line2: "distinct from day-to-day executive management.",
  },
  {
    layer: "LAYER 05",
    title: "External Advisers",
    line1: "Provide specialist expertise, independent judgment, or regulated services where appropriate. External advice",
    line2: "strengthens execution, but ultimate mandate accountability is not outsourced.",
  },
];

export function FiveInstitutionalLayersSection() {
  return (
    <section id="decision-rights" aria-labelledby="layers-heading" className="w-full">
      <div className="max-w-[960px]">
        <h2
          id="layers-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Five Institutional Layers
        </h2>
        {/* Subtitle: exactly 2 lines matching Figma */}
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            Clear separation of purpose, coordination, legal entities, commercial execution, and professional
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            advice.
          </span>
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {LAYERS.map((item) => (
          <div
            key={item.layer}
            className="grid grid-cols-1 items-start gap-4 border border-[#D6D1C6] bg-[#FAF8F5] p-8 md:grid-cols-[280px_1fr] md:gap-8 md:p-[32px_40px]"
          >
            <div>
              <p className="font-serif text-[20px] leading-8 text-[#C5A059]">
                {item.layer}
              </p>
              <h3 className="pt-1 font-sans text-[18px] font-semibold leading-[28.8px] text-[#34322E]">
                {item.title}
              </h3>
            </div>
            <div className="max-w-[822px]">
              <div className="font-sans text-[15px] leading-6 text-[#5A5752]">
                <span className="block whitespace-normal lg:whitespace-nowrap">{item.line1}</span>
                <span className="block whitespace-normal lg:whitespace-nowrap">{item.line2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
