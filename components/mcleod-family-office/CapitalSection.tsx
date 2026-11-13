import Image from "next/image";

export default function CapitalSection() {
  return (
    <section
      id="capital"
      aria-label="Capital"
      className="w-full bg-[#F4F1EA] border-t border-[#DDD6C8]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16">
        {/* Section Heading */}
        <h2 className="mb-4 font-serif text-[34px] sm:text-[40px] lg:text-[44px] leading-[40px] sm:leading-[48px] text-[#1A332A]">
          Capital
        </h2>

        {/* Subtitle with vertical gold accent bar */}
        <div className="mb-6 border-l-2 border-[#C6A15B] pl-3 py-0.5">
          <p className="font-serif italic text-[17px] sm:text-[19px] leading-[26px] text-[#34322E]">
            Allocation, liquidity and risk discipline.
          </p>
        </div>

        {/* Description Paragraph */}
        <p className="mb-4 max-w-[920px] font-serif text-[15px] sm:text-[16.5px] leading-[26px] sm:leading-[28px] text-[#34322E]/90">
          Capital stewardship takes a long view of liquidity needs, concentration, resilience, cost
          and governance. Choices are evaluated with appropriate expertise and review. The family&apos;s
          capital principles guide the Office in maintaining a long horizon rather than reacting
          solely to near-term cycles.
        </p>

        {/* Footnote / Disclaimer */}
        <p className="mb-8 max-w-[920px] font-sans text-[13px] sm:text-[13.5px] leading-[22px] text-[#5A606A]">
          McLeod Family Office does not offer funds, investment products, open-account services,
          assets under management, or guaranteed returns to the public.
        </p>

        {/* Section Image fo3 */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden">
          <Image
            src="/images/McLeod-Family-Office/fo3.jpg"
            alt="Capital stewardship, liquidity and market analysis"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
