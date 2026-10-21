export function SectionIntro({
  id,
  title,
  text,
}: {
  id?: string;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className="max-w-[918px]">
      <h2
        id={id}
        className="font-serif text-[30px] leading-9 text-dune sm:text-4xl sm:leading-[41px]"
      >
        {title}
      </h2>
      <p className="max-w-[760px] pt-4 text-lg leading-7 text-dune sm:text-xl sm:leading-[30px]">
        {text}
      </p>
    </div>
  );
}
