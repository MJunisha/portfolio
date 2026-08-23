import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon } from "@/components/Icons";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        kicker="Case Studies"
        title="Off-work projects on growth, engagement, and events"
      />
      <div className="grid gap-5 sm:grid-cols-3">
        {caseStudies.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <div>
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                {project.theme}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{project.tagline}</p>
            </div>
            <ArrowUpRightIcon className="mt-6 h-5 w-5 text-muted transition-colors group-hover:text-accent" />
          </Link>
        ))}
      </div>
    </section>
  );
}
