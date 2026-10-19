const RESPONSIBILITIES: { title: string; subtitle: string; text: string; tag: string }[] = [
  {
    title: "Enterprise",
    subtitle: "Ownership Oversight",
    text: "The Office supports the long-term stewardship of family enterprise interests through ownership principles, board discipline, strategic oversight, and clear reporting. Operating companies retain their own boards, executives, and day-to-day management.",
    tag: "Strategic Alignment & Board Governance",
  },
  {
    title: "Capital",
    subtitle: "Long-Horizon Discipline",
    text: "Family capital is considered on a long horizon, with deliberate attention to liquidity, concentration, resilience, risk, and compounding across market cycles. Detailed allocations and performance remain strictly private.",
    tag: "Multi-Generational Liquidity & Risk Awareness",
  },
  {
    title: "Governance",
    subtitle: "Authority & Decision Rights",
    text: "Decision rights, reserved matters, delegations, and internal controls are formally documented so that authority is explicit rather than assumed across all operations.",
    tag: "Documented Decision Rights & Reserved Matters",
  },
  {
    title: "Continuity",
    subtitle: "Generational Succession",
    text: "Succession, transfer of responsibility, institutional memory, and next-generation preparation are addressed methodically long before transitions become urgent.",
    tag: "Institutional Memory & Next-Gen Readiness",
  },
  {
    title: "Risk & Resilience",
    subtitle: "Preventive Protection",
    text: "The Office coordinates financial, operational, legal, cyber, reputational, and continuity risks through preventive controls, independent challenge, and tested response protocols.",
    tag: "Operational Controls & Independent Challenge",
  },
  {
    title: "Administration & Coordination",
    subtitle: "Operational Integration",
    text: "The Office provides the institutional coordination needed across entities, advisers, reporting, records, and material family-office obligations, while separating activities by purpose.",
    tag: "Recordkeeping & Entity Coordination",
  },
];

export function StewardResponsibilitiesSection() {
  return (
    <section
      id="what-we-steward"
      className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-6 pt-20 lg:px-8 lg:pt-28"
    >
      <div className="max-w-[768px]">
        <h2 className="font-serif text-[30px] leading-9 text-dune lg:text-4xl lg:leading-10">
          What We Steward
        </h2>
        <p className="pt-4 text-base leading-6 text-[#57534e]">
          The Office fulfills six public responsibilities derived from the approved institutional
          framework. Each row represents a distinct area of stewardship coordinated across
          generations.
        </p>
      </div>

      <ol className="flex flex-col gap-6 pt-12">
        {RESPONSIBILITIES.map((item, i) => (
          <li
            key={item.title}
            className="grid grid-cols-1 gap-3 rounded-lg border border-swirl bg-sisal/40 p-6 lg:grid-cols-[98px_minmax(0,1fr)_minmax(0,661px)] lg:gap-0 lg:p-8"
          >
            <span aria-hidden="true" className="font-serif text-2xl leading-8 text-twine">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="lg:pr-6">
              <h3 className="font-serif text-2xl leading-8 text-dune">{item.title}</h3>
              <p className="pt-1 text-xs font-medium leading-4 tracking-wide text-[#57534e] uppercase">
                {item.subtitle}
              </p>
            </div>
            <div>
              <p className="text-sm leading-6 text-[#57534e]">{item.text}</p>
              <p className="pt-3 text-xs font-semibold leading-4 text-twine">{item.tag}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
