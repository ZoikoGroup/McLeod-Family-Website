import Image from "next/image";
import Link from "next/link";

export function TreasuryLiquidityHeroSection() {
  return (
    <section
      id="treasury-liquidity-hero"
      aria-label="Treasury & Liquidity Hero"
      className="relative min-h-[680px] w-full overflow-hidden bg-[#23463A] pt-16 pb-20 md:min-h-[740px] md:pt-20 md:pb-24 lg:min-h-[784px] lg:pt-24 lg:pb-28"
    >
      {/* Background Image */}
      <Image
        src="/images/treasury-and-liquidity/treasury-liquidity-hero.jpg"
        alt="Treasury and Liquidity Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Exact Linear Gradient Overlay matching Figma */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(35, 70, 58, 0.95) 0%, rgba(35, 70, 58, 0.70) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col justify-center px-6 lg:px-12">
        {/* Eyebrow */}
        <p className="mb-4 font-serif text-[13px] uppercase tracking-[0.05em] text-[#D3A75A]">
          Treasury & Liquidity
        </p>

        {/* Heading 1 */}
        <h1 className="mb-6 font-serif text-[38px] leading-[44px] text-[#F4F1EA] sm:text-[48px] sm:leading-[52px] lg:text-[56px] lg:leading-[58.8px]">
          Treasury & Liquidity
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-[800px] font-serif text-[18px] leading-[26px] text-[#F4F1EA] sm:text-[20px] sm:leading-[29px]">
          Liquidity is one consideration in the long-term stewardship of family capital. McLeod Family Office approaches capital responsibilities through defined mandates, deliberate attention to obligations and resilience, and clear separation of decision-making authority.
        </p>

        {/* Paragraph */}
        <p className="mb-8 max-w-[800px] font-serif text-[16px] leading-[24px] text-[#F4F1EA] sm:text-[17px] sm:leading-[26.35px]">
          The Office serves the McLeod family and purpose-specific family entities. It does not offer public treasury services, accept third-party investment capital, manage external client assets or provide investment products to the public.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/verification"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#D3A75A] bg-[#D3A75A] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] transition-opacity hover:opacity-90"
          >
            Verify a Communication
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#F4F1EA] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:bg-white/10"
          >
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  );
}
