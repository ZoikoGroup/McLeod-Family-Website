import Link from "next/link";
import React from "react";

export function EscalateAuthorityBannerSection() {
  return (
    <section
      id="callback-policy"
      aria-labelledby="escalate-authority-heading"
      className="w-full rounded-[2px] bg-[#23463A] p-8 md:p-12"
    >
      <h2
        id="escalate-authority-heading"
        className="font-serif text-[28px] leading-[33px] sm:text-[32px] sm:leading-[36.8px] text-[#F4F1EA]"
      >
        Escalate Unclear Authority, Rather Than Infer It
      </h2>

      {/* First Paragraph: exactly 2 lines matching Figma */}
      <div className="mt-4 max-w-[1120px] font-sans text-base leading-[26px] sm:text-[17px] sm:leading-[27.2px] text-[rgba(244,241,234,0.9)]">
        <p className="block whitespace-normal lg:whitespace-nowrap">
          When an instruction is inconsistent, outside expected authority, or involves changed sensitive details, pause the action immediately and
        </p>
        <p className="block whitespace-normal lg:whitespace-nowrap">
          verify through official, independently sourced channels.
        </p>
      </div>

      {/* Standing Callback Policy: exactly 2 lines matching Figma */}
      <div className="mt-6 mb-8 max-w-[1120px] font-sans text-[15px] leading-6 text-[rgba(244,241,234,0.8)]">
        <p className="block whitespace-normal lg:whitespace-nowrap">
          <strong className="font-bold text-[rgba(244,241,234,0.8)]">
            Standing Callback Policy:
          </strong>{" "}
          Never act on new or changed payment instructions, bank details, or requests for confidential information solely because they
        </p>
        <p className="block whitespace-normal lg:whitespace-nowrap">
          arrived by email or electronic document. Independently verify through an official contact route obtained separately from the communication.
        </p>
      </div>

      <div>
        <Link
          href="/verification"
          className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-[#C5A059] bg-[#C5A059] px-6 py-3 font-sans text-sm font-medium leading-[22.4px] tracking-[0.05em] text-white transition-opacity hover:opacity-90"
        >
          Open Verification Centre →
        </Link>
      </div>
    </section>
  );
}
