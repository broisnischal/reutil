---
title: Lazyload
---

# Lazyload

Lazyload is the component that allows you to lazy load a component.

```tsx
import React, { lazy, Suspense, ComponentType } from "react";

interface LazyLoadProps {
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback: React.ReactNode;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({ importFn, fallback }) => {
  const LazyComponent = lazy(importFn);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
};
```

Usage:

```tsx
<LazyLoad
  importFn={() => import("./MyComponent")}
  fallback={<div>Loading...</div>}
>
  <MyComponent />
</LazyLoad>
```
