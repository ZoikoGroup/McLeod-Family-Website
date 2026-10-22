export function DiscretionVerificationSection() {
  return (
    <section
      id="discretion-and-verification"
      aria-label="Discretion in what is shown. Verification before action."
      className="w-full pt-12 border-t border-swirl"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Discretion in what is shown. Verification before action.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
        McLeod Family Office does not publish private family records, administrative files, internal reporting, sensitive identities or confidential entity information through
        <br className="hidden lg:inline" /> this page. Legitimate counterparties should use official contact routes and independently verify communications before sharing sensitive information or acting on
        <br className="hidden lg:inline" /> instructions.
      </p>

      {/* Standing Approved Safeguard Callout */}
      <div
        className="mt-6 border-l border-[#C6A15B] px-4 py-6 w-full"
        style={{ backgroundColor: "rgba(244, 236, 217, 1)" }}
      >
        <p className="font-serif text-[17px] leading-[26.35px] text-[#34322E]">
          Standing approved safeguard: New or changed bank details, payment instructions or other sensitive transaction instructions must not be acted upon solely
          <br className="hidden lg:inline" /> because they arrived by email, messaging or documents. Verify independently using a separately obtained official contact route. Email authentication alone does
          <br className="hidden lg:inline" /> not authorize a transaction.
        </p>
      </div>
    </section>
  );
}
