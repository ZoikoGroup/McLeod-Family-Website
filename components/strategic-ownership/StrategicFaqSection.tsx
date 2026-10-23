interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What does "Strategic Ownership & Enterprise Interests" mean?',
    answer:
      "It describes McLeod Family Office’s long-term coordination of the family’s enterprise interests through ownership principles, board discipline, strategic oversight and clear reporting, within defined mandates.",
  },
  {
    question: "Does McLeod Family Office run operating businesses?",
    answer:
      "No. Operating businesses remain governed and managed through their own boards and executive teams. The Office may coordinate appropriate ownership-level oversight, not day-to-day management.",
  },
  {
    question: "Does McLeod Family Office legally own all family enterprises?",
    answer:
      "The public website does not establish that. Separate entities may hold or conduct distinct activities; any specific legal ownership or contracting relationship must be verified from authoritative records.",
  },
  {
    question: "Does the Office offer investments or enterprise services to the public?",
    answer:
      "No. McLeod Family Office is a private single-family office. It does not solicit third-party capital, manage assets for external clients or offer investment products to the public.",
  },
  {
    question: "Can visitors view the family’s companies, holdings or enterprise performance?",
    answer:
      "No. Details such as private holdings, ownership stakes, valuations and confidential commercial reporting are not provided through the public website.",
  },
  {
    question: "How can a counterparty verify an enterprise-related communication?",
    answer:
      "Use the official Verification Centre and independently confirm sensitive instructions through an official channel obtained separately from the message. Never rely solely on a changed bank detail or sender appearance.",
  },
];

export function StrategicFaqSection() {
  return (
    <section
      id="institutional-questions"
      aria-label="Institutional questions"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Institutional questions
        </h2>

        <div className="pt-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`${index > 0 ? "pt-8" : ""} border-b border-[#D6D1C6] pb-8 max-w-[900px]`}
            >
              <h3 className="font-serif text-[20px] leading-[25px] text-[#34322E]">
                {faq.question}
              </h3>
              <p className="pt-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
