"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navigation";
import NavDropdown from "./NavDropdown";

export default function NavPrimary() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex h-full shrink-0 items-stretch gap-4 xl:gap-6">
      {navLinks.map((link) => {
        const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <div key={link.href} className="group relative flex items-center">
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-11 items-center gap-1 py-3 font-archivo text-[15px] leading-6 font-medium whitespace-nowrap xl:text-base ${
                active ? "text-twine" : "text-white"
              }`}
            >
              {link.label}
              {link.menu && (
                <svg
                  aria-hidden="true"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="size-2.5 shrink-0 text-porcelain transition-transform group-hover:rotate-180"
                >
                  <path d="M2 3.5 5 6.5 8 3.5" />
                </svg>
              )}
            </Link>
            {link.menu && (
              <NavDropdown
                title={link.menu.title}
                icon={link.menu.icon}
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
