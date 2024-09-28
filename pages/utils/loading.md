---
title: Loading - Reutil
---

# Loading

Loading is a utility component that renders its children only if the condition is true.

```tsx
interface LoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export function Loading({ isLoading, children, fallback }: LoadingProps) {
  return isLoading ? fallback : <>{children}</>;
}
```

Usage:

```tsx
<Loading isLoading={isLoading} fallback={<div>Loading...</div>}>
  <div>Content</div>
</Loading>
```
