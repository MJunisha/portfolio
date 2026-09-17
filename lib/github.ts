export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const DAYS_TO_SHOW = 100;

export async function getRecentContributions(
  username: string
): Promise<ContributionDay[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;

    const data: { contributions: ContributionDay[] } = await res.json();
    return data.contributions.slice(-DAYS_TO_SHOW);
  } catch {
    return null;
  }
}

export function toWeeks(days: ContributionDay[]): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}
