import { experience, earlyCareer } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
      <SectionHeading kicker="Experience" title="Recent work in enterprise decision design" />
      <ol className="space-y-10">
        {experience.map((entry) => (
          <li
            key={`${entry.company}-${entry.period}`}
            className={`grid gap-2 border-l pl-6 sm:grid-cols-[1fr_2.4fr] sm:gap-8 ${
              entry.current ? "border-accent" : "border-border"
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold tracking-tight">{entry.company}</h3>
                {entry.current && (
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-accent uppercase">
                    Current
                  </span>
                )}
              </div>
              <p className="text-sm text-accent">{entry.role}</p>
              <p className="mt-1 text-xs text-muted">{entry.period}</p>
              {entry.location && (
                <p className="text-xs text-muted">{entry.location}</p>
              )}
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-muted sm:text-base">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-4">
                  <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-16">
        <h3 className="mb-5 font-mono text-xs tracking-widest text-accent uppercase">
          Earlier career
        </h3>
        <ul className="divide-y divide-border rounded-2xl border border-border">
          {earlyCareer.map((entry) => (
            <li
              key={`${entry.company}-${entry.period}`}
              className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="sm:w-[38%]">
                <span className="text-sm font-medium">{entry.company}</span>
                <span className="block text-xs text-muted sm:inline sm:before:mx-1.5 sm:before:content-['·']">
                  {entry.role}
                </span>
              </div>
              <p className="text-sm text-muted sm:flex-1">{entry.note}</p>
              <p className="shrink-0 text-xs text-muted">{entry.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
