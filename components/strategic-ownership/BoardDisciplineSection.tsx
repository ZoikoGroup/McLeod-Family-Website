interface DisciplineItem {
  title: string;
  description: string;
}

const disciplineItems: DisciplineItem[] = [
  {
    title: "Operating-company board",
    description:
      "Oversees and governs the company within its own legal and governing responsibilities.",
  },
  {
    title: "Operating-company executives",
    description:
      "Manage operations and implement company strategy.",
  },
  {
    title: "Family governance",
    description:
      "Sets ownership purpose and reserves matters where applicable.",
  },
  {
    title: "McLeod Family Office",
    description:
      "Coordinates owner-level stewardship responsibilities within defined mandate.",
  },
];

export function BoardDisciplineSection() {
  return (
    <section
      id="board-discipline"
      aria-label="Board discipline preserves accountability"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          02. Board discipline preserves accountability.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1184px]">
          The Office may support ownership-level dialogue and information flow, while operating-company boards and executives remain responsible for governance and day-to-day business decisions under their own mandates. Appropriate oversight should not be confused with direct operational management.
        </p>

        <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
          {disciplineItems.map((item) => (
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
