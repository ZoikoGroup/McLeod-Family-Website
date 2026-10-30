const steps = [
  {
    number: "01",
    title: "Pause",
    description:
      "Do not act on a new or changed payment or bank-detail instruction until the change has been checked independently.",
  },
  {
    number: "02",
    title: "Source a contact independently",
    description:
      "Find a verified Office contact route from the canonical website or a separate authoritative record—not from the message, attachment or link being checked.",
  },
  {
    number: "03",
    title: "Confirm directly",
    description:
      "Use that separately obtained contact route to confirm the specific change with the appropriate authorized party under the agreed process.",
  },
  {
    number: "04",
    title: "Record and proceed only under your controls",
    description:
      "Follow your organization’s documented payment-approval and dual-control process. If details cannot be reconciled, stop and escalate.",
  },
];

export function FourStepProtocolSection() {
  return (
    <section aria-label="Four-step protocol" className="w-full">
      <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Four-step protocol
      </h2>
      <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
        When payment instructions are new, changed, urgent, or inconsistent, follow these steps before your organization takes action.
      </p>

      <div className="pt-12 max-w-[900px] flex flex-col gap-8">
        {steps.map((step) => (
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
    </section>
  );
}
