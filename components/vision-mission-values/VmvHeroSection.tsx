import Image from "next/image";
import Link from "next/link";

export function VmvHeroSection() {
  return (
    <section
      id="vmv-hero"
      className="relative w-full overflow-hidden bg-celtic py-20 lg:flex lg:min-h-[680px] lg:items-center lg:py-24 xl:min-h-[799px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/vision-mission-values/hero-family-meeting-library.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(313deg,rgba(23,23,23,0.8),rgba(6,78,59,0.55))]"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-[840px]">
          <p className="text-xs font-semibold leading-5 tracking-widest text-twine uppercase">
            The Office · Institutional Direction
          </p>
          <h1 className="pt-3 font-serif text-[44px] leading-[48px] text-spring-wood sm:text-[60px] sm:leading-[64.4px]">
            Vision, Mission &amp; Values
          </h1>
          <p className="pt-5 font-serif text-xl leading-8 text-twine lg:text-2xl">
            A private family office stewarding capital and legacy across generations.
          </p>
          <p className="pt-6 text-lg leading-7 text-spring-wood/90">
            McLeod Family Office is built around long-term family responsibility, clear
            institutional decision-making, and disciplined stewardship across generations.
          </p>
          <div className="mt-8 border-l-2 border-twine bg-white/5 px-5 py-4">
            <p className="text-sm leading-6 text-spring-wood/90">
              <strong className="font-semibold">Institutional Boundary:</strong> McLeod Family
              Office serves one family. It does not solicit or accept third-party investment
              capital, manage external client assets, or offer public investment products or
              investment advisory services.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-9">
            <Link
              href="#vision"
              className="flex min-h-11 items-center justify-center rounded-xs border border-twine bg-twine px-6 py-3 text-sm font-medium leading-6 tracking-wide text-white transition-colors hover:bg-[#b38f4c]"
            >
              Explore Our Direction →
            </Link>
            <Link
              href="/verification"
              className="flex min-h-11 items-center justify-center rounded-xs border border-spring-wood/40 px-6 py-3 text-sm font-medium leading-6 tracking-wide text-spring-wood transition-colors hover:border-spring-wood"
            >
              Verify Communication
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
