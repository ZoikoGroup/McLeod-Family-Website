interface ResponsibilityItem {
  number: string;
  title: string;
  description: string;
}

const RESPONSIBILITIES: ResponsibilityItem[] = [
  {
    number: "01",
    title: "Family Purpose",
    description:
      "Direction and reserved matters are considered within family governance.",
  },
  {
    number: "02",
    title: "Office Coordination",
    description:
      "The Family Office coordinates responsibilities within defined mandates; it does not automatically own or manage assets.",
  },
  {
    number: "03",
    title: "Specific Legal Entity",
    description:
      "Each purpose-specific vehicle operates under its own legal and fiduciary requirements.",
  },
  {
    number: "04",
    title: "Operators",
    description:
      "Operating businesses and assets execute commercial strategy through their own boards and executive teams.",
  },
  {
    number: "05",
    title: "Advisers",
    description:
      "External advisers provide specialist expertise and independent challenge under appropriate engagement.",
  },
];

export default function SeparateResponsibilitiesSection() {
  return (
    <section
      id="separate-responsibilities"
      aria-label="Separate Responsibilities"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Top Divider & Header */}
        <div className="border-t border-[#e5e0d5] pt-12 mb-12">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a] mb-4">
            Separate Responsibilities
          </h2>
          <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85 max-w-[760px]">
            The Family Office may coordinate within an authorized remit. Legal
            owners, entity boards, operators and specialist advisers retain the
            responsibilities applicable to them.
          </p>
        </div>

        {/* Numbered Rows List */}
        <div className="max-w-[960px] divide-y divide-[#e5e0d5] border-b border-[#e5e0d5]">
          {RESPONSIBILITIES.map((item) => (
            <div
              key={item.number}
              className="flex flex-col gap-2 py-7 sm:flex-row sm:items-start sm:gap-12"
            >
              <span className="font-serif text-[14px] leading-[24px] tracking-[0.05em] text-[#d3a75a] shrink-0 pt-0.5">
                {item.number}
              </span>
              <div>
                <h3 className="font-serif text-[19px] leading-[26px] text-[#23463a] mb-1.5">
                  {item.title}
                </h3>
                <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
