export function ReportingAccountabilitySection() {
  return (
    <section aria-labelledby="reporting-heading" className="w-full">
      <div className="max-w-[960px]">
        <h2
          id="reporting-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Reporting Supports Accountable Decisions
        </h2>
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          Clear reporting helps responsible parties evaluate material exposures and follow-up within their mandates.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dark Green Card */}
        <div className="border border-[#23463A] bg-[#23463A] p-8 md:p-10">
          <h3 className="font-serif text-[20px] leading-[23px] sm:text-[21.6px] sm:leading-[24.84px] text-[#F4F1EA]">
            Public Institutional Principles
          </h3>
          <p className="mt-4 max-w-[510px] font-sans text-[15px] leading-6 text-[rgba(244,241,234,0.9)]">
            The website explains oversight concepts, functional responsibility boundaries, risk perimeter definitions, and official counterparty verification routes.{" "}
          </p>
        </div>

        {/* Light Warm White Card */}
        <div className="border border-[#D6D1C6] bg-[#FAF8F5] p-8 md:p-10">
          <h3 className="font-serif text-[20px] leading-[23px] sm:text-[21.6px] sm:leading-[24.84px] text-[#34322E]">
            Restricted Private Records
          </h3>
          <p className="mt-4 max-w-[510px] font-sans text-[15px] leading-6 text-[#5A5752]">
            Real entity financial reports, minute books, individual holdings, private family arrangements, and confidential board packs remain strictly in controlled systems.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
