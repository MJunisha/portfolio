import { profile } from "@/lib/data";
import { GitHubIcon } from "@/components/Icons";

export function GitHubActivity() {
  return (
    <div className="min-w-0">
      <h2 className="font-spirit text-3xl font-semibold tracking-tight sm:text-4xl">
        Building
      </h2>
      <p className="mt-3 max-w-xs font-hero text-sm text-muted">
        A rolling look at what I&apos;ve been shipping on the side.
      </p>

      <div className="mt-4 overflow-x-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/183bc8/${profile.githubUsername}`}
          alt={`${profile.name}'s GitHub contribution activity`}
          className="min-w-[420px]"
        />
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 font-hero text-sm text-muted transition-colors hover:text-accent"
      >
        <GitHubIcon className="h-4 w-4" />
        {profile.githubUsername} on GitHub
      </a>
    </div>
  );
}
