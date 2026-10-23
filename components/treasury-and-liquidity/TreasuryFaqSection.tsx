const faqs = [
  {
    question: 'What does "Treasury & Liquidity" mean for McLeod Family Office?',
    answer:
      "It describes how liquidity-related considerations fit within the long-term stewardship of family capital and institutional responsibilities. It is not a public treasury-service offering.",
  },
  {
    question: "Does the Office offer cash management to outside clients?",
    answer:
      "No. McLeod Family Office is a private single-family office and does not provide public investment or cash-management products or manage external client assets.",
  },
  {
    question: "Does this page disclose the family’s cash reserves or accounts?",
    answer:
      "No. Balances, financing arrangements, bank relationships and payment particulars are private and are not published on this website.",
  },
  {
    question: "How does the Office consider liquidity?",
    answer:
      "Liquidity is one consideration alongside obligations, concentration, leverage, counterparty exposure and downside resilience. No specific liquidity level or reserve target is published.",
  },
  {
    question: "Does McLeod Family Office direct every company’s payments?",
    answer:
      "No such authority should be inferred. Operating businesses retain their boards and executive management, while distinct legal entities act within their own mandates.",
  },
  {
    question: "How does the Office use financial specialists?",
    answer:
      "External banking, legal, tax, investment and other specialist expertise may be used when independence, regulatory requirements or subject-matter knowledge call for it.",
  },
  {
    question: "Is an emailed change to bank details sufficient authority?",
    answer:
      "No. New or changed payment instructions require independent verification through an official contact route obtained separately from the message.",
  },
  {
    question: "Can I open an account or invest through this page?",
    answer:
      "No. This page is an institutional explanation. It does not accept deposits, payments, investments or other third-party capital.",
  },
  {
    question: "How can I verify a message about treasury matters?",
    answer:
      "Use the official Verification Centre and its independent communication and payment-instruction guidance. Do not rely only on a sender address, domain appearance or message-supplied contact details.",
  },
  {
    question: "How can a legitimate counterparty contact the Office?",
    answer:
      "Use the approved Contact the Office pathway for an appropriate institutional enquiry. Do not transmit sensitive financial, bank or identity material until a secure verified channel has been established.",
  },
];

export function TreasuryFaqSection() {
  return (
    <section
      id="institutional-questions"
      aria-label="Institutional questions"
      className="w-full pt-16 sm:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Institutional questions
        </h2>

        <div className="pt-6 max-w-[900px] flex flex-col">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#D6D1C6] pb-8 pt-8 first:pt-4"
            >
              <h3 className="font-serif text-[19px] leading-[24px] sm:text-[20px] sm:leading-[25px] text-[#34322E]">
                {item.question}
              </h3>
              <p className="pt-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
