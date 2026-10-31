import { siteCopy } from "../content/site";
import { ServiceCard } from "../components/ServiceCard";

export function ServicesSection() {
  const { services } = siteCopy;
  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="services__header">
        <h2 id="services-heading" className="services__heading">
          {services.heading}
        </h2>
        <p className="services__intro">{services.intro}</p>
      </div>
      <div className="services__grid">
        {services.items.map((item) => (
          <ServiceCard key={item.title} title={item.title} imageLabel={item.imageLabel} />
        ))}
      </div>
    </section>
  );
}
