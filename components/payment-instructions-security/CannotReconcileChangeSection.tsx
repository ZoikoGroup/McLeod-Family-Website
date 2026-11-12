export function CannotReconcileChangeSection() {
  return (
    <section aria-label="If you cannot reconcile the change" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          If you cannot reconcile the change
        </h2>
        <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
          Do not proceed. Escalate within your organization’s established control process and use a separately trusted route to seek clarification.
        </p>

        <div className="pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[322.66px_1fr] lg:grid-cols-[322.66px_645.34px] gap-2 md:gap-8 border-b border-[#D6D1C6] pb-6">
            <h3 className="font-serif text-[20px] sm:text-[22px] leading-[27.5px] text-[#23463A]">
              Reported suspected redirection
            </h3>
            <p className="font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E]">
              Use own internal incident/escalation process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

