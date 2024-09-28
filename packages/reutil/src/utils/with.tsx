import React from "react";

interface IWithProps<T> {
  value: T;
  children: (value: T) => React.ReactNode;
}

export function With<T>({ value, children }: IWithProps<T>) {
  return <>{children(value)}</>;
}
