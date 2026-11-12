import Image from "next/image";
import Link from "next/link";

export default function RealAssetsAndPrivateHoldingsHeroSection() {
  return (
    <section
      id="real-assets-and-private-holdings-hero"
      aria-label="Real Assets & Private Holdings Hero"
      className="relative w-full overflow-hidden bg-[#23463a] min-h-[813px] flex items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/aware/hero.png"
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

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-[120px] pb-20 lg:px-12 lg:pb-24">
        {/* Breadcrumb / Eyebrow */}
        <div className="pb-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 font-serif text-[13px] leading-[19px] tracking-[0.05em] uppercase text-[#d3a75a]">
              <li>
                <Link href="/" className="hover:underline">
                  HOME
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/our-activities" className="hover:underline">
                  OUR ACTIVITIES
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#f4f1ea]/80">
                REAL ASSETS &amp; PRIVATE HOLDINGS
              </li>
            </ol>
          </nav>
        </div>

        {/* Heading 1 */}
        <div className="pb-6">
          <h1 className="font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[59px] text-[#f4f1ea]">
            Real Assets &amp; Private Holdings
          </h1>
        </div>

        {/* Lead Paragraph */}
        <div className="pb-6">
          <p className="font-serif text-[20px] leading-[29px] text-[#f4f1ea]/90 max-w-[800px]">
            Real-asset and private-holding responsibilities, where applicable,
            are considered within the
            <br className="hidden lg:inline" /> McLeod family&apos;s long-term
            institutional stewardship through purpose-appropriate
            <br className="hidden lg:inline" /> arrangements, defined authority
            and responsible oversight.
          </p>
        </div>

        {/* Callout */}
        <div className="pt-4 pb-6">
          <div className="max-w-[800px] border-l-2 border-[#d3a75a] pl-4">
            <p className="font-serif text-[17px] leading-[26.35px] text-[#f4f1ea]/90">
              McLeod Family Office serves one family. This page does not
              identify particular holdings or establish legal ownership, asset-
              <br className="hidden lg:inline" /> management authority or an
              investment offering to the public.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#d3a75a] bg-[#d3a75a] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322e] transition-opacity hover:opacity-90"
            >
              Verify a Communication
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
