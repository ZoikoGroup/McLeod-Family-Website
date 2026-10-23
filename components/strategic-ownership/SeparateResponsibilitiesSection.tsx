interface ResponsibilityItem {
  title: string;
  description: string;
}

const responsibilityItems: ResponsibilityItem[] = [
  {
    title: "Family governance",
    description:
      "Sets family purpose and the direction of stewardship; delegates deliberately.",
  },
  {
    title: "Family Office",
    description:
      "Coordinates long-horizon enterprise interests, governance and reporting within a defined mandate.",
  },
  {
    title: "Purpose-specific vehicles",
    description:
      "May hold or conduct distinct activities within their own legal/fiduciary framework.",
  },
  {
    title: "Operating businesses",
    description:
      "Execute strategy through their boards and executives.",
  },
  {
    title: "External advisers",
    description:
      "Provide specialist expertise or independent challenge as appropriate.",
  },
];

export function SeparateResponsibilitiesSection() {
  return (
    <section
      id="separate-responsibilities"
      aria-label="Separate responsibilities remain separate"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Separate responsibilities remain separate.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1160px]">
          Enterprise ownership-level coordination may involve family governance, the Family Office, purpose-specific vehicles, operating businesses and specialist advisers. The relationship is described by role, not depicted as an ownership hierarchy or an exhaustive legal group chart.
        </p>

        <div className="pt-12 max-w-[1000px] flex flex-col gap-6">
          {responsibilityItems.map((item) => (
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
