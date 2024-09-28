import React from "react";

interface ISwitchProps<T> {
  value: T;
  children: React.ReactNode;
}

interface ICaseProps<T> {
  match: T;
  children: React.ReactNode;
}

export function Switch<T>({ value, children }: ISwitchProps<T>) {
  return (
    React.Children.toArray(children).find(
      (child: any) => child.props.match === value
    ) || null
  );
}

export function Case<T>({ children }: ICaseProps<T>) {
  return <>{children}</>;
}
