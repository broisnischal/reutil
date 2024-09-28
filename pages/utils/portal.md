---
title: "Portal"
---

# Portal

Portal is the component that allows you to render a component outside the main DOM tree.

```tsx
import { createPortal } from "react-dom";

interface IPortalProps {
  to: HTMLElement;
  children: React.ReactNode;
}

export function Portal({ to, children }: IPortalProps) {
  return createPortal(children, to);
}
```

Usage:

```tsx
const modalRoot = document.getElementById("modal-root");

<Portal to={modalRoot}>
  <div>I'm rendered outside the main DOM tree!</div>
</Portal>;
```
