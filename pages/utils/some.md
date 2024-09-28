---
title: "Some - Reutil"
---

# Some

Some is the component that allows you to render a component only if the condition is true.

```tsx
import React from "react";

interface ISomeProps<T> {
  items: T[];
  condition: (item: T) => boolean;
  children: React.ReactNode;
}

export default function Some<T>({ items, condition, children }: SomeProps<T>) {
  return items.some(condition) ? <>{children}</> : null;
}
```

Usage:

```tsx
<Some items={[1, 2, 3, 4, 5]} condition={(item) => item % 2 === 0}>
  <span>Some</span>
</Some>
```
