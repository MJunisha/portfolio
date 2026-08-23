import { interests, education } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function Interests() {
  return (
    <section id="interests" className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
      <SectionHeading kicker="Beyond Work" title="What I spend my time on" />

      <div className="grid gap-5 sm:grid-cols-3">
        {interests.map((interest) => (
          <div
            key={interest.label}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <span className="text-2xl">{interest.emoji}</span>
            <h3 className="mt-3 text-base font-semibold tracking-tight">
              {interest.label}
            </h3>
            <p className="mt-1 text-sm text-muted">{interest.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-5 font-mono text-xs tracking-widest text-accent uppercase">
          Education
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <li key={item.school} className="rounded-xl border border-border px-4 py-3">
              <p className="text-sm font-medium">{item.school}</p>
              <p className="text-sm text-muted">{item.credential}</p>
              {item.period && (
                <p className="mt-1 text-xs text-muted">{item.period}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
