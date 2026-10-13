export type Category = "data" | "fullstack" | "design";

export interface LinkItem {
  label: string;
  /** Leave empty ("") while you don't have the link yet: it shows as a placeholder, not a broken link. */
  href: string;
}

export interface ImageItem {
  /** Path inside /public, e.g. "/projects/world-cup/cover.png". Leave out to show a placeholder frame. */
  src?: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface CaseSection {
  heading: string;
  body?: string[];
  list?: string[];
  images?: ImageItem[];
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  /** One or two plain sentences. Shown on cards. */
  summary: string;
  year: string;
  role: string;
  /** Be honest: "Completed", "In progress", "Deployed", etc. */
  status: string;
  featured?: boolean;
  cover: ImageItem;
  tech: string[];
  links: LinkItem[];
  sections: CaseSection[];
}

export type GalleryKind = "Personal concept" | "Practice" | "Client project";

export interface GalleryItem {
  id: string;
  title: string;
  kind: GalleryKind;
  medium: string;
  context: string;
  image: ImageItem;
}

export interface TimelineItem {
  when: string;
  title: string;
  place: string;
  note?: string;
}
