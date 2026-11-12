import Image from "next/image";
import Link from "next/link";

export default function ReportSuspiciousActivityHeroSection() {
  return (
    <section
      id="report-suspicious-activity-hero"
      aria-label="Report Suspicious Activity Hero"
      className="relative w-full overflow-hidden bg-[#23463a] min-h-[813px] flex items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/real/1.jpg"
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
        {/* Eyebrow Label */}
        <div className="pb-4">
          <p className="font-serif text-[13px] leading-[19px] tracking-[0.05em] uppercase text-[#d3a75a]">
            VERIFY BEFORE YOU ACT
          </p>
        </div>

        {/* Heading 1 */}
        <div className="pb-6">
          <h1 className="font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[59px] text-[#f4f1ea]">
            Report Suspicious Activity
          </h1>
        </div>

        {/* Lead Paragraph */}
        <div className="pb-6">
          <p className="font-serif text-[20px] leading-[29px] text-[#f4f1ea]/90 max-w-[800px]">
            If a communication or website appears to impersonate McLeod Family
            Office, stop before
            <br className="hidden lg:inline" /> acting. Verify official
            information independently.
          </p>
        </div>

        {/* Supporting Paragraph */}
        <div className="pb-6">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#f4f1ea]/90 max-w-[800px]">
            If the Office&apos;s reporting service is available, you may send a
            brief, non-sensitive account of your concern
            <br className="hidden lg:inline" /> through this page.
          </p>
        </div>

        {/* Callout */}
        <div className="pt-4 pb-6">
          <div className="max-w-[800px] border-l-2 border-[#d3a75a] pl-4">
            <p className="font-serif text-[17px] leading-[26.35px] text-[#f4f1ea]/90">
              McLeod Family Office is a private single-family office. It does
              not solicit third-party investment capital,
              <br className="hidden lg:inline" /> manage external client assets
              or offer investment products to the public.
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
              Open the Verification Centre
            </Link>
            <Link
              href="#reporting-form"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#f4f1ea] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#f4f1ea] transition-colors hover:bg-white/10"
            >
              Continue to reporting form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
