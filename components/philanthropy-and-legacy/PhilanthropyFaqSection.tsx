import type { ReactNode } from "react";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

const faqs: FaqItem[] = [
  {
    question: "Does McLeod Family Office operate a philanthropic program?",
    answer: (
      <>
        The approved public materials do not establish an active philanthropic program. Where philanthropic activity
        <br className="hidden sm:inline" />{" "}
        is undertaken, it should be governed through appropriate purpose-specific structures and kept separate from
        <br className="hidden sm:inline" />{" "}
        commercial activity.
      </>
    ),
  },
  {
    question: "Does McLeod Family Office accept donations from the public?",
    answer: (
      <>
        No public donations are solicited through this website. Do not act on purported McLeod donation requests
        <br className="hidden sm:inline" />{" "}
        without independent verification.
      </>
    ),
  },
  {
    question: "Is McLeod a charitable foundation or grantmaking organization?",
    answer: (
      <>
        The approved materials identify McLeod as a private single-family office; they do not establish that the Office
        <br className="hidden sm:inline" />{" "}
        itself is a charitable foundation or grantmaker.
      </>
    ),
  },
  {
    question: "How does legacy relate to long-term stewardship?",
    answer: (
      <>
        Legacy involves prepared succession, decision rights, institutional memory and the transfer of responsibility
        <br className="hidden sm:inline" />{" "}
        across generations; it is wider than philanthropy.
      </>
    ),
  },
  {
    question: "Can I apply for a grant through this site?",
    answer:
      "No public grant application route or eligibility program is established by the approved website specifications.",
  },
  {
    question: "Are charitable partners or causes listed publicly?",
    answer: (
      <>
        No public list of charitable recipients, partners, program areas or giving amounts is verified in the approved
        <br className="hidden sm:inline" />{" "}
        source materials.
      </>
    ),
  },
  {
    question: "Who is responsible when philanthropic activity is formally established?",
    answer: (
      <>
        Authority must follow the actual purpose-specific structure and its governing documents, with the Family
        <br className="hidden sm:inline" />{" "}
        Office acting only within an approved mandate.
      </>
    ),
  },
  {
    question: "How do I verify a philanthropic communication?",
    answer: (
      <>
        Use the official Verification Centre and independently authenticate any sensitive or changed payment
        <br className="hidden sm:inline" />{" "}
        instruction before taking action.
      </>
    ),
  },
];

export function PhilanthropyFaqSection() {
  return (
    <section
      id="institutional-questions"
      aria-label="Institutional questions"
      className="w-full pt-24 lg:pt-24"
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
