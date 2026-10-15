import Image from "next/image";
import Link from "next/link";
import {
  footerColumns,
  footerCtas,
  footerOffices,
  legalLinks,
  socialLinks,
} from "@/lib/navigation";
import Logo from "./Logo";

const eyebrow =
  "text-[12px] leading-4 font-semibold tracking-[0.72px] text-te-papa-green uppercase";
const iconBox =
  "flex size-11 shrink-0 items-center justify-center rounded-[2px] border border-pavlova bg-ivory";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center border-t border-swirl bg-spring-wood">
      <div className="w-full max-w-[1280px] px-6 pb-14 lg:px-14">
        {/* CTAs */}
        <div className="flex flex-col items-stretch border-b border-swirl lg:flex-row lg:items-start lg:justify-center">
          {footerCtas.map((cta, i) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={`flex min-w-px items-center gap-5 lg:flex-1 ${
                i === 0 ? "py-6 lg:py-8 lg:pr-8" : "border-t border-swirl py-6 lg:border-t-0 lg:border-l lg:p-8"
              }`}
            >
              <span className={iconBox}>
                <Image src={cta.icon} alt="" width={20} height={20} />
              </span>
              <span className="flex flex-col gap-1.5 pt-[3px] lg:whitespace-nowrap">
                <span className={eyebrow}>{cta.eyebrow}</span>
                <span className="font-serif text-[22px] leading-7 text-dune">
                  {cta.label}{" "}
                  <span aria-hidden="true" className="font-[Times_New_Roman,serif]">
                    →
                  </span>
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* Brand + social */}
        <div className="flex flex-col items-start gap-8 border-b border-swirl py-10 lg:flex-row lg:items-center lg:gap-[43.4px]">
          <div className="flex w-full flex-col gap-4 lg:max-w-[668px] lg:min-w-0 lg:flex-1">
            <Logo />
            <p className="text-[15px] leading-[22px] text-dune xl:whitespace-nowrap">
              <span className="font-semibold">McLeod Family Office</span>
              {" · A private family office stewarding capital and legacy across generations."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <span className={`${eyebrow} whitespace-nowrap`}>Official channels</span>
            <ul className="flex flex-wrap gap-2 lg:h-11">
              {socialLinks.map((s) => (
                <li key={s.label} className="flex">
                  <a href={s.href} aria-label={s.label} className={iconBox}>
                    {s.icon ? (
                      <Image src={s.icon} alt="" width={19} height={19} />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="font-serif text-[18px] leading-[18px] text-dune"
                      >
                        {s.text}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Link columns + offices */}
        <div className="grid grid-cols-2 gap-8 pt-10 lg:h-[223px] lg:grid-cols-8 lg:gap-x-6 lg:gap-y-0 lg:pt-16">
          <nav
            aria-label="Footer"
            className="col-span-2 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:col-span-6 lg:flex lg:items-start lg:justify-center"
          >
            {footerColumns.map((col) => (
              <div key={col.title} className="flex min-w-px flex-1 flex-col gap-4">
                <h2 className={eyebrow}>{col.title}</h2>
                <ul className="flex flex-col gap-1">
                  {col.links.map((link) => (
                    <li key={link.href} className="py-1.5">
                      <Link href={link.href} className="text-[14px] leading-5 text-dune">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {footerOffices.map((office) => (
            <div key={office.title.join(" ")} className="flex flex-col gap-4 self-start">
              <h2
                className={`${eyebrow} relative flex items-center whitespace-nowrap pl-[22px] ${
                  office.title.length > 1 ? "h-8" : "h-4"
                }`}
              >
                <Image
                  src="/images/map-pin.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="absolute top-1/2 left-0 -translate-y-1/2"
                />
                <span>
                  {office.title.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
              </h2>
              <address className="pt-1.5 text-[14px] leading-[21px] text-dune not-italic">
                {office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>
          ))}
        </div>
      </div>

      {/* Legal bar */}
      <div className="w-full bg-celtic py-8">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-center gap-6 px-6 lg:flex-row lg:gap-12 lg:px-14">
          <div className="flex w-full flex-col gap-1.5 text-[12px] leading-[18px] lg:max-w-[717.86px] lg:min-w-0 lg:flex-1">
            <p className="text-spring-wood">© 2026 McLeod Family Office. All rights reserved.</p>
            <p className="text-spring-wood">
              McLeod Family Office Limited · Registered in Scotland · Company No. SC648217 ·
              Registered office: 27 Melville Street, Edinburgh EH3 7JF, United Kingdom
            </p>
            <p className="text-foggy-gray">
              McLeod Family Office is a private single-family office. It does not solicit
              third-party capital, manage assets for external clients or offer investment products
              to the public.
            </p>
          </div>
          <ul className="flex flex-wrap items-start justify-start lg:h-11 lg:w-[390px] lg:shrink-0 lg:justify-end">
            {legalLinks.map((link, i) => (
              <li
                key={link.href}
                className={`flex self-stretch ${i > 0 ? "border-l border-spring-wood/25" : ""}`}
              >
                <Link
                  href={link.href}
                  className={`flex min-h-11 items-center py-[13px] text-[12px] leading-[18px] whitespace-nowrap text-spring-wood ${
                    i === legalLinks.length - 1 ? "pl-3" : "px-3"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
