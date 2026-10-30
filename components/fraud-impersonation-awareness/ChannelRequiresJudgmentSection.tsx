export function ChannelRequiresJudgmentSection() {
  return (
    <section aria-label="A familiar channel still requires judgment" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          A familiar channel still requires judgment.
        </h2>
        <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
          An official-looking domain, authenticated email, recognizable voice, staff name or existing message thread can support checking, but none independently proves that a person has authority to request a payment, bank-detail change or confidential disclosure. Confirm both the channel and the specific instruction using a source obtained separately. For authoritative, current website and correspondence records, use the Verification Centre.
        </p>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px]">
          <div className="border-t border-[#D6D1C6] pt-6">
            <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
              Does a matching sender domain prove the sender can authorize payment?
            </h3>
            <p className="pt-3 pb-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[312px]">
              No. A matching domain or SPF/DKIM/DMARC authentication is not transaction authorization; verify the specific change independently.
            </p>
          </div>

          <div className="border-t border-[#D6D1C6] pt-6">
            <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
              Is a telephone number in the suspicious message an independent route?
            </h3>
            <p className="pt-3 pb-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[312px]">
              No. Obtain the callback route separately from a trusted pre-existing record or current verified source.
            </p>
          </div>

          <div className="border-t border-[#D6D1C6] pt-6">
            <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
              Can an adviser or person be verified from a public employee list?
            </h3>
            <p className="pt-3 pb-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[312px]">
              Do not publish or rely on a public staff directory; verify role and authority through appropriate controlled channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

