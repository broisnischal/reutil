import React, { useState, useEffect } from "react";

interface FetchProps<T> {
  url: string;
  children: (data: T) => React.ReactNode;
  fallback: React.ReactNode;
  errorFallback: React.ReactNode;
}

export default function Fetch<T>({
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
