const faqs = [
  {
    question: "How do I verify new bank details?",
    answer:
      "Pause. Obtain a trusted contact route independently of the change request, confirm the precise instruction with the appropriate authorized party, and apply your organization’s approval controls.",
  },
  {
    question: "Can a genuine-looking email authorize a payment?",
    answer:
      "No. A sender name, logo, email thread or authentication signal does not itself authorize a transaction.",
  },
  {
    question: "Can I call the number printed in the email?",
    answer:
      "Not as an independent check of that same message. Use contact information you obtained separately through an established trusted source.",
  },
  {
    question: "Does this page check or approve an account?",
    answer:
      "No. This page provides safe-verification guidance. It does not process payments or determine whether bank details are valid or authorized.",
  },
  {
    question: "What if I cannot verify the change?",
    answer:
      "Do not act. Follow your organization’s documented stop-and-escalate process and seek clarification through a separately trusted route.",
  },
  {
    question: "Should I upload an invoice, ID or bank record here?",
    answer:
      "No. Do not upload or send sensitive financial, identity or authentication information through this public page.",
  },
  {
    question: "Does an approved sending domain prove the instruction is genuine?",
    answer:
      "No. A current domain listing can help assess the source, but it cannot establish a person’s authority to change payment instructions.",
  },
  {
    question: "How should I report a suspicious request?",
    answer:
      "Use your organization’s established incident process. A separate McLeod reporting destination should be used only after its monitored service is published and operationally approved.",
  },
];

export function PaymentSecurityFaqSection() {
  return (
    <section aria-label="Institutional questions" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Institutional questions
        </h2>

        <div className="pt-6 flex flex-col">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border-b border-[#D6D1C6] py-8 max-w-[900px]"
            >
              <h3 className="font-serif text-[20px] leading-[25px] text-[#34322E]">
                {faq.question}
              </h3>
              <p className="pt-3 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E]/90 max-w-[800px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="pt-24 max-w-[900px]">
          <p className="border-t border-[#D6D1C6] pt-6 font-serif italic text-[13px] leading-[20.15px] text-[#34322E]/80 whitespace-normal lg:whitespace-nowrap">
            This guidance is general. Your organization’s policies, contractual obligations and authorized approval process govern whether a payment may proceed.
          </p>
        </div>
      </div>
    </section>
  );
}
