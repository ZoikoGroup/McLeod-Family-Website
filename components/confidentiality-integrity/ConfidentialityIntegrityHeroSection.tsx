import Image from "next/image";
import Link from "next/link";

export function ConfidentialityIntegrityHeroSection() {
  return (
    <section
      id="confidentiality-integrity-hero"
      aria-label="Confidentiality and Integrity Hero"
      className="relative w-full overflow-hidden bg-[#23463a] min-h-[815px] flex items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/confidentiality-integrity/hero-confidentiality-integrity.png"
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

      {/* Content Container (Figma Container #374:4218, top: 120px, width: 1280px) */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-[120px] pb-20 lg:px-12 lg:pb-24">
        {/* Text:margin #374:4219 - padding: 0px 0px 16px */}
        <div className="pb-4">
          <p className="font-serif text-[13px] leading-[19px] tracking-[0.05em] uppercase text-[#d3a75a]">
            GOVERNANCE / CONFIDENTIALITY &amp; INTEGRITY
          </p>
        </div>

        {/* Heading 1 #374:4221 - padding: 0px 0px 24px */}
        <div className="pb-6">
          <h1 className="font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[59px] text-[#f4f1ea]">
            Confidentiality &amp; Integrity
          </h1>
        </div>

        {/* Paragraph:margin #374:4223 - padding: 0px 0px 24px */}
        <div className="pb-6">
          <p className="font-serif text-[20px] leading-[29px] text-[#f4f1ea]/90 max-w-[800px]">
            <span className="block sm:whitespace-nowrap">
              Confidentiality protects information that should remain private. Integrity requires that
            </span>
            <span className="block sm:whitespace-nowrap">
              material instructions and disclosures are attributable to the right authority and independently
            </span>
            <span className="block sm:whitespace-nowrap">
              verified before action.
            </span>
          </p>
        </div>

        {/* Paragraph:margin #374:4226 - padding: 0px 0px 24px, width: 800 */}
        <div className="pb-6">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#f4f1ea]/90 max-w-[800px]">
            <span className="block sm:whitespace-nowrap">
              McLeod Family Office coordinates family stewardship within defined mandates. Information is shared for a
            </span>
            <span className="block sm:whitespace-nowrap">
              legitimate purpose, with appropriate counterparties and through established channels. Public information does
            </span>
            <span className="block sm:whitespace-nowrap">
              not establish the legal authority of any individual, entity or transaction.
            </span>
          </p>
        </div>

        {/* Paragraph:margin (Callout) #374:4229 - padding: 16px 0px 24px, width: 800 */}
        <div className="pt-4 pb-6">
          <div className="max-w-[800px] border-l-2 border-[#d3a75a] pl-4">
            <p className="font-serif text-[17px] leading-[26.35px] text-[#f4f1ea]/90">
              <span className="block sm:whitespace-nowrap">
                McLeod Family Office serves the McLeod family. It does not solicit third-party capital, manage external
              </span>
              <span className="block sm:whitespace-nowrap">
                client assets or offer investment products to the public.
              </span>
            </p>
          </div>
        </div>

        {/* Container (Buttons) #374:4232 - padding: 32px 0px 0px, gap: 16px */}
        <div className="pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#d3a75a] bg-[#d3a75a] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322e] transition-opacity hover:opacity-90"
            >
              Open the Verification Centre
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#f4f1ea] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#f4f1ea] transition-colors hover:bg-white/10"
            >
              Contact the Office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
