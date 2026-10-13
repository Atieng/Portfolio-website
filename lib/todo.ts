// Any text starting with "TODO:" is shown on the site as a dashed placeholder,
// so missing information is always visible and never looks like a real claim.
export const isTodo = (text: string | undefined | null): boolean =>
  !text || text.trim().startsWith("TODO:");

export const stripTodo = (text: string): string => text.replace(/^\s*TODO:\s*/, "");
