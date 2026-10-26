export function IntegrityResponsibilitySection() {
  const rows = [
    {
      title: "Family governance",
      description: "Purpose, reserved direction and stewardship expectations.",
    },
    {
      title: "Family Office",
      description:
        "Coordinates governance, risk, administration, strategy and reporting within its mandate.",
    },
    {
      title: "Purpose-specific vehicles",
      description: "Hold responsibilities for their designated entity purposes.",
    },
    {
      title: "Operating businesses",
      description:
        "Boards and executives manage operating responsibilities and business decisions.",
    },
    {
      title: "External advisers",
      description:
        "Provide specialist expertise/independent challenge under appropriate engagement.",
    },
  ];

  return (
    <section aria-label="Integrity Depends on Clear Responsibility" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Integrity depends on clear responsibility.
        </h2>

        {/* Paragraph */}
        <div className="pt-6">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[880px]">
            Family governance defines long-term direction and reserved responsibilities. The Office coordinates within its
            <br className="hidden lg:inline" />{" "}
            mandate; legal entities and operating businesses hold responsibilities appropriate to their structure. Specialist
            <br className="hidden lg:inline" />{" "}
            advisers support defined assignments without replacing accountable decision-making.
          </p>
        </div>

        {/* 5 Rows */}
        <div className="pt-12 max-w-[1000px] flex flex-col gap-6">
          {rows.map((row) => (
            <div
              key={row.title}
              className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6"
            >
              <h3 className="font-serif text-[22px] leading-[27.5px] text-[#23463a]">
                {row.title}
              </h3>
              <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e]">
                {row.description}
              </p>
            </div>
          ))}

          {/* 6th Row: Preserve institutional memory */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6 pt-2">
            <h3 className="font-serif text-[22px] leading-[27.5px] text-[#23463a]">
              Preserve institutional memory
            </h3>
            <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              Documented decisions, appropriate reporting and continuity arrangements reduce dependence on any single person.
              The public website does not disclose those private records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
