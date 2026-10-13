"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryItem } from "@/lib/types";
import ImageFrame from "./ImageFrame";
import { Text } from "./Todo";
import { isTodo } from "@/lib/todo";

const kindStyle: Record<GalleryItem["kind"], string> = {
  "Personal concept": "bg-pink/15 text-pink",
  Practice: "bg-raised text-dim",
  "Client project": "bg-mint/15 text-mint",
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const media = ["All", ...Array.from(new Set(items.map((i) => i.medium)))];
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const shown = filter === "All" ? items : items.filter((i) => i.medium === filter);
  const current = openIndex !== null ? shown[openIndex] : null;

  // The native <dialog> handles focus trapping and Escape for us.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (current && !d.open) d.showModal();
    if (!current && d.open) d.close();
  }, [current]);

  const step = (dir: 1 | -1) =>
    setOpenIndex((i) => (i === null ? i : (i + dir + shown.length) % shown.length));

  return (
    <>
      <div role="group" aria-label="Filter by medium" className="flex flex-wrap gap-2">
        {media.map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={filter === m}
            onClick={() => setFilter(m)}
            className="rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-text aria-pressed:border-transparent aria-pressed:bg-pink aria-pressed:text-ink"
          >
            {m}
          </button>
        ))}
      </div>

      <ul className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {shown.map((item, i) => (
          <li key={item.id} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full overflow-hidden rounded-card border border-line bg-panel text-left transition-colors hover:border-pink/50"
              aria-label={`Open ${isTodo(item.title) ? "placeholder piece" : item.title}`}
            >
              <div className="relative">
                <ImageFrame
                  image={item.image}
                  accent="#f3a8c4"
                  ratio={item.image.width && item.image.height ? `${item.image.width} / ${item.image.height}` : i % 3 === 1 ? "4 / 5" : "4 / 3"}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-ink/80 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand size={15} aria-hidden />
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">
                    <Text>{item.title}</Text>
                  </p>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs ${kindStyle[item.kind]}`}>{item.kind}</span>
                </div>
                <p className="mt-1 text-sm text-dim">{item.medium}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenIndex(null)}
        onClick={(e) => e.target === dialogRef.current && setOpenIndex(null)}
        className="m-auto max-h-[92vh] w-[min(1100px,94vw)] rounded-card border border-line bg-panel p-0 text-text backdrop:bg-black/80"
        aria-label={current && !isTodo(current.title) ? current.title : "Design piece"}
      >
        {current && (
          <div className="grid md:grid-cols-[1fr_300px]">
            <div className="relative bg-ink">
              {current.image.src ? (
                <div className="relative h-[60vh] md:h-[80vh]">
                  <Image
                    src={current.image.src}
                    alt={isTodo(current.image.alt) ? "" : current.image.alt}
                    fill
                    sizes="(min-width: 768px) 800px, 94vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <ImageFrame image={current.image} accent="#f3a8c4" ratio="4 / 3" />
              )}
            </div>
            <div className="flex flex-col gap-3 p-6">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="grid size-9 place-items-center rounded-full border border-line hover:border-text"
                  aria-label="Close"
                  autoFocus
                >
                  <X size={16} />
                </button>
              </div>
              <span className={`self-start rounded-full px-2.5 py-0.5 text-xs ${kindStyle[current.kind]}`}>{current.kind}</span>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                <Text>{current.title}</Text>
              </h2>
              <p className="text-sm text-dim">{current.medium}</p>
              <p className="text-dim">
                <Text>{current.context}</Text>
              </p>
              {shown.length > 1 && (
                <div className="mt-auto flex gap-2 pt-4">
                  <button type="button" onClick={() => step(-1)} className="grid size-10 place-items-center rounded-full border border-line hover:border-text" aria-label="Previous piece">
                    <ChevronLeft size={18} />
                  </button>
                  <button type="button" onClick={() => step(1)} className="grid size-10 place-items-center rounded-full border border-line hover:border-text" aria-label="Next piece">
                    <ChevronRight size={18} />
                  </button>
                  <span className="ml-auto self-center text-sm text-dim">
                    {(openIndex ?? 0) + 1} / {shown.length}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
