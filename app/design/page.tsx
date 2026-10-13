import type { Metadata } from "next";
import { gallery } from "@/data/gallery";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Design gallery",
  description: "Graphic design, Canva work, UI concepts and visual experiments.",
};

export default function DesignPage() {
  return (
    <div className="pt-14 sm:pt-20">
      <header className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
        <h1 className="font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.03em] [font-stretch:85%] sm:text-7xl lg:col-span-7">
          Design <span className="text-pink">gallery</span>
        </h1>
        <div className="max-w-[46ch] text-dim lg:col-span-5">
          <p>Visual work, UI concepts and experiments. Each piece is labelled so it&apos;s clear what it was made for:</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs">
            <li className="rounded-full bg-pink/15 px-2.5 py-0.5 text-pink">Personal concept</li>
            <li className="rounded-full bg-raised px-2.5 py-0.5">Practice</li>
            <li className="rounded-full bg-mint/15 px-2.5 py-0.5 text-mint">Client project</li>
          </ul>
        </div>
      </header>

      {gallery.length > 0 ? (
        <Gallery items={gallery} />
      ) : (
        <p className="rounded-card border border-dashed border-line p-8 text-dim">
          Nothing here yet. Add pieces in <code className="text-text">data/gallery.ts</code>.
        </p>
      )}
    </div>
  );
}
