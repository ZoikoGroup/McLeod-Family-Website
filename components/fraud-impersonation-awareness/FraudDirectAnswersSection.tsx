const directAnswers = [
  {
    question: "How can I tell whether a McLeod message is genuine?",
    answer:
      "Check the official site and correspondence records in the Verification Centre, then independently confirm any sensitive or unexpected instruction through a separately obtained, trusted channel. This page does not issue authenticity verdicts.",
  },
  {
    question: "Are messages from an authenticated domain always safe?",
    answer:
      "No. Email authentication can support assessing the sender domain but does not establish a person’s authority or approve a transaction.",
  },
  {
    question: "What if I receive new bank details?",
    answer:
      "Pause and use independently sourced callback to confirm the exact change. Follow your organization’s normal payment and authorization controls.",
  },
  {
    question: "Should I call the number in a suspicious email?",
    answer:
      "No. Find the contact number or channel independently from a trusted record or current official verification source.",
  },
  {
    question: "Should I send a password or a one-time code?",
    answer:
      "No. Do not share passwords, MFA codes or recovery information in response to unexpected messages.",
  },
  {
    question: "Does a familiar adviser name or letterhead prove authority?",
    answer:
      "No. Names, signatures, profile images and brands can be imitated. Verify the role and specific request independently.",
  },
  {
    question: "Can I paste a suspicious message into this page?",
    answer:
      "No. This informational page does not collect message text, attachments, identity records, payment details or other sensitive materials.",
  },
  {
    question: "Can I report suspicious activity through the website?",
    answer:
      "A dedicated report link is shown only if a separately approved, monitored and operational reporting service exists. Otherwise follow your established incident process and verify official channels independently.",
  },
  {
    question: "Does McLeod offer financial products or public investments here?",
    answer:
      "No. McLeod Family Office is a private single-family office and does not solicit public investment capital or offer public investment products through this website.",
  },
  {
    question: "What if the Verification Centre is unavailable?",
    answer:
      "Do not rely on guessed domains or on contact details inside the questionable message. Pause sensitive actions and use independent pre-existing trusted channels and your internal escalation procedures.",
  },
];

export function FraudDirectAnswersSection() {
  return (
    <section aria-label="Direct Answers" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Direct Answers
        </h2>

        <div className="pt-6 flex flex-col">
          {directAnswers.map((item) => (
            <div
              key={item.question}
              className="border-b border-[#D6D1C6] py-8 max-w-[900px]"
            >
              <h3 className="font-serif text-[20px] leading-[25px] text-[#34322E]">
                {item.question}
              </h3>
              <p className="pt-3 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E]/90 max-w-[800px]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

