interface RoleItem {
  title: string;
  description: string;
}

const roleItems: RoleItem[] = [
  {
    title: "Family governance",
    description:
      "Sets long-term direction and reserved matters; defines who may authorize a purpose.",
  },
  {
    title: "Family Office",
    description:
      "Coordinates within documented authority and supports accountability and continuity.",
  },
  {
    title: "Purpose-specific entity",
    description:
      "Holds its own duties if a philanthropic vehicle is confirmed.",
  },
  {
    title: "External advisers",
    description:
      "Provide subject-specific expertise under independent professional duties.",
  },
];

export function OversightRolesSection() {
  return (
    <section
      id="oversight-and-specialist-roles"
      aria-label="Oversight and specialist roles"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Oversight and specialist roles
        </h2>

        <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
          {roleItems.map((item) => (
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
