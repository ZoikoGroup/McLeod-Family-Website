export function PrincipleToPracticeSection() {
  const steps = [
    {
      title: "Define the purpose",
      description:
        "Understand which body or entity owns the relevant responsibility.",
    },
    {
      title: "Confirm appropriate authority",
      description:
        "Decisions should sit with a responsible role or governing body.",
    },
    {
      title: "Seek challenge where needed",
      description:
        "Consider specialist expertise, legal requirements and risk.",
    },
    {
      title: "Record and review",
      description:
        "Maintain proportionate accountability and continuity.",
    },
    {
      title: "Escalate exceptions",
      description:
        "Pause action when instructions conflict or source legitimacy is in doubt.",
    },
  ];

  return (
    <section aria-label="From Principle to Practice" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          From Principle to Practice
        </h2>

        {/* Subtitle Paragraph #374:3054 */}
        <div className="pt-6">
          <p className="font-serif text-[20px] leading-[29px] text-[#34322e] max-w-[800px]">
            Principles are meaningful when responsibility is clear.
          </p>
        </div>

        {/* Body Paragraph #374:3056 */}
        <div className="pt-6">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[920px]">
            <span className="block sm:whitespace-nowrap">
              Defined mandates, appropriate delegation, challenge and review help make institutional responsibilities
            </span>
            <span className="block sm:whitespace-nowrap">
              understandable and accountable. Where a specific authorization or legal status matters, counterparties should
            </span>
            <span className="block sm:whitespace-nowrap">
              verify it through the responsible entity and an independently obtained official channel, rather than relying on the
            </span>
            <span className="block sm:whitespace-nowrap">
              website or a received message.
            </span>
          </p>
        </div>

        {/* 5 Steps Container #374:3058 */}
        <div className="pt-8 max-w-[1000px] flex flex-col gap-8">
          {steps.map((item) => (
            <div
              key={item.title}
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 border-b border-[#d6d1c6] pb-6"
            >
              <h3 className="w-full md:w-[280px] shrink-0 font-serif text-[20px] leading-[25px] text-[#23463a]">
                {item.title}
              </h3>
              <p className="flex-1 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
