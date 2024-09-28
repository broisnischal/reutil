---
title: With - Reutil
---

# With

With is the component that allows you to pass a value to a component.

```tsx
interface IWithProps<T> {
  value: T;
  children: (value: T) => React.ReactNode;
}

export function With<T>({ value, children }: IWithProps<T>) {
  return <>{children(value)}</>;
}
```

Usage:

```tsx
<With value={user}>{(user) => <span>{user.name}</span>}</With>
```
