import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="McLeod Family Office, home"
      className="flex min-h-11 shrink-0 items-center gap-[14px]"
    >
      <Image
        src="/images/mcleod-family-office-logo.webp"
        alt=""
        width={48}
        height={48}
        priority
        className="size-12"
      />
      <span className="flex w-[107px] flex-col gap-0.5">
        <span className="font-serif text-[30px] leading-[30px] text-dune">McLeod</span>
        <span className="pl-0.5 text-[9px] leading-[9px] font-normal tracking-[2.88px] text-kumera uppercase">
          Family Office
        </span>
      </span>
    </Link>
  );
}
