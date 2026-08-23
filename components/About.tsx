import { positioning } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
      <SectionHeading kicker="About" title="Enterprise Decision Design Counsel" />
      <div className="grid gap-12 sm:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>{positioning.intro}</p>
          <p>{positioning.current}</p>
        </div>
        <dl className="space-y-6 sm:border-l sm:border-border sm:pl-8">
          {positioning.focusAreas.map((focus) => (
            <div key={focus.label}>
              <dt className="font-mono text-xs tracking-widest text-accent uppercase">
                {focus.label}
              </dt>
              <dd className="mt-1 text-sm text-foreground">{focus.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
