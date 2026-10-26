import React from "react";

const questions = [
  {
    question: 'What does "long-term value creation" mean at McLeod Family Office?',
    answer: (
      <>
        It refers to pursuing durable stewardship of the family’s enterprise interests, capital and institutional continuity through disciplined judgment, defined
        <br className="hidden lg:inline" />{" "}
        authorities and risk-aware review. It is not a claim about achieved investment performance.
      </>
    ),
  },
  {
    question: "Does the Office guarantee that family capital will grow or be preserved?",
    answer: (
      <>
        No. Assessing risks, resilience and long-term opportunity does not eliminate loss or guarantee financial outcomes.
      </>
    ),
  },
  {
    question: "Does McLeod offer investment services to external clients?",
    answer: (
      <>
        No. McLeod Family Office serves one family and does not solicit third-party investment capital, manage external client assets or offer public investment
        <br className="hidden lg:inline" />{" "}
        products through this site.
      </>
    ),
  },
  {
    question: "How does enterprise stewardship support the long term?",
    answer: (
      <>
        The Office supports ownership principles, board discipline, strategic oversight and reporting. Operating businesses retain their own boards, executives
        <br className="hidden lg:inline" />{" "}
        and day-to-day management.
      </>
    ),
  },
  {
    question: "Why are liquidity and risk part of long-term value?",
    answer: (
      <>
        Long-horizon decisions consider liquidity needs, concentration, leverage, counterparty exposure and downside scenarios alongside potential opportunity.
      </>
    ),
  },
  {
    question: "How are outside specialists involved?",
    answer: (
      <>
        Qualified investment, legal, tax, banking, insurance and other advisers may contribute independent expertise when their domain or regulatory
        <br className="hidden lg:inline" />{" "}
        responsibilities require it.
      </>
    ),
  },
  {
    question: "What does continuity contribute to stewardship?",
    answer: (
      <>
        Succession planning, documented authority, institutional memory, next-generation preparation and ongoing review help preserve the ability to act
        <br className="hidden lg:inline" />{" "}
        responsibly across transitions.
      </>
    ),
  },
  {
    question: "Why are asset holdings and performance not publicly disclosed?",
    answer: (
      <>
        Privacy and controlled disclosure are institutional requirements. The website explains public responsibilities without publishing private family financial
        <br className="hidden lg:inline" />{" "}
        information.
      </>
    ),
  },
  {
    question: "How can I verify a McLeod communication?",
    answer: (
      <>
        Use the Verification Centre to check official guidance and independently confirm sensitive or changed instructions through contact information obtained
        <br className="hidden lg:inline" />{" "}
        separately from the message.
      </>
    ),
  },
  {
    question: "How can an institutional counterparty contact the Office?",
    answer: (
      <>
        Use the official Contact the Office route for an appropriate institutional enquiry, without sending financial, identity or other sensitive documents in an
        <br className="hidden lg:inline" />{" "}
        initial unverified communication.
      </>
    ),
  },
];

export function InstitutionalQuestionsSection() {
  return (
    <section
      id="institutional-questions"
      aria-label="Institutional questions"
      className="mt-24 w-full border-t border-[#d6d1c6] pt-6"
    >
      <h2 className="font-serif text-[32px] leading-[36px] lg:text-[40px] lg:leading-[44px] text-[#23463a]">
        Institutional questions
      </h2>

      <div className="mt-8 w-full max-w-[1184px]">
        {questions.map((item) => (
          <div
            key={item.question}
            className="border-b border-[#d6d1c6] pt-6 pb-8"
          >
            <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
              {item.question}
            </h3>
            <p className="pt-3 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
