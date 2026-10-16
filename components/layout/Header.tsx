import Image from "next/image";
import Link from "next/link";
import { contactLink, topBarLinks } from "@/lib/navigation";
import MobileMenu from "./MobileMenu";
import NavPrimary from "./NavPrimary";

export default function Header() {
  return (
    <>
      {/* Desktop utility bar */}
      <div className="hidden bg-celtic px-8 lg:block">
        <div className="mx-auto flex min-h-10 w-full max-w-[1312px] items-center justify-between px-16">
          <div className="flex items-center gap-5">
            <span className="text-[11px] leading-[14.3px] font-semibold tracking-[1.76px] whitespace-nowrap text-twine uppercase">
              Official domain
            </span>
            <span className="text-[13px] leading-[15.6px] whitespace-nowrap text-spring-wood">
              mcleodfamilyoffice.co.uk
            </span>
          </div>
          <ul className="flex items-center">
            {topBarLinks.map((link) => (
              <li key={link.href} className="border-r border-spring-wood/30 last:border-r">
                <Link
                  href={link.href}
                  className="block px-[14px] py-3 text-[11px] leading-[11px] tracking-[1.54px] whitespace-nowrap text-spring-wood uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <header className="relative border-b border-swirl bg-linen lg:sticky lg:top-0 lg:z-40">
        <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between gap-6 px-6 lg:h-20 xl:px-10">
          <Link
            href="/"
            aria-label="McLeod Family Office, home"
            className="flex min-h-11 shrink-0 items-center"
          >
            <Image
              src="/images/mcleod-family-office-logo-primary.webp"
              alt=""
              width={158}
              height={51}
              priority
              className="h-auto w-[140px] lg:w-[158px]"
            />
          </Link>

          <div className="lg:hidden">
            <MobileMenu />
          </div>

          <div className="hidden h-full items-center gap-6 lg:flex xl:gap-8">
            <NavPrimary />
            <Link
              href={contactLink.href}
              className="flex min-h-11 shrink-0 items-center justify-center gap-2.5 border border-twine bg-twine px-6 py-3.5 font-sans text-sm leading-4 font-medium whitespace-nowrap text-ebony"
            >
              {contactLink.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
