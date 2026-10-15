"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navigation";
import NavDropdown from "./NavDropdown";

export default function NavPrimary() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex h-full shrink-0 items-stretch gap-7">
      {navLinks.map((link) => {
        const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <div key={link.href} className="group relative flex items-center">
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-11 min-w-11 items-center gap-2 py-3 text-[14px] whitespace-nowrap ${
                active ? "text-[#b89c63]" : "font-medium text-dune"
              } ${active ? "leading-[16.8px] font-normal" : "leading-5"}`}
            >
              {link.label}
              {link.menu && (
                <Image
                  src="/images/nav-caret-down.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="size-[10px] shrink-0"
                />
              )}
            </Link>
            {link.menu && (
              <NavDropdown
                title={link.menu.title}
                items={link.menu.items}
                align={link.label === "Verification" ? "right" : "left"}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
