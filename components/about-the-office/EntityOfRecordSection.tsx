export default function EntityOfRecordSection() {
  return (
    <section
      id="entity-of-record"
      aria-label="Entity of Record"
      className="w-full bg-[#F4F1EA] border-t border-[#DDD6C8]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16">
        {/* Section Heading */}
        <h2 className="mb-6 font-serif text-[34px] sm:text-[40px] lg:text-[44px] leading-[40px] sm:leading-[48px] text-[#1A332A]">
          Entity of Record
        </h2>

        {/* Primary Notice Paragraph */}
        <p className="mb-4 max-w-[920px] font-serif text-[15px] sm:text-[16.5px] leading-[26px] sm:leading-[28px] text-[#34322E]/90">
          Legal entity particulars, registered office details and regulatory statuses (where
          applicable) must be verified through the appropriate governing documents and public
          registers.
        </p>

        {/* Geographic Presence Disclosure */}
        <p className="max-w-[920px] font-sans text-[13px] sm:text-[13.5px] leading-[22px] text-[#5A606A]">
          The operating headquarters address listed in our footer is a public geographic presence
          disclosure. It does not replace the registered office of any specific legal entity.
        </p>
      </div>
    </section>
  );
}
