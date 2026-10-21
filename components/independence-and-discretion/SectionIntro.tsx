import React from "react";

interface SectionIntroProps {
  id?: string;
  title: React.ReactNode;
  text: React.ReactNode;
}

export function SectionIntro({ id, title, text }: SectionIntroProps) {
  return (
    <div className="max-w-[918px]">
      <h2
        id={id}
        className="font-serif text-[30px] leading-9 text-dune sm:text-4xl sm:leading-[41px]"
      >
        {title}
      </h2>
      <p className="max-w-[760px] pt-4 font-sans text-lg font-normal leading-7 text-dune sm:text-xl sm:leading-[30px]">
        {text}
      </p>
    </div>
  );
}
