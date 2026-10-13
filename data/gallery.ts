import type { GalleryItem } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
//  Your design gallery. Put images in /public/gallery/ and set image.src.
//  Add width and height (in pixels) so the layout doesn't jump while loading.
//
//  kind must be one of: "Personal concept", "Practice", "Client project".
//  Label honestly. Fan art or work inspired by an artist is a "Personal concept",
//  never a collaboration.
// ─────────────────────────────────────────────────────────────────────────────

export const gallery: GalleryItem[] = [
  {
    id: "piece-1",
    title: "TODO: Title",
    kind: "Personal concept",
    medium: "Canva",
    context: "TODO: One line on the idea behind it.",
    image: { alt: "TODO: Describe the design" },
  },
  {
    id: "piece-2",
    title: "TODO: Title",
    kind: "Practice",
    medium: "UI concept",
    context: "TODO: One line on the idea behind it.",
    image: { alt: "TODO: Describe the design" },
  },
  {
    id: "piece-3",
    title: "TODO: Title",
    kind: "Personal concept",
    medium: "Visual experiment",
    context: "TODO: One line on the idea behind it.",
    image: { alt: "TODO: Describe the design" },
  },
  {
    id: "piece-4",
    title: "TODO: Title",
    kind: "Practice",
    medium: "Canva",
    context: "TODO: One line on the idea behind it.",
    image: { alt: "TODO: Describe the design" },
  },
  {
    id: "piece-5",
    title: "TODO: Title",
    kind: "Personal concept",
    medium: "UI concept",
    context: "TODO: One line on the idea behind it.",
    image: { alt: "TODO: Describe the design" },
  },
  {
    id: "piece-6",
    title: "TODO: Title",
    kind: "Practice",
    medium: "Visual experiment",
    context: "TODO: One line on the idea behind it.",
    image: { alt: "TODO: Describe the design" },
  },
];
