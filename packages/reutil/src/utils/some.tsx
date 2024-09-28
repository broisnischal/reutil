import React from "react";

interface SomeProps<T> {
  items: T[];
  condition: (item: T) => boolean;
  children: React.ReactNode;
}

/**
 * Some is a utility component that renders its children if the condition is true.
 * @param items - The array of items to check.
 * @param condition - The condition to check.
 * @param children - The children to render if the condition is true.
 * @returns The children if the condition is true, otherwise null.
 */
export default function Some<T>({ items, condition, children }: SomeProps<T>) {
  return items.some(condition) ? <>{children}</> : null;
}
