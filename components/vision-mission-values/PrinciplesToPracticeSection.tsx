import Image from "next/image";
import Link from "next/link";
import { SectionIntro } from "./SectionIntro";

const SAFEGUARDS: { title: string; text: string; link: { label: string; href: string } }[] = [
  {
    title: "Independent Callbacks",
    text: "Changes to banking or sensitive transaction details require out-of-band verification using pre-established telephone protocols.",
    link: { label: "Verification Guidance", href: "/verification" },
  },
  {
    title: "Entity Separation",
    text: "Distinct activities operate within dedicated legal vehicles to preserve clear liability, regulatory, and fiduciary boundaries.",
    link: { label: "Explore Governance", href: "/governance" },
  },
];

export function PrinciplesToPracticeSection() {
  return (
    <section
      id="principles-to-practice"
      aria-labelledby="practice-heading"
      className="mx-auto w-full max-w-[1280px] px-6 pt-20 lg:px-8 lg:pt-28"
    >
      <SectionIntro
        id="practice-heading"
        title="From Principles to Practice"
        text="How operating values translate into concrete institutional safeguards across the enterprise."
      />

      <div className="mt-10 grid grid-cols-1 overflow-hidden border border-swirl bg-[#faf8f5] lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="relative h-[240px] sm:h-[320px]">
          <Image
            src="/images/vision-mission-values/practice-whiteboard-planning.webp"
            alt="A professional writing on a whiteboard in a bright office"
            fill
            sizes="(min-width: 1024px) 748px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-10">
          <p className="text-xs font-semibold leading-5 tracking-widest text-te-papa-green uppercase">
            Control &amp; Discipline
          </p>
          <h3 className="pt-3 font-serif text-2xl leading-7 text-dune">Institutional Governance</h3>
          <p className="pt-3 text-base leading-6 text-[#57534e]">
            Operational principles are supported by explicit governance rules. The Office acts as a
            coordinating hub while operating businesses maintain independent executive management.
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2">
        {SAFEGUARDS.map((item) => (
          <li key={item.title} className="flex flex-col border border-swirl bg-[#faf8f5] p-6 sm:p-8">
            <h3 className="font-serif text-xl leading-6 text-dune">{item.title}</h3>
            <p className="flex-1 pt-3 pb-5 text-sm leading-6 text-[#57534e]">{item.text}</p>
            <Link
              href={item.link.href}
              className="self-start text-sm font-medium leading-6 text-te-papa-green hover:underline"
            >
              {item.link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
