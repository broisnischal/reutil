import React from "react";

interface IShowProps {
  when: boolean;
  children: React.ReactNode;
}

export default function Show({ when, children }: IShowProps) {
  return when ? <>{children}</> : null;
}
