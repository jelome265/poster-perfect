import { siteCopy } from "../content/site";

export function AboutSection() {
  const { about } = siteCopy;
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about__rule" aria-hidden="true" />
      <h2 id="about-heading" className="about__heading">
        {about.heading}
      </h2>
      <p className="about__body">{about.body}</p>
    </section>
  );
}
