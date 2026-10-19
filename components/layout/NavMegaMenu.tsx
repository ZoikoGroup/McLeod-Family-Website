import Image from "next/image";
import Link from "next/link";
import type { MegaMenu, NavMenuItem } from "@/lib/navigation";
import NavIcon from "./NavIcon";

type Props = { title: string; items: NavMenuItem[]; mega: MegaMenu };

const eyebrow = "font-archivo text-[10px] leading-4 font-bold tracking-widest uppercase";

function MenuItem({ item }: { item: NavMenuItem }) {
  return (
    <li>
      <Link href={item.href} className="group/item flex items-start gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-twine transition-colors group-hover/item:bg-twine/10">
          {item.icon && <NavIcon name={item.icon} size={20} className="text-twine" />}
        </span>
        <span className="flex flex-col gap-1">
          <span className="font-serif text-lg leading-7 text-mirage transition-colors group-hover/item:text-bronze">
            {item.label}
          </span>
          {item.description && (
            <span className="font-archivo text-xs leading-4 text-slate">{item.description}</span>
          )}
        </span>
      </Link>
    </li>
  );
}

/**
 * Full-width dropdown, positioned against the header rather than the nav item
 * (the nav item wrapper must not be `relative`).
 */
export default function NavMegaMenu({ title, items, mega }: Props) {
  const { intro, aside, width = 1380 } = mega;
  // Items fill the first column top to bottom, then the second.
  const split = Math.ceil(items.length / 2);
  const columns = [items.slice(0, split), items.slice(split)];

  return (
    <div
      style={{ width: `min(${width}px, calc(100vw - 2rem))` }}
      className="absolute top-full left-1/2 z-50 hidden -translate-x-1/2 group-focus-within:block group-hover:block"
    >
      <div className="flex border border-white/20 bg-cream shadow-[0px_20px_40px_0px_rgba(0,0,0,0.40)]">
        {/* Intro */}
        <div className="w-[30%] shrink-0 p-10">
          <div className="flex h-full flex-col items-start border-r border-mist pr-10">
            <p className={`${eyebrow} pb-3 text-slate`}>{title}</p>
            <p className="pb-4 font-serif text-3xl leading-9 text-mirage">{intro.title}</p>
            <p className="pb-6 font-archivo text-xs leading-5 text-slate">{intro.text}</p>
            <Link
              href={intro.primary.href}
              className="mb-6 bg-wheat px-6 py-3 font-archivo text-xs leading-5 font-semibold text-mirage transition-colors hover:bg-twine"
            >
              {intro.primary.label} →
            </Link>
            <Link
              href={intro.secondary.href}
              className="border-b border-mirage pb-1 font-serif text-base leading-6 text-mirage transition-colors hover:text-bronze"
            >
              {intro.secondary.label} →
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-1 py-10 pr-10">
          {columns.map((column, i) => (
            <ul
              key={i}
              className={`flex flex-1 flex-col gap-7 ${i === 0 ? "border-r border-mist pr-7" : "pl-7"}`}
            >
              {column.map((item) => (
                <MenuItem key={item.href} item={item} />
              ))}
            </ul>
          ))}
        </div>

        {/* Aside */}
        <div className="relative flex w-[25%] shrink-0 flex-col items-start overflow-hidden bg-mirage p-10">
          {aside.image && (
            <>
              <Image
                src="/images/about/abouthero-misty-mountains.webp"
                alt=""
                fill
                sizes="350px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-mirage/85" />
            </>
          )}
          <p className={`${eyebrow} relative pb-3 text-twine`}>{aside.eyebrow}</p>
          <p className="relative pb-4 font-serif text-3xl leading-9 text-white">
            {aside.title.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
          <p className="relative pb-6 font-archivo text-sm leading-6 text-white/80">{aside.text}</p>
          <Link
            href={aside.link.href}
            className="relative mt-auto border-b border-twine pb-1 font-serif text-base leading-6 text-twine transition-colors hover:text-white"
          >
            {aside.link.label} →
          </Link>
        </div>
      </div>
    </div>
  );
}
