import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ImageItem } from "@/lib/types";
import { isTodo, stripTodo } from "@/lib/todo";

interface Props {
  image: ImageItem;
  /** Accent colour for the placeholder dots. */
  accent?: string;
  /** CSS aspect ratio, e.g. "16 / 10". */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Shows a real image when image.src is set. Otherwise shows a clearly labelled
 * placeholder frame, so a missing screenshot never looks like finished work.
 */
export default function ImageFrame({
  image,
  accent = "#a6a3b0",
  ratio = "16 / 10",
  sizes = "(min-width: 1100px) 60vw, 100vw",
  priority,
  className = "",
}: Props) {
  if (image.src) {
    return (
      <div className={`relative overflow-hidden bg-raised ${className}`} style={{ aspectRatio: ratio }}>
        <Image
          src={image.src}
          alt={isTodo(image.alt) ? "" : image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label="Placeholder image"
      className={`placeholder-surface relative grid place-items-center overflow-hidden border border-dashed border-line bg-raised/60 ${className}`}
      style={{ aspectRatio: ratio, ["--accent" as string]: accent }}
    >
      <div className="flex max-w-[80%] flex-col items-center gap-2 rounded-xl bg-ink/85 px-4 py-3 text-center text-sm text-dim">
        <ImageIcon size={18} aria-hidden style={{ color: accent }} />
        <span>{image.caption ? stripTodo(image.caption) : "Add an image"}</span>
      </div>
    </div>
  );
}
