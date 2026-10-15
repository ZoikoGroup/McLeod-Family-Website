import Image from "next/image";
import Link from "next/link";
import { officialRoutes } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-timber-green px-0 pt-20 pb-12 lg:bg-dune lg:px-14">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-x-6 gap-y-12 px-6 lg:px-16">
        {/* Brand */}
        <div className="col-span-12 flex flex-col gap-[31.39px] lg:col-span-6 lg:col-start-1 lg:row-start-1">
          <Image
            src="/images/mcleod-family-office-logo-gold.webp"
            alt="McLeod Family Office"
            width={220}
            height={62}
            className="h-[61.75px] w-[220px]"
          />
          <p className="font-serif text-[24px] leading-[32.4px] text-spring-wood">
            <span className="lg:hidden">
              A private family office
              <br />
              stewarding capital and legacy
              <br />
              across generations.
            </span>
            <span className="hidden whitespace-nowrap lg:block">
              A private family office stewarding
              <br />
              capital and legacy across
              <br />
              generations.
            </span>
          </p>
        </div>

        {/* Official routes */}
        <nav
          aria-label="Official routes"
          className="col-span-12 flex flex-col gap-4 pt-[47px] lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:pt-0"
        >
          <h2 className="pb-[0.59px] text-[12px] leading-[15.6px] font-semibold tracking-[1.44px] text-twine uppercase">
            Official routes
          </h2>
          <ul className="grid h-[110px] grid-cols-2 grid-rows-[34px_34px_34px] gap-x-6 gap-y-1">
            {officialRoutes.map((link) => (
              <li key={link.label} className="pt-[7.5px] pb-[8.5px]">
                <Link
                  href={link.href}
                  className="text-[15px] leading-[18px] whitespace-nowrap text-spring-wood"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal */}
        <div className="col-span-12 border-t border-twine/30 pt-7 lg:col-start-1 lg:row-start-2">
          <p className="text-[13px] leading-[20.8px] text-foggy-gray">
            <span className="lg:hidden">
              [LEGAL NAME] · Registered in [JURISDICTION] no.
              <br />
              [NUMBER] · Registered office [PUBLIC ADDRESS]
            </span>
            <span className="hidden whitespace-nowrap lg:inline">
              [LEGAL NAME] · Registered in [JURISDICTION] no. [NUMBER] · Registered office [PUBLIC
              ADDRESS]
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
