---
title: "Throttle - Reutil"
---

# Throttle

The `Throttle` component is a utility for throttling a function.

```tsx
import { useCallback, useEffect, useState } from "react";

function useThrottle<T>(value: T, limit: number) {
  const lastRun = useRef(Date.now());

  return useCallback(() => {
    const now = Date.now();
    if (now - lastRun.current >= limit) {
      lastRun.current = now;
      return value;
    }
  }, [value, limit]);
}
```

## Usage

```tsx
import { useThrottle } from "reutil";

export default function MyComponent() {
  const throttledFunction = useThrottle("Hello, World!", 1000);

  return <div>{throttledFunction()}</div>;
}
```

Example with a throttled scroll handler:

```tsx
function ThrottleComponent() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const throttledScroll = useThrottle(scrollY, 200);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (throttledScroll) {
      console.log("Throttled scroll position:", throttledScroll());
    }
  }, [throttledScroll]);

  return <div>Scroll the page and check the console!</div>;
}
```
