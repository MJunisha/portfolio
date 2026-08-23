import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { ArrowUpRightIcon } from "@/components/Icons";

function FlowNode({ label, muted }: { label: string; muted?: boolean }) {
  return (
    <span
      className={`border px-3 py-1.5 font-hero text-xs sm:text-sm ${
        muted ? "border-border text-muted" : "border-foreground text-foreground"
      }`}
    >
      {label}
    </span>
  );
}

export function FabHemFeature() {
  const study = caseStudies.find((s) => s.slug === "fab-hem");
  if (!study) return null;

  const decision = study.sections.find(
    (section) => section.heading === "The Decision"
  )?.paragraphs?.[0];

  return (
    <article>
      <div className="flex items-center gap-3">
        <div className="relative h-6 w-14 shrink-0 overflow-hidden rounded-md">
          <Image
            src="/work/fab-hem/fab-logo.png"
            alt="Fab.com"
            fill
            className="object-contain object-left"
            sizes="56px"
          />
        </div>
        <p className="font-hero text-xs tracking-widest text-muted uppercase">
          Professional · Shipped Work
        </p>
      </div>

      <h3 className="mt-4 font-spirit text-3xl font-semibold tracking-tight sm:text-4xl">
        {study.title}
      </h3>

      {decision && (
        <>
          <p className="mt-8 font-hero text-xs tracking-widest text-accent uppercase">
            The Decision
          </p>
          <p className="mt-3 max-w-2xl font-spirit text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            {decision}
          </p>
        </>
      )}
      <p className="mt-4 max-w-xl font-hero text-base leading-relaxed text-muted sm:text-lg">
        {study.tagline}
      </p>

      {/* Decision-system diagram — an original editorial artifact, not a dashboard */}
      <div className="card-reveal mt-10 border border-border p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <FlowNode label="Code" muted />
          <span className="font-hero text-muted">→</span>
          <FlowNode label="Unit test" muted />
          <span className="font-hero text-muted">→</span>
          <FlowNode label="Ship" muted />
          <span className="font-hero text-muted">→</span>
          <FlowNode label="Production issue" muted />
          <span className="font-hero text-muted">→</span>
          <FlowNode label="Hotfix" muted />
        </div>
        <p className="mt-2 font-hero text-xs text-muted">Before</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-border pt-6">
          <FlowNode label="Understand" />
          <span className="font-hero text-foreground">→</span>
          <FlowNode label="Build ↔ QA" />
          <span className="font-hero text-foreground">→</span>
          <FlowNode label="Test" />
          <span className="font-hero text-foreground">→</span>
          <FlowNode label="Ship" />
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span aria-hidden className="font-hero text-accent">
            ↳
          </span>
          <p className="font-hero text-xs text-accent">
            Architecture context feeds the QA decision
          </p>
        </div>
        <p className="mt-3 font-hero text-xs text-muted">After</p>
      </div>

      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-16">
        <div>
          <p className="font-hero text-xs tracking-widest text-muted uppercase">
            Production hotfixes
          </p>
          <p className="mt-2 font-spirit text-3xl font-semibold tracking-tight sm:text-4xl">
            ~3–4 / week <span className="text-muted">→</span> ~1–2 / month
          </p>
        </div>

        <dl className="flex flex-wrap gap-x-8 gap-y-3">
          <div>
            <dt className="font-hero text-xs tracking-widest text-muted uppercase">
              QA org
            </dt>
            <dd className="mt-1 font-hero text-sm text-foreground">
              2 → 21, across ~13 teams
            </dd>
          </div>
          <div>
            <dt className="font-hero text-xs tracking-widest text-muted uppercase">
              Platform
            </dt>
            <dd className="mt-1 font-hero text-sm text-foreground">
              10M+ users
            </dd>
          </div>
        </dl>
      </div>

      <Link
        href={`/work/${study.slug}`}
        className="mt-8 inline-flex items-center gap-1.5 font-hero text-sm font-medium text-accent hover:text-accent-hover hover:underline"
      >
        View work
        <ArrowUpRightIcon className="h-4 w-4" />
      </Link>
    </article>
  );
}
