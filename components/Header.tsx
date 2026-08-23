import { profile } from "@/lib/data";
import { MailIcon, LinkedInIcon, InstagramIcon } from "@/components/Icons";
import { buildReveal } from "@/lib/textReveal";
import { RevealText } from "@/components/RevealText";

const PHRASE = "Act. Achieve. Repeat.";

export function Header() {
  const tokens = buildReveal(PHRASE, { baseDelay: 300, charDelay: 60, pauseDelay: 220 });

  return (
    <header className="sticky top-4 z-50 mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-border bg-surface px-6 py-3 sm:px-8">
      <a href="#top" className="font-spirit text-sm font-medium tracking-tight">
        <RevealText text={PHRASE} tokens={tokens} />
      </a>

      <nav className="flex items-center gap-4 text-muted">
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="transition-colors hover:text-foreground"
        >
          <MailIcon className="h-4 w-4" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-foreground"
        >
          <LinkedInIcon className="h-4 w-4" />
        </a>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="transition-colors hover:text-foreground"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
        {/* TODO: GitHub icon/link pending profile URL — see GitHubIcon in Icons.tsx */}
      </nav>
    </header>
  );
}
