import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { ArrowUpRightIcon } from "@/components/Icons";
import { BunawatVideo } from "@/components/BunawatVideo";

export function BunawatFeature() {
  const study = caseStudies.find((s) => s.slug === "bunawat");
  if (!study) return null;

  return (
    <article>
      <p className="font-hero text-xs tracking-widest text-muted uppercase">
        Founder · Shipped Work
      </p>
      <h3 className="mt-4 font-spirit text-3xl font-semibold tracking-tight sm:text-4xl">
        Bunawat
      </h3>

      <p className="mt-8 font-hero text-xs tracking-widest text-accent uppercase">
        The Decision
      </p>
      <p className="mt-3 max-w-2xl font-spirit text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
        What should we preserve when taking a relationship-led business
        online?
      </p>
      <p className="mt-4 max-w-xl font-hero text-base leading-relaxed text-muted sm:text-lg">
        {study.tagline}
      </p>

      <div className="card-reveal mt-10">
        <BunawatVideo
          videoId="915531431"
          title="Bunawat logo animation — Abhay Singh"
        />
      </div>

      {/*
        TODO(rights): the embedded video ("Bunawat Logo") plays from Abhay
        Singh's public Vimeo account and is part of the same Behance visual
        identity work (see attribution link below) — used here for local-
        prototype purposes only. The visual identity/design work is his, not
        Junisha's — confirm/clear rights for permanent production use before
        this ships publicly.
      */}
      <p className="mt-4 font-hero text-xs text-muted">
        Visual identity &amp; design:{" "}
        <a
          href="https://www.behance.net/gallery/192041493/The-Bunawat-Store"
          target="_blank"
          rel="noreferrer"
          className="text-accent hover:text-accent-hover hover:underline"
        >
          Abhay Singh ↗
        </a>
      </p>

      <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-6">
        <div>
          <p className="font-hero text-xs tracking-widest text-muted uppercase">
            Customers
          </p>
          <p className="mt-1 font-spirit text-2xl font-semibold tracking-tight">
            40,000+
          </p>
        </div>
        <div>
          <p className="font-hero text-xs tracking-widest text-muted uppercase">
            Returns
          </p>
          <p className="mt-1 font-spirit text-2xl font-semibold tracking-tight">
            &lt;12%
          </p>
        </div>
        <div>
          <p className="font-hero text-xs tracking-widest text-muted uppercase">
            Paid marketing
          </p>
          <p className="mt-1 font-spirit text-2xl font-semibold tracking-tight">
            &lt;15% of GMV
          </p>
        </div>
      </div>

      <Link
        href={`/work/${study.slug}`}
        className="mt-8 inline-flex items-center gap-1.5 font-hero text-sm font-medium text-accent hover:text-accent-hover hover:underline"
      >
        View work
        <ArrowUpRightIcon className="h-4 w-4" />
      </Link>
    </article>
  );
}
