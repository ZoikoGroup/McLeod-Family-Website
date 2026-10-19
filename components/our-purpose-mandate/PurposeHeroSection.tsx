import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon, BadgeCheckIcon, CheckIcon } from "./icons";

const GLANCE: { label: string; value: string }[] = [
  { label: "Institution Type", value: "Single-Family Office (SFO)" },
  { label: "Core Focus", value: "Generational Continuity & Stewardship" },
  { label: "Responsibilities", value: "Enterprise, Capital, Governance, Risk" },
  { label: "Public Client Offering", value: "None (Strict Perimeter)" },
];

export function PurposeHeroSection() {
  return (
    <section
      id="purpose-hero"
      className="relative w-full overflow-hidden border-b border-swirl bg-celtic py-20 lg:min-h-[811px] lg:py-[130px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/our-purpose-mandate/hero-architectural-building.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(20,42,34,0.72)]" />

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-6 lg:grid-cols-[minmax(0,768px)_minmax(0,372px)] lg:items-start lg:justify-between lg:px-8">
        <div>
          <p className="font-archivo text-xs font-medium leading-5 tracking-[2.64px] text-twine uppercase">
            The Office - Our Purpose &amp; Mandate
          </p>
          <h1 className="pt-6 font-serif text-[44px] leading-[48px] text-white sm:text-[60px] sm:leading-[60px]">
            Our Purpose &amp; Mandate
          </h1>
          <blockquote className="mt-6 border-l-2 border-twine pl-4">
            <p className="font-serif text-xl italic leading-8 text-twine lg:text-2xl">
              “To convert long-term family responsibility into disciplined institutional action.”
            </p>
          </blockquote>
          <p className="pt-6 text-lg font-light leading-7 text-[#d1d5db]">
            McLeod Family Office is the private institutional office of the McLeod family. It
            coordinates the long-term stewardship of the family’s enterprise interests, capital,
            governance, and continuity across generations.
          </p>
          <div className="mt-6 rounded-lg border border-twine/30 bg-te-papa-green/40 p-4 backdrop-blur-xs">
            <p className="pb-1 text-xs font-semibold leading-5 tracking-wide text-twine uppercase">
              Strict Institutional Perimeter Notice:
            </p>
            <p className="text-sm leading-5 text-[#e5e7eb]">
              The Office serves one family exclusively. It does not solicit or accept third-party
              investment capital, manage external client assets, or offer investment products or
              advisory services to the public.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-10">
            <Link
              href="#what-we-steward"
              className="flex items-center gap-2 rounded-xs bg-twine px-6 py-3 text-xs font-semibold leading-4 tracking-wide text-dune uppercase shadow-md transition-colors hover:bg-[#d4b273]"
            >
              Explore What We Steward
              <ArrowDownIcon className="size-3" />
            </Link>
            <Link
              href="/verification"
              className="flex items-center gap-2 rounded-xs border border-[#9ca3af] px-6 py-3 text-xs font-medium leading-4 tracking-wide text-[#e5e7eb] uppercase transition-colors hover:border-twine"
            >
              <BadgeCheckIcon className="size-3.5 text-twine" />
              Verify McLeod
            </Link>
          </div>
        </div>

        <aside
          aria-labelledby="glance-heading"
          className="rounded-lg border border-white/10 bg-spring-wood/10 p-6 backdrop-blur-md lg:mt-[118px]"
        >
          <h2
            id="glance-heading"
            className="border-b border-white/10 pb-2 font-serif text-xl leading-7 text-white"
          >
            Institutional At A Glance
          </h2>
          <ul className="flex flex-col gap-3 pt-4">
            {GLANCE.map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-xs leading-4 text-[#d1d5db]">
                <CheckIcon className="mt-0.5 size-3 shrink-0 text-twine" />
                <span>
                  <strong className="font-semibold">{item.label}:</strong> {item.value}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
