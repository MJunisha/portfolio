import type { Testimonial } from "@/lib/testimonials";
import { profile } from "@/lib/data";
import { AnimatedQuoteMark } from "@/components/AnimatedQuoteMark";

type TestimonialSeparatorProps = Testimonial & {
  variant?: "left" | "centered";
};

function RecommendationCard({
  strengthLabel,
  quote,
  name,
  title,
  linkedinUrl,
  relationship,
  date,
}: Testimonial) {
  return (
    <div className="relative w-full rounded-lg border border-[#4f46e5]/40 px-6 py-6">
      <AnimatedQuoteMark
        src="/quotes/quote-mark-open.png"
        imageClassName="invert"
        className="absolute -top-4 left-6 h-8 w-14 opacity-60"
      />
      <AnimatedQuoteMark
        src="/quotes/quote-mark-closed.png"
        className="absolute -bottom-4 right-6 h-8 w-14 opacity-60"
      />

      <p className="font-hero text-xs tracking-widest text-accent uppercase">
        {strengthLabel}
      </p>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-hero text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            {name} <span className="font-normal text-muted">· 1st</span>
          </a>
          <p className="font-hero text-sm text-muted">{title}</p>
        </div>
        <span className="shrink-0 font-hero text-xs text-muted">{date}</span>
      </div>
      <p className="mt-1 font-hero text-xs text-muted italic">
        {relationship}
      </p>

      <blockquote className="mt-4 font-spirit text-lg font-medium leading-snug tracking-tight sm:text-xl">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block font-hero text-xs text-muted underline decoration-border underline-offset-2 transition-colors hover:text-accent"
      >
        View recommendation on LinkedIn ↗
      </a>
    </div>
  );
}

export function TestimonialSeparator({
  strengthLabel,
  quote,
  name,
  title,
  linkedinUrl,
  relationship,
  date,
  position,
  variant = "left",
}: TestimonialSeparatorProps) {
  const testimonial: Testimonial = {
    strengthLabel,
    quote,
    name,
    title,
    linkedinUrl,
    relationship,
    date,
    position,
  };

  if (variant === "centered") {
    return (
      <section>
        <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-10 sm:px-8 sm:py-12">
          <RecommendationCard {...testimonial} />
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-12">
        <RecommendationCard {...testimonial} />
      </div>
    </section>
  );
}
