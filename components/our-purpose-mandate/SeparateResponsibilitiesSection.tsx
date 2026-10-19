const LAYERS: { eyebrow: string; title: string; text: string; highlight?: boolean }[] = [
  {
    eyebrow: "Family Governance",
    title: "Direction & Values",
    text: "Defines family purpose, multi-generational vision, and ultimate stewardship goals.",
  },
  {
    eyebrow: "McLeod Family Office",
    title: "Coordination & Mandate",
    text: "Coordinates strategy, capital oversight, risk, continuity, and administration.",
    highlight: true,
  },
  {
    eyebrow: "Purpose Vehicles",
    title: "Legal Asset Holding",
    text: "Distinct legal structures conducting specific holding or administrative tasks.",
  },
  {
    eyebrow: "Operating Businesses",
    title: "Commercial Execution",
    text: "Independent corporate boards and executive management driving commercial strategy.",
  },
  {
    eyebrow: "External Advisers",
    title: "Specialist Expertise",
    text: "Independent legal, audit, regulatory, and technical advisory partners.",
  },
];

export function SeparateResponsibilitiesSection() {
  return (
    <section
      id="separate-responsibilities"
      className="mx-auto w-full max-w-[1280px] px-6 pt-20 lg:px-8 lg:pt-28"
    >
      <div className="border-t border-swirl pt-20 lg:pt-24">
        <div className="max-w-[768px]">
          <h2 className="font-serif text-[30px] leading-9 text-dune lg:text-4xl lg:leading-10">
            Working Across Separate Responsibilities
          </h2>
          <p className="pt-4 text-base leading-6 text-[#57534e]">
            The Office coordinates within defined mandates. The legal entities and operating
            businesses involved in family activities retain their own distinct responsibilities,
            decision-making processes, and governance.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 lg:grid-cols-5">
          {LAYERS.map((layer, i) => (
            <li
              key={layer.eyebrow}
              aria-current={layer.highlight ? "true" : undefined}
              className={`rounded-lg border p-5 ${
                layer.highlight
                  ? "border-te-papa-green bg-te-papa-green shadow-lg"
                  : "border-swirl bg-sisal/60"
              }`}
            >
              <p
                className={`text-xs font-semibold leading-4 tracking-wide uppercase ${
                  layer.highlight ? "text-twine" : "text-te-papa-green"
                }`}
              >
                {String(i + 1).padStart(2, "0")}. {layer.eyebrow}
              </p>
              <h3
                className={`pt-2 font-serif text-xl leading-7 ${
                  layer.highlight ? "text-white" : "text-dune"
                }`}
              >
                {layer.title}
              </h3>
              <p
                className={`pt-3 text-xs leading-5 ${
                  layer.highlight ? "text-[#e5e7eb]" : "text-[#57534e]"
                }`}
              >
                {layer.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
