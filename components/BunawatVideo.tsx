"use client";

import { useEffect, useRef, useState } from "react";

const VIMEO_ORIGIN = "https://player.vimeo.com";

export function BunawatVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const post = (message: Record<string, unknown>) => {
      iframe.contentWindow?.postMessage(JSON.stringify(message), VIMEO_ORIGIN);
    };

    const observer = new IntersectionObserver(
      ([entry]) => post({ method: entry.isIntersecting ? "play" : "pause" }),
      { threshold: 0.35 }
    );
    observer.observe(iframe);

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== VIMEO_ORIGIN) return;
      try {
        const data = JSON.parse(event.data);
        if (data.event === "play" || data.event === "playing") setReady(true);
      } catch {
        // non-JSON message from the player; ignore
      }
    };
    window.addEventListener("message", onMessage);

    // Vimeo's postMessage API requires subscribing to an event before it
    // will fire, and any "play" sent before the player has loaded is
    // silently dropped (which is what the initial IntersectionObserver
    // callback usually races against) — so explicitly (re)send play once
    // the iframe's own document has actually loaded.
    const onIframeLoad = () => {
      post({ method: "addEventListener", value: "play" });
      post({ method: "play" });
    };
    iframe.addEventListener("load", onIframeLoad);

    // Safety net: never leave the cover up indefinitely if the player
    // never reports back (e.g. blocked by an extension).
    const fallback = setTimeout(() => setReady(true), 3000);

    return () => {
      observer.disconnect();
      window.removeEventListener("message", onMessage);
      iframe.removeEventListener("load", onIframeLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-surface">
      <iframe
        ref={iframeRef}
        src={`${VIMEO_ORIGIN}/video/${videoId}?background=1&loop=1&muted=1&autopause=0`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-surface transition-opacity duration-500 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
