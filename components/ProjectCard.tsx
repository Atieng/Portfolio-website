import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { categories } from "@/lib/categories";
import ImageFrame from "./ImageFrame";
import CategoryTag from "./CategoryTag";
import TechList from "./TechList";
import LinkList from "./LinkList";

export default function ProjectCard({ project }: { project: Project }) {
  const c = categories[project.category];
  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-line bg-panel transition-colors hover:border-dim/50">
      <Link href={`/projects/${project.slug}`} className="block" tabIndex={-1} aria-hidden>
        <ImageFrame image={project.cover} accent={c.hex} ratio="16 / 10" sizes="(min-width: 900px) 50vw, 100vw" />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <CategoryTag category={project.category} long />
        <h3 className="text-2xl font-semibold leading-tight tracking-tight">
          <Link href={`/projects/${project.slug}`}>
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
              {project.title}
            </span>
          </Link>
        </h3>
        <p className="text-dim">{project.summary}</p>
        <TechList items={project.tech} />
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
          <LinkList links={project.links} />
          <Link
            href={`/projects/${project.slug}`}
            className={`inline-flex items-center gap-1 text-sm font-medium ${c.text}`}
          >
            Case study <ArrowUpRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
