"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Any: () => Any,
  Choose: () => Choose,
  Defer: () => Defer,
  Fallback: () => Fallback,
  Fetch: () => Fetch,
  For: () => For,
  Include: () => Include,
  LazyLoad: () => LazyLoad,
  Loading: () => Loading,
  Maybe: () => Maybe,
  Repeat: () => Repeat,
  Show: () => Show,
  Some: () => Some,
  Switch: () => Switch,
  Toggle: () => Toggle,
  TryCatch: () => TryCatch,
  Unless: () => Unless,
  When: () => When,
  With: () => With,
  WithProps: () => WithProps,
  WithState: () => WithState,
  useDebounce: () => useDebounce,
  useThrottle: () => useThrottle
});
module.exports = __toCommonJS(src_exports);

// src/utils/some.tsx
var import_react = __toESM(require("react"));
function Some({ items, condition, children }) {
  return items.some(condition) ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children) : null;
}

// src/utils/any.tsx
var import_react2 = __toESM(require("react"));
function Any({ items, condition, children }) {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, items.filter(condition).map(children));
}

// src/utils/include.tsx
var import_react3 = __toESM(require("react"));
function Include({
  items,
  values,
  children
}) {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, items.filter((item) => values.includes(item)).map(children));
}

// src/hooks/useDebounce.ts
var import_react4 = require("react");
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = (0, import_react4.useState)(value);
  (0, import_react4.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

// src/hooks/useThrottle.ts
var import_react5 = require("react");
function useThrottle(value, limit) {
  const lastRun = (0, import_react5.useRef)(Date.now());
  return (0, import_react5.useCallback)(() => {
    const now = Date.now();
    if (now - lastRun.current >= limit) {
      lastRun.current = now;
      return value;
    }
  }, [value, limit]);
}

// src/utils/withprops.tsx
var import_react6 = __toESM(require("react"));
var PropsContext = import_react6.default.createContext(null);
function useProps() {
  const props = (0, import_react6.useContext)(PropsContext);
  if (props === null) {
    throw new Error("useProps must be used within a WithProps component");
  }
  return props;
}
var WithProps = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ import_react6.default.createElement(PropsContext.Provider, { value: props }, children(useProps()));
};

// src/utils/choose.tsx
var import_react7 = __toESM(require("react"));
function Choose({ children }) {
  return import_react7.default.Children.toArray(children).find(
    (child) => child.props.condition
  ) || null;
}
function When({ condition, children }) {
  return condition ? /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children) : null;
}

// src/utils/defer.tsx
var import_react8 = __toESM(require("react"));
var Defer = ({ wait = 0, children }) => {
  const [isReady, setIsReady] = (0, import_react8.useState)(wait === 0);
  (0, import_react8.useEffect)(() => {
    if (wait > 0) {
      const timer = setTimeout(() => setIsReady(true), wait);
      return () => clearTimeout(timer);
    }
  }, [wait]);
  return isReady ? /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, children) : null;
};

// src/utils/fallback.tsx
var import_react9 = __toESM(require("react"));
var Fallback = ({ primary, fallback }) => {
  try {
    return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, primary);
  } catch (e) {
    return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, fallback);
  }
};

// src/utils/fetch.tsx
var import_react10 = __toESM(require("react"));
function Fetch({
  url,
  children,
  fallback,
  errorFallback
}) {
  const [data, setData] = (0, import_react10.useState)(null);
  const [loading, setLoading] = (0, import_react10.useState)(true);
  const [error, setError] = (0, import_react10.useState)(false);
  (0, import_react10.useEffect)(() => {
    fetch(url).then((response) => response.json()).then(setData).catch(() => setError(true)).finally(() => setLoading(false));
  }, [url]);
  if (loading) return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, fallback);
  if (error) return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, errorFallback);
  return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, data && children(data));
}

// src/utils/for.tsx
var import_react11 = __toESM(require("react"));
function For({ each: items, children }) {
  return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, items.map((item, index) => /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, { key: index }, children(item, index))));
}

// src/utils/lazyload.tsx
var import_react12 = __toESM(require("react"));
function LazyLoad({ importFn, fallback }) {
  const LazyComponent = (0, import_react12.lazy)(importFn);
  return /* @__PURE__ */ import_react12.default.createElement(import_react12.Suspense, { fallback }, /* @__PURE__ */ import_react12.default.createElement(LazyComponent, null));
}

// src/utils/loading.tsx
var import_react13 = __toESM(require("react"));
function Loading({ isLoading, children, fallback }) {
  return isLoading ? fallback : /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, children);
}

// src/utils/maybe.tsx
var import_react14 = __toESM(require("react"));
function Maybe({ of: value, children }) {
  return value !== null && value !== void 0 ? /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, children(value)) : null;
}

// src/utils/repeat.tsx
var import_react15 = __toESM(require("react"));
function Repeat({ times, children }) {
  return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, Array.from({ length: times }).map((_, index) => children(index)));
}

// src/utils/show.tsx
var import_react16 = __toESM(require("react"));
function Show({ when, children }) {
  return when ? /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, children) : null;
}

// src/utils/switch.tsx
var import_react17 = __toESM(require("react"));
function Switch({ value, children }) {
  return import_react17.default.Children.toArray(children).find(
    (child) => child.props.match === value
  ) || null;
}

// src/utils/toggle.tsx
var import_react18 = __toESM(require("react"));
function Toggle({ value, children }) {
  return import_react18.default.Children.toArray(children).find(
    (child) => child.props.match === value
  );
}

// src/utils/trycatch.tsx
var import_react19 = __toESM(require("react"));
var TryCatch = ({ children }) => {
  try {
    return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, children);
  } catch (e) {
    return /* @__PURE__ */ import_react19.default.createElement("div", null, "Error");
  }
};

// src/utils/unless.tsx
var import_react20 = __toESM(require("react"));
function Unless({ when, children }) {
  return !when ? /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, children) : null;
}

// src/utils/with.tsx
var import_react21 = __toESM(require("react"));
function With({ value, children }) {
  return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, children(value));
}

// src/utils/withstate.tsx
var import_react22 = __toESM(require("react"));
var WithState = ({
  initialState,
  children
}) => {
  const [state, setState] = import_react22.default.useState(initialState);
  return /* @__PURE__ */ import_react22.default.createElement(import_react22.default.Fragment, null, children(state, setState));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Any,
  Choose,
  Defer,
  Fallback,
  Fetch,
  For,
  Include,
  LazyLoad,
  Loading,
  Maybe,
  Repeat,
  Show,
  Some,
  Switch,
  Toggle,
  TryCatch,
  Unless,
  When,
  With,
  WithProps,
  WithState,
  useDebounce,
  useThrottle
});
