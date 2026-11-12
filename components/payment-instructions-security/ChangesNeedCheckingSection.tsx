const items = [
  {
    title: "Changed beneficiary account",
    description:
      "Do not update payable records yet; use independently sourced callback to confirm exact changed details; apply two-person or relevant internal approvals.",
  },
  {
    title: "Urgent revised wire instructions",
    description:
      "Treat urgency as a warning, not authority; stop until separately confirmed through existing trusted processes.",
  },
  {
    title: "Existing conversation thread",
    description:
      "Assume thread could be compromised; do not rely on reply-all for independent verification.",
  },
  {
    title: "Invoice QR/link has changed",
    description:
      "Treat QR or link as payment-direction data requiring separate confirmation.",
  },
];

export function ChangesNeedCheckingSection() {
  return (
    <section aria-label="Changes that need checking" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Changes that need checking
        </h2>
        <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
          Treat changes to account, beneficiary, routing, remittance or settlement instructions as sensitive—even if they appear in an established email thread or invoice.
        </p>

        <div className="pt-12 flex flex-col gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-[322.66px_1fr] lg:grid-cols-[322.66px_645.34px] gap-2 md:gap-8 border-b border-[#D6D1C6] pb-6"
            >
              <h3 className="font-serif text-[20px] sm:text-[22px] leading-[27.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[646px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

