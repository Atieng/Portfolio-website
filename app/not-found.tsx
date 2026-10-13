import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24">
      <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
        Page not found<span className="text-lavender">.</span>
      </h1>
      <p className="mt-4 max-w-[48ch] text-dim">This address doesn&apos;t match any page. It may have moved or been renamed.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-mint px-5 py-2.5 font-medium text-ink">
          Go to the homepage
        </Link>
        <Link href="/projects" className="rounded-full border border-line px-5 py-2.5 hover:border-text">
          Browse projects
        </Link>
      </div>
    </div>
  );
}
