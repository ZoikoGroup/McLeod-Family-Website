import React from "react";

export function DifferentResponsibilitiesSection() {
  const responsibilities = [
    {
      title: "Family governance",
      line1: "Sets family purpose, reserved matters and the ultimate direction of stewardship.",
      line2: "Authority originates with family; no names, councils, charters or votes disclosed.",
    },
    {
      title: "Family Office",
      line1: "Coordinates strategy, capital, governance, risk, reporting and continuity within its",
      line2: "mandate. Does not automatically legally own or bind every related entity.",
    },
    {
      title: "Purpose-specific vehicles",
      line1: "Hold or conduct distinct activities under their own legal and fiduciary requirements. Do",
      line2: "not imply currently active trusts, charities or undisclosed structures.",
    },
    {
      title: "Operating businesses",
      line1: "Execute commercial strategy through their boards and executive teams. No claim the",
      line2: "Office is day-to-day executive management.",
    },
    {
      title: "External advisers",
      line1: "Provide specialist expertise, independent judgment or regulated services. No named",
      line2: "providers, regulatory license claims or transfer of accountability.",
    },
  ];

  return (
    <section aria-labelledby="different-responsibilities-title" className="w-full border-t border-[#D6D1C6] pt-24">
      {/* Heading 2 */}
      <h2
        id="different-responsibilities-title"
        className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]"
      >
        Different responsibilities. Separate accountability.
      </h2>

      {/* Paragraph: 3 exact lines matching Figma */}
      <div className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
        <p className="block">
          The public governance model separates family direction, institutional coordination, legal-entity accountability,
        </p>
        <p className="block">
          operational execution and specialist advice. It is not a legal ownership chart or proof of authority for any
        </p>
        <p className="block">
          specific transaction.
        </p>
      </div>

      {/* 5 Rows: each exactly 2 lines matching Figma */}
      <div className="pt-12 flex flex-col gap-6">
        {responsibilities.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 md:grid-cols-[322.66px_645.34px] gap-4 md:gap-8 border-b border-[#D6D1C6] pb-6"
          >
            <h3 className="font-serif text-[20px] leading-[25px] sm:text-[22px] sm:leading-[27.5px] text-[#23463A]">
              {item.title}
            </h3>
            <div className="font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[646px]">
              <span className="block">{item.line1}</span>
              <span className="block">{item.line2}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
