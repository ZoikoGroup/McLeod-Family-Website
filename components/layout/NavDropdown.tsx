import Link from "next/link";
import type { NavIcon as NavIconName, NavMenuItem } from "@/lib/navigation";
import NavIcon from "./NavIcon";

type Props = {
  title: string;
  icon: NavIconName;
  items: NavMenuItem[];
  align?: "left" | "right";
};

// Panel widths from the design; longer labels get wider panels.
const widths: Partial<Record<NavIconName, string>> = {
  activities: "w-96",
  verification: "w-80",
};

export default function NavDropdown({ title, icon, items, align = "left" }: Props) {
  return (
    // Sits flush under the header (nav items are full header height).
    <div
      className={`absolute top-full z-50 hidden group-focus-within:block group-hover:block ${
        align === "right" ? "right-0" : "left-0"
      }`}
    >
      <div
        className={`flex flex-col border-r border-twine bg-porcelain py-6 shadow-[0px_4px_1px_0px_rgba(0,0,0,0.09)] ${
          widths[icon] ?? "w-60"
        }`}
      >
        <p className="flex items-center gap-2.5 border-b border-mist px-6 pb-4">
          <NavIcon name={icon} />
          <span className="font-archivo text-xs leading-4 font-semibold tracking-wider text-te-papa-green uppercase">
            {title}
          </span>
        </p>
        <ul className="flex flex-col gap-1 pt-4">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-11 items-center justify-between gap-3 px-6 py-2.5 font-serif text-base leading-6 text-dune transition-colors hover:text-bronze"
              >
                {item.label}
                <span aria-hidden="true" className="font-archivo text-xs leading-5 text-gray-mid">
                  &gt;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
