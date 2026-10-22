import type { ReactNode } from "react";

interface RecordItem {
  title: string;
  body: ReactNode;
}

const recordItems: RecordItem[] = [
  {
    title: "Decision context",
    body: (
      <>Decisions and relevant authority should be documented within their proper mandate.</>
    ),
  },
  {
    title: "Continuity",
    body: (
      <>
        Appropriate records support handover, resilience and avoidance of single-person
        <br className="hidden lg:inline" /> dependency.
      </>
    ),
  },
  {
    title: "Access",
    body: (
      <>Sensitive information belongs with authorized parties through approved channels.</>
    ),
  },
];

export function RecordsContinuitySection() {
  return (
    <section
      id="records-preserve-continuity"
      aria-label="Records preserve continuity—not public visibility"
      className="w-full"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Records preserve continuity—not public visibility.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[890px]">
        Clear records help the responsible parties understand the basis for decisions, retain institutional knowledge
        <br className="hidden lg:inline" /> and prepare for transitions. The nature of each record and its access arrangements depend on the activity,
        <br className="hidden lg:inline" /> entity and applicable obligations. Private records are not displayed or requested through this website.
      </p>

      <div className="pt-12">
        {recordItems.map((item, index) => {
          const isLast = index === recordItems.length - 1;
          return (
            <div
              key={item.title}
              className={`grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] items-start ${
                index > 0 ? "pt-8" : "pt-2"
              } ${!isLast ? "border-b border-[#D6D1C6] pb-8" : "pb-4"}`}
            >
              <h3 className="font-serif text-[22px] leading-[27.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="pt-2 md:pt-0 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
