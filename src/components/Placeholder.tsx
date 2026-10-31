type PlaceholderProps =
  | { readonly kind: "image"; readonly label: string; readonly className?: string }
  | { readonly kind: "text"; readonly text: string; readonly className?: string };

// Visibly marked placeholder for an approved region whose value or asset is pending.
// It is never a link and never looks like verified business data.
export function Placeholder(props: PlaceholderProps) {
  if (props.kind === "image") {
    return (
      <div className={`placeholder placeholder--image ${props.className ?? ""}`.trim()} role="img" aria-label={props.label} />
    );
  }
  return <span className={`placeholder placeholder--text ${props.className ?? ""}`.trim()}>{props.text}</span>;
}
