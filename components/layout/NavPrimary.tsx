"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/navigation";
import NavMegaMenu from "./NavMegaMenu";

export default function NavPrimary() {
  const pathname = usePathname();
  // Which menu is open, and on which page it was opened: navigating away closes it.
  const [openMenu, setOpenMenu] = useState<{ href: string; path: string } | null>(
    null,
  );
  const open = (href: string) => setOpenMenu({ href, path: pathname });
  const close = () => setOpenMenu(null);

  return (
    <nav
      aria-label="Primary"
      className="flex h-full shrink-0 items-stretch gap-4 xl:gap-6"
    >
      {navLinks.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        const isOpen = openMenu?.href === link.href && openMenu.path === pathname;
        return (
          // Menus span the header, so this wrapper must not be the positioning context.
          <div
            key={link.href}
            className="flex items-center"
            onMouseEnter={() => open(link.href)}
            onMouseLeave={close}
            onFocus={() => open(link.href)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) close();
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") close();
            }}
            // Any link clicked inside (tab or panel) closes the menu, even on the same page.
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) close();
            }}
          >
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              aria-expanded={link.menu ? isOpen : undefined}
              className={`flex min-h-11 items-center py-3 font-archivo text-[15px] leading-6 font-medium whitespace-nowrap xl:text-base ${
                active ? "text-twine" : "text-white"
              }`}
            >
              <span
                className={`flex items-center gap-1 border-b transition-colors ${
                  isOpen ? "border-twine" : "border-transparent"
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
                    className={`size-2.5 shrink-0 text-porcelain transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M2 3.5 5 6.5 8 3.5" />
                  </svg>
                )}
              </span>
            </Link>
            {link.menu && isOpen && (
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
