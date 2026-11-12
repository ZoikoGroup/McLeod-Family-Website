import Image from "next/image";

export function FraudComplianceImageSection() {
  return (
    <section aria-label="Compliance and Verification Checks Graphic" className="pt-12">
      <div className="relative w-full overflow-hidden rounded-[2px] max-w-[1184px] aspect-[1184/544]">
        <Image
          src="/images/fraud-impersonation-awareness/compliance-verification-checks-d07763.png"
          alt="Compliance and Verification Checks"
          fill
          sizes="(max-width: 1280px) 100vw, 1184px"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

