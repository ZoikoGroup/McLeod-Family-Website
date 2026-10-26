export function GovernanceDirectAnswersSection() {
  const faqs = [
    {
      question: "What are McLeod Family Office’s governance principles?",
      answer:
        "Its public approach emphasizes clarity of authority, separation of purpose, long-horizon discipline, independent expertise, confidentiality, verification and continuity through preparation.",
    },
    {
      question: "Does the public website establish who may sign for an entity?",
      answer:
        "No. A website explanation does not confer or verify legal authority. Relevant counterparties should independently confirm the contracting entity and authorized signatories.",
    },
    {
      question: "Does McLeod manage operating businesses day to day?",
      answer:
        "The Office coordinates ownership-level stewardship within its mandate; operating businesses retain their own boards, executives and day-to-day management.",
    },
    {
      question: "How are different activities kept separate?",
      answer:
        "Purpose-specific responsibilities should be held within structures appropriate to their activities and legal requirements, rather than treating all family activity as a single undifferentiated operation.",
    },
    {
      question: "What does independent expertise mean?",
      answer:
        "Appropriate specialists can provide expertise or independent challenge, but their involvement does not remove responsibility from the relevant governing body.",
    },
    {
      question: "How does the Office approach confidentiality?",
      answer:
        "The public approach favors need-to-know disclosure and established channels; the site does not publish internal family records or invite unsolicited sensitive uploads.",
    },
    {
      question: "How should a changed payment instruction be checked?",
      answer:
        "Verify independently through an official contact route obtained separately from the instruction. A recognizable email domain alone does not authorize a transaction.",
    },
    {
      question: "How does governance relate to continuity?",
      answer:
        "Prepared decision rights, institutional memory, succession planning and escalation arrangements help responsibilities remain clear during transition.",
    },
  ];

  return (
    <section aria-label="Direct Answers" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a] mb-6">
          Direct Answers
        </h2>

        {/* 8 Questions Container */}
        <div className="max-w-[900px] flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`border-b border-[#d6d1c6] pb-8 ${index === 0 ? "pt-0" : "pt-8"}`}
            >
              <h3 className="font-serif text-[20px] leading-[25px] text-[#34322e]">
                {faq.question}
              </h3>
              <p className="pt-3 font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
