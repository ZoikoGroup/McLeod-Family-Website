import Image from "next/image";
import Link from "next/link";

export function PrivacyHeroSection() {
  return (
    <section
      id="privacy-hero"
      className="relative w-full overflow-hidden bg-celtic py-20 lg:flex lg:min-h-[783px] lg:items-center lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/legal-privacy-notice/hero-glass-office-interior.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-te-papa-green/85" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 lg:px-[47px]">
        <div className="max-w-[790px]">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1.5 font-serif text-sm leading-5 tracking-wide text-twine uppercase">
              <li>
                <Link href="/" className="transition-colors hover:text-spring-wood">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Privacy Notice</li>
            </ol>
          </nav>
          <h1 className="pt-4 font-serif text-[44px] leading-[50px] text-spring-wood sm:text-[60px] sm:leading-[66px]">
            Privacy Notice
          </h1>
          <p className="pt-6 font-serif text-xl leading-8 text-spring-wood sm:text-[22px]">
            This notice explains how McLeod Family Office handles personal information collected
            through its public website and associated institutional enquiry pathways.
          </p>
          <p className="pt-6 font-serif text-lg leading-[27px] text-spring-wood/90">
            We aim to minimize both data collection and unnecessary disclosure—collecting only what
            is needed for legitimate institutional enquiries, site security and applicable privacy
            rights.
          </p>
          <div className="mt-10 border-l-2 border-twine py-1 pl-4">
            <p className="font-serif text-[15px] leading-6 text-spring-wood/90">
              McLeod Family Office is a private single-family office. It does not solicit
              third-party investment capital, manage external client assets or offer investment
              products to the public.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-14">
            <Link
              href="#privacy-rights"
              className="flex min-h-[52px] items-center justify-center bg-twine px-6 py-3 font-serif text-lg leading-6 text-dune transition-opacity hover:opacity-90"
            >
              Review your privacy rights
            </Link>
            <Link
              href="/contact"
              className="flex min-h-[52px] items-center justify-center border border-spring-wood px-6 py-3 font-serif text-lg leading-6 text-spring-wood transition-colors hover:bg-spring-wood/10"
            >
              Contact the Office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
