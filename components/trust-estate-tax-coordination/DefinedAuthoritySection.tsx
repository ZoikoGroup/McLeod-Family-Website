interface AuthorityItem {
  title: string;
  description: string;
}

const authorityItems: AuthorityItem[] = [
  {
    title: 'What "trust" means on this page',
    description:
      "A matter requiring distinct legal authority and stewardship, not a product or public service.",
  },
  {
    title: "Duty distinction",
    description:
      "Appointment, advice, oversight, record coordination and decision authority are different functions.",
  },
  {
    title: "Specialist boundary",
    description:
      "Legal/fiduciary interpretation belongs to authorized responsible persons and professional advisers.",
  },
];

export function DefinedAuthoritySection() {
  return (
    <section
      id="defined-authority"
      aria-label="Trust and fiduciary matters require defined authority"
      className="w-full pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Trust and fiduciary matters require defined authority.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
          Where a legal arrangement establishes fiduciary responsibilities, the relevant appointment, governing documents and applicable law determine who may act. Family Office coordination does not itself create trustee powers or replace the duties of a legally appointed fiduciary.
        </p>

        <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
          {authorityItems.map((item) => (
            <div
              key={item.title}
              className="border-b border-[#D6D1C6] pb-6 grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 items-start"
            >
              <h3 className="font-serif text-[22px] leading-[27.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[646px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
