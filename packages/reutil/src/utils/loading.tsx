import React from "react";

interface ILoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export function Loading({ isLoading, children, fallback }: ILoadingProps) {
  return isLoading ? fallback : <>{children}</>;
}
