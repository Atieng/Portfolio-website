import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/data/site";
import { isTodo } from "@/lib/todo";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const hasEmail = !isTodo(site.email);

  const profiles = [
    { label: "GitHub", href: site.github, hint: "Code and notebooks" },
    { label: "LinkedIn", href: site.linkedin, hint: "Experience and updates" },
    ...site.otherLinks.map((l) => ({ ...l, hint: "" })),
  ];

  return (
    <div className="pt-14 sm:pt-20">
      <h1 className="font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.03em] [font-stretch:85%] sm:text-7xl">
        Say hello<span className="text-pink">.</span>
      </h1>
      <p className="mt-6 max-w-[52ch] text-lg text-dim">{site.availability}
        {hasEmail && " Email is the quickest way to reach me."}</p>

      <div className="mt-12 grid gap-5 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-7">
          {hasEmail ? (
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between gap-4 rounded-card bg-pink p-6 text-ink sm:p-8"
            >
              <span>
                <span className="flex items-center gap-2 text-sm text-ink/70">
                  <Mail size={15} aria-hidden /> Email
                </span>
                <span className="mt-1 block break-all font-display text-2xl font-bold sm:text-4xl">{site.email}</span>
              </span>
              <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
            </a>
          ) : (
            <div className="rounded-card border border-dashed border-pink/50 p-6 text-dim italic sm:p-8">
              Add your email in data/site.ts and it will appear here as a large button.
            </div>
          )}

          <ul className="grid gap-3 sm:grid-cols-2">
            {profiles.map((p) =>
              p.href ? (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full items-center justify-between gap-3 rounded-card border border-line bg-panel p-5 transition-colors hover:border-text"
                  >
                    <span>
                      <span className="block font-medium">{p.label}</span>
                      {p.hint && <span className="text-sm text-dim">{p.hint}</span>}
                    </span>
                    <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </a>
                </li>
              ) : (
                <li key={p.label} className="rounded-card border border-dashed border-line p-5 text-dim italic">
                  {p.label}: add your link in data/site.ts
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="rounded-card border border-line bg-panel p-6 sm:p-8 lg:col-span-5">
          {formId ? (
            <>
              <h2 className="mb-5 font-display text-2xl font-bold tracking-tight">Or send a message</h2>
              <ContactForm formId={formId} />
            </>
          ) : (
            <>
              <h2 className="font-display text-2xl font-bold tracking-tight">Prefer a form?</h2>
              <p className="mt-3 text-dim">
                {hasEmail ? (
                  <>
                    For now, <a href={`mailto:${site.email}`} className="text-mint underline underline-offset-4">email me directly</a> and
                    I&apos;ll get back to you.
                  </>
                ) : (
                  "For now, reach me through the links on this page."
                )}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
