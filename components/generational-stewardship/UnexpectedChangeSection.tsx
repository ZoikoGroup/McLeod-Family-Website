export function UnexpectedChangeSection() {
  return (
    <section aria-label="Unexpected Circumstances" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Responsibility should remain defined when circumstances change
          <br className="hidden lg:inline" />{" "}
          unexpectedly.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          The Office’s continuity principles recognize delegated authority and escalation for unexpected absence or
          <br className="hidden lg:inline" />{" "}
          disruption. Appropriate details are maintained through controlled institutional processes, not disclosed
          <br className="hidden lg:inline" />{" "}
          through a public page.
        </p>

        {/* Callout */}
        <div className="mt-6 max-w-[960px] border-l-2 border-[#d3a75a] py-1 pl-4">
          <p className="font-serif italic text-[18px] sm:text-[20px] leading-[29px] text-[#23463a]">
            Critical functions have delegated authorities, escalation paths and continuity arrangements for
            <br className="hidden lg:inline" />{" "}
            unexpected absence or disruption.
          </p>
        </div>
      </div>
    </section>
  );
}
