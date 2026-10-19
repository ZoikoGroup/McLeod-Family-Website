const PRINCIPLES: { title: string; text: string }[] = [
  {
    title: "Clarity of Authority",
    text: "Material decisions sit with named roles or governing bodies under documented mandates and explicit reserved matters.",
  },
  {
    title: "Separation of Purpose",
    text: "Commercial, investment, administrative, and philanthropic activities are maintained in legal structures suited to their specific purpose.",
  },
  {
    title: "Long-Horizon Discipline",
    text: "Decisions are evaluated against multi-generational objectives, liquidity safeguards, and downside resilience rather than short-term gains.",
  },
  {
    title: "Professional Execution",
    text: "The Office uses institutional processes and independent specialist expertise where oversight, regulation, or scale requires it.",
  },
  {
    title: "Privacy by Design",
    text: "Sensitive operational and identity information is protected and disclosed strictly on a need-to-know basis through authenticated channels.",
  },
  {
    title: "Continuity by Preparation",
    text: "Key-person risks, leadership succession, recordkeeping, and emergency protocols are actively maintained in advance of transition.",
  },
];

export function PurposeInPracticeSection() {
  return (
    <section
      id="purpose-in-practice"
      className="mx-auto w-full max-w-[1280px] px-6 pt-20 lg:px-8 lg:pt-28"
    >
      <div className="max-w-[768px]">
        <h2 className="font-serif text-[30px] leading-9 text-dune lg:text-4xl lg:leading-10">
          Purpose in Practice
        </h2>
        <p className="pt-4 text-base leading-6 text-[#57534e]">
          How the Office translates core principles into day-to-day operational stewardship across
          all functions.
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {PRINCIPLES.map((item, i) => (
          <li
            key={item.title}
            className="rounded-lg border border-swirl bg-spring-wood p-6 shadow-xs"
          >
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-xs bg-te-papa-green/10 text-sm font-semibold leading-5 text-te-papa-green"
            >
              {i + 1}
            </span>
            <h3 className="pt-3 font-serif text-xl leading-7 text-dune">{item.title}</h3>
            <p className="pt-3 text-xs leading-5 text-[#57534e]">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
