import Image from "next/image";
import Link from "next/link";

export function ResponsibleOwnershipVerifySection() {
  return (
    <section
      id="verify-communication-section"
      aria-label="Verify a Communication"
      className="relative w-full overflow-hidden bg-[#f4f0e8] py-20 px-6 lg:px-16"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/responsible-ownership/verify-communication-bg.png"
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
        <div className="max-w-[800px]">
          <h2 className="pt-4 font-serif text-[36px] leading-[42px] sm:text-[46px] sm:leading-[51px] text-[#172130]">
            Verify before you act. Contact through
            <br />
            official channels.
          </h2>

          <p className="pt-4 font-serif text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] text-[#172130] max-w-[800px]">
            Before acting on a sensitive enterprise-related instruction or changed payment detail, confirm
            <br className="hidden lg:inline" />{" "}
            the communication and relevant authority through an independently obtained official
            <br className="hidden lg:inline" />{" "}
            contact route. For legitimate institutional matters, use Contact the Office and avoid
            <br className="hidden lg:inline" />{" "}
            sending confidential financial, identity or corporate records until a suitable secure
            <br className="hidden lg:inline" />{" "}
            channel has been established.
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
