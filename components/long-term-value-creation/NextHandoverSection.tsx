const handoverPoints = [
  {
    title: "Succession",
    description:
      "Leadership and ownership transitions are planned early and reviewed periodically.",
  },
  {
    title: "Next-generation preparation",
    description:
      "Future stewards are prepared through education, exposure, responsibility and governance participation appropriate to readiness.",
  },
  {
    title: "Institutional memory",
    description:
      "Material decisions, mandates, policies and records are documented so continuity does not depend on one person.",
  },
  {
    title: "Emergency authority",
    description:
      "Critical functions have delegated authorities, escalation paths and continuity arrangements for unexpected absence or disruption.",
  },
  {
    title: "Review cadence",
    description:
      "Governance and succession arrangements are living systems and are revisited as family, enterprise and jurisdictions evolve.",
  },
];

export function NextHandoverSection() {
  return (
    <section
      id="responsible-horizon-next-handover"
      aria-label="A responsible horizon includes the next handover"
      className="mt-24 w-full border-t border-[#d6d1c6] pt-6"
    >
      <h2 className="font-serif text-[32px] leading-[36px] lg:text-[40px] lg:leading-[44px] text-[#23463a] max-w-[857px]">
        A responsible horizon includes the next handover.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
        Durability depends on more than asset decisions. Leadership transition, transfer of responsibilities, institutional memory, next-generation preparation, delegated emergency authority and the practice of review help an institution remain intelligible through change. Public descriptions do not disclose individual family plans or private arrangements.
      </p>

      <div className="mt-12 max-w-[1000px] space-y-6">
        {handoverPoints.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-2 md:gap-8 border-b border-[#d6d1c6] pb-6"
          >
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              {item.title}
            </h3>
            <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
