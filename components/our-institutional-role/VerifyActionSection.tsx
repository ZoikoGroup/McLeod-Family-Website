import Link from "next/link";

export function VerifyActionSection() {
  return (
    <section aria-labelledby="verify-cta-heading" className="w-full pt-10">
      <div className="border border-swirl bg-[#faf8f5] p-8 sm:p-14 text-center">
        <h2
          id="verify-cta-heading"
          className="font-serif text-[30px] leading-9 text-dune sm:text-4xl sm:leading-[41px]"
        >
          Verify Before You Act
        </h2>
        <p className="mx-auto max-w-[640px] pt-4 text-base leading-[26px] text-[#5a5752]">
          Confirm official domains and correspondence protocols before acting on<br className="hidden sm:inline" /> sensitive instructions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <Link
            href="/verification"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-twine bg-twine px-6 py-3 text-sm font-medium leading-[22px] tracking-[0.7px] text-white transition-colors hover:bg-[#b38f4c]"
          >
            Open Verification Centre →
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-swirl px-6 py-3 text-sm font-medium leading-[22px] tracking-[0.7px] text-dune transition-colors hover:border-dune"
          >
            Institutional Enquiries
          </Link>
        </div>
      </div>
    </section>
  );
}
