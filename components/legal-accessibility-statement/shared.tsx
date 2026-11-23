import Image from "next/image";
import type { ReactNode } from "react";

export const bodyText = "font-serif text-[17px] leading-[27px] text-dune/90";

type SectionShellProps = {
  id: string;
  title: string;
  intro?: ReactNode;
  divider?: boolean;
  children?: ReactNode;
};

/** Ruled section with a serif heading and optional intro paragraph. */
export function SectionShell({ id, title, intro, divider = true, children }: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-28 pt-6 ${divider ? "border-t border-swirl" : ""}`}
    >
      <h2
        id={`${id}-title`}
        className="font-serif text-[34px] leading-[42px] text-te-papa-green sm:text-[42px] sm:leading-[52px]"
      >
        {title}
      </h2>
      {intro && <div className={`max-w-[800px] pt-6 ${bodyText}`}>{intro}</div>}
      {children}
    </section>
  );
}

export type Column = { title: string; text: string };

/** Three ruled columns with a small heading and supporting copy. */
export function ColumnList({ items }: { items: Column[] }) {
  return (
    <ul className="grid max-w-[1000px] grid-cols-1 gap-8 pt-9 md:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="border-t border-swirl pt-6">
          <h3 className="font-serif text-xl leading-7 text-te-papa-green">{item.title}</h3>
          <p className={`pt-2 ${bodyText}`}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

/** Two-column definition row: serif label on the left, copy on the right. */
export function DefinitionRow({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-swirl py-8 md:grid-cols-[minmax(0,354px)_minmax(0,1fr)] md:gap-0">
      <dt className="font-serif text-2xl leading-8 text-te-papa-green">{term}</dt>
      <dd className={bodyText}>{children}</dd>
    </div>
  );
}

/** Full-width editorial image between sections. */
export function SectionFigure({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="py-24">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1280px) 1184px, 100vw"
        className="h-auto w-full object-cover"
      />
    </figure>
  );
}
