import { profile } from "@/lib/data";
import { MailIcon, LinkedInIcon } from "@/components/Icons";

export function Hero() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
            {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-muted sm:text-xl">{profile.tagline}</p>
          <p className="mt-1 text-lg text-muted sm:text-xl">{profile.subTagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <MailIcon className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div
          aria-hidden
          className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-3xl font-semibold text-accent sm:h-36 sm:w-36 sm:text-4xl"
        >
          {initials}
        </div>
      </div>
    </section>
  );
}
