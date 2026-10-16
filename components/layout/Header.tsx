import Image from "next/image";
import Link from "next/link";
import { contactLink, topBarLinks } from "@/lib/navigation";
import MobileMenu from "./MobileMenu";
import NavPrimary from "./NavPrimary";

const topBarIcons = {
  // Shield with an emblem, for "Official website"
  "shield-crest": (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.4 7.5 10 4.4-1.6 7.5-5.4 7.5-10v-6L12 2.5Z" />
      <path d="M12 6.5 8 8v3.5c0 2.5 1.6 4.6 4 5.5 2.4-.9 4-3 4-5.5V8l-4-1.5Z" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.4 7.5 10 4.4-1.6 7.5-5.4 7.5-10v-6L12 2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10.5" rx="1.5" fill="currentColor" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
  phone: (
    <path
      fill="currentColor"
      d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"
    />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
};

function TopBarIcon({ name }: { name: keyof typeof topBarIcons }) {
  const large = name === "shield-crest" || name === "search";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${large ? "size-5" : "size-4"}`}
    >
      {topBarIcons[name]}
    </svg>
  );
}

export default function Header() {
  return (
    <>
      {/* Desktop utility bar */}
      <div className="hidden bg-twine px-16 lg:block">
        <div className="mx-auto flex min-h-[42px] w-full max-w-[1312px] items-center justify-between text-mirage">
          <div className="flex items-center gap-4">
            <TopBarIcon name="shield-crest" />
            <span className="font-archivo text-xs leading-4 font-medium tracking-[0.16em] whitespace-nowrap uppercase">
              Official website
            </span>
            <span aria-hidden="true" className="h-4 w-px bg-mirage/50" />
            <span className="font-serif text-base leading-5 whitespace-nowrap">
              McLeod Family Office
            </span>
          </div>
          <ul className="flex items-center">
            {topBarLinks.map((link) => (
              <li key={link.href} className="border-r border-mirage/40">
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-3 py-2 font-archivo text-xs leading-4 font-medium tracking-[0.1em] whitespace-nowrap uppercase transition-opacity hover:opacity-70"
                >
                  <TopBarIcon name={link.icon} />
                  {link.label}
                  {"arrow" in link && <span aria-hidden="true">→</span>}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/search"
                aria-label="Search"
                className="flex size-9 items-center justify-center pl-1 transition-opacity hover:opacity-70"
              >
                <TopBarIcon name="search" />
              </Link>
            </li>
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
