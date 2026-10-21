import Link from "next/link";

const lg =<br className="hidden xl:block" />;

export function PurposeVisionMissionSection() {
  const card =
    "flex flex-col items-start border-t border-[rgba(184,156,99,0.3)] pt-6";
  const label =
    "font-serif text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[#b89c63]";
  return (
    <section id="purpose" className="bg-[#1b2b23] py-16 lg:min-h-[644px] xl:h-[644px] lg:py-[128px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <h2 className="font-serif text-[32px] leading-[40px] text-[#b89c63] lg:text-[48px] lg:leading-[48px]">
          Built for continuity, not cycles.
        </h2>
        <div className="grid grid-cols-1 gap-8 pt-10 lg:grid-cols-3 xl:h-[340px] xl:grid-rows-[260px] lg:pt-[80px]">
          <div className={card}>
            <h3 className={label}>Purpose</h3>
            <p className="pt-6 font-serif text-[24px] leading-[33px] text-[#f4f1eb]">
              To convert long-term family{lg} responsibility into disciplined{lg} institutional action.
            </p>
            <Link
              href="/the-office/our-purpose-mandate"
              className="mt-6 font-sans text-[14px] leading-[20px] text-[#b89c63] underline-offset-4 hover:underline"
            >
              Read our Purpose &amp; Mandate →
            </Link>
          </div>
          <div className={card}>
            <h3 className={label}>Vision</h3>
            <p className="pt-6 font-serif text-[20px] leading-[32.5px] text-[rgba(244,241,235,0.8)]">
              To build an enduring family institution that{lg} preserves independence, strengthens{lg} enterprise, compounds capital responsibly{lg} and carries stewardship across generations.
            </p>
            <Link
              href="/the-office/vision-mission-values"
              className="mt-6 font-sans text-[14px] leading-[20px] text-[#b89c63] underline-offset-4 hover:underline"
            >
              Read our Vision, Mission &amp; Values →
            </Link>
          </div>
          <div className={card}>
            <h3 className={label}>Mission</h3>
            <p className="pt-6 font-serif text-[20px] leading-[32.5px] text-[rgba(244,241,235,0.8)]">
              To steward the McLeod family’s capital,{lg} enterprise interests and governance through{lg} clear decision rights, disciplined allocation,{lg} rigorous risk management and prepared{lg} succession — protecting continuity while{lg} enabling long-term opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
