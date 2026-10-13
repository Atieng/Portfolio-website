import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/data/site";
import { projects, featuredProject } from "@/data/projects";
import { gallery } from "@/data/gallery";
import { categories } from "@/lib/categories";
import type { Category } from "@/lib/types";
import ImageFrame from "@/components/ImageFrame";
import CategoryTag from "@/components/CategoryTag";
import TechList from "@/components/TechList";
import { Text } from "@/components/Todo";
import { isTodo } from "@/lib/todo";

export default function Home() {
  return (
    <>
      <Hero />
      <section aria-label="Overview" className="bento mt-6">
        <Featured />
        <AreaCard
          area="data"
          className="[grid-area:data]"
          title="Data science"
          blurb="Analysis, machine learning and visualisation. Where I ask questions of data and check whether the answers hold up."
          href="/projects?category=data"
          linkText="See data projects"
        >
          <Scatter />
        </AreaCard>
        <AreaCard
          area="fullstack"
          className="[grid-area:dev]"
          title="Full-stack"
          blurb="Websites and applications I've built, front to back."
          href="/projects?category=fullstack"
          linkText="See builds"
        />
        <AreaCard
          area="design"
          className="[grid-area:design]"
          title="Design"
          blurb={`Canva work, UI concepts and visual experiments. ${gallery.length} pieces in the gallery.`}
          href="/design"
          linkText="Open gallery"
        />
        <AboutCard />
        <SkillsCard />
        <ConnectCard />
      </section>
    </>
  );
}

