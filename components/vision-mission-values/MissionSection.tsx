import { SectionIntro } from "./SectionIntro";
import { StatementCard } from "./StatementCard";

const DISCIPLINES: { title: string; text: string }[] = [
  {
    title: "Defined Decision Rights",
    text: "Ensuring authority is explicit, documented, and governed under reserved-matter frameworks.",
  },
  {
    title: "Prepared Succession",
    text: "Preparing future stewards and preserving institutional memory well before transitions become urgent.",
  },
];

export function MissionSection() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="mx-auto w-full max-w-[1280px] px-6 pt-20 lg:px-8 lg:pt-28"
    >
      <SectionIntro
        id="mission-heading"
        title="Our Mission"
        text="The practical disciplines through which the Office fulfills its stewardship mandate."
      />
      <StatementCard
        accent="gold"
        statement="To steward the McLeod family’s capital, enterprise interests and governance through clear decision rights, disciplined allocation, rigorous risk management and prepared succession — protecting continuity while enabling long-term opportunity."
      />

      <ul className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
        {DISCIPLINES.map((item) => (
          <li key={item.title} className="border border-swirl bg-[#faf8f5] p-6">
            <h3 className="font-serif text-lg leading-6 text-dune">{item.title}</h3>
            <p className="pt-2 text-sm leading-6 text-[#57534e]">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
