import { Text } from "./Todo";

export default function TechList({ items, className = "" }: { items: string[]; className?: string }) {
  if (!items.length) return null;
  return (
    <ul className={`flex flex-wrap gap-x-3 gap-y-1 text-sm text-dim ${className}`} aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>
          <Text>{t}</Text>
        </li>
      ))}
    </ul>
  );
}
