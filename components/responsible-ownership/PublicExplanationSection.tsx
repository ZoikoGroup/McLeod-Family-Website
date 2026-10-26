export function PublicExplanationSection() {
  return (
    <section aria-label="Public Explanation" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Public explanation is not private disclosure.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          McLeod Family Office publishes the information needed to understand its institutional purpose, verify official
          <br className="hidden lg:inline" />{" "}
          communications and make legitimate contact. The details of family holdings, enterprise ownership, financial
          <br className="hidden lg:inline" />{" "}
          performance, personal arrangements and internal governance are not published through this page.
        </p>

        {/* 2 Rows */}
        <div className="pt-12 max-w-[1000px] flex flex-col gap-6">
          {/* Disclose publicly */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Disclose publicly
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Approved institution name, exact descriptor and high-level mandate. Ownership
              <br className="hidden lg:inline" />{" "}
              stewardship principles and board/executive separation. General references to
              <br className="hidden lg:inline" />{" "}
              governance, risk, reporting, continuity.
            </p>
          </div>

          {/* Do not publish */}
          <div className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 border-b border-[#d6d1c6] pb-6">
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              Do not publish
            </h3>
            <p className="font-serif text-[17px] leading-[26px] text-[#34322e]">
              Names/addresses of family members or staff. List of private companies, property
              <br className="hidden lg:inline" />{" "}
              holdings, AUM or asset values. Shareholder agreements, reserved-matter lists, voting
              <br className="hidden lg:inline" />{" "}
              rights, meeting minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
