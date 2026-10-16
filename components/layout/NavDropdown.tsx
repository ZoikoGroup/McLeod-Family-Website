import Link from "next/link";
import type { NavIcon as NavIconName, NavMenuItem } from "@/lib/navigation";
import NavIcon from "./NavIcon";

type Props = {
  title: string;
  icon: NavIconName;
  items: NavMenuItem[];
  align?: "left" | "right";
};

export default function NavDropdown({ title, icon, items, align = "left" }: Props) {
  return (
    // Sits flush under the header (nav items are full header height).
    <div
      className={`absolute top-full z-50 hidden group-focus-within:block group-hover:block ${
        align === "right" ? "right-0" : "left-0"
      }`}
    >
      <div className="flex w-60 flex-col border-r border-white/5 bg-mirage py-6 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.50)]">
        <p className="flex items-center gap-2.5 border-b border-white/5 px-6 pb-4">
          <NavIcon name={icon} />
          <span className="font-archivo text-xs leading-4 font-semibold tracking-wider text-twine uppercase">
            {title}
          </span>
        </p>
        <ul className="flex flex-col pt-3.5">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-11 items-center justify-between gap-3 px-6 py-2.5 font-serif text-base leading-6 text-white transition-colors hover:text-twine"
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
