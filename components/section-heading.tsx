type SectionHeadingProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ id, number, eyebrow, title }: SectionHeadingProps) {
  return (
    <header className="section-head">
      <p className="eyebrow">
        <span className="eyebrow-number">{number}</span>
        {eyebrow}
      </p>
      <h2 id={id} className="gold-text">
        {title}
      </h2>
    </header>
  );
}
