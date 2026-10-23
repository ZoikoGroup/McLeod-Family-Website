const authorityLayers = [
  {
    title: "Family governance",
    description: "Defines family purpose, reserved matters and direction of stewardship.",
  },
  {
    title: "Family Office",
    description: "Coordinates capital, governance, reporting and continuity within its mandate.",
  },
  {
    title: "Purpose-specific entities",
    description: "May hold distinct activity under their own legal requirements.",
  },
  {
    title: "Operating businesses",
    description: "Boards and management execute day-to-day business responsibilities.",
  },
  {
    title: "External advisers",
    description: "Provide independent/regulated expertise where appropriate.",
  },
];

export function DefinedAuthoritySection() {
  return (
    <section
      id="defined-authority"
      aria-label="Defined authority. Separate responsibilities."
      className="w-full pt-16 sm:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Defined authority. Separate responsibilities.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1165px]">
          The Family Office is a coordinating institutional layer. Separate vehicles are used for separate purposes, and operating businesses retain their own boards, executives and day-to-day management. A visitor must not infer that McLeod Family Office itself holds, transfers or directs all family funds.
        </p>

        {/* 5 Rows List */}
        <div className="pt-12 max-w-[1000px] flex flex-col gap-6">
          {authorityLayers.map((item) => (
            <div
              key={item.title}
              className="border-b border-[#D6D1C6] pb-6 grid grid-cols-1 md:grid-cols-[323px_1fr] gap-2 md:gap-8 items-baseline"
            >
              <h3 className="font-serif text-[20px] leading-[25px] sm:text-[22px] sm:leading-[27.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="font-serif text-[17px] leading-[26.35px] text-[#34322E]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
