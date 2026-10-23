export function DiscretionResponsibilitySection() {
  return (
    <section
      id="discretion-responsibility"
      aria-label="Discretion is a responsibility, not a claim of absolute secrecy"
      className="w-full pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Discretion is a responsibility, not a claim of absolute secrecy.
        </h2>

        <div className="pt-6 flex flex-col gap-7">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
            The website does not disclose private family identities, beneficiaries, trusts, estate instructions, tax identifiers, financial arrangements or professional opinions. Sensitive requests should be checked through official channels before any information is shared.
          </p>

          <div className="border-l border-[#1F7A6C] bg-[#EBE7DF] px-4 py-8 sm:px-6 sm:py-8 max-w-[1184px]">
            <p className="font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[750px]">
              <strong className="font-semibold">Standing anti-fraud guidance:</strong> Before acting on new or changed bank details, payment instructions or requests for sensitive information, independently verify them using a contact route obtained from the Office’s official website or other independently authenticated source—not a number or link in the request itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
