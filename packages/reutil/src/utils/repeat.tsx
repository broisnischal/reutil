import React from "react";

interface IRepeatProps {
  times: number;
  children: (index: number) => React.ReactNode;
}

export function Repeat({ times, children }: IRepeatProps) {
  return (
    <>{Array.from({ length: times }).map((_, index) => children(index))}</>
  );
}
