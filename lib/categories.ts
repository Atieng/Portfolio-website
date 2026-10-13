import type { Category } from "./types";

// Each area of work has one colour, used consistently across the site.
// Class names are written out in full so Tailwind can find them.
export const categories: Record<
  Category,
  {
    label: string;
    short: string;
    hex: string;
    text: string;
    bgSoft: string;
    border: string;
    dot: string;
  }
> = {
  data: {
    label: "Data Science",
    short: "Data",
    hex: "#b8a6f6",
    text: "text-lavender",
    bgSoft: "bg-lavender/[0.07]",
    border: "border-lavender/30",
    dot: "bg-lavender",
  },
  fullstack: {
    label: "Full-Stack Development",
    short: "Development",
    hex: "#8fe2bf",
    text: "text-mint",
    bgSoft: "bg-mint/[0.07]",
    border: "border-mint/30",
    dot: "bg-mint",
  },
  design: {
    label: "Design",
    short: "Design",
    hex: "#f3a8c4",
    text: "text-pink",
    bgSoft: "bg-pink/[0.07]",
    border: "border-pink/30",
    dot: "bg-pink",
  },
};

export const categoryOrder: Category[] = ["data", "fullstack", "design"];
