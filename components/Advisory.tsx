"use client";

import { useEffect, useRef } from "react";
import { MessageIcon, LinkedInIcon } from "@/components/Icons";
import { profile } from "@/lib/data";

function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const tryPlay = () => {
      video.play().catch((err) => {
        console.error("Advisory intro video failed to autoplay:", err);
      });
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    return () => video.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border-2 border-accent">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/advisory/junisha-intro.mov"
        muted
        loop
        playsInline
        preload="auto"
        autoPlay
        aria-hidden="true"
      />
    </div>
  );
}

export function Advisory() {
  return (
    <section id="advisory" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="font-hero text-xs tracking-widest text-muted uppercase">
          Advisory
        </p>

        <div className="mt-6 grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-12">
          <div>
            <IntroVideo />
          </div>

          <div>
            <h2 className="font-spirit text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
              Decision Design &gt; Process Design
            </h2>
            <p className="mt-6 font-spirit text-lg leading-relaxed text-muted sm:text-xl">
              If you&apos;re working through a decision that actually matters
              — not another feature request — and would like a second,
              independent read on it, message me.
            </p>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-hero text-sm text-muted transition-colors hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              Connect on LinkedIn
            </a>

            <div className="mt-8">
              {/* TODO: replace with WhatsApp link once integration is set up */}
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-accent px-5 py-2.5 font-hero text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <MessageIcon className="h-4 w-4" />
                Message Junisha
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
