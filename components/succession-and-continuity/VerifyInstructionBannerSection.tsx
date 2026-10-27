import Image from "next/image";
import Link from "next/link";

export function VerifyInstructionBannerSection() {
  return (
    <section aria-labelledby="verify-instruction-heading" className="w-full">
      <div className="relative min-h-[482.58px] overflow-hidden rounded-[2px] bg-[#173028] p-8 sm:p-12 lg:p-16 flex items-center">
        {/* Background Long-Term Institutional Resilience Image */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="/images/succession-and-continuity/long-term-institutional-resilience.png"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="object-cover object-center opacity-28 rounded-[2px]"
          />
        </div>

        <div className="relative max-w-[840px]">
          <h2
            id="verify-instruction-heading"
            className="font-serif text-[30px] leading-9 sm:text-[36px] sm:leading-[41.4px] text-[#F4F1EA]"
          >
            Verify the Instruction. Do Not Infer Authority
          </h2>

          <p className="mt-4 font-sans text-base leading-[26px] sm:text-[17px] sm:leading-[27.2px] text-[rgba(244,241,234,0.9)]">
            A governance explanation is not evidence that a particular person may act for an entity. Independently verify unexpected communications and changed sensitive instructions using an approved contact route obtained separately from the original message.{" "}
          </p>

          <p className="mt-6 mb-8 font-sans text-[15px] leading-6 text-[rgba(244,241,234,0.8)]">
            <strong className="font-bold text-[rgba(244,241,234,0.8)]">
              Standing Anti-Fraud Callback Policy:
            </strong>{" "}
            New or changed bank details, payment instructions, or requests for confidential information must not be acted upon on the strength of email or messaging alone.{" "}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/verification"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-[#C5A059] bg-[#C5A059] px-6 py-3 font-sans text-sm font-medium leading-[22.4px] tracking-[0.05em] text-white transition-opacity hover:opacity-90"
            >
              Open Verification Centre →
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-[rgba(244,241,234,0.4)] bg-transparent px-6 py-3 font-sans text-sm font-medium leading-[22.4px] tracking-[0.05em] text-[#F4F1EA] transition-colors hover:border-[#F4F1EA]"
            >
              Institutional Enquiries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
