import Image from "next/image";
import { SectionIntro } from "./SectionIntro";

export function ProportionateDisclosureSection() {
  return (
    <section id="proportionate-disclosure" aria-labelledby="proportionate-disclosure-heading" className="w-full">
      <SectionIntro
        id="proportionate-disclosure-heading"
        title="Discretion is Practiced Through Proportionate Disclosure"
        text={
          <>
            Discretion is a decision to disclose information according to its purpose,<br className="hidden sm:inline" /> sensitivity, and lawful duty.
          </>
        }
      />

      <div className="mt-10 grid grid-cols-1 items-stretch overflow-hidden border border-swirl bg-[#faf8f5] lg:grid-cols-[438px_1fr]">
        <div className="flex flex-col justify-center p-8 md:p-10">
          <h3 className="font-serif text-2xl leading-7 text-dune">
            Controlled Communication
          </h3>
          <p className="max-w-[358px] pt-3 text-[15px] leading-6 text-[#5a5752]">
            Public information supports institutional<br className="hidden sm:inline" /> verification and legitimate engagement, while<br className="hidden sm:inline" /> confidential family and financial matters remain<br className="hidden sm:inline" /> outside public view.
          </p>
        </div>
        <div className="relative min-h-[260px] w-full lg:min-h-[320px]">
          <Image
            src="/images/independence-and-discretion/controlled-office-environment.png"
            alt="Controlled Office Environment"
            fill
            sizes="(max-width: 1024px) 100vw, 753px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
