import React from "react";

interface IAnyProps<T> {
  items: T[];
  condition: (item: T) => boolean;
  children: (item: T, index: number) => React.ReactNode;
}

export default function Any<T>({ items, condition, children }: IAnyProps<T>) {
  return <>{items.filter(condition).map(children)}</>;
}
