import Image from "next/image";

type Item = { mobile: string; desktop: string[] };

const isList: Item[] = [
  { mobile: "The private office of one family", desktop: ["The private office of one family"] },
  { mobile: "A coordinating institutional layer", desktop: ["A coordinating institutional", "layer"] },
  { mobile: "Focused on continuity across generations", desktop: ["Focused on continuity across", "generations"] },
];

const isNotList: Item[] = [
  { mobile: "A multi-family office", desktop: ["A multi-family office"] },
  { mobile: "An investment manager or advisory firm", desktop: ["An investment manager or", "advisory firm"] },
  { mobile: "Open to third-party capital or external clients", desktop: ["Open to third-party capital or", "external clients"] },
];

function Mark({ kind }: { kind: "check" | "cross" }) {
  return (
    <>
      <span className="relative size-[20px] shrink-0 lg:hidden">
        <Image src={`/images/home/about-${kind}-mobile.svg`} alt="" width={20} height={20} className="size-full" />
      </span>
      <span className="relative hidden h-[18px] w-[16px] shrink-0 pt-[2px] lg:block">
        <Image src={`/images/home/about-${kind}-desktop.svg`} alt="" width={16} height={16} className="size-[16px]" />
      </span>
    </>
  );
}

function PointList({ items, kind }: { items: Item[]; kind: "check" | "cross" }) {
  return (
    <ul className="flex flex-col gap-[12px] lg:pt-[14px]">
      {items.map((item) => (
        <li key={item.mobile} className="flex items-start gap-[12px] lg:gap-[14px]">
          <Mark kind={kind} />
          <span className="min-w-px flex-1 text-[16px] leading-[24px] text-dune lg:text-[14px] lg:leading-[20.5px]">
            <span className="lg:hidden">{item.mobile}</span>
            <span className="hidden lg:inline">
              {item.desktop.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-[127px] w-full bg-spring-wood lg:mt-[28px]">
      <div className="mx-auto grid w-full max-w-[1312px] grid-cols-1 px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_minmax(0,3fr)] lg:gap-x-[48px] lg:px-16 lg:pb-[13px]">
        <figure className="relative h-[440px] w-full overflow-hidden bg-timber-green lg:col-start-1 lg:row-start-1 lg:h-[520px]">
          <Image
            src="/images/home/about-forested-hills-mobile.webp"
            alt="Forested hills emerging from low cloud"
            fill
            sizes="342px"
            className="object-cover opacity-90 lg:hidden"
          />
          <Image
            src="/images/home/about-stone-facade-desktop.webp"
            alt="Stone-clad facade of a modern building"
            fill
            sizes="(min-width: 1024px) 453px, 0px"
            className="hidden object-cover lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-gradient-to-t from-[rgba(20,42,34,0.75)] from-0% to-[rgba(20,42,34,0)] to-[45%] lg:block"
          />
          <figcaption className="absolute -bottom-px -right-px flex items-center gap-4 bg-timber-green p-5 lg:inset-x-auto lg:bottom-[28px] lg:left-[28px] lg:right-[28px] lg:block lg:bg-transparent lg:p-0 lg:pb-[0.695px]">
            <Image
              src="/images/home/about-monogram.webp"
              alt=""
              width={56}
              height={56}
              className="size-[56px] shrink-0 opacity-90 lg:hidden"
            />
            <span className="block max-w-[154.2px] pr-[4.89px] text-[14px] leading-[20.3px] whitespace-nowrap text-spring-wood lg:hidden">
              Stewardship measured
              <br />
              in generations
            </span>
            <span className="hidden whitespace-nowrap text-[17px] leading-[23.8px] text-spring-wood lg:block">
              Considered stewardship.
              <br />
              Enduring foundations.
            </span>
          </figcaption>
        </figure>

        <div className="flex flex-col gap-[19px] pl-6 pt-[47.49px] lg:contents">
          <div className="flex flex-col gap-[19px] lg:col-start-2 lg:row-start-1 lg:block lg:h-[520px] lg:pt-[111.5px]">
            <p className="pb-[0.59px] text-[12px] font-semibold uppercase leading-[15.6px] tracking-[1.44px] text-kumera lg:pb-[21.3px] lg:text-[11px] lg:leading-[14.3px] lg:tracking-[1.76px]">
              About the Office
            </p>
            <h2
              id="about-heading"
              className="font-serif text-[34px] font-normal leading-[38px] tracking-[-0.34px] whitespace-nowrap text-dune lg:text-[46px] lg:leading-[51px] lg:tracking-normal"
            >
              What is McLeod
              <br />
              Family Office?
            </h2>
            <p className="pt-[13px] text-[18px] leading-[29.7px] whitespace-nowrap text-dune lg:pt-8 lg:text-[15px] lg:leading-[25.6px]">
              <span className="lg:hidden">
                McLeod Family Office is the private
                <br />
                institutional office of the McLeod
                <br />
                family. It coordinates the stewardship
                <br />
                of the family’s enterprise interests,
                <br />
                capital and governance, and supports
                <br />
                the continuity of those interests
                <br />
                across generations.
              </span>
              <span className="hidden lg:inline">
                McLeod Family Office is the private institutional
                <br />
                office of the McLeod family. It coordinates the
                <br />
                stewardship of the family’s enterprise interests,
                <br />
                capital and governance, and supports the continuity
                <br />
                of those interests across generations.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-[21px] lg:col-start-3 lg:row-start-1 lg:justify-center lg:gap-0 lg:h-[523.03px] lg:self-start lg:border-l lg:border-pavlova lg:py-[62px] lg:pl-8">
            <div className="flex flex-col gap-4 border-t border-dune pt-5 lg:gap-0 lg:border-t-0 lg:pt-0">
              <h3 className="font-serif text-[20px] font-normal leading-[29px] text-dune lg:text-[21px] lg:leading-[30px]">The Office is</h3>
              <PointList items={isList} kind="check" />
            </div>
            <div aria-hidden="true" className="hidden h-[57px] py-7 lg:block">
              <div className="h-px w-full bg-pavlova" />
            </div>
            <div className="flex flex-col gap-4 border-t border-dune pt-5 lg:gap-0 lg:border-t-0 lg:pt-0">
              <h3 className="font-serif text-[20px] font-normal leading-[29px] text-dune lg:text-[21px] lg:leading-[30px]">The Office is not</h3>
              <PointList items={isNotList} kind="cross" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
