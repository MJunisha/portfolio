"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { ArrowUpRightIcon } from "@/components/Icons";

const CONFIG: Record<
  string,
  {
    logo: { src: string; alt: string };
    steps: string[];
    question: string;
  }
> = {
  snapmint: {
    logo: { src: "/work/snapmint/logo.webp", alt: "Snapmint" },
    steps: ["Micro-business owner", "Distribution / merchant channel", "Credit access"],
    question:
      "When access to credit is constrained, can distribution become part of the product?",
  },
  koskii: {
    logo: { src: "/work/koskii/logo.avif", alt: "Koskii" },
    steps: ["Browse", "Confidence", "Assistance", "Purchase"],
    question:
      "What counts as activation when confidence — not account creation — is the real barrier to purchase?",
  },
  atomberg: {
    logo: { src: "/work/atomberg/logo.png", alt: "Atomberg" },
    steps: ["Event types", "Audience tiers", "Growth contribution"],
    question:
      "When should an event be treated as a growth product rather than a marketing campaign?",
  },
};

const STACK_BASE = 96;
const STACK_STEP = 44;

function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          {i > 0 && <span className="font-hero text-muted">→</span>}
          <span className="border border-border px-3 py-1.5 font-hero text-xs text-foreground sm:text-sm">
            {step}
          </span>
        </span>
      ))}
    </div>
  );
}

function QuestionDiagram({ steps, question }: { steps: string[]; question: string }) {
  return (
    <div className="mt-5 border border-border p-5 sm:p-6">
      <FlowSteps steps={steps} />
      <p className="mt-5 font-hero text-xs tracking-widest text-accent uppercase">
        The Question
      </p>
      <p className="mt-2 font-spirit text-lg font-semibold leading-snug tracking-tight sm:text-xl">
        {question}
      </p>
    </div>
  );
}

export function IndependentStudies() {
  const studies = caseStudies.filter((study) => study.kind === "independent-study");
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame: number | null = null;

    const computeActive = () => {
      let next = 0;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        const threshold = STACK_BASE + i * STACK_STEP;
        if (top <= threshold + 2) next = i;
      });
      setActiveIndex(next);
      frame = null;
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(computeActive);
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="studies" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="font-hero text-xs tracking-widest text-muted uppercase">
          Independent Product Studies
        </p>
        <p className="mt-4 max-w-2xl font-hero text-base leading-relaxed text-muted sm:text-lg">
          Independent exercises where I use real products and businesses to
          explore a specific product, growth or systems question. These are
          not company engagements.
        </p>

        <div className="relative mt-10">
          {studies.map((study, i) => {
            const config = CONFIG[study.slug];
            const isActive = i === activeIndex;

            return (
              <article
                key={study.slug}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`sticky rounded-2xl border bg-background px-6 py-8 shadow-[0_20px_45px_-30px_rgba(17,17,17,0.25)] transition-[filter,border-color] duration-300 sm:px-8 sm:py-10 ${
                  i > 0 ? "mt-6" : ""
                } ${isActive ? "border-accent" : "border-border"}`}
                style={{
                  top: `${STACK_BASE + i * STACK_STEP}px`,
                  zIndex: i + 1,
                  filter: isActive ? "none" : "blur(1px) brightness(0.97)",
                }}
              >
                <div className="flex items-center gap-3">
                  {config && (
                    <div className="relative h-6 w-16 shrink-0 overflow-hidden rounded-sm">
                      <Image
                        src={config.logo.src}
                        alt={config.logo.alt}
                        fill
                        className="object-contain object-left"
                        sizes="64px"
                      />
                    </div>
                  )}
                  <p className="font-hero text-xs tracking-widest text-muted uppercase">
                    Independent Product Study
                  </p>
                </div>

                <h3 className="mt-3 font-spirit text-xl font-semibold tracking-tight sm:text-2xl">
                  {study.title}
                </h3>
                <p className="mt-2 max-w-2xl font-hero text-base text-muted">
                  {study.tagline}
                </p>

                {config && <QuestionDiagram steps={config.steps} question={config.question} />}

                <Link
                  href={`/work/${study.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 font-hero text-sm font-medium text-accent hover:text-accent-hover hover:underline"
                >
                  View study
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
