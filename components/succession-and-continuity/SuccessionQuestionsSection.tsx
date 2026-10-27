const FAQS = [
  {
    question: "What does succession and continuity mean for McLeod Family Office?",
    answerLines: [
      "It means treating the transfer of responsibility, governance readiness, institutional knowledge, and periodic review as continuing stewardship obligations within",
      "defined mandates.",
    ],
  },
  {
    question: "Who decides when responsibility changes?",
    answerLines: [
      "The appropriate family, legal-entity, or corporate governing authority makes decisions within its mandate. Public descriptions do not establish an individual’s",
      "current authority.",
    ],
  },
  {
    question: "Does the Office publish its family succession plan?",
    answerLines: [
      "No. Personal circumstances, legal instruments, individual successors, dates, and protected decisions are not disclosed through this public website.",
    ],
  },
  {
    question: "How does the Office prepare future stewards?",
    answerLines: [
      "Its public continuity framework recognizes education, exposure, responsibility, and governance participation appropriate to readiness, without publishing",
      "individual plans.",
    ],
  },
  {
    question: "Why does institutional memory matter?",
    answerLines: [
      "Documented decisions, mandates, policies, and records reduce overdependence on any one person when responsibilities change.",
    ],
  },
  {
    question: "What is emergency authority?",
    answerLines: [
      "It is the principle that unexpected absence or disruption requires appropriate delegated responsibility, escalation, and continuity arrangements. Operational",
      "details remain confidential.",
    ],
  },
  {
    question: "Can I confirm a signer or payment instruction on this page?",
    answerLines: [
      "No. Use an independent, officially verified contact channel and the relevant entity’s approved procedures before acting on a sensitive instruction.",
    ],
  },
  {
    question: "Does McLeod offer succession or investment services to the public?",
    answerLines: [
      "No. McLeod Family Office serves one family and does not solicit third-party capital, manage external client assets, or offer public investment products.",
    ],
  },
];

export function SuccessionQuestionsSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="w-full">
      <div className="max-w-[1216px]">
        <h2
          id="faq-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Common Questions About Succession &amp; Continuity
        </h2>
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          Direct answers regarding transition authority, family privacy, and counterparty verification.
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
            <p className="pt-3 max-w-[1142px] font-sans text-[15px] leading-6 text-[#5A5752]">
              {item.answerLines.map((line, idx) => (
                <span
                  key={idx}
                  className="block whitespace-normal lg:whitespace-nowrap"
                >
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
