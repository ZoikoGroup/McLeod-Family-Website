export function PublicExplanationSection() {
  return (
    <section aria-label="Public Explanation" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Public explanation is not private disclosure.
        </h2>

        {/* 2 Rows */}
        <div className="pt-10 max-w-[1000px] flex flex-col gap-6">
          {/* Disclose publicly */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Disclose publicly
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Five continuity disciplines and institutional principles. Separation of authority and
              <br className="hidden lg:inline" />{" "}
              specialist roles. Independent verification guidance. Institutional presence and generic
              <br className="hidden lg:inline" />{" "}
              continuity philosophy.
            </p>
          </div>

          {/* Do not publish */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Do not publish
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              People, beneficiaries, schedules, family tree, delegated-signatory details, family legal
              <br className="hidden lg:inline" />{" "}
              instruments. Power-of-attorney details, trust instruments, private wills. Bank account
              <br className="hidden lg:inline" />{" "}
              details or transaction proofs. Emergency dependencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
