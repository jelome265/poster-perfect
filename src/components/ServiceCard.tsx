import { Placeholder } from "./Placeholder";

type ServiceCardProps = { readonly title: string; readonly imageLabel: string };

// A service example: a named image placeholder and its source label.
export function ServiceCard({ title, imageLabel }: ServiceCardProps) {
  return (
    <figure className="service-card">
      <Placeholder kind="image" label={`${imageLabel}: original asset pending rights clearance`} className="service-card__image" />
      <figcaption className="service-card__label">{title}</figcaption>
    </figure>
  );
}
