var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/hooks/useDebounce.ts
import { useEffect, useState } from "react";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
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
import { useCallback as useCallback2, useRef } from "react";
function useThrottle(value, limit) {
  const lastRun = useRef(Date.now());
  return useCallback2(() => {
    const now = Date.now();
    if (now - lastRun.current >= limit) {
      lastRun.current = now;
      return value;
    }
  }, [value, limit]);
}

// src/utils/withprops.tsx
import React4, { useContext } from "react";
var PropsContext = React4.createContext(null);
function useProps() {
  const props = useContext(PropsContext);
  if (props === null) {
    throw new Error("useProps must be used within a WithProps component");
  }
  return props;
}
var WithProps = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React4.createElement(PropsContext.Provider, { value: props }, children(useProps()));
};

// src/utils/choose.tsx
import React5 from "react";
function Choose({ children }) {
  return React5.Children.toArray(children).find(
    (child) => child.props.condition
  ) || null;
}
function When({ condition, children }) {
  return condition ? /* @__PURE__ */ React5.createElement(React5.Fragment, null, children) : null;
}

// src/utils/defer.tsx
import React6, { useEffect as useEffect2, useState as useState2 } from "react";
var Defer = ({ wait = 0, children }) => {
  const [isReady, setIsReady] = useState2(wait === 0);
  useEffect2(() => {
    if (wait > 0) {
      const timer = setTimeout(() => setIsReady(true), wait);
      return () => clearTimeout(timer);
    }
  }, [wait]);
  return isReady ? /* @__PURE__ */ React6.createElement(React6.Fragment, null, children) : null;
};

// src/utils/fallback.tsx
import React7 from "react";
var Fallback = ({ primary, fallback }) => {
  try {
    return /* @__PURE__ */ React7.createElement(React7.Fragment, null, primary);
  } catch (e) {
    return /* @__PURE__ */ React7.createElement(React7.Fragment, null, fallback);
  }
};

// src/utils/fetch.tsx
import React8, { useState as useState3, useEffect as useEffect3 } from "react";
function Fetch({
  url,
  children,
  fallback,
  errorFallback
}) {
  const [data, setData] = useState3(null);
  const [loading, setLoading] = useState3(true);
  const [error, setError] = useState3(false);
  useEffect3(() => {
    fetch(url).then((response) => response.json()).then(setData).catch(() => setError(true)).finally(() => setLoading(false));
  }, [url]);
  if (loading) return /* @__PURE__ */ React8.createElement(React8.Fragment, null, fallback);
  if (error) return /* @__PURE__ */ React8.createElement(React8.Fragment, null, errorFallback);
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, data && children(data));
}

// src/utils/for.tsx
import React9 from "react";
function For({ each: items, children }) {
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, items.map((item, index) => /* @__PURE__ */ React9.createElement(React9.Fragment, { key: index }, children(item, index))));
}

// src/utils/lazyload.tsx
import React10, { lazy, Suspense } from "react";
function LazyLoad({ importFn, fallback }) {
  const LazyComponent = lazy(importFn);
  return /* @__PURE__ */ React10.createElement(Suspense, { fallback }, /* @__PURE__ */ React10.createElement(LazyComponent, null));
}

// src/utils/loading.tsx
import React11 from "react";
function Loading({ isLoading, children, fallback }) {
  return isLoading ? fallback : /* @__PURE__ */ React11.createElement(React11.Fragment, null, children);
}

// src/utils/maybe.tsx
import React12 from "react";
function Maybe({ of: value, children }) {
  return value !== null && value !== void 0 ? /* @__PURE__ */ React12.createElement(React12.Fragment, null, children(value)) : null;
}

// src/utils/repeat.tsx
import React13 from "react";
function Repeat({ times, children }) {
  return /* @__PURE__ */ React13.createElement(React13.Fragment, null, Array.from({ length: times }).map((_, index) => children(index)));
}

// src/utils/show.tsx
import React14 from "react";
function Show({ when, children }) {
  return when ? /* @__PURE__ */ React14.createElement(React14.Fragment, null, children) : null;
}

// src/utils/switch.tsx
import React15 from "react";
function Switch({ value, children }) {
  return React15.Children.toArray(children).find(
    (child) => child.props.match === value
  ) || null;
}

// src/utils/toggle.tsx
import React16 from "react";
function Toggle({ value, children }) {
  return React16.Children.toArray(children).find(
    (child) => child.props.match === value
  );
}

// src/utils/trycatch.tsx
import React17 from "react";
var TryCatch = ({ children }) => {
  try {
    return /* @__PURE__ */ React17.createElement(React17.Fragment, null, children);
  } catch (e) {
    return /* @__PURE__ */ React17.createElement("div", null, "Error");
  }
};

// src/utils/unless.tsx
import React18 from "react";
function Unless({ when, children }) {
  return !when ? /* @__PURE__ */ React18.createElement(React18.Fragment, null, children) : null;
}

// src/utils/with.tsx
import React19 from "react";
function With({ value, children }) {
  return /* @__PURE__ */ React19.createElement(React19.Fragment, null, children(value));
}

// src/utils/withstate.tsx
import React20 from "react";
var WithState = ({
  initialState,
  children
}) => {
  const [state, setState] = React20.useState(initialState);
  return /* @__PURE__ */ React20.createElement(React20.Fragment, null, children(state, setState));
};
export {
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
};
