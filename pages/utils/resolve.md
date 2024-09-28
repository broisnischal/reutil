---
title: "Resolve - Reutil"
---

# Resolve

The `Resolve` component is a utility for conditionally rendering content based on a promise.

```tsx
interface ResolveProps<T> {
  promise: Promise<T>;
  fallback: React.ReactNode;
  children: (data: T) => React.ReactNode;
}

export function Resolve<T>({ promise, fallback, children }: ResolveProps<T>) {
  const [result, setResult] = React.useState<T | null>(null);

  React.useEffect(() => {
    promise.then(setResult);
  }, [promise]);

  if (!result) return <>{fallback}</>;
  return <>{children(result)}</>;
}
```

## Usage

```tsx
<Resolve
  promise={
    new Promise((resolve) => setTimeout(() => resolve("Loaded Data!"), 2000))
  }
  fallback={<div>Loading...</div>}
>
  {(data) => <div>{data}</div>}
</Resolve>
```
