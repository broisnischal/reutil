---
title: "WithProps"
---

# WithProps

Inject additional props into a child component.

```tsx
interface IWithPropsProps<T> {
  children: (props: T) => React.ReactNode;
}

export const WithProps = <T,>({ children }: IWithPropsProps<T>) => {
  const props = useProps<T>();
  return <>{children(props)}</>;
};
```

Usage:

```tsx
<WithProps>{(props) => <div>{props.name}</div>}</WithProps>
```
