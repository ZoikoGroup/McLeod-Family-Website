import Image from "next/image";

export function ProtectSensitiveInformationSection() {
  return (
    <section aria-label="Protect sensitive information" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Protect sensitive information
        </h2>
        <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
          Do not submit passwords, one-time codes, recovery codes, identity documents, account numbers, invoices or transaction records through this public page.
        </p>

        <div className="mt-8 relative w-full overflow-hidden rounded-[2px] max-w-[1184px] aspect-[1184/529]">
          <Image
            src="/images/payment-instructions-security/compliance-verification-checks.png"
            alt="Compliance and Verification Checks"
            fill
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

