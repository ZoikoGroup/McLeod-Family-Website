import Image from "next/image";
import Link from "next/link";

export function FraudAwarenessHeroSection() {
  return (
    <section
      id="fraud-awareness-hero"
      aria-label="Fraud & Impersonation Awareness"
      className="relative -mt-px w-full overflow-hidden h-[800px]"
    >
      <style>{`
        header {
          border-bottom-color: transparent !important;
        }
      `}</style>

      {/* Hero Background Image with Gradient Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/fraud-impersonation-awareness/hero-fraud-awareness.png"
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
              "linear-gradient(90deg, rgba(35, 70, 58, 0.95) 0%, rgba(35, 70, 58, 0.7) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-0 lg:pl-[80px] pt-[173px]">
        <div className="max-w-[1280px]">
          {/* Eyebrow Label */}
          <p className="font-serif text-[13px] leading-[18.85px] tracking-[0.05em] text-[#D3A75A] uppercase pb-4">
            Verification / Safer Communication
          </p>

          {/* Heading 1 */}
          <h1 className="font-serif text-[38px] leading-[44px] sm:text-[56px] sm:leading-[58.8px] text-[#F4F1EA] max-w-[840px] pb-6">
            Fraud &amp; Impersonation Awareness
          </h1>

          {/* Subheading */}
          <p className="font-serif text-[18px] leading-[26px] sm:text-[20px] sm:leading-[29px] text-[#F4F1EA]/90 pb-6">
            A convincing message is not proof of identity or authority.
          </p>

          {/* Body Paragraph */}
          <p className="font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#F4F1EA]/90 max-w-[800px] pb-6">
            Unexpected requests may imitate names, brands, familiar threads or official-looking channels. Pause before sharing sensitive information, changing payment details or acting on urgent instructions. Verify through a route you obtained independently from the request.
          </p>

          {/* Single-family office statement */}
          <div className="border-l-2 border-[#D3A75A] pl-4 max-w-[800px] mb-8">
            <p className="font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#F4F1EA]/90 max-w-[782px]">
              McLeod Family Office is a private single-family office. This page is practical guidance, not an authentication or transaction-approval service.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#D3A75A] bg-[#D3A75A] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] transition-opacity hover:opacity-90"
            >
              Open the Verification Centre
            </Link>
            <Link
              href="/verification/payment-instructions-security"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#F4F1EA] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:border-[#D3A75A] hover:text-[#D3A75A]"
            >
              Review payment-instruction safeguards
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

