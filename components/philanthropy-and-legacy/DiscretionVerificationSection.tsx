export function DiscretionVerificationSection() {
  return (
    <section
      id="discretion-and-verification"
      aria-label="Discretion and verification"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Discretion and verification
        </h2>

        <p className="pt-6 font-serif text-[16px] lg:text-[16.5px] xl:text-[17px] leading-[26.35px] text-[#34322E] w-full max-w-[1240px] tracking-[-0.005em]">
          McLeod Family Office does not publish private family decisions, beneficiary information, philanthropic budgets, recipient details or confidential documents on its
          <br className="hidden md:inline" />{" "}
          public website. An online message, familiar name or matching logo is not proof that a financial instruction is authorized.
        </p>

        {/* Standing Anti-Fraud Guidance Callout Box */}
        <div className="mt-[42px] border border-[#23463A] bg-[#EBE7DF] px-4 py-[34px] sm:px-6 lg:px-5 w-full max-w-[1240px]">
          <p className="font-serif text-[16px] lg:text-[16.5px] xl:text-[17px] leading-[26.35px] text-[#34322E] tracking-[-0.005em]">
            Standing anti-fraud guidance: Before acting on new or changed bank details, payment instructions or requests for sensitive information, independently verify
            <br className="hidden md:inline" />{" "}
            them using a contact route obtained from the Office’s official website or other independently authenticated source—not a number or link in the request itself.
          </p>
        </div>
      </div>
    </section>
  );
}
