interface AccountabilityItem {
  title: string;
  description: string;
}

const accountabilityItems: AccountabilityItem[] = [
  {
    title: "Family governance",
    description:
      "Sets purpose, reserved matters and stewardship direction.",
  },
  {
    title: "Family Office",
    description:
      "Coordinates material obligations and adviser interfaces within authorized mandates.",
  },
  {
    title: "Purpose-specific vehicles",
    description:
      "Hold or conduct separate activities under their own legal framework.",
  },
  {
    title: "Operating businesses",
    description:
      "Boards/executives implement commercial and statutory responsibilities.",
  },
  {
    title: "External advisers",
    description:
      "Offer independent or specialist expertise as appropriate.",
  },
];

export function SeparateAccountabilitySection() {
  return (
    <section
      id="separate-accountability"
      aria-label="Different responsibilities. Separate accountability"
      className="w-full pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Different responsibilities. Separate accountability.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
          The public model below is explanatory. It is not a legal-ownership diagram, organization chart, family tree or operational delegation policy.
        </p>

        <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
          {accountabilityItems.map((item) => (
            <div
              key={item.title}
              className="border-b border-[#D6D1C6] pb-6 grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 items-start"
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
