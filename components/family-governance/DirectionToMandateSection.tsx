import React from "react";

export function DirectionToMandateSection() {
  const steps = [
    {
      step: "01",
      title: "Establish purpose",
      line1: "Long-term objectives and matters requiring family-level direction are considered within family governance.",
      line2: "Not a public decision forum.",
    },
    {
      step: "02",
      title: "Define mandate",
      line1: "The Office receives responsibilities within a documented scope rather than an unlimited family-wide",
      line2: "authority. A mandate is not inferred from the brand name.",
    },
    {
      step: "03",
      title: "Respect each entity",
      line1: "Relevant legal entities and their governing bodies make and execute decisions under their own requirements.",
      line2: "No automatic company signature authority.",
    },
    {
      step: "04",
      title: "Review and maintain",
      line1: "Appropriate records, reporting, challenge and continuity review support accountability over time. Do not",
      line2: "imply a specified cadence has been verified or audited.",
    },
  ];

  return (
    <section aria-labelledby="direction-to-mandate-title" className="w-full border-t border-[#D6D1C6] pt-24">
      {/* Heading 2 */}
      <h2
        id="direction-to-mandate-title"
        className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]"
      >
        From direction to mandate
      </h2>

      {/* Paragraph */}
      <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
        The transition from broad family direction to executed operations requires clear lines of responsibility.
      </p>

      {/* 4 Steps */}
      <div className="pt-12 flex flex-col gap-8 max-w-[900px]">
        {steps.map((item) => (
          <div
            key={item.step}
            className="flex items-start gap-8 border-b border-[#D6D1C6] pb-6"
          >
            <span className="font-serif text-[24px] leading-[30px] text-[#D3A75A] shrink-0">
              {item.step}
            </span>
            <div className="max-w-[800px]">
              <h3 className="font-serif text-[20px] leading-[25px] text-[#23463A]">
                {item.title}
              </h3>
              <div className="pt-2 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E]">
                <span className="block">{item.line1}</span>
                <span className="block">{item.line2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
