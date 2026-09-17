import type { ReactNode } from "react";
import { BunawatFeature } from "@/components/BunawatFeature";
import { FabHemFeature } from "@/components/FabHemFeature";

function WorkCard({ children }: { children: ReactNode }) {
  return (
    <div className="w-[88%] shrink-0 snap-start rounded-2xl border border-border bg-background p-6 shadow-[0_20px_45px_-30px_rgba(17,17,17,0.25)] sm:w-[85%] sm:p-8">
      {children}
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 pt-12 pb-24 sm:px-8 sm:pt-32 sm:pb-32">
      <p className="font-hero text-xs tracking-widest text-muted uppercase">
        Selected Work
      </p>

      <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
        <WorkCard>
          <BunawatFeature />
        </WorkCard>
        <WorkCard>
          <FabHemFeature />
        </WorkCard>
      </div>
    </section>
  );
}
