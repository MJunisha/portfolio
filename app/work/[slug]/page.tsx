import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BunawatVideo } from "@/components/BunawatVideo";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
          <Link
            href="/#work"
            className="text-sm font-medium text-accent hover:underline"
          >
            ← Back to case studies
          </Link>

          <p className="mt-8 font-mono text-xs tracking-widest text-accent uppercase">
            {study.theme}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{study.tagline}</p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {study.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-surface px-4 py-3"
              >
                <p className="text-lg font-semibold tracking-tight text-accent">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          {study.slug === "bunawat" && (
            <div className="mt-10">
              <BunawatVideo
                videoId="915531718"
                title="Bunawat prototype walkthrough — Abhay Singh"
              />
              <p className="mt-4 text-xs text-muted">
                Visual identity &amp; design:{" "}
                <a
                  href="https://www.behance.net/gallery/192041493/The-Bunawat-Store"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Abhay Singh ↗
                </a>
              </p>
            </div>
          )}

          <div className="mt-12 space-y-10">
            {study.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs && (
                  <div className="mt-3 space-y-4 text-base leading-relaxed text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.bullets && (
                  <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="relative pl-5">
                        <span className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
