---
title: "Fallback"
---

# Fallback

```tsx
interface FallbackProps {
  primary: React.ReactNode;
  fallback: React.ReactNode;
}

export const Fallback: React.FC<FallbackProps> = ({ primary, fallback }) => {
  try {
    return <>{primary}</>;
  } catch {
    return <>{fallback}</>;
  }
};
```

Usage:

```tsx
<Fallback primary={<div>Primary</div>} fallback={<div>Fallback</div>} />
```
