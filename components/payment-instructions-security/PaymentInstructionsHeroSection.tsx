import Image from "next/image";

export function PaymentInstructionsHeroSection() {
  return (
    <section
      id="payment-instructions-security-hero"
      aria-label="Payment & Instructions Security"
      className="relative -mt-px w-full overflow-hidden h-[805px]"
    >
      <style>{`
        header {
          border-bottom-color: transparent !important;
        }
      `}</style>

      {/* Hero Background Image with Gradient Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/payment-instructions-security/hero-payment-instructions-security.png"
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

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-0 lg:pl-[95px] pt-[266px]">
        <div className="max-w-[1006px]">
          {/* Eyebrow Label */}
          <p className="font-serif text-[13px] leading-[18.85px] tracking-[0.05em] text-[#D3A75A] uppercase pb-4">
            Verification / Payment &amp; Instructions Security
          </p>

          {/* Heading 1 */}
          <h1 className="font-serif text-[38px] leading-[44px] sm:text-[56px] sm:leading-[58.8px] text-[#F4F1EA] max-w-[1006px] pb-6">
            Verify payment instructions before acting.
          </h1>

          {/* Paragraph */}
          <p className="font-serif text-[18px] leading-[26px] sm:text-[20px] sm:leading-[29px] text-[#F4F1EA]/90 max-w-[800px]">
            New or changed bank details, beneficiary information, or payment instructions require
            <br className="hidden lg:inline" /> confirmation through a trusted contact route obtained independently from the message being
            <br className="hidden lg:inline" /> checked.
          </p>
        </div>
      </div>
    </section>
  );
}
