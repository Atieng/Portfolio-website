import { isTodo, stripTodo } from "@/lib/todo";

/** Renders real text as-is, and "TODO:" text as a visible dashed placeholder. */
export function Text({ children, className = "" }: { children: string; className?: string }) {
  if (!isTodo(children)) return <>{children}</>;
  return (
    <span
      className={`rounded-md border border-dashed border-dim/50 px-1.5 py-0.5 text-dim italic box-decoration-clone ${className}`}
      title="Placeholder: edit this in the data folder"
    >
      {stripTodo(children)}
    </span>
  );
}

/** A paragraph that becomes a dashed note when it's a placeholder. */
export function Para({ children, className = "" }: { children: string; className?: string }) {
  if (!isTodo(children)) return <p className={className}>{children}</p>;
  return (
    <p
      className={`rounded-tile border border-dashed border-dim/40 px-4 py-3 text-dim italic ${className}`}
      title="Placeholder: edit this in the data folder"
    >
      {stripTodo(children)}
    </p>
  );
}
