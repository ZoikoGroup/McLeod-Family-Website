import Image from "next/image";
import React from "react";

export function IndependentJudgmentSection() {
  return (
    <section aria-labelledby="independent-judgment-heading" className="w-full">
      <div className="max-w-[960px]">
        <h2
          id="independent-judgment-heading"
          className="font-serif text-[32px] leading-[38px] sm:text-[36px] sm:leading-[41.4px] text-[#34322E]"
        >
          Independent Judgment Supports Responsible Oversight
        </h2>
        <p className="pt-4 font-sans text-lg leading-7 sm:text-[20px] sm:leading-[30px] text-[#34322E]">
          Relevant expertise and challenge help the responsible authority evaluate complex matters within an appropriate mandate.
        </p>
      </div>

      <div className="mt-10 overflow-hidden border border-[#D6D1C6] bg-[#FAF8F5] grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <div className="relative h-[280px] sm:h-[340px] lg:h-[390px] w-full">
          <Image
            src="/images/institutional-oversight/specialist-professional-consulting.png"
            alt="Specialist Professional Consulting"
            fill
            sizes="(max-width: 1024px) 100vw, 583px"
            className="object-cover object-center rounded-[2px]"
          />
        </div>
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="font-sans text-xs font-semibold leading-[19.2px] tracking-[0.15em] text-[#23463A] uppercase">
            RETAINED ACCOUNTABILITY
          </p>
          <h3 className="pt-3 font-serif text-[22px] leading-[26px] sm:text-[24px] sm:leading-[27.6px] text-[#34322E]">
            Non-Outsourced Governance
          </h3>
          {/* Paragraph: exactly 3 lines matching Figma */}
          <div className="pt-3 max-w-[487px] font-sans text-[15px] leading-6 text-[#5A5752]">
            <p className="block whitespace-normal lg:whitespace-nowrap">
              The use of specialist advisers does not transfer legal authority or
            </p>
            <p className="block whitespace-normal lg:whitespace-nowrap">
              turn the Family Office into a provider of legal, tax, or investment
            </p>
            <p className="block whitespace-normal lg:whitespace-nowrap">
              services to the public.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
