import React, { lazy, Suspense, ComponentType } from "react";

interface LazyLoadProps {
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback: React.ReactNode;
}

export default function LazyLoad({ importFn, fallback }: LazyLoadProps) {
  const LazyComponent = lazy(importFn);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
}
