const sequenceSteps = [
  {
    number: "01",
    title: "Pause",
    description:
      "Do not act solely on a new, changed or unexpected payment instruction.",
  },
  {
    number: "02",
    title: "Source independently",
    description:
      "Find the correct contact route from an approved record you obtained independently—not the questionable communication.",
  },
  {
    number: "03",
    title: "Confirm the specific change",
    description:
      "Speak through the independently obtained channel with an appropriately authorized counterparty; confirm the exact requested amendment.",
  },
  {
    number: "04",
    title: "Follow your own controls",
    description:
      "Document the confirmation and complete your organization’s established authorization and escalation controls before action.",
  },
];

export function PaymentChangesSequenceSection() {
  return (
    <section aria-label="Payment changes: non-negotiable sequence" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Payment changes: non-negotiable sequence
        </h2>

        <div className="pt-12 max-w-[900px] flex flex-col gap-8">
          {sequenceSteps.map((step) => (
            <div
              key={step.number}
              className="flex flex-row items-start gap-8 border-b border-[#D6D1C6] pb-6"
            >
              <span className="font-serif text-[24px] leading-[30px] text-[#D3A75A] shrink-0 w-8">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-[20px] leading-[25px] text-[#23463A]">
                  {step.title}
                </h3>
                <p className="pt-2 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

