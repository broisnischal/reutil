---
title: Fetch
---

```tsx
import { useState, useEffect } from "react";

interface FetchProps<T> {
  url: string;
  children: (data: T) => React.ReactNode;
  fallback: React.ReactNode;
  errorFallback: React.ReactNode;
}

export function Fetch<T>({
  url,
  children,
  fallback,
  errorFallback,
}: FetchProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) return <>{fallback}</>;
  if (error) return <>{errorFallback}</>;
  return <>{data && children(data)}</>;
}
```

Usage:

```tsx
<Fetch
  url="/api/data"
  fallback={<span>Loading...</span>}
  errorFallback={<span>Error loading data</span>}
>
  {(data) => <div>{JSON.stringify(data)}</div>}
</Fetch>
```
