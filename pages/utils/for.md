---
title: "For - Reutil"
---

# For

For is a utility component that renders its children for each item in an array.

```tsx
import React from "react";

interface IForProps<T> {
  each: T[];
  children: (item: T, index: number) => React.ReactNode;
}

export function For<T>({ each: items, children }: IForProps<T>) {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>{children(item, index)}</React.Fragment>
      ))}
    </>
  );
}
```

This is a generic `For` component that takes an array of items and a render function as props. It renders the render function for each item in the array, passing in the item and its index as arguments. The render function should return a React node.

Example usage:

```tsx
<For each={items} index="i">
  {(item, i) => <div key={i}>{item}</div>}
</For>
```
