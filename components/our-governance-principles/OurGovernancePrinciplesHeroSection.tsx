import Image from "next/image";
import Link from "next/link";

export function OurGovernancePrinciplesHeroSection() {
  return (
    <section
      id="our-governance-principles-hero"
      aria-label="Our Governance Principles Hero"
      className="relative w-full overflow-hidden bg-[#23463a] min-h-[813px] flex items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/our-governance-principles/hero-our-governance-principles.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Linear Gradient Overlay (Figma Node #374:2933) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(35, 70, 58, 0.95) 0%, rgba(35, 70, 58, 0.7) 100%)",
        }}
      />

      {/* Content Container (Figma Container #374:2934, top: 120px, width: 1280px) */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-[120px] pb-20 lg:px-12 lg:pb-24">
        {/* Text:margin #374:2935 - padding: 0px 0px 16px */}
        <div className="pb-4">
          <p className="font-serif text-[13px] leading-[19px] tracking-[0.05em] uppercase text-[#d3a75a]">
            GOVERNANCE
          </p>
        </div>

        {/* Heading 1 #374:2937 - padding: 0px 0px 24px */}
        <div className="pb-6">
          <h1 className="font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[59px] text-[#f4f1ea]">
            Our Governance Principles
          </h1>
        </div>

        {/* Paragraph:margin #374:2939 - padding: 0px 0px 24px */}
        <div className="pb-6">
          <p className="font-serif text-[20px] leading-[29px] text-[#f4f1ea]/90 max-w-[800px]">
            Clear authority. Separation of purpose. Accountability across time.
          </p>
        </div>

        {/* Paragraph:margin #374:2942 - padding: 0px 0px 24px, width: 800 */}
        <div className="pb-6">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#f4f1ea]/90 max-w-[800px]">
            McLeod Family Office approaches governance through defined mandates, purpose-appropriate responsibilities,
            <br className="hidden lg:inline" />{" "}
            independent judgment and continuity. These public principles explain how the Office understands
            <br className="hidden lg:inline" />{" "}
            stewardship. They do not disclose private family decisions, internal authorities or the legal identity of a
            <br className="hidden lg:inline" />{" "}
            contracting entity.
          </p>
        </div>

        {/* Paragraph:margin (Callout) #374:2945 - padding: 16px 0px 24px, width: 800 */}
        <div className="pt-4 pb-6">
          <div className="max-w-[800px] border-l-2 border-[#d3a75a] pl-4">
            <p className="font-serif text-[17px] leading-[26.35px] text-[#f4f1ea]/90">
              McLeod Family Office serves one family. It does not solicit third-party investment capital, manage external
              <br className="hidden lg:inline" />{" "}
              client assets or offer investment products to the public.
            </p>
          </div>
        </div>

        {/* Container (Buttons) #374:2948 - padding: 32px 0px 0px, gap: 16px */}
        <div className="pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/governance/institutional-oversight"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#d3a75a] bg-[#d3a75a] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322e] transition-opacity hover:opacity-90"
            >
              Read Decision Rights &amp; Controls
            </Link>
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#f4f1ea] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#f4f1ea] transition-colors hover:bg-white/10"
            >
              Open the Verification Centre
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
