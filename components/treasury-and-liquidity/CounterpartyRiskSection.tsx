const exposureQuestions = [
  {
    title: "Why consider counterparties?",
    description: "Different obligations and relationships may introduce different risks.",
  },
  {
    title: "Why mention currency?",
    description: "Cross-border interests can make currency one relevant risk lens.",
  },
  {
    title: "Who assesses exposure?",
    description: "Authorities and specialists act under appropriate roles and mandates.",
  },
  {
    title: "What can readers verify?",
    description: "Only the Office identity and approved channels via Verification Centre.",
  },
];

export function CounterpartyRiskSection() {
  return (
    <section
      id="counterparty-risk"
      aria-label="Risks are considered across more than one label"
      className="w-full pt-16 sm:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Risks are considered across more than one label
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1174px]">
          Cash-related and investment-related responsibilities may present different exposures across entities, currencies and counterparties. Public information can explain why those distinctions matter without exposing any account, institution, holding or transaction.
        </p>

        {/* Golden Callout Box */}
        <div className="pt-6 max-w-[940px]">
          <blockquote className="border-l border-[#D3A75A] pl-6">
            <p className="font-serif italic text-[18px] sm:text-[20px] leading-[29px] text-[#23463A]">
              &ldquo;Risks are considered across asset, geography, currency, counterparty and operating exposures rather
              <br className="hidden sm:inline" />{" "}
              than through labels alone.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* 4 Rows List */}
        <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
          {exposureQuestions.map((item) => (
            <div
              key={item.title}
              className="border-b border-[#D6D1C6] pb-6 grid grid-cols-1 md:grid-cols-[323px_1fr] gap-2 md:gap-8 items-baseline"
            >
              <h3 className="font-serif text-[20px] leading-[25px] sm:text-[22px] sm:leading-[27.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="font-serif text-[17px] leading-[26.35px] text-[#34322E]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
