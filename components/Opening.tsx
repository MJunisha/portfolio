import { buildReveal } from "@/lib/textReveal";
import { RevealText } from "@/components/RevealText";

const LINE =
  "I work on products, businesses and systems where the hard part is deciding what should happen next.";

export function Opening() {
  const tokens = buildReveal(LINE);

  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pt-28 pb-12 sm:px-8 sm:pt-40 sm:pb-20"
    >
      <h1 className="font-spirit text-4xl font-semibold tracking-tight sm:text-6xl">
        Junisha
        <span aria-hidden className="opening-caret ml-1 inline-block text-accent">
          |
        </span>
      </h1>

      <p className="mt-6 max-w-xl font-hero text-lg leading-relaxed text-foreground sm:text-xl">
        <RevealText text={LINE} tokens={tokens} />
      </p>

      <p className="mt-6 max-w-xl font-hero text-base leading-relaxed text-muted sm:text-lg">
        My path runs from engineering and quality, into product, through
        startups and founding a business I rebuilt from the ground up, and
        at present, I navigate complex enterprise systems—guiding decision
        design, AI adoption, and advanced workflow automation.
      </p>

      <a
        href="#work"
        className="mt-10 inline-flex items-center gap-2 rounded-md border border-accent px-5 py-2.5 font-hero text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Selected work
        <span aria-hidden className="opening-scroll-cue inline-block">
          ↓
        </span>
      </a>
    </section>
  );
}
