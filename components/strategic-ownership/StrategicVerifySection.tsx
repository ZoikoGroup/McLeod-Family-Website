import Link from "next/link";

export function StrategicVerifySection() {
  return (
    <section
      id="verify-before-you-act"
      aria-label="Verify before you act"
      className="w-full bg-[#23463A] px-6 py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#D3A75A]">
          Verify before you act. Contact through official channels.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] max-w-[800px]">
          Before acting on a sensitive or changed instruction concerning McLeod Family Office or a related enterprise, independently verify the communication and the authority of the relevant party. For legitimate institutional enquiries, use the Office’s official contact route and do not transmit confidential financial or identity information until an appropriate secure channel has been established.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="/verification"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#D3A75A] bg-[#D3A75A] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] transition-opacity hover:opacity-90"
          >
            Open the Verification Centre
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#F4F1EA] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:bg-white/10"
          >
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  );
}
