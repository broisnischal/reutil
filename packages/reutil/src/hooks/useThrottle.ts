import { useCallback, useRef } from "react";

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

export { useThrottle };
