import { philosophy } from "@/lib/data";

export function Philosophy() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <blockquote className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          &ldquo;{philosophy.quote}&rdquo;
        </blockquote>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {philosophy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
