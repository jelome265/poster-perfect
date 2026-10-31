import { siteCopy } from "../content/site";
import { Placeholder } from "../components/Placeholder";

// Statistics layout is retained as three placeholder tiles. No figure is shown
// until it is substantiated and approved (DEC-014 PP-CNT-05, DEC-019).
export function StatisticsSection() {
  const tiles = Array.from({ length: siteCopy.statistics.tileCount }, (_, index) => index);
  return (
    <section className="statistics" aria-label="Statistics">
      <ul className="statistics__grid">
        {tiles.map((index) => (
          <li key={index} className={`statistics__tile statistics__tile--${index + 1}`}>
            <Placeholder kind="text" text={siteCopy.statistics.placeholderText} />
          </li>
        ))}
      </ul>
    </section>
  );
}
