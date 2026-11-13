import Image from "next/image";

export default function EnterpriseSection() {
  return (
    <section
      id="enterprise"
      aria-label="Enterprise"
      className="w-full bg-[#F4F1EA] border-t border-[#DDD6C8]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16">
        {/* Section Heading */}
        <h2 className="mb-4 font-serif text-[34px] sm:text-[40px] lg:text-[44px] leading-[40px] sm:leading-[48px] text-[#1A332A]">
          Enterprise
        </h2>

        {/* Subtitle with vertical gold accent bar */}
        <div className="mb-6 border-l-2 border-[#C6A15B] pl-3 py-0.5">
          <p className="font-serif italic text-[17px] sm:text-[19px] leading-[26px] text-[#34322E]">
            Long-term ownership and oversight orientation.
          </p>
        </div>

        {/* Description Paragraph */}
        <p className="mb-4 max-w-[920px] font-serif text-[15px] sm:text-[16.5px] leading-[26px] sm:leading-[28px] text-[#34322E]/90">
          The Office supports the long-term stewardship of family enterprise interests through
          ownership principles, board discipline, strategic oversight and clear reporting.
          Operating companies retain their own boards, executives and day-to-day management.
        </p>

        {/* Footnote / Disclaimer */}
        <p className="mb-8 max-w-[920px] font-sans text-[13px] sm:text-[13.5px] leading-[22px] text-[#5A606A]">
          We do not directly manage every operating company or act as a signatory for all entities.
        </p>

        {/* Section Image fo2 */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden">
          <Image
            src="/images/McLeod-Family-Office/fo2.jpg"
            alt="Enterprise oversight and governance review"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
