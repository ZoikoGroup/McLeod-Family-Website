interface SequenceStep {
  number: string;
  title: string;
  description: string;
}

interface ProtectionRule {
  title: string;
  description: string;
}

const PAYMENT_SEQUENCE: SequenceStep[] = [
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
      "Document the confirmation and complete your organization's established authorization and escalation controls before action.",
  },
];

const PROTECTION_RULES: ProtectionRule[] = [
  {
    title: "Do not disclose secrets",
    description:
      "Do not share passwords, MFA codes, recovery codes, private access links or banking credentials through unsolicited communication or a public first-contact form.",
  },
  {
    title: "Separate first contact from secure exchange",
    description:
      "Contact the Office is suitable only for a non-sensitive initial enquiry. Sensitive documents require an appropriately established and independently verified exchange route.",
  },
  {
    title: "No uploads or message checker here",
    description:
      "This page does not take attachments, email headers, personal identity records, bank details or pasted correspondence.",
  },
  {
    title: "Security concern",
    description:
      "If a request appears malicious, use your organization's established security/incident procedures; do not assume public Contact is staffed as emergency incident response.",
  },
];

export default function PaymentChangesAndProtectionSection() {
  return (
    <section
      id="payment-changes-and-protection"
      aria-label="Payment changes and information protection"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Part 1: Payment changes: non-negotiable sequence */}
        <div className="border-t border-[#e5e0d5] pt-12 pb-20">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a] mb-12">
            Payment changes: non-negotiable sequence
          </h2>

          <div className="max-w-[960px] divide-y divide-[#e5e0d5] border-b border-[#e5e0d5]">
            {PAYMENT_SEQUENCE.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-2 py-7 sm:flex-row sm:items-start sm:gap-12"
              >
                <span className="font-serif text-[14px] leading-[24px] tracking-[0.05em] text-[#d3a75a] shrink-0 pt-0.5">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-[19px] leading-[26px] text-[#23463a] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Protect information */}
        <div className="border-t border-[#e5e0d5] pt-12">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a] mb-12">
            Protect information
          </h2>

          <div className="max-w-[1040px] divide-y divide-[#e5e0d5] border-b border-[#e5e0d5]">
            {PROTECTION_RULES.map((rule) => (
              <div
                key={rule.title}
                className="grid grid-cols-1 gap-3 py-7 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-4">
                  <h3 className="font-serif text-[18px] leading-[25px] text-[#23463a]">
                    {rule.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
