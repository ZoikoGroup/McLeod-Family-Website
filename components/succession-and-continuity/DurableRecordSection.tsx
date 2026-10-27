export function DurableRecordSection() {
  return (
    <section aria-labelledby="durable-record-heading" className="w-full">
      <div className="max-w-[1216px]">
        <h2
          id="durable-record-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          A Durable Record Supports an Accountable Transition
        </h2>
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          Well-defined institutional responsibilities depend on appropriate documentation and on continuity of knowledge.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dark Green Card */}
        <div className="border border-[#23463A] bg-[#23463A] p-8 md:p-10">
          <h3 className="font-serif text-[20px] leading-[23px] sm:text-[21.6px] sm:leading-[24.84px] text-[#F4F1EA]">
            Public Governance Principles
          </h3>
          <div className="mt-4 max-w-[510px] font-sans text-[15px] leading-6 text-[rgba(244,241,234,0.9)]">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              The website explains oversight concepts, functional responsibility
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              boundaries, risk perimeter definitions, and official counterparty
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              verification routes.
            </span>
          </div>
        </div>

        {/* Light Warm White Card */}
        <div className="border border-[#D6D1C6] bg-[#FAF8F5] p-8 md:p-10">
          <h3 className="font-serif text-[20px] leading-[23px] sm:text-[21.6px] sm:leading-[24.84px] text-[#34322E]">
            Protected Internal Records
          </h3>
          <div className="mt-4 max-w-[510px] font-sans text-[15px] leading-6 text-[#5A5752]">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              Actual decisions, protected records, authorizations, oversight reports,
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              family succession documents, and access arrangements belong strictly
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              in controlled systems.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
