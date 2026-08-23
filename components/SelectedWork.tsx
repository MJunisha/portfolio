"use client";

import { useState } from "react";
import { BunawatFeature } from "@/components/BunawatFeature";
import { FabHemFeature } from "@/components/FabHemFeature";

const ITEMS = [
  { id: "bunawat", label: "Founder · Shipped Work", title: "Bunawat" },
  { id: "fab-hem", label: "Professional · Shipped Work", title: "Fab.com / Hem" },
];

export function SelectedWork() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 pt-12 pb-24 sm:px-8 sm:pt-32 sm:pb-32">
      <p className="font-hero text-xs tracking-widest text-muted uppercase">
        Selected Work
      </p>

      <div className="-mx-6 mt-10 flex gap-3 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
        {ITEMS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`shrink-0 rounded-md border px-5 py-4 text-left font-hero transition-colors ${
              active === i
                ? "border-accent"
                : "border-border hover:border-foreground"
            }`}
          >
            <span className="block whitespace-nowrap font-spirit text-lg font-semibold text-foreground">
              {item.title}
            </span>
            <span
              className={`block whitespace-nowrap text-sm ${active === i ? "text-accent" : "text-muted"}`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div key={active} className="mt-10">
        {active === 0 ? <BunawatFeature /> : <FabHemFeature />}
      </div>
    </section>
  );
}
