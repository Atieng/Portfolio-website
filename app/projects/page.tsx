import type { Metadata } from "next";
import { Suspense } from "react";
import { projects } from "@/data/projects";
import ProjectBrowser from "@/components/ProjectBrowser";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Data science, full-stack and design projects, with case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-14 sm:pt-20">
      <header className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
        <h1 className="font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.03em] [font-stretch:85%] sm:text-7xl lg:col-span-7">
          Projects
        </h1>
        <p className="max-w-[46ch] text-dim lg:col-span-5">
          Things I&apos;ve built and analysed, each with a write-up of how I approached it and what I learned. Filter by the area
          you&apos;re most interested in.
        </p>
      </header>

      {/* The fallback renders the full list without filters while the page hydrates. */}
      <Suspense
        fallback={
          <div className="mt-[58px] grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        }
      >
        <ProjectBrowser projects={projects} />
      </Suspense>
    </div>
  );
}
