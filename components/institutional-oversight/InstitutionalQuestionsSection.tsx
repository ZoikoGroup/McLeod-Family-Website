import React from "react";

const FAQS = [
  {
    question: "What does institutional oversight mean at McLeod Family Office?",
    line1: "It means coordinating stewardship, governance, risk, reporting, and continuity within defined mandates, while decision authority remains with the appropriate",
    line2: "governing body.",
  },
  {
    question: "Does McLeod Family Office manage operating companies?",
    line1: "Operating businesses retain their own boards, executives, and day-to-day management. The Office supports ownership-level oversight and reserved-matter",
    line2: "coordination where authorized.",
  },
  {
    question: "Does this website verify an authorized signer or contracting entity?",
    line1: "No. Public descriptions of roles cannot establish current signing authority or contracting-party identity. Verify using the relevant approved entity process.",
    line2: null,
  },
  {
    question: "How are external advisers used?",
    line1: "Specialist expertise and independent challenge are used where appropriate. Adviser participation does not replace the authority and accountability of the",
    line2: "relevant principal or entity.",
  },
  {
    question: "Does McLeod offer governance services to external clients?",
    line1: "No. McLeod Family Office serves one family and does not solicit external assets, manage third-party capital, or offer public products.",
    line2: null,
  },
];

export function InstitutionalQuestionsSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="w-full">
      <div className="max-w-[960px]">
        <h2
          id="faq-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Institutional Questions
        </h2>
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          Direct answers regarding oversight boundaries, authority confirmation, and counterparty interactions.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {FAQS.map((item) => (
          <div
            key={item.question}
            className="border border-[#D6D1C6] bg-[#FAF8F5] p-7 sm:p-[28px_36px]"
          >
            <h3 className="font-serif text-[17px] leading-5 sm:text-[18px] sm:leading-[20.7px] text-[#34322E]">
              {item.question}
            </h3>
            <div className="pt-3 max-w-[1142px] font-sans text-[15px] leading-6 text-[#5A5752]">
              <span className="block whitespace-normal lg:whitespace-nowrap">{item.line1}</span>
              {item.line2 && (
                <span className="block whitespace-normal lg:whitespace-nowrap">{item.line2}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
