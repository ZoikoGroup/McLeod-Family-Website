import Image from "next/image";
import Link from "next/link";

export default function AboutTheOfficeHeroSection() {
  return (
    <section
      id="about-the-office-hero"
      aria-label="About the Office Hero"
      className="relative w-full overflow-hidden bg-[#142a22] min-h-[720px] lg:min-h-[780px] flex items-center"
    >
      {/* Background Image atf1 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/About-the-Office/atf1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] lg:object-[65%_center]"
        />
      </div>

      {/* Rich Forest Green Gradient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20, 42, 34, 0.96) 0%, rgba(20, 42, 34, 0.92) 42%, rgba(20, 42, 34, 0.72) 70%, rgba(20, 42, 34, 0.45) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#142a22]/40 via-transparent to-[#142a22]/50"
      />

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-12 lg:py-28 xl:px-16">
        <div className="max-w-[680px]">
          {/* Eyebrow Label */}
          <div className="mb-4 lg:mb-5">
            <p className="font-sans text-[12px] font-medium leading-4 tracking-[0.15em] text-[#C6A15B] uppercase">
              MCLEOD FAMILY OFFICE
            </p>
          </div>

          {/* Heading 1 */}
          <h1 className="mb-5 font-serif text-[44px] leading-[48px] sm:text-[56px] sm:leading-[60px] lg:text-[64px] lg:leading-[68px] text-[#F4F1EA] tracking-[-0.01em]">
            About the Office
          </h1>

          {/* Subheading */}
          <p className="mb-6 font-serif text-[20px] leading-[28px] sm:text-[22px] sm:leading-[30px] lg:text-[24px] lg:leading-[34px] text-[#F4F1EA]">
            A private family office stewarding capital and legacy across generations.
          </p>

          {/* Body Paragraph */}
          <p className="mb-8 font-sans text-[15px] sm:text-[16px] leading-[26px] sm:leading-[27px] text-[#F4F1EA]/80 font-normal">
            McLeod Family Office serves one family. We coordinate stewardship, governance, risk,
            reporting, and continuity within defined mandates. Separate legal entities and operating
            businesses retain their own governing and management responsibilities.
          </p>

          {/* Quote / Institutional Perimeter Callout */}
          <div className="mb-9 border-l-2 border-[#C6A15B] pl-4 sm:pl-5 py-1">
            <p className="font-sans text-[14px] leading-[22px] sm:text-[14.5px] sm:leading-[23px] text-[#F4F1EA]/70">
              McLeod Family Office does not solicit third-party investment capital, manage external
              client assets or offer investment products to the public.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/the-office/our-purpose-mandate"
              className="inline-flex min-h-[44px] sm:min-h-[48px] items-center justify-center rounded-[2px] bg-[#C6A15B] px-6 py-2.5 sm:px-7 sm:py-3 font-sans text-[14px] sm:text-[15px] font-medium text-[#1A332A] transition-colors hover:bg-[#b8934f]"
            >
              Read our Mandate
            </Link>
            <Link
              href="/verification"
              className="inline-flex min-h-[44px] sm:min-h-[48px] items-center justify-center rounded-[2px] border border-[rgba(244,241,234,0.35)] bg-transparent px-6 py-2.5 sm:px-7 sm:py-3 font-sans text-[14px] sm:text-[15px] font-medium text-[#F4F1EA] transition-colors hover:bg-white/10 hover:border-white/60"
            >
              Open the Verification Centre
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
