---
title: "Choose - Reutil"
---

# Choose

Choose is the component that allows you to choose a component to render based on a condition.

```tsx
interface IChooseProps {
  children: React.ReactNode;
}

interface IWhenProps {
  condition: boolean;
  children: React.ReactNode;
}

export function Choose({ children }: IChooseProps) {
  return (
    React.Children.toArray(children).find(
      (child: any) => child.props.condition
    ) || null
  );
}

export function When({ condition, children }: IWhenProps) {
  return condition ? <>{children}</> : null;
}
```

Usage:

```tsx
<Choose>
  <When condition={isLoading}>Loading...</When>
  <When condition={isError}>Error!</When>
  <When condition={isSuccess}>Success!</When>
</Choose>
```
