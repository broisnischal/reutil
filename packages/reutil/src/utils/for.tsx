import React from "react";

interface IForProps<T> {
  each: T[];
  children: (item: T, index: number) => React.ReactNode;
}

export default function For<T>({ each: items, children }: IForProps<T>) {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>{children(item, index)}</React.Fragment>
      ))}
    </>
  );
}
