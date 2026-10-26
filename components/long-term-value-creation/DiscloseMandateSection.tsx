const disclosurePoints = [
  {
    title: "Disclose publicly",
    description:
      "Source-approved mandate, roles and conceptual decision principles. Official, validated domain and Verification destination. General boundaries of governance and continuity.",
  },
  {
    title: "Do not publish",
    description:
      "AUM, net worth, returns, valuations, investment product terms. Private entity maps and named properties. Unverified correspondent domains or callback phones. Family biographies or confidential documents.",
  },
];

export function DiscloseMandateSection() {
  return (
    <section
      id="disclose-mandate-protect-detail"
      aria-label="Disclose the mandate. Protect the private detail"
      className="mt-24 w-full border-t border-[#d6d1c6] pt-6"
    >
      <h2 className="font-serif text-[32px] leading-[36px] lg:text-[40px] lg:leading-[44px] text-[#23463a] max-w-[810px]">
        Disclose the mandate. Protect the private detail.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
        Public information helps legitimate counterparties understand the Office’s institutional position and verify important communications. It does not include family wealth, named holdings, private asset allocation, bank details, transaction instructions, or private succession arrangements. New or changed payment instructions must be checked independently using official contact details obtained separately from the instruction.
      </p>

      <div className="mt-12 max-w-[1000px] space-y-6">
        {disclosurePoints.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 md:grid-cols-[323px_1fr] gap-2 md:gap-8 border-b border-[#d6d1c6] pb-6"
          >
            <h3 className="font-serif text-[22px] leading-[28px] text-[#23463a]">
              {item.title}
            </h3>
            <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
