import Image from "next/image";
import Link from "next/link";
import { contactLink, topBarLinks } from "@/lib/navigation";
import Logo from "./Logo";
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

      <header className="relative border-b border-twine/25 bg-timber-green lg:sticky lg:top-0 lg:z-40 lg:border-swirl lg:bg-spring-wood lg:px-8">
        {/* Mobile bar */}
        <div className="flex h-[72px] items-center justify-between gap-[31.4px] pl-6 lg:hidden">
          <Link
            href="/"
            aria-label="McLeod Family Office, home"
            className="flex min-h-11 shrink-0 items-center gap-[18px]"
          >
            <Image
              src="/images/mcleod-family-office-logo-gold.webp"
              alt=""
              width={164}
              height={46}
              priority
              className="h-[46.03px] w-[164px]"
            />
            <span aria-hidden="true" className="h-7 w-px bg-twine/45" />
            <span className="text-[12px] leading-[14.4px] tracking-[1.68px] text-twine uppercase">
              Family
              <br />
              Office
            </span>
          </Link>
          <MobileMenu />
        </div>

        {/* Desktop bar */}
        <div className="mx-auto hidden h-[75px] w-full max-w-[1147px] items-center justify-between gap-6 lg:flex">
          <Logo />

          <div className="flex h-full items-center gap-7">
            <NavPrimary />
            <Link
              href={contactLink.href}
              className="flex min-h-11 shrink-0 items-center justify-center border border-twine bg-twine px-6 py-[11px] text-[14px] leading-5 font-semibold whitespace-nowrap text-timber-green"
            >
              {contactLink.label}&nbsp;<span className="font-normal">→</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
