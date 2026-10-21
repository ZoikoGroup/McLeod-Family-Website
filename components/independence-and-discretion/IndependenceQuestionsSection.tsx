import { SectionIntro } from "./SectionIntro";

const FAQS = [
  {
    q: "What does independence mean for McLeod Family Office?",
    a: (
      <>
        It means serving the McLeod family within a defined institutional mandate and established decision responsibilities,<br className="hidden sm:inline" /> without exemption from legal duties.
      </>
    ),
  },
  {
    q: "Does the Family Office manage outside investors' capital?",
    a: (
      <>
        No. McLeod Family Office is a private single-family office and does not solicit third-party capital, manage external client<br className="hidden sm:inline" /> assets, or offer public investment products.
      </>
    ),
  },
  {
    q: "Is discretion the same as absolute secrecy?",
    a: (
      <>
        No. Legitimate confidentiality must operate alongside applicable law, professional duties, and appropriate disclosure<br className="hidden sm:inline" /> requirements.
      </>
    ),
  },
  {
    q: "How can I verify a payment-related instruction?",
    a: (
      <>
        Consult the Verification Centre and independently confirm new or changed bank details using contact information<br className="hidden sm:inline" /> obtained separately from the instruction.
      </>
    ),
  },
  {
    q: "Why does the Office not publish financial values or holdings?",
    a: (
      <>
        Public disclosure is limited to material needed for understanding, verification, and legitimate engagement. Private<br className="hidden sm:inline" /> financial and family data is not a public product.
      </>
    ),
  },
];

export function IndependenceQuestionsSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="w-full">
      <SectionIntro
        id="faq-heading"
        title="Institutional Questions"
        text={
          <>
            Direct answers regarding independence, discretion, and secure counterparty<br className="hidden sm:inline" /> engagement.
          </>
        }
      />

      <dl className="flex flex-col gap-4 pt-8">
        {FAQS.map((item) => (
          <div
            key={item.q}
            className="border border-swirl bg-[#faf8f5] px-6 py-6 sm:px-[30px]"
          >
            <dt className="font-serif text-[18px] leading-[21px] text-dune">
              {item.q}
            </dt>
            <dd className="max-w-[856px] pt-3 text-[15px] leading-6 text-[#5a5752]">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
