"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/design", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu after navigating, and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const external = [
    site.github && { href: site.github, label: "GitHub" },
    site.resume && { href: site.resume, label: "Resume" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          {site.name}
          <span className="ml-1.5 inline-flex gap-0.5 align-middle" aria-hidden>
            <span className="size-1.5 rounded-full bg-lavender" />
            <span className="size-1.5 rounded-full bg-mint" />
            <span className="size-1.5 rounded-full bg-pink" />
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className="rounded-full px-3.5 py-1.5 text-sm text-dim transition-colors hover:text-text aria-[current=page]:bg-raised aria-[current=page]:text-text"
            >
              {n.label}
            </Link>
          ))}
          {external.map((e) => (
            <a
              key={e.label}
              href={e.href}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors hover:border-text"
            >
              {e.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line px-4 pb-6 pt-2 md:hidden">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className="block border-b border-line/60 py-3.5 font-display text-2xl font-semibold aria-[current=page]:text-mint"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          {external.length > 0 && (
            <div className="mt-5 flex gap-2">
              {external.map((e) => (
                <a key={e.label} href={e.href} target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-2 text-sm">
                  {e.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