function Hero() {
  const words: [string, Category][] = [
    ["Data", "data"],
    ["Development", "fullstack"],
    ["Design", "design"],
  ];

  return (
    <section className="grid gap-10 pb-10 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-14 lg:pt-20">
      <div className="min-w-0 lg:col-span-8">
        <p className="rise mb-6 inline-flex max-w-full items-center gap-2.5 text-sm text-dim">
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-mint" />
          </span>
          <span>
            Currently: <Text>{site.hero.currently}</Text>
          </span>
        </p>

        <h1
          className="font-display font-extrabold leading-[0.88] tracking-[-0.035em] [font-stretch:82%]"
          style={{ fontSize: "clamp(3rem, 8.4vw, 7rem)" }}
        >
          {words.map(([word, cat], i) => (
            <span key={word} className="rise block" style={{ animationDelay: `${0.08 + i * 0.1}s` }}>
              {word}
              <span className={categories[cat].text}>.</span>
            </span>
          ))}
        </h1>

        <p className="rise mt-8 max-w-[34ch] text-xl leading-snug sm:text-2xl" style={{ animationDelay: "0.42s" }}>
          {site.hero.lead}
        </p>
        <p className="rise mt-4 max-w-[58ch] text-dim" style={{ animationDelay: "0.5s" }}>
          {site.hero.body}
        </p>

        <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.58s" }}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Explore my work
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
          {site.resume ? (
            <a href={site.resume} className="rounded-full border border-line px-5 py-3 transition-colors hover:border-text">
              View resume
            </a>
          ) : (
            <Link href="/about" className="rounded-full border border-line px-5 py-3 transition-colors hover:border-text">
              Get to know me
            </Link>
          )}
        </div>
      </div>

      <div className="rise lg:col-span-4" style={{ animationDelay: "0.3s" }}>
        <Portrait />
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-dim" aria-label="Colour key">
          {(Object.keys(categories) as Category[]).map((k) => (
            <li key={k} className="inline-flex items-center gap-2">
              <span className={`size-2 rounded-full ${categories[k].dot}`} aria-hidden />
              {categories[k].label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Portrait() {
  // Three offset colour panels sit behind the photo: one per area of work.
  return (
    <div className="relative mr-3 max-w-[260px] sm:max-w-[340px] lg:ml-auto lg:max-w-[380px]">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] bg-pink/80" aria-hidden />
      <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[1.75rem] bg-mint/80" aria-hidden />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-lavender">
        {site.photo ? (
          <div className="relative aspect-[4/5]">
            <Image src={site.photo.src} alt={site.photo.alt} fill priority sizes="420px" className="object-cover" />
          </div>
        ) : (
          <div
            role="img"
            aria-label="Placeholder for a photo"
            className="grid aspect-[4/5] place-items-center bg-[#1d1b26] text-center"
          >
            <div className="px-8">
              <p className="font-display text-7xl font-extrabold text-lavender/80">
                {site.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </p>
              <p className="mt-3 text-sm text-dim">Add your photo in data/site.ts</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Featured() {
  const p = featuredProject;
  const c = categories[p.category];
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-panel transition-colors [grid-area:featured] hover:border-lavender/50">
      <ImageFrame image={p.cover} accent={c.hex} ratio="16 / 9" priority />
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="rounded-full bg-lavender px-2.5 py-0.5 font-medium text-ink">Featured project</span>
          <CategoryTag category={p.category} long />
        </div>
        <h2 className="max-w-[18ch] text-3xl font-bold leading-[1.05] tracking-tight sm:text-[2.6rem]">
          <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0">
            {p.title}
          </Link>
        </h2>
        <p className="max-w-[60ch] text-dim">{p.summary}</p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-2">
          <TechList items={p.tech} />
          <span className="inline-flex items-center gap-1 font-medium text-lavender">
            Read the case study
            <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </div>
    </article>
  );
}

function AreaCard({
  area,
  title,
  blurb,
  href,
  linkText,
  className = "",
  children,
}: {
  area: Category;
  title: string;
  blurb: string;
  href: string;
  linkText: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const c = categories[area];
  const list = area === "design" ? [] : projects.filter((p) => p.category === area);
  return (
    <article className={`group relative flex flex-col gap-4 rounded-card border p-6 transition-colors ${c.border} ${c.bgSoft} hover:bg-raised ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <h2 className={`font-display text-[1.7rem] font-bold leading-none tracking-tight ${c.text}`}>{title}</h2>
        <ArrowUpRight size={20} className={`shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${c.text}`} aria-hidden />
      </div>
      <p className="text-dim">{blurb}</p>
      {children}
      {list.length > 0 && (
        <ul className="space-y-1 text-sm">
          {list.map((p) => (
            <li key={p.slug} className="flex items-center gap-2">
              <span className={`size-1 rounded-full ${c.dot}`} aria-hidden />
              {p.title}
            </li>
          ))}
        </ul>
      )}
      <Link href={href} className={`mt-auto text-sm font-medium ${c.text} after:absolute after:inset-0`}>
        {linkText}
      </Link>
    </article>
  );
}

/** A small decorative scatter plot for the data card. */
function Scatter() {
  const pts = [
    [6, 52], [14, 46], [22, 49], [30, 40], [38, 42], [46, 34], [54, 36],
    [62, 27], [70, 30], [78, 21], [86, 24], [94, 14], [102, 17], [110, 9],
  ];
  return (
    <svg viewBox="0 0 116 60" className="h-16 w-full max-w-[260px]" aria-hidden>
      <line x1="2" y1="58" x2="114" y2="58" stroke="currentColor" className="text-lavender/30" />
      <line x1="4" y1="54" x2="112" y2="10" stroke="currentColor" strokeDasharray="2 3" className="text-lavender/50" />
      {pts.map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2.2" className="fill-lavender" />
      ))}
    </svg>
  );
}

function AboutCard() {
  return (
    <article className="flex flex-col gap-4 rounded-card border border-line bg-panel p-6 [grid-area:about]">
      <h2 className="font-display text-[1.7rem] font-bold leading-none tracking-tight">About me</h2>
      <p className="text-dim">{site.about.intro[0]}</p>
      <Link href="/about" className="mt-auto inline-flex items-center gap-1 text-sm font-medium hover:underline">
        More about me <ArrowRight size={15} aria-hidden />
      </Link>
    </article>
  );
}

function SkillsCard() {
  const shown = site.skills.slice(0, 4);
  return (
    <article className="flex flex-col gap-5 rounded-card border border-line bg-[#16161a] p-6 [grid-area:skills]">
      <h2 className="font-display text-[1.7rem] font-bold leading-none tracking-tight">Skills and tools</h2>
      <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {shown.map((g) => (
          <div key={g.group}>
            <dt className="text-sm font-medium">{g.group}</dt>
            <dd className="mt-1 text-sm text-dim">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
      <Link href="/about#skills" className="mt-auto text-sm text-dim hover:text-text">
        All {site.skills.length} groups on the About page
      </Link>
    </article>
  );
}

function ConnectCard() {
  const hasEmail = !isTodo(site.email);
  return (
    <article className="flex flex-col gap-4 rounded-card bg-pink p-6 text-ink [grid-area:connect]">
      <h2 className="font-display text-[2rem] font-extrabold leading-[0.95] tracking-tight">Let&apos;s connect</h2>
      <p className="text-ink/75">{site.availability}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {hasEmail && (
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-text">
            <Mail size={15} aria-hidden /> Email me
          </a>
        )}
        <Link href="/contact" className="rounded-full border border-ink/30 px-4 py-2 text-sm font-medium hover:border-ink">
          {hasEmail ? "All links" : "Contact"}
        </Link>
      </div>
    </article>
  );
}
