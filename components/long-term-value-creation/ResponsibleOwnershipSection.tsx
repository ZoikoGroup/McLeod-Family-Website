const enterprisePoints = [
  {
    title: "Owner-level purpose",
    description: "What enduring responsibility requires beyond near-term visibility.",
  },
  {
    title: "Board discipline",
    description: "Recognition of delegated roles, governance and proper challenge.",
  },
  {
    title: "Strategic oversight",
    description: "Purpose, resilience and future capability at an owner-level.",
  },
  {
    title: "Clear reporting",
    description: "Information supports accountability over time.",
  },
];

export function ResponsibleOwnershipSection() {
  return (
    <section
      id="enterprise-value-responsible-ownership"
      aria-label="Enterprise value begins with responsible ownership"
      className="mt-24 w-full border-t border-[#d6d1c6] pt-6"
    >
      <h2 className="font-serif text-[32px] leading-[36px] lg:text-[40px] lg:leading-[44px] text-[#23463a] max-w-[885px]">
        Enterprise value begins with responsible ownership.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
        Long-term enterprise attention concerns ownership purpose, board discipline, strategic oversight and dependable reporting. Operating businesses retain their own boards, executives and day-to-day management; the Office’s role is not to replace their legal or operational responsibilities.
      </p>

      <div className="mt-12 max-w-[1000px] space-y-6">
        {enterprisePoints.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-2 md:gap-8 border-b border-[#d6d1c6] pb-6"
          >
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              {item.title}
            </h3>
            <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
