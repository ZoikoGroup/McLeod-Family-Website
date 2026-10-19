import Link from "next/link";
import { MailIcon, ShieldIcon, WarningIcon } from "./icons";

export function PurposeContactSection() {
  return (
    <section
      id="official-channels"
      className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28"
    >
      <div className="rounded-lg border border-swirl bg-sisal/60 p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-8 border-b border-swirl pb-8 lg:grid-cols-[minmax(0,734px)_minmax(0,351px)] lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif text-[30px] leading-9 text-dune lg:text-4xl lg:leading-10">
              Confirm the Office. Engage Through Official Channels.
            </h2>
            <p className="pt-4 text-base leading-6 text-[#57534e]">
              For institutional, legal, banking, governance, professional, or administrative
              matters, use the official contact route. Do not send confidential, financial, or
              personal identification material until a secure authenticated channel has been
              formally established.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/verification"
              className="flex items-center justify-center gap-2 rounded-xs bg-te-papa-green px-6 py-3.5 text-xs font-semibold leading-4 tracking-wide text-white uppercase transition-colors hover:bg-timber-green"
            >
              <ShieldIcon className="size-3.5 text-twine" />
              Open Verification Centre
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xs border border-dune px-6 py-3.5 text-xs font-semibold leading-4 tracking-wide text-dune uppercase transition-colors hover:bg-dune/5"
            >
              <MailIcon className="size-3.5" />
              Contact the Office
            </Link>
          </div>
        </div>
        <p className="flex items-start gap-3 pt-6 text-xs leading-5 text-[#57534e]">
          <WarningIcon className="mt-0.5 size-4 shrink-0 text-twine" />
          <span>
            <strong className="font-semibold text-dune">Security Reminder:</strong> McLeod Family
            Office will never send unsolicited emails requesting wire transfers, sensitive personal
            credentials, or payment detail changes.
          </span>
        </p>
      </div>
    </section>
  );
}
