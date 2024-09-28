---
title: "Show - Reutil"
---

# Show

Show is a utility component that renders its children only if the condition is true.

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

## Usage

```tsx
<Show when={true}>
  <div>Hello, world!</div>
</Show>
```
