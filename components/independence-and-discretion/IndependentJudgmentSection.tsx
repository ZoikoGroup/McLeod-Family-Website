import Image from "next/image";
import { SectionIntro } from "./SectionIntro";

export function IndependentJudgmentSection() {
  return (
    <section id="independent-judgment" aria-labelledby="independent-judgment-heading" className="w-full">
      <SectionIntro
        id="independent-judgment-heading"
        title="Independent Judgment Does Not Mean Working Alone"
        text={
          <>
            Specialist expertise is integrated while maintaining strict retention of<br className="hidden sm:inline" /> institutional accountability.
          </>
        }
      />

      {/* Feature Card */}
      <div className="mt-10 grid grid-cols-1 items-stretch overflow-hidden border border-swirl bg-[#faf8f5] md:grid-cols-[438px_1fr]">
        <div className="relative min-h-[260px] w-full md:min-h-[320px]">
          <Image
            src="/images/independence-and-discretion/executive-discussion.png"
            alt="Executive Discussion"
            fill
            sizes="(max-width: 768px) 100vw, 438px"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10">
          <h3 className="font-serif text-2xl leading-7 text-dune">
            Retained Accountability
          </h3>
          <p className="max-w-[358px] pt-3 text-[15px] leading-6 text-[#5a5752]">
            Specialist advisers and service providers<br className="hidden sm:inline" /> contribute expertise and independent challenge<br className="hidden sm:inline" /> when appropriate. However, engaging external<br className="hidden sm:inline" /> support does not substitute for the Office&apos;s<br className="hidden sm:inline" /> oversight.
          </p>
        </div>
      </div>

      {/* Two Grid Cards */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="border border-swirl bg-[#faf8f5] p-8">
          <h3 className="font-serif text-xl leading-[23px] text-dune">
            The Office Coordinates
          </h3>
          <p className="max-w-[381px] pt-3 text-[15px] leading-6 text-[#5a5752]">
            Long-term priorities, institutional governance, risk<br className="hidden sm:inline" /> mitigation, and consolidated reporting within defined<br className="hidden sm:inline" /> family-office mandates.
          </p>
        </div>

        <div className="border border-swirl bg-[#faf8f5] p-8">
          <h3 className="font-serif text-xl leading-[23px] text-dune">
            Advisers &amp; Boards Decide
          </h3>
          <p className="max-w-[381px] pt-3 text-[15px] leading-6 text-[#5a5752]">
            Operating boards direct daily commercial execution,<br className="hidden sm:inline" /> while external specialists deliver professional<br className="hidden sm:inline" /> services subject to their own professional duties.
          </p>
        </div>
      </div>
    </section>
  );
}
