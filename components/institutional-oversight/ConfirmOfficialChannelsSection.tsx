import Link from "next/link";

export function ConfirmOfficialChannelsSection() {
  return (
    <section aria-labelledby="confirm-channels-heading" className="w-full">
      <div className="border border-[#D6D1C6] bg-[#FAF8F5] p-8 sm:p-12 lg:p-14">
        <h2
          id="confirm-channels-heading"
          className="font-serif text-[30px] leading-9 sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Confirm Official Channels Before Acting
        </h2>
        <p className="mt-4 max-w-[840px] font-sans text-base leading-6 sm:text-[16px] sm:leading-[25.6px] text-[#5A5752]">
          Verify unexpected communications or changed payment details through our official Verification Centre before relying on them.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href="/verification"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-[#C5A059] bg-[#C5A059] px-6 py-3 font-sans text-sm font-medium leading-[22.4px] tracking-[0.05em] text-white transition-opacity hover:opacity-90"
          >
            Open Verification Centre →
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-[#D6D1C6] bg-transparent px-6 py-3 font-sans text-sm font-medium leading-[22.4px] tracking-[0.05em] text-[#34322E] transition-colors hover:bg-[#34322E]/5"
          >
            Institutional Enquiries
          </Link>
        </div>
      </div>
    </section>
  );
}
