import Image from "next/image";
import Link from "next/link";
import { contactLink, topBarLinks } from "@/lib/navigation";
import MobileMenu from "./MobileMenu";
import NavPrimary from "./NavPrimary";

export default function Header() {
  return (
    <>
      {/* Desktop utility bar */}
      <div className="hidden bg-twine px-16 lg:block">
        <div className="mx-auto flex min-h-10 w-full max-w-[1312px] items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="text-xs leading-4 font-semibold tracking-widest whitespace-nowrap text-porcelain uppercase">
              Official domain
            </span>
            <span className="text-xs leading-4 whitespace-nowrap text-cloud">
              mcleodfamilyoffice.co.uk
            </span>
          </div>
          <ul className="flex items-center">
            {topBarLinks.map((link) => (
              <li key={link.href} className="border-r border-cloud/30">
                <Link
                  href={link.href}
                  className="block px-3.5 py-3 text-xs leading-3 tracking-wider whitespace-nowrap text-cloud uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <header className="relative border-b border-swirl bg-celtic lg:sticky lg:top-0 lg:z-40">
        <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between gap-6 px-6 lg:h-20 xl:px-10">
          <Link
            href="/"
            aria-label="McLeod Family Office, home"
            className="flex min-h-11 shrink-0 items-center"
          >
            <Image
              src="/images/mcleod-family-office-logo-header.webp"
              alt=""
              width={188}
              height={62}
              priority
              className="h-auto w-[150px] lg:w-[188px]"
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
