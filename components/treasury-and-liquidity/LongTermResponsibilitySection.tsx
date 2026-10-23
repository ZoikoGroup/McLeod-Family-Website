import Link from "next/link";

const responsibilityAspects = [
  {
    title: "Timing",
    description: "Planning requires understanding when obligations may arise.",
  },
  {
    title: "Flexibility",
    description: "Maintaining optionality is a key component of capital stewardship.",
  },
  {
    title: "Accountability",
    description: "Responses align with the governing authority of the specific entity.",
  },
];

export function LongTermResponsibilitySection() {
  return (
    <section
      id="long-term-responsibility"
      aria-label="Liquidity within long-term responsibility"
      className="w-full pt-16 sm:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Liquidity within long-term responsibility
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1140px]">
          Liquidity is considered alongside longer-term family objectives and material obligations. The appropriate response depends on the responsibility, the relevant entity and the authority governing that decision. The website does not disclose the family’s cash positions, financing arrangements or payment timetable.
        </p>

        {/* 3 Rows List */}
        <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
          {responsibilityAspects.map((item) => (
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

        {/* Directional Link */}
        <div className="pt-6">
          <Link
            href="/our-activities/capital-and-investments"
            className="inline-flex items-center font-serif text-[17px] leading-[26.35px] text-[#23463A] transition-opacity hover:opacity-80"
          >
            Capital & Investments →
          </Link>
        </div>
      </div>
    </section>
  );
}
