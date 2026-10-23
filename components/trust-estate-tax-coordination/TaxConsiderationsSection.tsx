interface TaxItem {
  title: string;
  description: string;
}

const taxItems: TaxItem[] = [
  {
    title: "Jurisdiction",
    description:
      "Tax responsibilities can differ with entity purpose and relevant law.",
  },
  {
    title: "Entity duties",
    description:
      "Each entity remains subject to its own applicable obligations.",
  },
  {
    title: "Qualified advice",
    description:
      "Specialist advisers may be engaged when expertise, regulation or independence warrants.",
  },
  {
    title: "Records",
    description:
      "Appropriate records and reporting support accountability.",
  },
  {
    title: "Review",
    description:
      "Changes in circumstances or law can require professional reassessment.",
  },
];

export function TaxConsiderationsSection() {
  return (
    <section
      id="tax-considerations"
      aria-label="Tax considerations belong within accountable structures"
      className="w-full pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Tax considerations belong within accountable structures.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
          Legal, tax and regulatory considerations form part of the Office’s broader risk and coordination perimeter. The responsible entities and their qualified advisers determine applicable filing, reporting, interpretation and compliance requirements; public material does not describe private positions or promise tax outcomes.
        </p>

        <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
          {taxItems.map((item) => (
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
