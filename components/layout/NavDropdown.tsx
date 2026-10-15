import Image from "next/image";
import Link from "next/link";
import type { NavMenuItem } from "@/lib/navigation";

type Props = {
  title: string;
  items: NavMenuItem[];
  align?: "left" | "right";
};

function ItemBody({ item, muted }: { item: NavMenuItem; muted: boolean }) {
  return (
    <>
      <span
        className={`flex size-9 shrink-0 items-center justify-center rounded-[2px] border border-pavlova ${
          muted ? "border-dashed" : "bg-ivory"
        }`}
      >
        <Image src={item.icon} alt="" width={18} height={18} />
      </span>
      <span className="flex min-w-px flex-1 flex-col gap-0.5">
        <span
          className={`text-[14px] leading-5 font-semibold whitespace-nowrap ${
            muted ? "text-[#6b675f]" : "text-dune"
          }`}
        >
          {item.label}
        </span>
        <span className="text-[12px] leading-[18px] font-normal whitespace-nowrap text-[#6b675f]">
          {item.description.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </span>
      </span>
    </>
  );
}

export default function NavDropdown({ title, items, align = "left" }: Props) {
  return (
    // Sits flush under the header (nav items are full header height).
    <div
      className={`absolute top-full z-50 hidden pt-px group-focus-within:block group-hover:block ${
        align === "right" ? "right-0 xl:right-auto xl:left-0" : "left-0"
      }`}
    >
      <div className="flex w-[320px] flex-col rounded-[2px] border border-t-2 border-te-papa-green bg-spring-wood py-2">
        <p className="border-b border-swirl px-4 py-3 text-[11px] leading-4 font-semibold tracking-[1.54px] whitespace-nowrap text-kumera uppercase">
          {title}
        </p>
        <ul className="flex flex-col">
          {items.map((item, i) => (
            <li key={item.label} className={i > 0 ? "border-t border-[#e4dfd4]" : undefined}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex min-h-[52px] items-center gap-[14px] px-4 py-3"
                >
                  <ItemBody item={item} muted={false} />
                  <span aria-hidden="true" className="text-[16px] text-te-papa-green">
                    →
                  </span>
                </Link>
              ) : (
                <div
                  aria-disabled="true"
                  className="flex min-h-[52px] items-center gap-[14px] px-4 py-3"
                >
                  <ItemBody item={item} muted />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
