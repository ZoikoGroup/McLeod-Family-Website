import Link from "next/link";
import { CheckIcon, CrossIcon, LandmarkIcon } from "./icons";

const PERIMETER: { label: string; text: string; allowed?: boolean }[] = [
  { label: "No Third-Party Capital", text: "We do not solicit or accept third-party investment capital." },
  { label: "No Client Management", text: "We do not manage wealth or assets for external clients." },
  { label: "No Public Products", text: "We offer no investment products or public advisory services." },
  {
    label: "Operating Independence",
    text: "Companies retain their own executive management boards.",
    allowed: true,
  },
];

export function InstitutionalPerimeterSection() {
  return (
    <section id="perimeter" className="mx-auto w-full max-w-[1280px] px-6 pt-20 lg:px-8 lg:pt-28">
      <div className="grid grid-cols-1 gap-10 rounded-xl border border-twine/30 bg-te-papa-green p-6 shadow-xl sm:p-10 lg:grid-cols-[minmax(0,734px)_minmax(0,351px)] lg:items-center lg:justify-between lg:p-12">
        <div>
          <h2 className="font-serif text-[30px] leading-9 text-white lg:text-4xl lg:leading-10">
            A Clear Institutional Perimeter
          </h2>
          <p className="pt-6 text-base leading-6 text-[#e5e7eb]">
            McLeod Family Office is a private single-family office. Its institutional mandate is
            strictly directed to one family and purpose-specific family entities.
          </p>
          <ul className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2">
            {PERIMETER.map((item) => {
              const Icon = item.allowed ? CheckIcon : CrossIcon;
              return (
                <li
                  key={item.label}
                  className="flex items-start gap-3 rounded-xs border border-white/10 bg-celtic/60 p-3 text-sm leading-5 text-spring-wood"
                >
                  <Icon className="mt-[3px] size-3.5 shrink-0 text-twine" />
                  <span>
                    <strong className="font-semibold">{item.label}:</strong> {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center rounded-lg border border-white/10 bg-spring-wood/10 p-6 text-center backdrop-blur-md">
          <LandmarkIcon className="size-9 text-twine" />
          <h3 className="pt-4 font-serif text-xl leading-7 text-white">Counterparty Safety</h3>
          <p className="max-w-[300px] pt-4 text-xs leading-4 text-[#d1d5db]">
            Verify all official representatives and communications through our central
            verification registry.
          </p>
          <Link
            href="/verification"
            className="mt-6 w-full rounded-xs bg-twine py-2.5 text-xs font-semibold leading-4 tracking-wide text-dune uppercase transition-colors hover:bg-[#d4b273]"
          >
            Verify Communication
          </Link>
        </div>
      </div>
    </section>
  );
}
