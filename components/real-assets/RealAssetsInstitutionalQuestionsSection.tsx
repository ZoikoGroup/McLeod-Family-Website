interface InstitutionalQuestion {
  question: string;
  answer: string;
}

const INSTITUTIONAL_QUESTIONS: InstitutionalQuestion[] = [
  {
    question: 'What are "Real Assets & Private Holdings"?',
    answer:
      "This destination describes the Office's proposed high-level stewardship approach to such responsibilities where relevant; it does not list assets.",
  },
  {
    question: "Does the Office own the assets described?",
    answer:
      "No legal ownership conclusion is made by this page. Any specific owner must be established from the authoritative record for that matter.",
  },
  {
    question: "Does this page offer properties or private investments?",
    answer:
      "No. It is not a sale, letting, advisory service, fund, investment product or solicitation to external investors.",
  },
  {
    question: "Can I see addresses, valuations or holdings?",
    answer:
      "No. Private asset identifiers, individual ownership details, valuations and transaction data are not published through this page.",
  },
  {
    question: "Who makes asset-related decisions?",
    answer:
      "That depends on the legal entity, mandate, authorized decision-maker and governing requirements; the Family Office may coordinate only within its role.",
  },
  {
    question: "Are returns or capital preservation guaranteed?",
    answer:
      "No. Oversight and risk management are practices and cannot guarantee value, liquidity or protection from loss.",
  },
  {
    question: "How should I verify an asset-related communication?",
    answer:
      "Use the approved Verification Centre and an independently obtained official contact route before acting on changed or sensitive instructions.",
  },
];

export default function RealAssetsInstitutionalQuestionsSection() {
  return (
    <section
      id="real-assets-institutional-questions"
      aria-label="Institutional questions"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Top Border & Heading */}
        <div className="border-t border-[#e5e0d5] pt-12 mb-12">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a]">
            Institutional questions
          </h2>
        </div>

        {/* Questions List */}
        <div className="max-w-[960px] divide-y divide-[#e5e0d5] border-b border-[#e5e0d5]">
          {INSTITUTIONAL_QUESTIONS.map((item, index) => (
            <div key={index} className="py-7">
              <h3 className="font-serif text-[18px] leading-[25px] text-[#23463a] mb-2">
                {item.question}
              </h3>
              <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85 max-w-[820px]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
