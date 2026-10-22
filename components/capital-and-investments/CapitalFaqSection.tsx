const faqs = [
  {
    question: "Does McLeod Family Office manage money for external clients?",
    answer:
      "No. McLeod Family Office serves one family and does not solicit or accept third-party capital or manage external client assets.",
  },
  {
    question: "Does this page advertise investment products or funds?",
    answer:
      "No. Capital & Investments explains institutional family-capital stewardship principles and is not an offer or solicitation to the public.",
  },
  {
    question: "How does the Office approach family capital?",
    answer:
      "With a long-term, risk-aware approach that considers resilience, liquidity, concentration, diversification, costs and governance. Detailed allocations and results remain private.",
  },
  {
    question: 'Does "capital preservation" mean returns are guaranteed?',
    answer:
      "No. Risk management and downside resilience are governance disciplines; they do not guarantee that losses can be avoided.",
  },
  {
    question: "Does McLeod Family Office directly own or manage every family asset?",
    answer:
      "No such conclusion follows from the public website. Purpose-specific legal entities and advisers retain their own responsibilities, and the Office coordinates within its mandate.",
  },
  {
    question: "How are external advisers involved?",
    answer:
      "External investment, tax, legal, banking, insurance and specialist expertise may be used when professional independence, regulation or domain knowledge requires it.",
  },
  {
    question: "How can I verify a capital-related communication?",
    answer:
      "Use the official Verification Centre and an independently sourced contact route. Never act on changed payment or bank details solely because they appear in a message.",
  },
];

export function CapitalFaqSection() {
  return (
    <div className="pt-24 w-full">
      <section
        id="institutional-questions"
        aria-label="Institutional questions"
        className="pt-12 border-t border-[#D6D1C6] w-full"
      >
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Institutional questions
        </h2>

        <div className="pt-6">
          {faqs.map((faq, index) => {
            const isLast = index === faqs.length - 1;
            return (
              <div
                key={faq.question}
                className={`${index > 0 ? "pt-8" : ""} ${
                  !isLast ? "border-b border-[#D6D1C6] pb-8" : ""
                }`}
              >
                <h3 className="font-serif text-[20px] leading-[26px] sm:text-[22px] sm:leading-[27.5px] text-[#34322E]">
                  {faq.question}
                </h3>
                <p className="pt-4 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
