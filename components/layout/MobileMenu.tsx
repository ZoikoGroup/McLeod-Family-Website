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
        className="flex min-h-11 shrink-0 items-center justify-center rounded-[2px] border border-white/55 px-5 py-3 font-archivo text-[15px] leading-[18px] font-medium text-white"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="absolute top-full right-0 left-0 z-50 flex flex-col border-r border-twine bg-porcelain px-6 pt-2 pb-6 shadow-[0px_4px_1px_0px_rgba(0,0,0,0.09)]"
        >
          {[...navLinks, contactLink].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-mist py-4 font-serif text-base leading-6 text-dune last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
