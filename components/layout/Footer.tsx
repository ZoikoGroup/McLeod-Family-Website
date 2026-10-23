"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  contactLink,
  footerGroups,
  footerOffices,
  legalLinks,
  navLinks,
  socialLinks,
  type FooterGroup,
} from "@/lib/navigation";
import NavIcon from "./NavIcon";

const eyebrow = "font-archivo text-xs leading-5 font-semibold tracking-wider text-twine uppercase";
const ctaButton =
  "flex items-center gap-3 rounded-xs border px-7 py-3.5 font-archivo text-sm leading-6 font-semibold text-ebony";

function LinkGroup({ title, icon, items }: FooterGroup) {
  return (
    <div>
      <p className="flex items-center gap-3">
        <NavIcon name={icon} size={20} className="text-twine" />
        <span className={eyebrow}>{title}</span>
      </p>
      <ul className="flex flex-col gap-3 pt-6 pb-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex items-center justify-between gap-3 pr-3 font-serif text-base leading-6 text-white transition-colors hover:text-twine"
            >
              {item.label}
              <span aria-hidden="true" className="font-archivo text-sm leading-6 text-white/70">
                ›
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Columns after the first get a divider on desktop.
const column = "lg:border-l lg:border-white/20 lg:pl-5 lg:first:border-l-0 lg:first:pl-0";

function SocialIcon({ name }: { name: "linkedin" | "x" }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "linkedin" ? (
        <>
          <path d="M10.67 5.33a4 4 0 0 1 4 4v4.67H12V9.33a1.33 1.33 0 0 0-2.67 0V14H6.67V9.33a4 4 0 0 1 4-4Z" />
          <path d="M1.33 6H4v8H1.33z" />
          <circle cx="2.67" cy="2.67" r="1.33" />
        </>
      ) : (
        <path d="m3 3 10 10M13 3 3 13" />
      )}
    </svg>
  );
}

export default function Footer({ hideCta: hideCtaProp }: { hideCta?: boolean } = {}) {
  const pathname = usePathname();
  const hideCta =
    hideCtaProp ||
    pathname?.includes("treasury-and-liquidity") ||
    pathname?.includes("treasury%20and%20liquidity") ||
    pathname?.includes("treasury");

  return (
    <>
      {/* Closing call to action */}
      {!hideCta && (
        <section className="relative overflow-hidden bg-[#f4f0e8]">
          <Image
            src="/images/home/stewardship-lake-figma.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="relative bg-gradient-to-r from-[#f4f0e8] from-40% to-[#f4f0e8]/40 px-6 py-20 lg:px-14">
            <div className="mx-auto w-full max-w-[1328px]">
              <h2 className="font-serif text-4xl leading-tight text-dune lg:text-5xl lg:leading-[51px]">
                Verify before you act. Contact through<br className="hidden sm:inline" /> official channels.
              </h2>
              <p className="pt-4 font-serif text-[17px] sm:text-[18.5px] lg:text-[19.5px] leading-8 text-dune max-w-[1180px]">
                Before acting on a sensitive or changed instruction concerning McLeod Family Office or a related enterprise, independently<br className="hidden sm:inline" /> verify the communication and the authority of the relevant party. For legitimate institutional enquiries, use the Office’s official<br className="hidden sm:inline" /> contact route and do not transmit confidential financial or identity information until an appropriate secure channel has been established.
              </p>
              <div className="flex flex-wrap gap-4 pt-8">
                <Link href="/verification" className={`${ctaButton} border-twine bg-twine text-[#172130] transition-opacity hover:opacity-90`}>
                  Open the Verification Centre
                  <span aria-hidden="true" className="text-[#172130]">→</span>
                </Link>
                <Link href={contactLink.href} className={`${ctaButton} border-dune bg-transparent text-dune`}>
                  {contactLink.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-mirage px-6 pt-14 pb-7 lg:px-14">
        <div className="mx-auto w-full max-w-[1328px]">
          {/* Brand row */}
          <div className="flex flex-col gap-8 border-b border-white/20 pb-10 lg:flex-row lg:items-center lg:gap-0">
            <Image
              src="/images/mcleod-family-office-logo-header.webp"
              alt="McLeod Family Office"
              width={188}
              height={62}
              className="h-[62px] w-[188px] shrink-0"
            />
            <div className="flex-1 lg:ml-10 lg:border-l lg:border-white/20 lg:px-14">
              <p className="font-serif text-base leading-7 text-white">
                A private family office stewarding capital and legacy across generations.
              </p>
              <p className="pt-1 font-serif text-base leading-6 text-white/80">
                One family. One coordinating institution.
              </p>
            </div>
            <div className="flex items-center gap-4 lg:border-l lg:border-white/20 lg:pl-10">
              <span className="font-serif text-base leading-6 text-white">Follow McLeod</span>
              <ul className="flex gap-2">
                {socialLinks.map((s) => (
                  <li key={s.icon}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex size-8 items-center justify-center rounded-xs border border-twine text-twine transition-colors hover:bg-twine hover:text-mirage"
                    >
                      <SocialIcon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Site sections */}
          <nav
            aria-label="Footer"
            className="grid gap-x-5 gap-y-10 border-b border-white/20 py-10 sm:grid-cols-2 lg:grid-cols-5"
          >
            {navLinks.map(
              (link) =>
                link.menu && (
                  <div key={link.href} className={column}>
                    <LinkGroup
                      title={link.menu.title}
                      icon={link.menu.icon}
                      items={link.menu.items}
                    />
                  </div>
                ),
            )}
          </nav>

          {/* Resources, contact, legal */}
          <div className="grid gap-x-5 gap-y-10 border-b border-white/20 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title} className={column}>
                <LinkGroup {...group} />
              </div>
            ))}
          </div>

          {/* Offices */}
          <div className="grid gap-10 border-b border-white/20 py-10 sm:grid-cols-2">
            {footerOffices.map((office) => (
              <div key={office.title} className="flex items-center gap-4">
                <NavIcon name="pin" size={20} className="text-twine" />
                <div>
                  <p className={eyebrow}>{office.title}</p>
                  <p className="pt-2 font-serif text-base leading-6 text-white">
                    {office.lines.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal strip */}
          <div className="flex flex-col items-center gap-6 pt-7 text-center font-serif text-xs leading-5 text-white/70 lg:flex-row lg:gap-10 lg:text-left">
            <p className="shrink-0">© {new Date().getFullYear()} McLeod Family Office. All rights reserved.</p>
            <p className="max-w-[600px] flex-1 lg:text-center">
              McLeod Family Office is a private family office serving one family. It does not
              solicit or accept third-party capital, manage external client assets, or offer
              investment products to the public.
            </p>
            <ul className="flex flex-wrap justify-center gap-5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
