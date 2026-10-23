interface StewardshipItem {
  title: string;
  description: string;
}

const stewardshipItems: StewardshipItem[] = [
  {
    title: "Preparation before transition",
    description:
      "Succession and transfer of responsibility are addressed before transitions become urgent.",
  },
  {
    title: "Institutional memory",
    description:
      "Material decisions, mandates and records are documented so continuity does not depend on one individual.",
  },
  {
    title: "Future stewardship",
    description:
      "Next-generation preparation is a responsibility of readiness, education and governance participation.",
  },
];

export function PreparedStewardshipSection() {
  return (
    <section
      id="legacy-through-prepared-stewardship"
      aria-label="Legacy through prepared stewardship"
      className="w-full"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Legacy through prepared stewardship
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
        Continuity is built through prepared stewardship: clear decision rights, records that preserve institutional memory, and the transfer of responsibility before transitions become urgent. Long-term outcomes depend on defined accountability rather than public visibility.
      </p>

      <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
        {stewardshipItems.map((item) => (
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
    </section>
  );
}
