import Link from "next/link";

const responsibilityCards = [
  {
    title: "Family governance",
    description:
      "Sets family purpose, reserved matters and ultimate stewardship direction.",
  },
  {
    title: "Family Office",
    description:
      "Coordinates strategy, capital, governance, risk, reporting and continuity within its mandate.",
  },
  {
    title: "Purpose-specific vehicles",
    description:
      "Hold or conduct distinct activities under their own legal and fiduciary requirements.",
  },
  {
    title: "Operating businesses",
    description:
      "Execute commercial strategy through their boards and executive teams.",
  },
  {
    title: "External advisers",
    description:
      "Provide specialist expertise, independent judgment or regulated services.",
  },
];

export function RightResponsibilitiesSection() {
  return (
    <section
      id="right-responsibilities"
      aria-label="Value is pursued within the right responsibilities"
      className="mt-24 w-full border-t border-[#d6d1c6] pt-6"
    >
      <h2 className="font-serif text-[32px] leading-[36px] lg:text-[40px] lg:leading-[44px] text-[#23463a] max-w-[839px]">
        Value is pursued within the right responsibilities.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
        Family direction, Office coordination, legal-entity duties, operating-company management and specialist advice are related but distinct. Decisions have to be attributable to the appropriate mandate and governing body. Long-term value therefore depends on defined authority, independent professional input where relevant, and review—not on the Office exercising every role.
      </p>

      <div className="mt-12 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {responsibilityCards.map((item) => (
          <div
            key={item.title}
            className="border-t border-[#d6d1c6] pt-6 pb-6"
          >
            <h3 className="font-serif text-[18px] leading-[23px] text-[#23463a]">
              {item.title}
            </h3>
            <p className="pt-3 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/governance"
          className="inline-flex items-center font-serif text-[17px] leading-[26.35px] text-[#23463a] hover:opacity-75 transition-opacity"
        >
          Understand Governance →
        </Link>
      </div>
    </section>
  );
}
