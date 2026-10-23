import Image from "next/image";

export function AnalysisReportingImageSection() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-[2px] h-[320px] sm:h-[440px] lg:h-[558px] mt-8 lg:mt-12"
    >
      <Image
        src="/images/strategic-ownership/strategic-analysis-and-reporting.png"
        alt="Strategic Analysis and Reporting"
        fill
        sizes="(max-width: 1280px) 100vw, 1184px"
        className="object-cover object-center"
      />
    </div>
  );
}
