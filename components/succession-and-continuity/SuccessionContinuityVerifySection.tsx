import Image from "next/image";
import Link from "next/link";

export function SuccessionContinuityVerifySection() {
  return (
    <section
      id="verify-communication-section"
      aria-label="Commitment to Stewardship"
      className="relative w-full overflow-hidden bg-[#F4F0E8] py-20 px-6 lg:px-16"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/succession-and-continuity/verify-communication-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Linear Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(244, 240, 232, 1) 40%, rgba(244, 240, 232, 0.4) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="max-w-[800px]">
          {/* Heading 2 */}
          <h2 className="font-serif text-[36px] leading-[42px] sm:text-[46px] sm:leading-[50.6px] text-[#172130]">
            An enduring commitment to stewardship.
          </h2>

          {/* Subheading Paragraph */}
          <p className="pt-4 font-serif text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] text-[#172130]/90">
            For legitimate institutional correspondence and independent communication verification.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[2px] border border-[#C6A15B] bg-[#C6A15B] px-7 py-3.5 font-archivo text-[14px] font-semibold leading-[22.4px] text-[#172130] transition-opacity hover:opacity-90"
            >
              Contact the Office
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[2px] border border-[#172130] bg-transparent px-7 py-3.5 font-archivo text-[14px] font-semibold leading-[22.4px] text-[#172130] transition-colors hover:bg-[#172130]/5"
            >
              Verify a Communication
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
