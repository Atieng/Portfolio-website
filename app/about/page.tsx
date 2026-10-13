import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import Timeline from "@/components/Timeline";
import { Para } from "@/components/Todo";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: Computer Science student working across data science, development and design.`,
};

export default function About() {
  return (
    <div className="pt-14 sm:pt-20">
      {/* Intro: a large statement beside the longer story */}
      <section className="grid gap-10 lg:grid-cols-12">
        <h1 className="font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.03em] [font-stretch:85%] sm:text-7xl lg:col-span-5">
          About me
        </h1>
        <div className="space-y-5 text-lg leading-relaxed lg:col-span-7">
          {site.about.intro.map((p) => (
            <Para key={p}>{p}</Para>
          ))}
          {site.resume && (
            <a href={site.resume} className="inline-block rounded-full bg-mint px-5 py-2.5 text-base font-medium text-ink">
              Download my resume
            </a>
          )}
        </div>
      </section>

      {/* Journey: three timelines side by side, each in its own colour */}
      <section aria-labelledby="journey" className="mt-24">
        <h2 id="journey" className="font-display text-3xl font-bold tracking-tight">
          My learning journey
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-5 text-sm font-medium text-mint">Computer Science</h3>
            <Timeline items={site.education} dotClass="bg-mint" />
          </div>
          <div>
            <h3 className="mb-5 text-sm font-medium text-lavender">Data science training and certifications</h3>
            <Timeline items={site.training} dotClass="bg-lavender" />
          </div>
          <div>
            <h3 className="mb-5 text-sm font-medium text-pink">Communities and leadership</h3>
            <Timeline items={site.community} dotClass="bg-pink" />
          </div>
        </div>
      </section>

      {/* How I work + what's next: two contrasting panels */}
      <section className="mt-24 grid gap-5 md:grid-cols-5">
        <div className="rounded-card border border-line bg-panel p-6 sm:p-8 md:col-span-3">
          <h2 className="font-display text-2xl font-bold tracking-tight">How I approach problems</h2>
          <div className="mt-4 space-y-4">
            {site.about.approach.map((p) => (
              <Para key={p}>{p}</Para>
            ))}
          </div>
        </div>
        <div className="rounded-card bg-lavender p-6 text-ink sm:p-8 md:col-span-2">
          <h2 className="font-display text-2xl font-bold tracking-tight">Exploring next</h2>
          <div className="mt-4 space-y-4 [&_p]:!border-ink/30 [&_p]:!text-ink/70">
            {site.about.exploring.map((p) => (
              <Para key={p}>{p}</Para>
            ))}
          </div>
        </div>
      </section>

      {/* Skills, grouped. No percentage bars. */}
      <section id="skills" aria-labelledby="skills-title" className="mt-24 scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="skills-title" className="font-display text-3xl font-bold tracking-tight">
            Skills and tools
          </h2>
          <p className="text-sm text-dim">Grouped by what I use them for.</p>
        </div>
        <dl className="mt-8 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {site.skills.map((g) => (
            <div key={g.group} className="border-b border-line py-5 sm:pr-8">
              <dt className="font-medium">{g.group}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <span key={i} className="rounded-full bg-raised px-3 py-1 text-sm text-dim">
                    {i}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-20 text-lg">
        Want to talk?{" "}
        <Link href="/contact" className="text-mint underline decoration-mint/40 underline-offset-4 hover:decoration-mint">
          Get in touch
        </Link>
        .
      </p>
    </div>
  );
}
