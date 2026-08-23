export type CharToken = { char: string; delay: number };
export type RevealToken = { type: "word"; chars: CharToken[] } | { type: "space" };

const PAUSE_AFTER = new Set([",", ".", "—", ":", ";"]);

export function buildReveal(
  line: string,
  options?: { baseDelay?: number; charDelay?: number; pauseDelay?: number }
): RevealToken[] {
  const baseDelay = options?.baseDelay ?? 750;
  const charDelay = options?.charDelay ?? 55;
  const pauseDelay = options?.pauseDelay ?? 160;

  let delay = baseDelay;
  const words = line.split(" ");
  const tokens: RevealToken[] = [];

  words.forEach((word, wordIndex) => {
    const chars: CharToken[] = [];
    for (const char of word) {
      chars.push({ char, delay });
      delay += charDelay;
      if (PAUSE_AFTER.has(char)) delay += pauseDelay;
    }
    tokens.push({ type: "word", chars });

    if (wordIndex < words.length - 1) {
      tokens.push({ type: "space" });
      delay += charDelay;
    }
  });

  return tokens;
}
