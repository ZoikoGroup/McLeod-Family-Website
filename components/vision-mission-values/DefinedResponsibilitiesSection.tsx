import Link from "next/link";

const BOUNDARIES = [
  "No third-party capital solicited or accepted",
  "No external client asset management",
  "No public investment products or funds",
  "No retail advisory or financial planning services",
  "No public fundraising or charity solicitations",
  "No day-to-day management of portfolio companies",
];

export function DefinedResponsibilitiesSection() {
  return (
    <section
      id="boundaries"
      aria-labelledby="boundaries-heading"
      className="mx-auto w-full max-w-[1280px] px-6 pt-20 lg:px-8 lg:pt-28"
    >
      <div className="rounded-xs bg-te-papa-green p-6 sm:p-10 lg:p-12">
        <h2
          id="boundaries-heading"
          className="font-serif text-[28px] leading-9 text-spring-wood lg:text-3xl"
        >
          One Family. Defined Responsibilities.
        </h2>
        <p className="max-w-[832px] pt-4 text-base leading-7 text-spring-wood/90">
          McLeod Family Office operates with strict public perimeter controls. To avoid
          misinterpretation, our public standing is governed by the following non-negotiable
          boundaries:
        </p>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-2 pt-6 md:grid-cols-2">
          {BOUNDARIES.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-6 text-spring-wood/90">
              <span aria-hidden="true" className="font-bold text-twine">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/verification"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xs border border-twine bg-twine px-6 py-3 text-sm font-medium leading-6 tracking-wide text-white transition-colors hover:bg-[#b38f4c]"
        >
          Confirm Official Identity →
        </Link>
      </div>
    </section>
  );
}
