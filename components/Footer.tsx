import { profile } from "@/lib/data";
import { MailIcon, LinkedInIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer id="about" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="font-hero text-xs tracking-widest text-muted uppercase">
          About
        </p>
        <div className="mt-6 max-w-xl space-y-4 font-hero text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I&apos;m based in Pune, and still build things on the side just
            to understand how they work.
          </p>
        </div>

        <h2 className="mt-16 font-spirit text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s talk
        </h2>
        <p className="mt-3 max-w-xl font-hero text-muted">
          If you&apos;d like to connect on product, growth, or anything in
          between — DM me on LinkedIn or drop me an email.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-accent px-5 py-2.5 font-hero text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-hero text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <p className="mt-16 font-hero text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
