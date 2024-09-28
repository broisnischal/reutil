import React from "react";

interface IToggleProps<T> {
  value: T;
  children: React.ReactNode;
}

interface IToggleItemProps<T> {
  match: T;
  children: React.ReactNode;
}

export function Toggle<T>({ value, children }: IToggleProps<T>) {
  return React.Children.toArray(children).find(
    (child: any) => child.props.match === value
  );
}

export function ToggleItem<T>({ children }: IToggleItemProps<T>) {
  return <>{children}</>;
}
