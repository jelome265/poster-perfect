import { siteCopy } from "../content/site";
import { Placeholder } from "../components/Placeholder";
import { ContactField } from "../components/ContactField";

// Contact and footer. Every value is an update placeholder; no mailto, tel, or
// social links are created until verified destinations are supplied (PP-CNT-14).
export function ContactSection() {
  const { contact } = siteCopy;
  return (
    <section className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="visually-hidden">
        {contact.headingVisuallyHidden}
      </h2>
      <div className="contact__visual">
        <p className="wordmark wordmark--footer">{siteCopy.wordmark}</p>
        <Placeholder kind="image" label={contact.footerImagePlaceholder} className="contact__image" />
      </div>
      <div className="contact__details">
        <dl className="contact__fields">
          {contact.fields.map((field) => (
            <ContactField key={field.label} label={field.label} placeholder={field.placeholder} />
          ))}
        </dl>
        <h3 className="contact__subheading">{contact.officeHours.heading}</h3>
        <p className="contact__hours">
          {contact.officeHours.lines.map((line) => (
            <span key={line} className="contact__hours-line">
              {line}
            </span>
          ))}
        </p>
        <h3 className="contact__subheading">{contact.social.heading}</h3>
        <ul className="contact__social">
          {contact.social.networks.map((network) => (
            <li key={network.name} className="contact__social-item">
              <span className="contact__social-name">{network.name}</span>
              <Placeholder kind="text" text={network.placeholder} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
