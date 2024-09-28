---
title: "Defer"
---

```tsx
import React, { useEffect, useState } from "react";

interface DeferProps {
  wait?: number; // in milliseconds
  children: React.ReactNode;
}

export const Defer: React.FC<DeferProps> = ({ wait = 0, children }) => {
  const [isReady, setIsReady] = useState(wait === 0);

  useEffect(() => {
    if (wait > 0) {
      const timer = setTimeout(() => setIsReady(true), wait);
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [wait]);

  return isReady ? <>{children}</> : null;
};
```

Usage:

```ts
<Defer wait={3000}>
  <div>This will render after 3 seconds</div>
</Defer>
```
