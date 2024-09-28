// src/utils/some.tsx
import React from "react";
function Some({ items, condition, children }) {
  return items.some(condition) ? /* @__PURE__ */ React.createElement(React.Fragment, null, children) : null;
}

// src/utils/any.tsx
import React2 from "react";
function Any({ items, condition, children }) {
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, items.filter(condition).map(children));
}

// src/utils/include.tsx
import React3 from "react";
function Include({
  items,
  values,
  children
}) {
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, items.filter((item) => values.includes(item)).map(children));
}

// src/index.ts
var src_default = { Some, Any, Include };
export {
  src_default as default
};
