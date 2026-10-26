export function ConfidentialityDirectAnswersSection() {
  const faqs = [
    {
      question: "What does confidentiality mean at McLeod Family Office?",
      answer:
        "Information is disclosed only for a legitimate institutional purpose and with appropriate counterparties through established channels. Public pages do not provide access to private family or entity records.",
    },
    {
      question: "How is integrity different from confidentiality?",
      answer:
        "Confidentiality limits who receives protected information. Integrity concerns whether material information, instructions and authority are authentic, accurate and appropriately confirmed before use.",
    },
    {
      question: "May I send confidential documents using the public contact form?",
      answer:
        "No confidential identity, payment or corporate materials should be submitted during first contact. Confirm the legitimate recipient and arrange an appropriate secure channel first.",
    },
    {
      question:
        "Does a familiar email address prove a payment instruction is authorized?",
      answer:
        "No. Even a successful email authentication check does not establish transaction authority. Independently confirm new or changed payment details using an official route obtained separately.",
    },
    {
      question: "Can the Family Office bind any family-owned operating business?",
      answer:
        "A website description alone does not establish binding authority. Operating companies and legal entities retain their own governance and contracting responsibilities.",
    },
    {
      question: "Where can I verify an official communication?",
      answer:
        "Use the independently accessed McLeod Verification Centre and approved official channels; do not rely solely on contact information included in the message under review.",
    },
    {
      question:
        "Does this page describe McLeod’s internal cybersecurity systems?",
      answer:
        "No. It explains public safe-engagement principles and does not attest to specific security architecture, certifications, penetration tests or monitoring services.",
    },
    {
      question: "How can I report a suspicious message?",
      answer:
        "Follow the published Verification Centre guidance. A direct reporting channel will appear only if an approved, monitored service has been established and its route is publicly verified.",
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
