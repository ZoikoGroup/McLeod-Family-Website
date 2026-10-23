interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

const principleItems: PrincipleItem[] = [
  {
    number: "01",
    title: "Define remit",
    description:
      "Identify which mandate or legal arrangement governs the matter.",
  },
  {
    number: "02",
    title: "Identify responsible authority",
    description:
      "Separate Office coordination from entity/fiduciary decisions.",
  },
  {
    number: "03",
    title: "Use qualified expertise",
    description:
      "Obtain appropriate legal, fiduciary, tax or specialist input when necessary.",
  },
  {
    number: "04",
    title: "Preserve appropriate records",
    description:
      "Ensure suitable documentation and review within the responsible organization.",
  },
];

export function CoordinationPrincipleSection() {
  return (
    <section
      id="coordination-principle"
      aria-label="A disciplined coordination principle"
      className="w-full pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          A disciplined coordination principle.
        </h2>

        <div className="pt-8 max-w-[1000px] flex flex-col gap-8">
          {principleItems.map((item) => (
            <div
              key={item.number}
              className="border-b border-[#D6D1C6] pb-6 flex flex-row items-start gap-6"
            >
              <span className="font-serif text-[32px] leading-[32px] text-[#D3A75A] shrink-0 min-w-[32px]">
                {item.number}
              </span>
              <div className="flex flex-col">
                <h3 className="font-serif text-[20px] leading-[25px] text-[#23463A]">
                  {item.title}
                </h3>
                <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
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
