import { SectionIntro } from "./SectionIntro";

const FAQS: {
  q: string;
  a: React.ReactNode;
}[] = [
  {
    q: "What is the institutional role of McLeod Family Office?",
    a: (
      <>
        McLeod Family Office coordinates stewardship, governance, risk, reporting, and continuity across the family&apos;s long-term<br className="hidden sm:inline" /> interests within defined mandates.
      </>
    ),
  },
  {
    q: "Does the Office manage family operating companies day to day?",
    a: (
      <>
        No. Operating businesses are governed and managed through their own boards and executives; the Office coordinates<br className="hidden sm:inline" /> ownership-level oversight where appropriate.
      </>
    ),
  },
  {
    q: "Does the Office legally own every family asset or company?",
    a: "No. Distinct activities are held in purpose-specific legal entities with separate liabilities and governance obligations.",
  },
  {
    q: "Can external clients or investors invest with McLeod Family Office?",
    a: (
      <>
        No. McLeod Family Office is a private single-family office and does not accept third-party capital, manage external<br className="hidden sm:inline" /> assets, or offer public investment products.
      </>
    ),
  },
  {
    q: "How can a counterparty confirm transaction authority?",
    a: (
      <>
        Use established official channels and independent out-of-band verification. Website copy or email messages alone do not<br className="hidden sm:inline" /> constitute legal authorization.
      </>
    ),
  },
];

export function InstitutionalQuestionsSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="w-full">
      <SectionIntro
        id="faq-heading"
        title="Institutional Questions"
        text={
          <>
            Direct answers regarding our role, authority boundaries, and counterparty<br className="hidden sm:inline" /> interactions.
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
