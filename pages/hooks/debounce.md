---
title: "Debounce - Reutil"
---

# Debounce

The `Debounce` component is a utility for debouncing a function.

```tsx
import { useCallback, useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

## Usage

```tsx
import { Debounce } from "reutil";

export default function MyComponent() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

## References

- [Debounce](https://en.wikipedia.org/wiki/Debounce)
