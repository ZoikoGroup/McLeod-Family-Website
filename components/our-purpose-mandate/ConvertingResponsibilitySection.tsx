import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

export function ConvertingResponsibilitySection() {
  return (
    <section id="purpose" className="mx-auto w-full max-w-[1280px] px-6 pt-16 lg:px-8 lg:pt-20">
      <div className="grid grid-cols-1 gap-10 border-b border-swirl pb-16 lg:grid-cols-[minmax(0,690px)_minmax(0,477px)] lg:justify-between lg:gap-12">
        <div className="lg:pt-6">
          <h2 className="font-serif text-[30px] leading-9 text-dune lg:text-4xl lg:leading-10">
            Converting Responsibility into Institutional Action
          </h2>
          <p className="pt-6 text-base leading-6 text-[#57534e]">
            The purpose of McLeod Family Office is to convert long-term family responsibility into
            disciplined institutional action. The Office brings together the stewardship of
            enterprise interests, family capital, governance, and continuity within a coordinated
            institutional framework.
          </p>
          <p className="pt-6 text-base leading-6 text-[#57534e]">
            That framework emphasizes clear authority, prudent consideration of risk, reliable
            records, and preparation for transitions across generations. Separate entities and
            operating companies retain their own roles, governance, and legal obligations.
          </p>
          <Link
            href="#what-we-steward"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold leading-5 text-te-papa-green hover:underline"
          >
            Explore the six core responsibilities
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>

        <figure className="relative h-[320px] overflow-hidden rounded-lg border border-swirl shadow-md lg:h-[384px]">
          <Image
            src="/images/our-purpose-mandate/office-interior-corridor.webp"
            alt="A long, quiet office corridor with glass-walled rooms"
            fill
            sizes="(min-width: 1024px) 477px, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dune/90 to-dune/0 p-6">
            <span className="block text-xs font-semibold leading-4 tracking-wider text-twine uppercase">
              Institutional Discipline
            </span>
            <span className="block pt-1 font-serif text-sm italic leading-5 text-[#e5e7eb]">
              Guided by clarity of governance and long-horizon oversight.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
