import { categories } from "@/lib/categories";
import type { Category } from "@/lib/types";

export default function CategoryTag({ category, long = false }: { category: Category; long?: boolean }) {
  const c = categories[category];
  return (
    <span className={`inline-flex items-center gap-2 text-sm ${c.text}`}>
      <span className={`size-2 rounded-full ${c.dot}`} aria-hidden />
      {long ? c.label : c.short}
    </span>
  );
}
