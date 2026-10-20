/** A quoted vision or mission statement with its source record. */
export function StatementCard({
  statement,
  accent,
}: {
  statement: string;
  accent: "green" | "gold";
}) {
  const border = accent === "green" ? "border-te-papa-green" : "border-twine";
  return (
    <figure className={`mt-8 border border-l-4 bg-[#faf8f5] p-6 sm:p-10 ${border}`}>
      <blockquote className="max-w-[843px] font-serif text-lg leading-7 text-dune sm:text-xl sm:leading-8 lg:text-2xl">
        “{statement}”
      </blockquote>
      <figcaption className="pt-4 text-xs leading-6 tracking-wide text-[#57534e] uppercase sm:text-sm">
        Source: McLeod Family Office Controlling Record (Sec. 02)
      </figcaption>
    </figure>
  );
}
