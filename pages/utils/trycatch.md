---
title: "TryCatch"
---

# TryCatch

```tsx
interface ITryCatchProps {
  children: React.ReactNode;
}

export const TryCatch: React.FC<ITryCatchProps> = ({ children }) => {
  try {
    return <>{children}</>;
  } catch {
    return <div>Error</div>;
  }
```

Example with a component that throws an error:

```tsx
const ErrorComponent = () => {
  throw new Error("This is a simulated error");
  return <div>This won't be rendered</div>;
};

<TryCatch>
  <ErrorComponent />
</TryCatch>;
```

In this example, the `ErrorComponent` will throw an error, which will be caught by the `TryCatch` component. The result will be the rendering of the fallback error message: `<div>Error</div>`.
