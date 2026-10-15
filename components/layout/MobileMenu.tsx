"use client";

import Link from "next/link";
import { useState } from "react";
import { contactLink, navLinks } from "@/lib/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-11 shrink-0 items-center justify-center rounded-[2px] border border-spring-wood/55 px-5 py-3 text-[15px] leading-[18px] font-medium text-spring-wood"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="absolute top-full right-0 left-0 z-50 flex flex-col border-b border-twine/25 bg-timber-green px-6 pt-2 pb-6"
        >
          {[...navLinks, contactLink].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-twine/25 py-4 text-[15px] leading-[18px] text-spring-wood last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
