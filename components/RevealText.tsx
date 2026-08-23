import type { RevealToken } from "@/lib/textReveal";

export function RevealText({
  text,
  tokens,
}: {
  text: string;
  tokens: RevealToken[];
}) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {tokens.map((token, i) =>
          token.type === "space" ? (
            " "
          ) : (
            <span key={i} className="inline-block whitespace-nowrap">
              {token.chars.map((c, j) => (
                <span
                  key={j}
                  className="opening-char"
                  style={{ animationDelay: `${c.delay}ms` }}
                >
                  {c.char}
                </span>
              ))}
            </span>
          )
        )}
      </span>
    </>
  );
}
