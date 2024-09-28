import React from "react";

interface IncludeProps<T> {
  items: T[];
  values: T[];
  children: (item: T, index: number) => React.ReactNode;
}

export default function Include<T>({
  items,
  values,
  children,
}: IncludeProps<T>) {
  return <>{items.filter((item) => values.includes(item)).map(children)}</>;
}
