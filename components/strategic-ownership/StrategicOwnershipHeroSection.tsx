import Link from "next/link";
import Image from "next/image";

export function StrategicOwnershipHeroSection() {
  return (
    <section
      id="strategic-ownership-hero"
      aria-label="Strategic Ownership & Enterprise Interests Hero"
      className="relative w-full overflow-hidden bg-[#23463A] min-h-[788px] flex items-center lg:items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/strategic-ownership/strategic-ownership-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Linear Gradient Overlay: 90deg, #23463a@95% to #23463a@70% */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(35, 70, 58, 0.95) 0%, rgba(35, 70, 58, 0.7) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-24 pb-20 lg:pt-[149px] lg:pb-24">
        {/* Eyebrow */}
        <p className="font-serif text-[13px] leading-[18.85px] tracking-[0.05em] uppercase text-[#D3A75A]">
          Strategic Ownership & Enterprise Interests
        </p>

        {/* Heading 1 */}
        <h1 className="pt-4 font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[58.8px] text-[#F4F1EA]">
          Strategic Ownership & Enterprise Interests
        </h1>

        {/* Subtitle */}
        <p className="pt-6 font-serif text-[20px] leading-[29px] text-[#F4F1EA] max-w-[373px]">
          A long horizon for enterprise responsibility.
        </p>

        {/* Paragraph 1 */}
        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] max-w-[800px]">
          The Office supports the long-term stewardship of family enterprise interests through ownership principles, board discipline, strategic oversight and clear reporting. McLeod Family Office may coordinate owner-level priorities and governance within defined mandates, rather than replacing the leadership of the businesses concerned.
        </p>

        {/* Paragraph 2 */}
        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] max-w-[800px]">
          Operating businesses retain their own boards, executives and day-to-day management. The identity of a particular legal owner, contracting party or authorized decision-maker must be established separately for the matter at hand.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="generational-stewardship"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#D3A75A] bg-[#D3A75A] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] transition-opacity hover:opacity-90"
          >
            Explore Enterprise Stewardship
          </Link>
          <Link
            href="/verification"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#F4F1EA] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:bg-white/10"
          >
            Open the Verification Centre
          </Link>
        </div>
      </div>
    </section>
  );
}
