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
        className="flex min-h-11 shrink-0 items-center justify-center rounded-[2px] border border-ebony/30 px-5 py-3 font-archivo text-[15px] leading-[18px] font-medium text-ebony"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="absolute top-full right-0 left-0 z-50 flex flex-col bg-mirage px-6 pt-2 pb-6 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.50)]"
        >
          {[...navLinks, contactLink].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 font-serif text-base leading-6 text-white last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
