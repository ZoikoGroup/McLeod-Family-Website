"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const options = [
  "Banks and custodians",
  "Legal and corporate advisers",
  "Registries and public bodies",
  "Boards and governance partners",
];

export function CounterpartiesSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="counterparties" className="mt-[144px] w-full bg-spring-wood lg:mt-[83px]">
      <div className="mx-auto grid w-full max-w-[1440px] lg:max-w-[1282px] grid-cols-1 px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-16">
        <figure className="relative order-1 m-0 h-[380px] min-h-[380px] overflow-hidden bg-timber-green lg:col-span-5 lg:h-auto lg:min-h-[640px]">
          <Image
            src="/images/home/counterparties-skyline-mobile.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 0px, 342px"
            className="pointer-events-none object-cover lg:hidden"
          />
          <Image
            src="/images/home/counterparties-office-desktop.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 467px, 0px"
            className="pointer-events-none hidden object-cover lg:block"
          />
          <figcaption className="absolute inset-x-0 bottom-0 border-t border-twine/45 bg-timber-green/[.88] px-8 py-7 font-sans text-[15px] leading-[22.5px] whitespace-nowrap text-spring-wood">
            The Office deals only with identified
            <br className="lg:hidden" />
            <span className="hidden lg:inline"> </span>counterparties,
            <span className="lg:hidden"> </span>
            <br className="hidden lg:block" />
            through established
            <br className="lg:hidden" />
            <span className="hidden lg:inline"> </span>channels.
          </figcaption>
        </figure>

        <div className="order-2 pt-12 lg:col-span-6 lg:col-start-7 lg:pt-0">
          <p className="font-sans text-[12px] leading-[15.6px] font-semibold tracking-[1.44px] text-kumera uppercase">
            Counterparties
          </p>
          <h2 className="mt-[19px] pb-[0.69px] font-serif text-[34px] leading-[38px] font-normal tracking-[-0.34px] whitespace-nowrap text-dune lg:text-[48px] lg:leading-[52.8px] lg:tracking-[-0.48px]">
            Working with the
            <br />
            Office.
          </h2>
          <p className="pt-[27.345px] pb-10 font-sans text-[18px] leading-[29.7px] text-dune lg:max-w-[550px] lg:pt-7">
            Choose who you are to see the official
            <br className="lg:hidden" /> routes that apply to you.
          </p>

          <div
            role="group"
            aria-label="Counterparty type"
            className="grid grid-cols-1 overflow-hidden rounded-[2px] border border-dune lg:flex lg:flex-wrap"
          >
            {options.map((label, i) => {
              const active = i === selected;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(i)}
                  className={[
                    "min-h-[48px] cursor-pointer lg:flex-auto px-4 py-3.5 text-center font-sans text-[14px] leading-[18.2px] whitespace-nowrap",
                    active ? "bg-timber-green text-spring-wood" : "text-dune",
                    i < 3 ? "border-b border-dune" : "",
                    i === 2 ? "lg:border-b-0" : "",
                    i === 0 || i === 2 ? "lg:border-r" : "",
                    i === 0 || i === 2 ? "lg:border-r-dune" : "",
                    i === 1 ? "lg:border-r lg:border-r-dune" : "",
                  ].join(" ")}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <ol className="m-0 mt-4 list-none p-0 pb-1 lg:pb-px">
            <Step
              n="1"
              title={
                <>
                  Confirm the entity
                </>
              }
              body={
                <>
                  Match the registered name,
                  <br className="lg:hidden" /> jurisdiction and registry number
                  <br className="lg:hidden" /> against
                  <br className="hidden lg:block" /> the public register.
                </>
              }
              href="#entity-of-record"
              link="View the entity of record"
            />
            <Step
              n="2"
              title={
                <>
                  Verify every payment
                  <br className="lg:hidden" /> instruction
                </>
              }
              body={
                <>
                  New or changed bank details are
                  <br className="lg:hidden" /> never acted on from email alone. Call
                  <br /> back on the published number.
                </>
              }
              href="/verification"
              link="Read the callback protocol"
            />
            <Step
              n="3"
              title={
                <>
                  Correspond through official
                  <br className="lg:hidden" /> channels
                </>
              }
              body={
                <>
                  Use the banking enquiry category to
                  <br className="lg:hidden" /> establish contact with the Office.
                </>
              }
              href="/contact"
              link="Contact the Office"
            />
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  body,
  href,
  link,
}: {
  n: string;
  title: React.ReactNode;
  body: React.ReactNode;
  href: string;
  link: string;
}) {
  return (
    <li className="flex items-start gap-5 border-b border-swirl pt-[23px] pb-6">
      <span
        aria-hidden="true"
        className="w-14 shrink-0 font-serif text-[26px] leading-[26px] text-kumera"
      >
        {n}
      </span>
      <div className="flex min-w-px flex-1 flex-col items-start gap-2 pb-px">
        <h3 className="min-h-[28px] font-serif text-[21px] leading-[27.3px] font-normal text-dune">
          {title}
        </h3>
        <p className="pb-1 font-sans text-[15px] leading-6 max-xl:lg:whitespace-normal whitespace-nowrap text-dune">
          {body}
        </p>
        <Link
          href={href}
          className="font-sans text-[14px] leading-4 whitespace-nowrap text-kumera underline decoration-from-font underline-offset-[from-font]"
        >
          {link}
        </Link>
      </div>
    </li>
  );
}
