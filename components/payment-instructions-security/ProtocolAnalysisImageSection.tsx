import Image from "next/image";

export function ProtocolAnalysisImageSection() {
  return (
    <section aria-label="Security Protocol Analysis Graphic" className="pt-12">
      <div className="relative w-full overflow-hidden rounded-[2px] max-w-[1184px] aspect-[1184/458]">
        <Image
          src="/images/payment-instructions-security/security-protocol-analysis-79b2a4.png"
          alt="Security Protocol Analysis"
          fill
          sizes="(max-width: 1280px) 100vw, 1184px"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

