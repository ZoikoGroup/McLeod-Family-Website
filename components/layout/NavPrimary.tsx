"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navigation";
import NavMegaMenu from "./NavMegaMenu";

export default function NavPrimary() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="flex h-full shrink-0 items-stretch gap-4 xl:gap-6"
    >
      {navLinks.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          // Menus span the header, so this wrapper must not be the positioning context.
          <div key={link.href} className="group flex items-center">
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-11 items-center py-3 font-archivo text-[15px] leading-6 font-medium whitespace-nowrap xl:text-base ${
                active ? "text-twine" : "text-white"
              }`}
            >
              <span className="flex items-center gap-1 border-b border-transparent transition-colors group-focus-within:border-twine group-hover:border-twine">
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
              </span>
            </Link>
            {link.menu && (
              <NavMegaMenu
                title={link.menu.title}
                items={link.menu.items}
                mega={link.menu.mega}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
