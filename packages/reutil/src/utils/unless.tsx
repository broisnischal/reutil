import React from "react";

interface IUnlessProps {
  when: boolean;
  children: React.ReactNode;
}

export function Unless({ when, children }: IUnlessProps) {
  return !when ? <>{children}</> : null;
}
