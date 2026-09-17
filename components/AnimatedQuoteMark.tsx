"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function AnimatedQuoteMark({
  className,
  src = "/quotes/quote-mark.png",
  imageClassName,
}: {
  className?: string;
  src?: string;
  imageClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <div
        className={`relative h-full w-full transition-all duration-700 ease-out motion-reduce:!scale-100 motion-reduce:!opacity-100 motion-reduce:transition-none ${
          visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          fill
          className={`object-contain ${imageClassName ?? ""}`}
          sizes="56px"
        />
      </div>
    </div>
  );
}
