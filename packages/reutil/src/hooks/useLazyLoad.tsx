import React, { ComponentType, lazy, Suspense } from "react";

export function useLazyLoad(
  importFn: () => Promise<{ default: ComponentType<any> }>,
  fallback: React.ReactNode
) {
  const LazyComponent = lazy(importFn);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
}
