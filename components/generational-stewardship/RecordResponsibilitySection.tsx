export function RecordResponsibilitySection() {
  return (
    <section aria-label="Record of Responsibility" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Keep the record of responsibility, not a dependency on memory.
        </h2>

        {/* Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#34322e] max-w-[800px]">
          Institutions preserve continuity when key mandates, policies, material decisions and records can be carried
          <br className="hidden lg:inline" />{" "}
          across transitions through appropriate records management. This public principle does not provide access to
          <br className="hidden lg:inline" />{" "}
          records or establish a public repository.
        </p>

        {/* Callout */}
        <div className="mt-6 max-w-[960px] border-l-2 border-[#d3a75a] py-1 pl-4">
          <p className="font-serif italic text-[18px] sm:text-[20px] leading-[29px] text-[#23463a]">
            Material decisions, mandates, policies and records are documented so continuity does not depend on
            <br className="hidden lg:inline" />{" "}
            one person.
          </p>
        </div>
      </div>
    </section>
  );
}
