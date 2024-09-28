---
title: "Any - Reutil"
---

# Any

Any is the component that renders component only if any of the items in the array satisfies the condition.

```tsx
import React from "react";

interface IAnyProps<T> {
  items: T[];
  condition: (item: T) => boolean;
  children: (item: T, index: number) => React.ReactNode;
}

export default function Any<T>({ items, condition, children }: IAnyProps<T>) {
  return <>{items.filter(condition).map(children)}</>;
}
```

Usage:

```tsx
<Any items={[1, 2, 3, 4, 5]} condition={(item) => item % 2 === 0}>
  {(item, index) => <span key={index}>{item}</span>}
</Any>
```
