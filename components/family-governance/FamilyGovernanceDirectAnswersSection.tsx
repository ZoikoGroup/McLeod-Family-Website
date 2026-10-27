import React from "react";

export function FamilyGovernanceDirectAnswersSection() {
  const faqs = [
    {
      question: "What does family governance mean at McLeod Family Office?",
      line1: "It refers to the family-level purpose, long-term stewardship direction and decisions appropriately reserved to",
      line2: "family governance. This public page does not disclose the family’s private governance instruments.",
    },
    {
      question: "Does family governance manage operating companies?",
      line1: "No. Operating companies retain their own boards and executive teams responsible for commercial strategy and",
      line2: "day-to-day management.",
    },
    {
      question: "Does McLeod Family Office legally represent every family entity?",
      line1: "No such authority is established by this page. Relevant legal entities and authorized representatives must be",
      line2: "verified for each applicable engagement.",
    },
    {
      question: "Are family governance voting rules publicly available?",
      line1: "No. Private voting thresholds, reserved-matter schedules, deliberations and governing documents are not",
      line2: "disclosed on this public website.",
    },
    {
      question: "What are reserved matters?",
      line1: "They are decisions that, where established by applicable documents, require approval by a responsible",
      line2: "governing body. The actual private list and limits are not published here.",
    },
    {
      question: "How is the Family Office’s mandate limited?",
      line1: "The Office coordinates strategy, capital, governance, risk, reporting and continuity within its defined mandate",
      line2: "rather than exercising unlimited authority over family-related entities.",
    },
    {
      question: "Can I rely on a family office email to approve a transaction?",
      line1: "No. Independently verify material instructions, authorized counterparties and any changed payment details",
      line2: "using an official route obtained separately.",
    },
    {
      question: "Does this page offer investment or family-office services?",
      line1: "No. McLeod Family Office serves one family and does not solicit public investment capital, manage external",
      line2: "client assets or offer investment products to the public.",
    },
    {
      question: "How does family governance relate to succession?",
      line1: "Continuity is approached through prepared responsibilities, records, institutional memory and succession",
      line2: "discipline without publicly identifying private family successors or timetables.",
    },
    {
      question: "How can a legitimate counterparty contact the Office?",
      line1: "Use the official Contact the Office page after verifying McLeod identity and the appropriate entity or",
      line2: "channel. Do not send confidential materials through first-contact messages.",
    },
  ];

  return (
    <section aria-labelledby="direct-answers-title" className="w-full border-t border-[#D6D1C6] pt-24">
      {/* Heading 2 */}
      <h2
        id="direct-answers-title"
        className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]"
      >
        Direct Answers
      </h2>

      {/* FAQ List: each answer is exactly 2 lines matching Figma */}
      <div className="pt-6 flex flex-col max-w-[900px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="pt-6 pb-8 border-b border-[#D6D1C6] flex flex-col"
          >
            <h3 className="font-serif text-[18px] leading-[24px] sm:text-[20px] sm:leading-[25px] text-[#34322E]">
              {faq.question}
            </h3>
            <div className="pt-3 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[850px]">
              <span className="block whitespace-normal lg:whitespace-nowrap">{faq.line1}</span>
              <span className="block whitespace-normal lg:whitespace-nowrap">{faq.line2}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
