---
title: "Maybe"
---

```tsx
interface IMaybeProps<T> {
  of: T | null | undefined;
  children: (value: T) => React.ReactNode;
}

export function Maybe<T>({ of: value, children }: IMaybeProps<T>) {
  return value !== null && value !== undefined ? <>{children(value)}</> : null;
}
```

This is a generic component that takes a value of type `T` and a function that returns a React node as its children. The component checks if the value is not `null` or `undefined` and renders the children with the value as its argument. If the value is `null` or `undefined`, the component returns `null`.

Example Usage:

```tsx
<Maybe of={user}>{(user) => <span>{user.name}</span>}</Maybe>
```
