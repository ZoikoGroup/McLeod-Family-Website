import Image from "next/image";

export function DistinctResponsibilitiesSection() {
  const responsibilities = [
    {
      title: "Family governance",
      description:
        "Sets family purpose, reserved matters and ultimate stewardship direction.",
    },
    {
      title: "Family Office",
      description:
        "Coordinates strategy, capital, governance, risk, reporting and continuity within mandate.",
    },
    {
      title: "Purpose-specific vehicles",
      description:
        "Hold or conduct distinct activities under their own legal and fiduciary requirements.",
    },
    {
      title: "Operating businesses",
      description:
        "Execute commercial strategy through their own boards and executive teams.",
    },
    {
      title: "External advisers",
      description:
        "Provide specialist expertise, independent judgment or regulated services.",
    },
  ];

  return (
    <section aria-label="Distinct Responsibilities" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Distinct responsibilities. Connected stewardship.
        </h2>

        {/* Paragraph:margin #374:3021 - padding: 24px 0px 0px, width: 800 */}
        <div className="pt-6">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[880px]">
            <span className="block sm:whitespace-nowrap">
              The public governance model separates family direction, institutional coordination, legal-entity accountability,
            </span>
            <span className="block sm:whitespace-nowrap">
              operational execution and specialist advice. It is not a legal ownership chart or proof of authority for any specific
            </span>
            <span className="block sm:whitespace-nowrap">
              transaction.
            </span>
          </p>
        </div>

        {/* 5 Rows List */}
        <div className="pt-12 max-w-[1000px] flex flex-col gap-6">
          {responsibilities.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6"
            >
              <h3 className="font-serif text-[22px] leading-[27.5px] text-[#23463a]">
                {item.title}
              </h3>
              <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image: Governance Process and Review */}
        <div className="mt-12 w-full overflow-hidden rounded-[2px]">
          <Image
            src="/images/our-governance-principles/governance-process-review.png"
            alt="Governance Process and Review"
            width={1184}
            height={416}
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
