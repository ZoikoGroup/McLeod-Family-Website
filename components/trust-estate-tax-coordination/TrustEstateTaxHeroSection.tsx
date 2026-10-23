import Image from "next/image";
import Link from "next/link";

export function TrustEstateTaxHeroSection() {
  return (
    <section
      id="trust-estate-tax-hero"
      aria-label="Trust, Estate & Tax Coordination Hero"
      className="relative w-full overflow-hidden bg-[#23463A] min-h-[804px] flex items-center lg:items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/trust-estate-tax-coordination/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Linear Gradient Overlay: 90deg, rgba(35, 70, 58, 0.95) 0% to rgba(35, 70, 58, 0.7) 100% */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(35, 70, 58, 0.95) 0%, rgba(35, 70, 58, 0.7) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-24 pb-20 lg:pt-[120px] lg:pb-[117px] lg:px-12">
        {/* Eyebrow */}
        <p className="font-serif text-[13px] leading-[18.85px] tracking-[0.05em] uppercase text-[#D3A75A]">
          Our Activities
        </p>

        {/* Heading 1 */}
        <h1 className="pt-4 font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[58.8px] text-[#F4F1EA] max-w-[811px]">
          Trust, Estate & Tax Coordination
        </h1>

        {/* Subtitle Paragraph */}
        <p className="pt-6 font-serif text-[20px] leading-[29px] text-[#F4F1EA]/90 max-w-[800px]">
          Long-term stewardship calls for clear authority across legal arrangements, continuity planning and tax considerations. McLeod Family Office coordinates responsibilities within defined mandates, while the relevant legal entities, fiduciaries and qualified specialists retain their own duties.
        </p>

        {/* Body Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA]/90 max-w-[800px]">
          These matters depend on the applicable legal arrangements, responsible decision-makers and jurisdictions. Our public explanation describes the Office’s institutional role; it does not identify private family structures, appoint representatives or offer legal, estate or tax services to the public.
        </p>

        {/* Callout Box with left border */}
        <div className="pt-4">
          <div className="border-l-2 border-[#D3A75A] pl-4 max-w-[800px]">
            <p className="font-serif text-[17px] leading-[26.35px] text-[#F4F1EA]/90 max-w-[782px]">
              McLeod Family Office is a private single-family office. It does not solicit or accept third-party investment capital, manage external client assets or offer investment products to the public. This website is institutional information, not legal, fiduciary or tax advice.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="/verification"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#D3A75A] bg-[#D3A75A] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] transition-opacity hover:opacity-90"
          >
            Open the Verification Centre
          </Link>
          <Link
            href="/the-office/about#contact"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#F4F1EA] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:bg-white/10"
          >
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  );
}
