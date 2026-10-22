import Link from "next/link";

export function CapitalVerifySection() {
  return (
    <section
      id="trust-verify"
      aria-label="Trust first. Verify before you act."
      className="w-full bg-[#23463A] px-6 py-12 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1280px] text-center">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-white">
          Trust first. Verify before you act.
        </h2>

        <p className="mx-auto max-w-[760px] pt-6 font-serif text-[17px] leading-[26.35px] text-[#CFD9E4]">
          Confirm official McLeod domains, correspondence channels and the independent callback protocol before acting on sensitive instructions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <Link
            href="/verification"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#23463A] bg-[#C5A059] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:bg-[#b38f4c]"
          >
            Open the Verification Centre
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#CFD9E4] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-white transition-colors hover:bg-white/10"
          >
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  );
}
