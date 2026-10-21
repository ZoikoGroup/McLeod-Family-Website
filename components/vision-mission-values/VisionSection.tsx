import Image from "next/image";
import { SectionIntro } from "./SectionIntro";
import { StatementCard } from "./StatementCard";

export function VisionSection() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-6 pt-20 lg:px-8"
    >
      <SectionIntro
        id="vision-heading"
        title="Our Vision"
        text="A long-horizon direction focused on institutional endurance and multi-generational responsibility."
      />
      <StatementCard
        accent="green"
        statement="To build an enduring family institution that preserves independence, strengthens enterprise, compounds capital responsibly and carries stewardship across generations."
      />

      <div className="mt-10 grid grid-cols-1 overflow-hidden border border-swirl bg-[#faf8f5] lg:grid-cols-[minmax(0,443px)_minmax(0,1fr)]">
        <div className="relative h-[240px] sm:h-[320px]">
          <Image
            src="/images/vision-mission-values/vision-leadership-meeting.webp"
            alt="Colleagues reviewing data together in a meeting room"
            fill
            sizes="(min-width: 1024px) 443px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-10">
          <h3 className="font-serif text-2xl leading-7 text-dune">Enduring Independence</h3>
          <p className="max-w-[480px] pt-3 text-base leading-6 text-[#57534e]">
            The vision describes the Office’s desired direction: maintaining structural
            independence, fostering enterprise oversight, and protecting family continuity across
            economic cycles.
          </p>
        </div>
      </div>
    </section>
  );
}
