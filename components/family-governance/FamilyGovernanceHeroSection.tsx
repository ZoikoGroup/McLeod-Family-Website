import Image from "next/image";
import Link from "next/link";

export function FamilyGovernanceHeroSection() {
  return (
    <section
      id="family-governance-hero"
      aria-label="Family Governance"
      className="relative -mt-px w-full overflow-hidden min-h-[810px] flex items-center py-20 lg:py-0"
    >
      <style>{`
        header {
          border-bottom-color: transparent !important;
        }
      `}</style>

      {/* Hero Background Image with Gradient Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/family-governance/hero-family-governance.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(61deg, rgba(3, 39, 33, 0.72) 40%, rgba(10, 141, 121, 0.29) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-12 lg:pt-[120px] lg:pb-[120px]">
        <div className="max-w-[800px]">
          {/* Eyebrow Label */}
          <p className="font-serif text-[13px] leading-[18.85px] tracking-[0.05em] text-[#D3A75A] uppercase">
            Governance / McLeod Family Office
          </p>

          {/* Heading 1 */}
          <h1 className="pt-4 font-serif text-[44px] leading-[48px] sm:text-[56px] sm:leading-[58.8px] text-[#F4F1EA]">
            Family Governance
          </h1>

          {/* Subheading */}
          <p className="pt-6 font-serif text-[18px] leading-[26px] sm:text-[20px] sm:leading-[29px] text-[#F4F1EA]/90">
            Family purpose sets direction. Defined mandates preserve accountability.
          </p>

          {/* Body Paragraph */}
          <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#F4F1EA]/90 max-w-[800px]">
            Within McLeod Family Office’s institutional model, family governance provides the long-term purpose and<br className="hidden md:inline" /> direction of stewardship. The Family Office coordinates its responsibilities under defined mandates; legally<br className="hidden md:inline" /> separate entities and operating businesses retain their own governance and execution responsibilities.
          </p>

          {/* Callout 1 (boxed) */}
          <div className="mt-4 p-6 bg-[#D6D1C6]/30 border-l-2 border-[#D3A75A] max-w-[800px]">
            <p className="font-serif text-[15px] leading-[24px] sm:text-[17px] sm:leading-[26.35px] text-[#F4F1EA] max-w-[750px]">
              This public explanation is not the family’s governing instrument, a list of reserved decisions, or<br className="hidden md:inline" /> evidence that a particular person may bind an entity.{" "}
            </p>
          </div>

          {/* Callout 2 */}
          <div className="mt-4 pl-4 border-l-2 border-[#D3A75A] max-w-[800px]">
            <p className="font-serif text-[15px] leading-[24px] sm:text-[17px] sm:leading-[26.35px] text-[#F4F1EA]/90 max-w-[782px]">
              McLeod Family Office serves one family. It does not solicit third-party investment capital, manage<br className="hidden md:inline" /> external client assets or offer investment products to the public.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-8">
            <Link
              href="/the-office/institutional-role"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#D3A75A] bg-[#D3A75A] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] transition-opacity hover:opacity-90"
            >
              Read Decision Rights &amp; Controls
            </Link>
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#F4F1EA] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:border-[#D3A75A] hover:text-[#D3A75A]"
            >
              Open the Verification Centre
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
