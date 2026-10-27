import Image from "next/image";
import Link from "next/link";

export function SuccessionContinuityHeroSection() {
  return (
    <section
      id="succession-continuity-hero"
      aria-label="Succession and Continuity"
      className="relative -mt-px w-full overflow-hidden bg-[#173028] min-h-[807px] flex items-center py-20 lg:py-[100px]"
    >
      <style>{`
        header {
          border-bottom-color: transparent !important;
        }
      `}</style>

      {/* Background Enduring Institutional Continuity Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/succession-and-continuity/hero-succession-and-continuity.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 rounded-[2px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-[960px]">
          {/* Eyebrow Label */}
          <p className="font-sans text-xs font-semibold leading-[19.2px] tracking-[0.15em] text-[#C5A059] uppercase">
            GOVERNANCE / CONTINUITY
          </p>

          {/* Heading 1 */}
          <h1 className="pt-3 font-serif text-[44px] leading-[52px] sm:text-[56px] sm:leading-[64.4px] tracking-[-0.01em] text-[#F4F1EA]">
            Succession &amp; Continuity
          </h1>

          {/* Subheading (Italic in Figma) */}
          <p className="pt-5 font-serif text-[22px] leading-[29px] sm:text-[24px] sm:leading-[31.2px] italic text-[#C5A059]">
            Prepared transitions. Defined authority. Enduring accountability.
          </p>

          {/* Body Paragraph */}
          <div className="pt-6 font-sans text-base leading-[28px] sm:text-[18px] sm:leading-[28.8px] text-[rgba(244,241,234,0.9)]">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              McLeod Family Office approaches succession and continuity as matters of governance and prepared
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              responsibility. Thoughtful preparation helps clarify decision-making, preserve institutional knowledge, and
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              support stewardship across generations.
            </span>
          </div>

          {/* Institutional Boundary Callout */}
          <div className="mt-8 border-l-2 border-[#C5A059] bg-white/5 px-5 py-4">
            <p className="font-sans text-sm leading-[22.4px] text-[rgba(244,241,234,0.85)]">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                <strong className="font-bold text-[rgba(244,241,234,0.85)]">
                  Institutional Boundary:
                </strong>{" "}
                The Office coordinates within defined mandates. Family direction, legally distinct entities, operating businesses, and
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                specialist advisers retain their respective responsibilities. Individual family arrangements, authority instruments, and private plans are
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                not presented publicly.
              </span>
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-9">
            <Link
              href="#governance-framework"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-[#C5A059] bg-[#C5A059] px-6 py-3 font-sans text-sm font-medium leading-[22.4px] tracking-[0.05em] text-white transition-opacity hover:opacity-90"
            >
              Explore Governance Framework →
            </Link>
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-[rgba(244,241,234,0.4)] bg-transparent px-6 py-3 font-sans text-sm font-medium leading-[22.4px] tracking-[0.05em] text-[#F4F1EA] transition-colors hover:border-[#F4F1EA]"
            >
              Verify Communication
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
