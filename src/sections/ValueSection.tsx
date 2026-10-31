import { siteCopy } from "../content/site";
import { ValueBadge } from "../components/ValueBadge";

export function ValueSection() {
  const { value } = siteCopy;
  return (
    <section className="value" aria-labelledby="value-heading">
      <h2 id="value-heading" className="value__heading">
        {value.heading}
      </h2>
      <p className="value__body">{value.body}</p>
      <ul className="value__points">
        {value.points.map((point) => (
          <ValueBadge key={point} label={point} />
        ))}
      </ul>
    </section>
  );
}
