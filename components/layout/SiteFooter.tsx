"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import FooterDetailed from "./FooterDetailed";

/** Home gets the dark footer; every other page gets the detailed one. */
export default function SiteFooter() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";
  return isHome ? <Footer /> : <FooterDetailed />;
}
