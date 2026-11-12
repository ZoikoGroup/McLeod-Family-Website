import Image from "next/image";

export default function BeforeYouReportSection() {
  return (
    <section
      id="before-you-report"
      aria-label="Before you report"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Warning Banner / Callout */}
        <div className="mb-12 border border-[#e5e0d5] bg-[#ebe6dc] p-6 sm:p-8">
          <p className="font-serif text-[13px] leading-[19px] tracking-[0.05em] uppercase text-[#23463a] mb-2">
            DO NOT SEND SENSITIVE DATA
          </p>
          <p className="font-serif text-[15px] leading-[23px] text-[#34322e]">
            Do not send money, passwords, one-time codes, account numbers,
            identity documents or confidential records because a message claims
            to represent McLeod Family Office.
          </p>
        </div>

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a]">
            Before you report
          </h2>
        </div>

        {/* Steps List */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Step 01 */}
          <div className="relative border-t border-[#e5e0d5] pt-6">
            <span className="font-serif text-[15px] tracking-[0.05em] text-[#d3a75a] block mb-2">
              01
            </span>
            <h3 className="font-serif text-[20px] leading-[26px] text-[#23463a] mb-2">
              Stop
            </h3>
            <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/80">
              Do not use links, telephone numbers or bank details supplied only
              by a suspicious message.
            </p>
          </div>

          {/* Step 02 */}
          <div className="relative border-t border-[#e5e0d5] pt-6">
            <span className="font-serif text-[15px] tracking-[0.05em] text-[#d3a75a] block mb-2">
              02
            </span>
            <h3 className="font-serif text-[20px] leading-[26px] text-[#23463a] mb-2">
              Verify
            </h3>
            <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/80">
              Visit official sources independently; for new or changed payment
              instructions, obtain a trusted contact channel separately and
              confirm the specific details directly.
            </p>
          </div>

          {/* Step 03 */}
          <div className="relative border-t border-[#e5e0d5] pt-6">
            <span className="font-serif text-[15px] tracking-[0.05em] text-[#d3a75a] block mb-2">
              03
            </span>
            <h3 className="font-serif text-[20px] leading-[26px] text-[#23463a] mb-2">
              Report only if available
            </h3>
            <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/80">
              Describe the concern briefly using the approved form. Do not paste
              the full message, click suspect links or upload confidential
              attachments.
            </p>
          </div>
        </div>

        {/* Feature Image Container */}
        <div className="relative w-full overflow-hidden">
          <div className="relative aspect-[16/9] w-full min-h-[400px] sm:min-h-[500px]">
            <Image
              src="/images/real/2.png"
              alt="Person reviewing documents securely"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
