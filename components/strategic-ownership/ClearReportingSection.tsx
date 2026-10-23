interface ReportingItem {
  title: string;
  description: string;
}

const reportingItems: ReportingItem[] = [
  {
    title: "Defined audience",
    description:
      "Information should be received by the roles entitled to consider it.",
  },
  {
    title: "Clear context",
    description:
      "Material matters are summarized in language appropriate to the decision.",
  },
  {
    title: "Accountable sources",
    description:
      "Information should originate from the responsible entity/owner.",
  },
  {
    title: "Review and escalation",
    description:
      "The right governing body assesses matters requiring formal action.",
  },
];

export function ClearReportingSection() {
  return (
    <section
      id="clear-reporting"
      aria-label="Clear reporting supports responsible oversight"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          04. Clear reporting supports responsible oversight.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1190px]">
          Relevant information should reach authorized decision-makers in an understandable and timely manner, under reporting arrangements appropriate to the enterprise and its governing structure. The Office may support coordination of those information flows within its remit.
        </p>

        <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
          {reportingItems.map((item) => (
            <div
              key={item.title}
              className="border-b border-[#D6D1C6] pb-6 grid grid-cols-1 md:grid-cols-[323px_1fr] gap-2 md:gap-8 items-start"
            >
              <h3 className="font-serif text-[22px] leading-[27.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[645px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
