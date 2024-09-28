---
title: Fetch - Reutil
---

# Fetch

Fetch is a utility component that fetches data from a URL and renders its children with the data.

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

## Using Axios

```tsx
import { useState, useEffect } from "react";

interface IAxiosFetchProps<T> {
  url: string;
  children: (data: T) => React.ReactNode;
  fallback: React.ReactNode;
  errorFallback: React.ReactNode;
}

export function AxiosFetch<T>({
  url,
  children,
  fallback,
  errorFallback,
}: IAxiosFetchProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) return <>{fallback}</>;
  if (error) return <>{errorFallback}</>;
  return <>{data && children(data)}</>;
}
```

## Usage

```tsx
<Fetch
  url="/api/data"
  fallback={<span>Loading...</span>}
  errorFallback={<span>Error loading data</span>}
>
  {(data) => <div>{JSON.stringify(data)}</div>}
</Fetch>
```

## Usage with Axios

```tsx
<AxiosFetch
  url="/api/data"
  fallback={<span>Loading...</span>}
  errorFallback={<span>Error loading data</span>}
>
  {(data) => <div>{JSON.stringify(data)}</div>}
</AxiosFetch>
```
