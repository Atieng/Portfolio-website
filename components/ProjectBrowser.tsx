"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { Category, Project } from "@/lib/types";
import { categories, categoryOrder } from "@/lib/categories";
import ProjectCard from "./ProjectCard";

type Filter = "all" | Category;
const isCategory = (v: string | null): v is Category => !!v && v in categories;

/**
 * Filters are kept in the URL (?category=data) so a filtered view can be
 * shared or linked to, and the back button works as expected.
 */
export default function ProjectBrowser({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const raw = params.get("category");
  const active: Filter = isCategory(raw) ? raw : "all";

  const setFilter = (f: Filter) => {
    router.replace(f === "all" ? "/projects" : `/projects?category=${f}`, { scroll: false });
  };

  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);
  const count = (f: Filter) => (f === "all" ? projects.length : projects.filter((p) => p.category === f).length);

  const filters: { id: Filter; label: string; ring: string }[] = [
    { id: "all", label: "All projects", ring: "aria-pressed:bg-text aria-pressed:text-ink" },
    ...categoryOrder.map((c) => ({
      id: c as Filter,
      label: categories[c].label,
      ring:
        c === "data"
          ? "aria-pressed:bg-lavender aria-pressed:text-ink"
          : c === "fullstack"
            ? "aria-pressed:bg-mint aria-pressed:text-ink"
            : "aria-pressed:bg-pink aria-pressed:text-ink",
    })),
  ];

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={active === f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-text aria-pressed:border-transparent ${f.ring}`}
          >
            {f.label}
            <span className="ml-1.5 opacity-60">{count(f.id)}</span>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>

      {shown.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {shown.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <EmptyState filter={active} />
      )}
    </>
  );
}

function EmptyState({ filter }: { filter: Filter }) {
  if (filter === "design") {
    return (
      <div className="mt-8 rounded-card border border-dashed border-pink/40 p-8 sm:p-10">
        <p className="font-display text-2xl font-bold">Design work lives in the gallery.</p>
        <p className="mt-2 max-w-[52ch] text-dim">
          Visual pieces, Canva work and UI concepts are easier to browse as images. Longer design case studies will appear here
          as I write them up.
        </p>
        <Link href="/design" className="mt-5 inline-block rounded-full bg-pink px-5 py-2.5 font-medium text-ink">
          Open the gallery
        </Link>
      </div>
    );
  }
  return (
    <div className="mt-8 rounded-card border border-dashed border-line p-8 text-dim">
      No projects in this category yet. Add one in <code className="text-text">data/projects.ts</code>.
    </div>
  );
}
