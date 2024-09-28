---
title: "Switch - Reutil"
---

# Switch

Switch is a utility component that renders its children only if the condition is true.

```tsx
interface ISwitchProps<T> {
  value: T;
  children: React.ReactNode;
}

interface ICaseProps<T> {
  match: T;
  children: React.ReactNode;
}

export function Switch<T>({ value, children }: ISwitchProps<T>) {
  return (
    React.Children.toArray(children).find(
      (child: any) => child.props.match === value
    ) || null
  );
}

export function Case<T>({ children }: ICaseProps<T>) {
  return <>{children}</>;
}
```

Usage:

```tsx
<Switch value={status}>
  <Case match="loading">Loading...</Case>
  <Case match="error">Error!</Case>
  <Case match="success">Success!</Case>
</Switch>
```
