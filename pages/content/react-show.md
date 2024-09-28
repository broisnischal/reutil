---
title: "My documentation site"
---

# Show

```tsx
import React from "react";

interface IShowProps {
  when: boolean;
  children: React.ReactNode;
}

export function Show({ when, children }: IShowProps) {
  return when ? <>{children}</> : null;
}
```
