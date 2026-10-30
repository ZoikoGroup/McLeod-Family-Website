const steps = [
  {
    number: "01",
    title: "Pause",
    description:
      "Do not act on an unexpected or changed request until you have verified it independently.",
  },
  {
    number: "02",
    title: "Avoid its contact details",
    description:
      "Do not use a telephone number, link, reply-to address or QR code supplied solely by the request under review.",
  },
  {
    number: "03",
    title: "Confirm directly",
    description:
      "Contact an appropriate authorized person using a pre-existing trusted route or independently located official record. Confirm the particular request, not just the sender’s name.",
  },
  {
    number: "04",
    title: "Follow your controls",
    description:
      "Use your organization’s ordinary approvals and incident procedures before disclosing information or moving funds.",
  },
];

export function SuspiciousRequestProtocolSection() {
  return (
    <section aria-label="What to do when a request feels suspicious" className="w-full">
      <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        What to do when a request feels suspicious.
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

