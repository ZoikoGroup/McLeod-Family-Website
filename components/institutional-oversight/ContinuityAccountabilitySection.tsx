import React from "react";

export function ContinuityAccountabilitySection() {
  return (
    <section aria-labelledby="continuity-heading" className="w-full">
      <div className="max-w-[960px]">
        <h2
          id="continuity-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Continuity and Long-Horizon Accountability
        </h2>
        {/* Subtitle: exactly 2 lines matching Figma */}
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            Preparing leadership transitions and maintaining institutional memory across changing
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            circumstances.
          </span>
        </p>
      </div>

      <div className="mt-8 border border-[#D6D1C6] bg-[#FAF8F5] p-8 md:p-10">
        <p className="max-w-[1134px] font-sans text-[16px] leading-[25.6px] text-[#34322E]">
          Disciplined stewardship requires that material mandates, decisions, and records remain available through structured institutional arrangements.{" "}
        </p>
        <p className="mt-4 max-w-[1134px] font-sans text-[15px] leading-6 text-[#5A5752]">
          This supports continuous accountability without exposing individual family details, participant ages, or private succession documents to the public.{" "}
        </p>
      </div>
    </section>
  );
}
