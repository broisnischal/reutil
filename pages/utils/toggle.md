---
title: Toggle - Reutil
description: Toggle is a utility component that renders its children only if the condition is true.
---

# Toggle

Toggle is a utility component that renders its children only if the condition is true.

```tsx
interface IToggleProps<T> {
  value: T;
  children: React.ReactNode;
}

interface IToggleItemProps<T> {
  match: T;
  children: React.ReactNode;
}

export function Toggle<T>({ value, children }: IToggleProps<T>) {
  return React.Children.toArray(children).find(
    (child: any) => child.props.match === value
  );
}

export function ToggleItem<T>({ children }: IToggleItemProps<T>) {
  return <>{children}</>;
}
```

Usage:

```tsx
<Toggle value="light">
  <ToggleItem match="light">Light</ToggleItem>
  <ToggleItem match="dark">Dark</ToggleItem>
</Toggle>
```
