interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Does McLeod Family Office provide legal or tax advice to the public?",
    answer:
      "No. McLeod Family Office is a private single-family office, not a public legal or tax-advisory service. Specialist advice and legally responsible activities remain with the appropriate parties.",
  },
  {
    question: "Is McLeod Family Office itself a trustee or executor?",
    answer:
      "The public materials do not establish any such appointment. Legal or fiduciary authority depends on the relevant arrangements and should be verified independently.",
  },
  {
    question: "How does the Office work with specialist advisers?",
    answer:
      "The Office may coordinate within its mandate and use qualified advisers where specialist expertise, independent judgment, regulation or jurisdictional capability is required.",
  },
  {
    question: "Does the website describe the family’s trusts, estates or tax structures?",
    answer:
      "No. These are private matters, and the website does not publish family-specific structures, beneficiaries, filing records or private financial information.",
  },
  {
    question: "How is estate-related work connected with continuity?",
    answer:
      "Continuity is broader than estate planning; it includes succession, decision rights, institutional records, preparation of future stewards and resilience during transitions.",
  },
  {
    question: "Who makes decisions for separate entities?",
    answer:
      "The people and governing bodies authorized under each entity’s applicable documents and obligations. Family Office coordination does not replace their accountability.",
  },
  {
    question:
      "Does McLeod offer investment or wealth-management services to external families?",
    answer:
      "No. It serves one family and does not solicit third-party capital, manage external-client assets or offer investment products to the public.",
  },
  {
    question:
      "How should I verify a request for sensitive records or changed payment details?",
    answer:
      "Use the official Verification Centre and a contact method obtained independently from the canonical website or public register. Do not rely only on a number supplied in the message.",
  },
];

export function TrustEstateFaqSection() {
  return (
    <section
      id="institutional-questions"
      aria-label="Institutional questions"
      className="w-full pt-24"
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
