import Link from "next/link";

export function ExpertiseJudgmentSection() {
  return (
    <section
      id="expertise-and-judgment"
      aria-label="Expertise supports judgment. It does not replace verification."
      className="w-full pt-16 sm:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Expertise supports judgment. It does not replace verification.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1133px]">
          The Office uses specialist advice where expertise, jurisdictional capability, independence or regulation makes it appropriate. Important correspondence and sensitive changes still require independent verification through an official channel. A domain appearing legitimate is not sufficient evidence of transaction authority.
        </p>

        {/* Golden Callout Box */}
        <div className="pt-6 max-w-[1000px]">
          <blockquote className="border-l border-[#D3A75A] pl-6">
            <p className="font-serif italic text-[18px] leading-[26px] sm:text-[20px] sm:leading-[29px] text-[#23463A]">
              External investment, tax, legal, banking, insurance and specialist advice is used when independence,
              <br className="hidden sm:inline" />{" "}
              regulation or domain expertise requires it.
            </p>
          </blockquote>
        </div>

        {/* Anti-Fraud / Standing Protocol Box */}
        <div className="mt-12 border-l-2 border-[#1F7A6C] bg-[#EBE7DF] p-6 sm:p-8">
          <h3 className="font-serif text-[20px] leading-[25px] sm:text-[22px] sm:leading-[27.5px] text-[#23463A]">
            Verify payment and bank-detail changes independently
          </h3>

          <p className="pt-4 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
            Do not act on new or changed payment instructions, bank details or beneficiary details solely because they arrived by email, message or document. Use an official contact route obtained independently of the instruction to confirm both the communication and the authority for the requested action.
          </p>

          <p className="pt-4 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[800px]">
            Email authentication can provide signals about sending infrastructure, but does not by itself establish that a payment or transaction instruction is authorized. Never send passwords, MFA codes or identity material through an unverified channel.
          </p>

          <div className="pt-6">
            <Link
              href="/verification"
              className="inline-flex min-h-[52px] items-center justify-center border border-[#23463A] bg-transparent px-8 py-3 font-serif text-[17px] leading-[26.35px] text-[#23463A] transition-colors hover:bg-[#23463A] hover:text-[#F4F1EA]"
            >
              Open the Payment & Bank Detail Protocol
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
