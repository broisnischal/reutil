import React from "react";
interface IMaybeProps<T> {
  of: T | null | undefined;
  children: (value: T) => React.ReactNode;
}

export function Maybe<T>({ of: value, children }: IMaybeProps<T>) {
  return value !== null && value !== undefined ? <>{children(value)}</> : null;
}
