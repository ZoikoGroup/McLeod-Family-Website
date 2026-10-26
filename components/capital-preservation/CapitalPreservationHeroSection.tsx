import Image from "next/image";
import Link from "next/link";

export function CapitalPreservationHeroSection() {
  return (
    <section
      id="capital-preservation-hero"
      aria-label="Capital Preservation Hero"
      className="relative w-full overflow-hidden bg-[#23463a] min-h-[821px] flex items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/capital-preservation/hero-capital-preservation.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Linear Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(35, 70, 58, 0.95) 0%, rgba(35, 70, 58, 0.7) 100%)",
        }}
      />

      {/* Content Container (Figma Container #363:2208, top: 135px, width: 1280px) */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-[135px] pb-20 lg:px-12 lg:pb-24">
        {/* Text:margin #363:2209 - padding: 0px 0px 16px */}
        <div className="pb-4">
          <p className="font-serif text-[13px] leading-[19px] tracking-[0.05em] uppercase text-[#d3a75a]">
            STEWARDSHIP
          </p>
        </div>

        {/* Heading 1 #363:2211 - padding: 0px 0px 24px */}
        <div className="pb-6">
          <h1 className="font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[59px] text-[#f4f1ea]">
            Capital Preservation
          </h1>
        </div>

        {/* Paragraph:margin #363:2213 - padding: 0px 0px 24px */}
        <div className="pb-6">
          <p className="font-serif text-[20px] leading-[29px] text-[#f4f1ea]/90 max-w-[800px] sm:whitespace-nowrap">
            Protecting the capacity to act tomorrow begins with disciplined decisions today.
          </p>
        </div>

        {/* Paragraph:margin #363:2216 - padding: 0px 0px 24px, width: 800 */}
        <div className="pb-6">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#f4f1ea]/90 max-w-[800px]">
            McLeod Family Office considers capital preservation within a long-horizon framework of liquidity,
            <br className="hidden lg:inline" />{" "}
            concentration, risk, resilience and governance. Preservation is a stewardship objective that informs decisions; it
            <br className="hidden lg:inline" />{" "}
            is not a guarantee against loss or a claim of achieved financial performance.
          </p>
        </div>

        {/* Paragraph:margin (Callout) #363:2219 - padding: 16px 0px 24px, width: 800 */}
        <div className="pt-4 pb-6">
          <div className="max-w-[800px] border-l-2 border-[#d3a75a] pl-4">
            <p className="font-serif text-[17px] leading-[26.35px] text-[#f4f1ea]/90">
              The Office serves the McLeod family and its purpose-specific entities. This website does not offer investment
              <br className="hidden lg:inline" />{" "}
              products, investment advice or capital-management services to the public.
            </p>
          </div>
        </div>

        {/* Container (Buttons) #363:2222 - padding: 32px 0px 0px */}
        <div className="pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#d3a75a] bg-[#d3a75a] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322e] transition-opacity hover:opacity-90"
            >
              Verify a communication
            </Link>
            <Link
              href="/stewardship/our-stewardship-philosophy"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#f4f1ea] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#f4f1ea] transition-colors hover:bg-white/10"
            >
              Explore our capital principles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
