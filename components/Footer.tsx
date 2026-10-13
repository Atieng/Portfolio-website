import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const links = [
    site.github && { label: "GitHub", href: site.github },
    site.linkedin && { label: "LinkedIn", href: site.linkedin },
    ...site.otherLinks,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="mt-28 border-t border-line">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-4 py-10 text-sm text-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {site.name}. Designed and built by me, with Next.js.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href="/contact" className="hover:text-text">
              Contact
            </Link>
          </li>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer" className="hover:text-text">
                {l.label}
              </a>
            </li>
          ))}
          {site.resume && (
            <li>
              <a href={site.resume} className="hover:text-text">
                Resume
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
