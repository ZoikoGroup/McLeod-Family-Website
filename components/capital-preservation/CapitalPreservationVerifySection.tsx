import Image from "next/image";
import Link from "next/link";

export function CapitalPreservationVerifySection() {
  return (
    <section
      id="verify-communication-section"
      aria-label="Verify a Communication"
      className="relative w-full overflow-hidden bg-[#f4f0e8] py-20 px-6 lg:px-16"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/capital-preservation/verify-communication-bg.png"
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
            "linear-gradient(90deg, #f4f0e8 40%, rgba(244, 240, 232, 0.4) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div>
          <h2 className="pt-4 font-serif text-[36px] leading-[42px] sm:text-[46px] sm:leading-[51px] text-[#172130]">
            Verify before you act.
          </h2>

          <p className="pt-4 font-serif text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] text-[#172130]/90">
            <span className="block lg:whitespace-nowrap">
              Check approved McLeod digital properties and independently verify sensitive or changed financial instructions.
            </span>
            <span className="block lg:whitespace-nowrap">
              For legitimate legal, banking, corporate and professional correspondence, use an official contact route.
            </span>
            <span className="block lg:whitespace-nowrap">
              Do not include financial, identity or transaction secrets in an initial enquiry.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center gap-3 border border-[#c6a15b] bg-[#c6a15b] px-7 py-3.5 font-archivo text-[14px] leading-[22px] font-semibold text-[#172130] transition-opacity hover:opacity-90"
            >
              Open the Verification Centre
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center gap-3 border border-[#172130] bg-transparent px-7 py-3.5 font-archivo text-[14px] leading-[22px] font-semibold text-[#172130] transition-colors hover:bg-[#172130]/5"
            >
              Contact the Office
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
