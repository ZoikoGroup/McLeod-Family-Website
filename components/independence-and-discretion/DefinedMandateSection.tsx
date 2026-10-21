import { SectionIntro } from "./SectionIntro";

export function DefinedMandateSection() {
  return (
    <section id="defined-mandate" aria-labelledby="defined-mandate-heading" className="w-full">
      <SectionIntro
        id="defined-mandate-heading"
        title="Independence Begins with a Defined Mandate"
        text={
          <>
            Organized around a continuing family purpose rather than short-term visibility or<br className="hidden sm:inline" /> commercial sales objectives.
          </>
        }
      />

      <div className="mt-8 border border-swirl bg-[#faf8f5] p-8 md:p-9">
        <p className="max-w-[844px] text-base leading-[26px] text-dune">
          The Office is established to serve the long-term interests of the McLeod family, not to offer an investment<br className="hidden sm:inline" /> platform to the public or to manage external client assets. Independence in this context is the ability to<br className="hidden sm:inline" /> organize institutional responsibilities around a continuing family purpose and decision framework.
        </p>
        <p className="max-w-[844px] pt-4 text-[15px] leading-6 text-[#5a5752]">
          That purpose is exercised through documented roles and responsible oversight. The legal requirements of distinct<br className="hidden sm:inline" /> entities and the responsibilities of their governing bodies remain separate and must not be represented as belonging<br className="hidden sm:inline" /> solely to the Family Office.
        </p>
      </div>
    </section>
  );
}
