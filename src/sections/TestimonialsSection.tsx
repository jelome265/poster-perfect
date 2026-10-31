import { siteCopy } from "../content/site";
import { Placeholder } from "../components/Placeholder";

// Testimonial layout is retained as three placeholder cards. No quotation or
// attribution is shown until each permission is recorded (DEC-009, PP-CNT-06).
export function TestimonialsSection() {
  const { testimonials } = siteCopy;
  const cards = Array.from({ length: testimonials.cardCount }, (_, index) => index);
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="testimonials__heading">
        {testimonials.heading}
      </h2>
      <ul className="testimonials__grid">
        {cards.map((index) => (
          <li key={index} className="testimonial-card">
            <span className="testimonial-card__rule" aria-hidden="true" />
            <p className="testimonial-card__quote">
              <Placeholder kind="text" text={testimonials.placeholderText} />
            </p>
            <p className="testimonial-card__attribution">
              <Placeholder kind="text" text={testimonials.attributionPlaceholder} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
