export function SectionIntro({ id, title, text }: { id: string; title: string; text: string }) {
  return (
    <div className="max-w-[928px]">
      <h2 id={id} className="font-serif text-[30px] leading-9 text-dune lg:text-4xl lg:leading-10">
        {title}
      </h2>
      <p className="max-w-[760px] pt-4 text-lg leading-7 text-dune lg:text-xl lg:leading-8">
        {text}
      </p>
    </div>
  );
}
