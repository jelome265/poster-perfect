import { siteCopy } from "../content/site";
import { Placeholder } from "../components/Placeholder";

// Hero: source heading, text wordmark fallback, in-page CTA to About, image placeholder.
export function HeroSection() {
  const { hero } = siteCopy;
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__visual">
        <Placeholder kind="image" label={hero.imagePlaceholder} className="hero__image" />
      </div>
      <div className="hero__content">
        <p className="wordmark">{siteCopy.wordmark}</p>
        <h1 className="hero__heading">
          {hero.headingLines.map((line, index, lines) => (
            <span key={line} className="hero__heading-line">
              {line}
              {index < lines.length - 1 ? " " : null}
            </span>
          ))}
        </h1>
        <a className="button" href="#about">
          {hero.ctaLabel}
        </a>
      </div>
    </section>
  );
}
