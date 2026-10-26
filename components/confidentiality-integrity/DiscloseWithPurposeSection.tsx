export function DiscloseWithPurposeSection() {
  return (
    <section aria-label="Disclose with Purpose" className="w-full">
      {/* Heading 2 */}
      <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
        Disclose with purpose, not by default.
      </h2>

      {/* Paragraph */}
      <div className="pt-6">
        <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[880px]">
          Confidential information is shared on a need-to-know basis for a legitimate institutional purpose. Before
          <br className="hidden lg:inline" />{" "}
          material is disclosed, the requesting counterparty and the basis for that exchange should be identified. A public
          <br className="hidden lg:inline" />{" "}
          webpage, an email signature or a familiar organization name does not by itself establish permission to receive
          <br className="hidden lg:inline" />{" "}
          protected information.
        </p>
      </div>

      {/* 2 Cards Grid */}
      <div className="pt-12 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="border-t border-[#d6d1c6] pt-6">
          <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463a]">
            Recognize the right counterparty
          </h3>
          <p className="pt-3 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
            Confirm the relevant organization and authorized contact before relying on a request to disclose nonpublic materials.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-t border-[#d6d1c6] pt-6">
          <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463a]">
            Use an agreed channel
          </h3>
          <p className="pt-3 font-serif text-[17px] leading-[26.35px] text-[#34322e]">
            Do not send identity documents, banking records, family information or confidential corporate files through an initial open enquiry. Establish an appropriate secure method through verified contacts first.
          </p>
        </div>
      </div>
    </section>
  );
}
