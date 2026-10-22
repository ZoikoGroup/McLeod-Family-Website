const faqs = [
  {
    question: "What does family administration mean in the McLeod Family Office context?",
    answer:
      "The public mandate describes coordination across entities, advisers, reporting, records and material family-office obligations within defined responsibilities. It does not establish a public administration service for outside clients.",
  },
  {
    question: "Does the Office provide household or personal concierge services?",
    answer:
      "The approved public sources do not establish a household or concierge offering. This page does not describe or offer such services.",
  },
  {
    question: "Are the family's administrative records available online?",
    answer:
      "No public records portal is established by the approved sources. Private family records and confidential reports are not disclosed on this website.",
  },
  {
    question: "Who is responsible for decisions involving separate entities?",
    answer:
      "Responsibility follows the applicable mandates, entity governance, governing documents and authorized decision-makers; Family Office coordination does not replace those duties.",
  },
  {
    question: "Does McLeod Family Office publish financial or operating reports?",
    answer:
      "The approved public materials discuss reporting as a stewardship and governance principle. They do not establish a public reporting service or publication of confidential financial information.",
  },
  {
    question: "How does the Office work with external advisers?",
    answer:
      "Specialist advisers may be used where expertise, independence, jurisdiction or regulation calls for it; their own professional responsibilities remain distinct.",
  },
  {
    question: "How can a legitimate counterparty contact the Office about an administrative matter?",
    answer:
      "Use the official Contact the Office route and avoid sending confidential records until an appropriate secure channel is established.",
  },
  {
    question: "How should a sensitive request or changed payment instruction be verified?",
    answer:
      "Use the Verification Centre and independently sourced official callback arrangements; do not rely on contact information provided in the request being verified.",
  },
];

export function AdminFaqSection() {
  return (
    <section
      id="institutional-questions"
      aria-label="Institutional questions"
      className="w-full border-t border-swirl pt-12"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Institutional questions
      </h2>

      <div className="pt-6">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className={`${index > 0 ? "pt-8" : ""} border-b border-swirl pb-8`}
          >
            <h3 className="font-serif text-[20px] leading-[25px] text-[#34322E]">
              {faq.question}
            </h3>
            <p className="pt-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[900px]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
