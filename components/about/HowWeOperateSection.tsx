const principles = [
  {
    title: "Stewardship before spectacle",
    body: "The Office prioritizes durable outcomes, control and continuity over visibility.",
  },
  {
    title: "Clarity of authority",
    body: "Material decisions sit with named roles or bodies under documented mandates and reserved matters.",
  },
  {
    title: "Separation of purpose",
    body: "Commercial, investment, administrative and philanthropic activities are placed in structures appropriate to their purpose and are not casually commingled.",
  },
  {
    title: "Long-horizon discipline",
    body: "Decisions are tested against multi-generational objectives, liquidity needs and downside resilience — not only near-term opportunity.",
  },
  {
    title: "Professional execution",
    body: "The Office uses institutional processes, specialist expertise, reporting and independent challenge where appropriate.",
  },
  {
    title: "Privacy by design",
    body: "Information is disclosed on a need-to-know basis through controlled, authenticated channels.",
  },
  {
    title: "Trust with verification",
    body: "Important instructions, counterparties and changes to sensitive details are independently verified before action.",
  },
  {
    title: "Continuity by preparation",
    body: "Key-person dependencies, succession, records and decision rights are addressed in advance.",
  },
];

export function HowWeOperateSection() {
  return (
    <section
      id="how-we-operate"
      className="bg-[#1b2b23] py-16 lg:min-h-[924px] lg:py-[128px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
          <div className="lg:w-[464px] lg:shrink-0">
            <h2 className="font-serif text-[36px] leading-[44px] text-[#b89c63] lg:text-[48px] lg:leading-[48px]">
              How we operate
            </h2>
            <p className="mt-6 max-w-[384px] font-serif text-[24px] leading-[32px] text-[rgba(244,241,235,0.9)]">
              Institutional discipline over personal convention.
            </p>
            <p className="mt-8 max-w-[384px] font-serif text-[18px] leading-[29.25px] text-[rgba(244,241,235,0.6)]">
              The Office describes its operating model without publishing a
              staff directory: core functions remain close to the family where
              confidentiality, control, institutional memory or repeated
              judgement matter; specialist advisers and service providers are
              used where expertise, independence, jurisdictional capability or
              scale improve the outcome.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:min-w-0 lg:max-w-[720px] lg:flex-1 lg:grid-cols-2">
            {principles.map((p) => (
              <li
                key={p.title}
                className="border-t border-[rgba(244,241,235,0.2)] pt-6"
              >
                <h3 className="font-serif text-[20px] leading-[28px] text-[#b89c63]">
                  {p.title}
                </h3>
                <p className="mt-3 font-serif text-[16px] leading-[24px] text-[rgba(244,241,235,0.8)]">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
