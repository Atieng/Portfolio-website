import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { categories } from "@/lib/categories";
import ImageFrame from "@/components/ImageFrame";
import CategoryTag from "@/components/CategoryTag";
import LinkList from "@/components/LinkList";
import TechList from "@/components/TechList";
import { Para, Text } from "@/components/Todo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary, images: p.cover.src ? [p.cover.src] : undefined },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const c = categories[p.category];
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  const facts: [string, string][] = [
    ["Role", p.role],
    ["Year", p.year],
    ["Status", p.status],
  ];

  return (
    <article className="pt-10 sm:pt-14">
      <Link href={`/projects?category=${p.category}`} className="inline-flex items-center gap-1.5 text-sm text-dim hover:text-text">
        <ArrowLeft size={15} aria-hidden /> {c.label} projects
      </Link>

      <header className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CategoryTag category={p.category} long />
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] [font-stretch:88%] sm:text-6xl">
            {p.title}
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg text-dim">{p.summary}</p>
        </div>
        <dl className={`self-end rounded-card border ${c.border} p-5 text-sm lg:col-span-4`}>
          {facts.map(([k, v]) => (
            <div key={k} className="flex gap-4 border-b border-line/70 py-2.5 first:pt-0 last:border-0">
              <dt className="w-16 shrink-0 text-dim">{k}</dt>
              <dd>
                <Text>{v}</Text>
              </dd>
            </div>
          ))}
          <div className="flex gap-4 pt-2.5">
            <dt className="w-16 shrink-0 text-dim">Tools</dt>
            <dd>
              <TechList items={p.tech} className="!text-text" />
            </dd>
          </div>
        </dl>
      </header>

      <LinkList links={p.links} className="mt-8" />

      <ImageFrame image={p.cover} accent={c.hex} ratio="16 / 9" priority className="mt-10 rounded-card" sizes="100vw" />

      <div className="mt-14 space-y-14">
        {p.sections.map((s) => (
          <section key={s.heading} className="grid gap-4 lg:grid-cols-12">
            <h2 className={`font-display text-2xl font-bold tracking-tight lg:col-span-4`}>
              <span className={`mr-2 inline-block size-2 -translate-y-1 rounded-full ${c.dot}`} aria-hidden />
              {s.heading}
            </h2>
            <div className="space-y-4 text-[1.05rem] lg:col-span-8 lg:max-w-[65ch]">
              {s.body?.map((b) => (
                <Para key={b}>{b}</Para>
              ))}
              {s.list && (
                <ul className="list-disc space-y-2 pl-5 marker:text-dim">
                  {s.list.map((li) => (
                    <li key={li}>
                      <Text>{li}</Text>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {s.images && s.images.length > 0 && (
              <div className={`grid gap-4 lg:col-span-8 lg:col-start-5 ${s.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {s.images.map((img, i) => (
                  <figure key={i}>
                    <ImageFrame image={img} accent={c.hex} ratio="16 / 10" className="rounded-tile" />
                    {img.src && img.caption && <figcaption className="mt-2 text-sm text-dim">{img.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {next && (
        <Link
          href={`/projects/${next.slug}`}
          className={`group mt-20 flex items-center justify-between gap-6 rounded-card border p-6 transition-colors sm:p-8 ${categories[next.category].border} ${categories[next.category].bgSoft} hover:bg-raised`}
        >
          <span>
            <span className="text-sm text-dim">Next project</span>
            <span className="mt-1 block font-display text-2xl font-bold tracking-tight sm:text-4xl">{next.title}</span>
          </span>
          <ArrowRight className={`shrink-0 transition-transform group-hover:translate-x-1 ${categories[next.category].text}`} aria-hidden />
        </Link>
      )}
    </article>
  );
}
