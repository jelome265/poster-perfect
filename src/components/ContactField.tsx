import { Placeholder } from "./Placeholder";

type ContactFieldProps = { readonly label: string; readonly placeholder: string };

// A labelled contact value that is shown as an update placeholder, not as a link.
export function ContactField({ label, placeholder }: ContactFieldProps) {
  return (
    <div className="contact-field">
      <dt className="contact-field__label">{label}</dt>
      <dd className="contact-field__value">
        <Placeholder kind="text" text={placeholder} />
      </dd>
    </div>
  );
}
