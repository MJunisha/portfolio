import { profile } from "@/lib/data";
import { GitHubIcon } from "@/components/Icons";
import { getRecentContributions, toWeeks } from "@/lib/github";

const LEVEL_CLASS = [
  "bg-border",
  "bg-accent/25",
  "bg-accent/50",
  "bg-accent/75",
  "bg-accent",
];

export async function GitHubActivity() {
  const days = await getRecentContributions(profile.githubUsername);

  return (
    <div className="min-w-0">
      <h2 className="font-spirit text-3xl font-semibold tracking-tight sm:text-4xl">
        Building
      </h2>
      <p className="mt-3 max-w-xs font-hero text-sm text-muted">
        A rolling look at what I&apos;ve been shipping on the side.
      </p>

      <div className="mt-4 overflow-x-auto">
        {days ? (
          <div className="flex gap-[3px]">
            {toWeeks(days).map((week, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                    className={`h-2.5 w-2.5 rounded-[2px] ${LEVEL_CLASS[day.level] ?? LEVEL_CLASS[0]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://ghchart.rshah.org/183bc8/${profile.githubUsername}`}
            alt={`${profile.name}'s GitHub contribution activity`}
            className="min-w-[420px]"
          />
        )}
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
