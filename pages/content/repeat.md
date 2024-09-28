---
title: Repeat
---

```tsx
interface IRepeatProps {
  times: number;
  children: (index: number) => React.ReactNode;
}

export function Repeat({ times, children }: IRepeatProps) {
  return (
    <>{Array.from({ length: times }).map((_, index) => children(index))}</>
  );
}
```

Usage:

```tsx
<Repeat times={3}>{(index) => <div key={index}>Item {index + 1}</div>}</Repeat>
```
