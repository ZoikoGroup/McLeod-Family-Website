export function PublicPrivateDetailSection() {
  return (
    <section aria-label="Public Principles Private Financial Detail" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Public principles. Private financial detail.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[880px]">
          The website explains how McLeod Family Office approaches responsibility without publishing the family’s
          <br className="hidden lg:inline" />{" "}
          financial positions, sensitive structures or confidential decision records. Information needed for legitimate
          <br className="hidden lg:inline" />{" "}
          institutional engagement is disclosed through authorized channels and verified independently where
          <br className="hidden lg:inline" />{" "}
          appropriate.
        </p>

        {/* 4 Rows List */}
        <div className="pt-10 max-w-[1000px] flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Always public only if approved
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Masterbrand, descriptor, institution perimeter, broad principles, safe verification/contact
              <br className="hidden lg:inline" />{" "}
              links.
            </p>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Private — not published
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Holdings, valuations, private allocations, performance, cash positions, leverage amounts
              <br className="hidden lg:inline" />{" "}
              and counterparty identities.
            </p>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Restricted security context
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Bank account numbers, payment instructions, IDs, beneficiary details, private messages.
            </p>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Legal/regulatory assertions
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Actual financial licenses, guarantee coverage, compliance attestations or regulated roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
