// src/utils/some.tsx
import React from "react";
function Some({ items, condition, children }) {
  return items.some(condition) ? /* @__PURE__ */ React.createElement(React.Fragment, null, children) : null;
}

// src/index.ts
var src_default = { Some };
export {
  src_default as default
};
