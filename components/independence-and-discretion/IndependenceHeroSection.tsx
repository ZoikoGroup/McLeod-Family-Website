import Image from "next/image";
import Link from "next/link";

export function IndependenceHeroSection() {
  return (
    <section
      id="independence-hero"
      aria-label="Independence & Discretion Overview"
      className="relative -mt-px w-full overflow-hidden bg-[#173028] py-20 lg:min-h-[802px] lg:flex lg:items-center lg:py-[100px]"
    >
      <style>{`
        header {
          border-bottom-color: transparent !important;
        }
      `}</style>
      {/* Background Architectural Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/independence-and-discretion/institutional-architecture.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-[840px]">
          {/* Eyebrow Label */}
          <p className="font-archivo text-xs font-semibold leading-[19px] tracking-[1.8px] text-twine uppercase">
            THE OFFICE · PRINCIPLES OF PRACTICE
          </p>

          {/* Page Heading */}
          <h1 className="pt-3 font-serif text-[44px] leading-[48px] tracking-[-0.56px] text-spring-wood sm:text-[56px] sm:leading-[64px]">
            Independence &amp; Discretion
          </h1>

          {/* Subheading (Italic in Figma) */}
          <p className="pt-5 font-serif text-xl italic leading-[31px] text-twine sm:text-2xl">
            Independence in purpose. Discretion in practice.
          </p>

          {/* Lead Body Paragraph */}
          <p className="max-w-[840px] pt-6 text-base leading-[28.8px] text-spring-wood/90 sm:text-[18px]">
            McLeod Family Office serves one family and coordinates the long-term stewardship of its interests<br className="hidden sm:inline" /> through defined institutional responsibilities. Its public position is guided by clear authority, an<br className="hidden sm:inline" /> enduring purpose, and discretion in how sensitive information is handled.
          </p>

          {/* Institutional Boundary Callout */}
          <div className="mt-8 border-l-2 border-twine bg-white/5 px-5 py-4">
            <p className="text-sm font-normal leading-[22.4px] text-spring-wood/85">
              <strong className="font-bold text-spring-wood">Institutional Boundary:</strong> McLeod Family Office is a private single-family office. It does not solicit third-party capital,<br className="hidden lg:inline" /> manage assets for external clients, or offer public investment products or investment advisory services.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-9">
            <Link
              href="/the-office/our-purpose-mandate"
              className="flex min-h-[49px] items-center justify-center rounded-[2px] border border-twine bg-twine px-6 py-3 text-sm font-medium leading-[22px] tracking-[0.7px] text-white transition-colors hover:bg-[#b38f4c]"
            >
              Explore Mandate →
            </Link>
            <Link
              href="/verification"
              className="flex min-h-[49px] items-center justify-center rounded-[2px] border border-spring-wood/40 px-6 py-3 text-sm font-medium leading-[22px] tracking-[0.7px] text-spring-wood transition-colors hover:border-spring-wood"
            >
              Verify Communication
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
