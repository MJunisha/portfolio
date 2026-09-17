"use client";

import { useEffect, useRef, useState } from "react";
import { quotes } from "@/lib/quotes";

const ROTATE_MS = 4000;
const HALF_FLIP_MS = 250;

type Phase = "idle" | "out" | "in";

export function QuoteFeed() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [paused, setPaused] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (reducedMotionRef.current) {
        setIndex((i) => (i + 1) % quotes.length);
        return;
      }

      setPhase("out");
      setTimeout(() => {
        setIndex((i) => (i + 1) % quotes.length);
        setPhase("in");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setPhase("idle"));
        });
      }, HALF_FLIP_MS);
    }, ROTATE_MS);

    return () => clearInterval(interval);
  }, [paused]);

  const goTo = (next: number) => {
    setIndex((next + quotes.length) % quotes.length);
    setPhase("idle");
  };

  const current = quotes[index];

  const rotation = phase === "out" ? -90 : phase === "in" ? 90 : 0;
  const transitionEnabled = phase !== "in";

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="font-hero text-xs tracking-widest text-muted uppercase">
          Notes to Self
        </p>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mt-6"
          style={{ perspective: "1400px" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-3 h-full rounded-2xl border border-accent/20 bg-background"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-3 top-1.5 h-full rounded-2xl border border-accent/30 bg-background"
          />

          <div
            className="relative rounded-2xl border-2 border-accent bg-background px-6 py-8 shadow-[0_20px_45px_-30px_rgba(17,17,17,0.25)] motion-reduce:!rotate-0 motion-reduce:transition-none sm:px-10 sm:py-10"
            style={{
              transform: `rotateY(${rotation}deg)`,
              transition: transitionEnabled
                ? `transform ${HALF_FLIP_MS}ms ease-in`
                : "none",
            }}
          >
            <p className="font-hero text-xs tracking-widest text-accent uppercase">
              {current.theme}
            </p>
            <blockquote className="mt-4 max-w-2xl font-spirit text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              {current.quote}
            </blockquote>

            <div className="mt-6 h-px w-12 bg-border" />

            <p className="mt-6 max-w-xl font-hero text-sm leading-relaxed text-muted sm:text-base">
              <span className="font-medium text-foreground">Action: </span>
              {current.action}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous"
                className="font-hero text-sm text-muted transition-colors hover:text-accent"
              >
                ←
              </button>
              <span className="font-hero text-xs text-muted">
                {index + 1} / {quotes.length}
              </span>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next"
                className="font-hero text-sm text-muted transition-colors hover:text-accent"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
