import type { TimelineItem } from "@/lib/types";
import { Text } from "./Todo";

export default function Timeline({ items, dotClass = "bg-text" }: { items: TimelineItem[]; dotClass?: string }) {
  return (
    <ol className="relative border-l border-line pl-6">
      {items.map((it, i) => (
        <li key={i} className="relative pb-7 last:pb-0">
          <span className={`absolute -left-[29px] top-2 size-2.5 rounded-full ring-4 ring-ink ${dotClass}`} aria-hidden />
          <p className="text-sm text-dim">
            <Text>{it.when}</Text>
          </p>
          <p className="mt-1 font-medium">
            <Text>{it.title}</Text>
          </p>
          <p className="text-dim">
            <Text>{it.place}</Text>
          </p>
          {it.note && <p className="mt-1 text-sm text-dim">{it.note}</p>}
        </li>
      ))}
    </ol>
  );
}
