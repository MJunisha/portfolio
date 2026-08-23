export function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <span className="mb-3 block font-mono text-xs tracking-widest text-accent uppercase">
        {kicker}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
