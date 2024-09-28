---
title: "Unless - Reutil"
---

# Unless

Unless is the component that allows you to render a component only if a condition is not met.

```tsx
interface IUnlessProps {
  when: boolean;
  children: React.ReactNode;
}

export function Unless({ when, children }: IUnlessProps) {
  return !when ? <>{children}</> : null;
}
```

Usage:

```tsx
<Unless when={isLoggedIn}>
  <span>Please log in.</span>
</Unless>
```
