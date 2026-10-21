import Image from "next/image";
import Link from "next/link";
import { SectionIntro } from "./SectionIntro";

const FUNCTIONAL_AREAS: {
  title: string;
  text: React.ReactNode;
  linkText: string;
  href: string;
}[] = [
  {
    title: "Enterprise",
    text: (
      <>
        Coordinates long-horizon ownership oversight and<br className="hidden sm:inline" /> reporting at the board level. Operating executives<br className="hidden sm:inline" /> manage daily operations.
      </>
    ),
    linkText: "Enterprise Mandate →",
    href: "/activities/strategic-ownership",
  },
  {
    title: "Capital",
    text: (
      <>
        Coordinates disciplined consideration of long-term<br className="hidden sm:inline" /> allocation, liquidity, concentration, and risk. Detailed<br className="hidden sm:inline" /> holdings remain private.
      </>
    ),
    linkText: "Capital Discipline →",
    href: "/activities/capital-and-investments",
  },
  {
    title: "Governance",
    text: (
      <>
        Supports documented mandates, delegations, and<br className="hidden sm:inline" /> separation of authority so decision rights are explicit.
      </>
    ),
    linkText: "Governance Principles →",
    href: "/governance",
  },
  {
    title: "Continuity",
    text: (
      <>
        Supports succession readiness, transfer of stewardship,<br className="hidden sm:inline" /> record continuity, and contingency preparation.
      </>
    ),
    linkText: "Continuity Planning →",
    href: "/governance/succession-and-continuity",
  },
  {
    title: "Risk & Resilience",
    text: (
      <>
        Coordinates attention to financial, operational, cyber,<br className="hidden sm:inline" /> legal, fraud, and continuity risks across entities.
      </>
    ),
    linkText: "Risk Perimeter →",
    href: "/verification/payment-security",
  },
  {
    title: "Administration",
    text: (
      <>
        Helps coordinate records, advisers, reporting, and<br className="hidden sm:inline" /> material obligations across purpose-specific vehicles.
      </>
    ),
    linkText: "Administrative Framework →",
    href: "/activities/family-administration",
  },
];

export function WhatWeCoordinateSection() {
  return (
    <section id="what-we-coordinate" aria-labelledby="what-we-coordinate-heading" className="w-full">
      <SectionIntro
        id="what-we-coordinate-heading"
        title="What the Office Coordinates"
        text="Six core functional areas managed under documented institutional discipline."
      />

      {/* Feature Card with Executive Meeting image */}
      <div className="mt-10 grid grid-cols-1 items-stretch overflow-hidden border border-swirl bg-[#faf8f5] md:grid-cols-[438px_1fr]">
        <div className="relative min-h-[260px] w-full md:min-h-[320px]">
          <Image
            src="/images/our-institutional-role/executive-meeting.png"
            alt="Executive Meeting"
            fill
            sizes="(max-width: 768px) 100vw, 438px"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10">
          <p className="font-archivo text-xs font-semibold leading-[19px] tracking-[1.8px] text-te-papa-green uppercase">
            INSTITUTIONAL PROCESS
          </p>
          <h3 className="pt-3 font-serif text-2xl leading-7 text-dune">
            Disciplined Coordination
          </h3>
          <p className="max-w-[358px] pt-3 text-[15px] leading-6 text-[#5a5752]">
            The Office acts as an administrative and strategic<br className="hidden sm:inline" /> hub, aligning multi-generational purpose with day-<br className="hidden sm:inline" />to-day execution without displacing local<br className="hidden sm:inline" /> leadership.
          </p>
        </div>
      </div>

      {/* Six functional cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {FUNCTIONAL_AREAS.map((area) => (
          <div
            key={area.title}
            className="flex flex-col justify-between border border-swirl bg-[#faf8f5] p-8"
          >
            <div>
              <h3 className="font-serif text-xl leading-[23px] text-dune">{area.title}</h3>
              <p className="max-w-[381px] pt-3 pb-5 text-sm leading-[22px] text-[#5a5752]">{area.text}</p>
            </div>
            <div>
              <Link
                href={area.href}
                className="inline-flex text-sm font-medium leading-[22px] text-te-papa-green transition-opacity hover:opacity-80"
              >
                {area.linkText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
