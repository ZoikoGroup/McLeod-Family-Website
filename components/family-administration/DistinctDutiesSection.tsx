import type { ReactNode } from "react";

interface DutyItem {
  title: string;
  body: ReactNode;
}

const dutyItems: DutyItem[] = [
  {
    title: "Family governance",
    body: (
      <>Establishes family purpose and reserved matters and delegates authority intentionally.</>
    ),
  },
  {
    title: "Family Office",
    body: (
      <>
        Coordinates capital, strategy, governance, risk, reporting and continuity within
        <br className="hidden lg:inline" /> documented mandates.
      </>
    ),
  },
  {
    title: "Purpose-specific vehicles",
    body: (
      <>Hold or conduct distinct activities subject to their own legal and fiduciary obligations.</>
    ),
  },
  {
    title: "Operating businesses",
    body: (
      <>Run their commercial activities through their own boards and executives.</>
    ),
  },
  {
    title: "External advisers",
    body: (
      <>Provide qualified or independent specialist inputs within their remit.</>
    ),
  },
];

export function DistinctDutiesSection() {
  return (
    <section
      id="distinct-duties"
      aria-label="One coordinating office. Distinct legal and operational duties."
      className="w-full"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        One coordinating office. Distinct legal and operational duties.
      </h2>

      <div className="pt-8">
        {dutyItems.map((item, index) => {
          const isLast = index === dutyItems.length - 1;
          return (
            <div
              key={item.title}
              className={`grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] items-start ${
                index > 0 ? "pt-8" : "pt-8"
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
