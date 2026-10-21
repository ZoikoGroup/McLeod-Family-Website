import Image from "next/image";
import { SectionIntro } from "./SectionIntro";

export function SeparateActivitiesSection() {
  return (
    <section
      id="separate-responsibilities"
      aria-labelledby="separate-responsibilities-heading"
      className="w-full"
    >
      <SectionIntro
        id="separate-responsibilities-heading"
        title="Separate Activities. Separate Responsibilities."
        text={
          <>
            Activities undertaken for family purposes sit in dedicated vehicles<br className="hidden sm:inline" /> under their own legal requirements.
          </>
        }
      />

      <div className="mt-10 grid grid-cols-1 items-stretch overflow-hidden border border-swirl bg-[#faf8f5] lg:grid-cols-[438px_1fr]">
        <div className="flex flex-col justify-center p-8 md:p-10">
          <p className="font-archivo text-xs font-semibold leading-[19px] tracking-[1.8px] text-te-papa-green uppercase">
            FIDUCIARY CLARITY
          </p>
          <h3 className="pt-3 font-serif text-2xl leading-7 text-dune">
            Purpose-Specific Design
          </h3>
          <p className="max-w-[358px] pt-3 text-[15px] leading-6 text-[#5a5752]">
            Commercial, investment, administrative, and<br className="hidden sm:inline" /> philanthropic activities are maintained in separate<br className="hidden sm:inline" /> legal structures. The Office does not commingle<br className="hidden sm:inline" /> corporate obligations.
          </p>
        </div>
        <div className="relative min-h-[260px] w-full lg:min-h-[320px]">
          <Image
            src="/images/our-institutional-role/corporate-architecture.png"
            alt="Corporate Architecture"
            fill
            sizes="(max-width: 1024px) 100vw, 777px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
