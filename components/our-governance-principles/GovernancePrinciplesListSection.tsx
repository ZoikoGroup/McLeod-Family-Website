export function GovernancePrinciplesListSection() {
  const principles = [
    {
      number: "01",
      title: "Clarity of authority",
      description:
        "Material decisions sit with roles or bodies acting under documented mandates, reserved matters and appropriate delegations. Authority should be evidenced rather than assumed.",
    },
    {
      number: "02",
      title: "Separation of purpose",
      description:
        "Commercial, capital, administrative and any separately authorized philanthropic activities are kept within structures appropriate to their purpose and legal requirements.",
    },
    {
      number: "03",
      title: "Long-horizon discipline",
      description:
        "Decisions are considered against intergenerational responsibilities, liquidity, resilience and downside risk, not only immediate opportunity.",
    },
    {
      number: "04",
      title: "Independent expertise and challenge",
      description:
        "Specialists may contribute independent judgment where expertise, regulation, jurisdictional need or scale makes that appropriate; accountability remains with the relevant decision-maker.",
    },
    {
      number: "05",
      title: "Confidentiality by design",
      description:
        "Information is shared with identified parties on an appropriate need-to-know basis through established channels.",
    },
    {
      number: "06",
      title: "Verification before action",
      description:
        "Material communications and changes to sensitive details are checked through independently sourced official channels.",
    },
    {
      number: "07",
      title: "Continuity through preparation",
      description:
        "Decision rights, important records, succession pathways and escalation arrangements are addressed before urgent transitions.",
    },
  ];

  return (
    <section aria-label="Our Governance Principles" className="w-full">
      {/* Heading 2 */}
      <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
        Our Governance Principles
      </h2>

      {/* 7 Principles List */}
      <div className="pt-12 max-w-[900px] flex flex-col gap-8">
        {principles.map((p) => (
          <div
            key={p.number}
            className="flex items-start gap-8 border-b border-[#d6d1c6] pb-6"
          >
            <span className="font-serif text-[24px] leading-[30px] text-[#d3a75a] w-10 flex-shrink-0">
              {p.number}
            </span>
            <div className="flex-1">
              <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
                {p.title}
              </h3>
              <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
