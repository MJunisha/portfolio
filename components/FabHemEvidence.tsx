const ROWS: { ticks: number; label: string }[] = [
  { ticks: 4, label: "~3–4 hotfixes / week" },
  { ticks: 2, label: "~1–2 / month" },
  { ticks: 1, label: "occasional — ~1 every 3–4 months" },
];

export function FabHemEvidence() {
  return (
    <figure className="border border-border p-6 sm:p-8">
      <p className="font-hero text-xs tracking-widest text-muted uppercase">
        Production hotfix frequency
      </p>

      <div className="mt-6 space-y-5">
        {ROWS.map((row) => (
          <div key={row.label} className="flex items-baseline gap-4">
            <div className="flex shrink-0 gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 ${i < row.ticks ? "bg-foreground" : "bg-border"}`}
                />
              ))}
            </div>
            <p className="font-spirit text-base font-semibold tracking-tight sm:text-lg">
              {row.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-border pt-6">
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
            <dd className="mt-1 font-hero text-sm text-foreground">10M+ users</dd>
          </div>
        </dl>
      </div>

      <figcaption className="mt-6 font-hero text-xs text-muted">
        From the case study — approximate, not a precise measurement.
      </figcaption>
    </figure>
  );
}
