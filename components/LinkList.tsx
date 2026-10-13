import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/lib/types";

/**
 * Real links open in a new tab. Links with no address yet show as a dashed
 * placeholder instead of a link that goes nowhere.
 */
export default function LinkList({ links, className = "" }: { links: LinkItem[]; className?: string }) {
  if (!links.length) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((l) =>
        l.href ? (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors hover:border-text"
            >
              {l.label}
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </li>
        ) : (
          <li
            key={l.label}
            className="inline-flex items-center rounded-full border border-dashed border-dim/40 px-3.5 py-1.5 text-sm text-dim italic"
            title="Placeholder: add this link in data/projects.ts"
          >
            {l.label} (add link)
          </li>
        ),
      )}
    </ul>
  );
}
