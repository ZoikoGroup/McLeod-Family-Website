import Image from "next/image";

const LIFECYCLE_STEPS = [
  {
    step: "01. Define Scope",
    description:
      "Oversight begins by understanding what the relevant mandate includes and which authority remains elsewhere.",
  },
  {
    step: "02. Receive Reporting",
    description:
      "Material information reaches the accountable authority in a form appropriate to the decision.",
  },
  {
    step: "03. Review & Challenge",
    description:
      "Appropriate review includes specialist judgment, independent challenge, and attention to risk.",
  },
  {
    step: "04. Record Decisions",
    description:
      "Relevant decisions, approvals, exceptions, and follow-up actions are captured through authorized processes.",
  },
  {
    step: "05. Escalate Exceptions",
    description:
      "Instructions beyond a mandate or with unclear authority require immediate pause and formal escalation.",
  },
  {
    step: "06. Revisit & Prepare",
    description:
      "Stewardship oversight remains responsive to changing circumstances and planned multi-generational transitions.",
  },
];

export function OversightLifecycleSection() {
  return (
    <section aria-labelledby="lifecycle-heading" className="w-full">
      <div className="max-w-[1027px]">
        <h2
          id="lifecycle-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          The Six-Step Oversight Lifecycle
        </h2>
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          A structured process for mandate verification, reporting, independent challenge, and decision follow-up.
        </p>
      </div>

      {/* Featured Overview Card with Image */}
      <div className="mt-10 overflow-hidden border border-[#D6D1C6] bg-[#FAF8F5] grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <div className="relative h-[280px] sm:h-[340px] lg:h-[390px] w-full">
          <Image
            src="/images/institutional-oversight/executive-governance-review.png"
            alt="Executive Governance Review"
            fill
            sizes="(max-width: 1024px) 100vw, 583px"
            className="object-cover object-center rounded-[2px]"
          />
        </div>
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="font-sans text-xs font-semibold leading-[19.2px] tracking-[0.15em] text-[#23463A] uppercase">
            INSTITUTIONAL PROCESS
          </p>
          <h3 className="pt-3 font-serif text-[22px] leading-[26px] sm:text-[24px] sm:leading-[27.6px] text-[#34322E]">
            Disciplined Review
          </h3>
          <p className="pt-3 max-w-[487px] font-sans text-[15px] leading-6 text-[#5A5752]">
            Oversight operates through structured review steps designed to align long-horizon purpose with rigorous risk awareness across all managed interests.{" "}
          </p>
        </div>
      </div>

      {/* 6 Step Cards Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {LIFECYCLE_STEPS.map((item) => (
          <div
            key={item.step}
            className="border border-[#D6D1C6] bg-[#FAF8F5] p-8 sm:p-9"
          >
            <h3 className="font-serif text-[19px] leading-[22px] sm:text-[20px] sm:leading-[23px] text-[#23463A]">
              {item.step}
            </h3>
            <p className="pt-3 max-w-[518px] font-sans text-[15px] leading-6 text-[#5A5752]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
