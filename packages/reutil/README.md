# [reutil](https://reutil.netlify.app/)

[![npm version](https://img.shields.io/npm/v/reutil.svg)](https://www.npmjs.com/package/reutil) [![npm downloads](https://img.shields.io/npm/dm/reutil.svg)](https://www.npmjs.com/package/reutil) [![GitHub stars](https://img.shields.io/github/stars/broisnischal/reutil.svg?style=social)](https://github.com/broisnischal/reutil) [![License](https://img.shields.io/npm/l/reutil.svg)](https://github.com/broisnischal/reutil/blob/main/LICENSE)

A collection of essential React patterns and utility components, inspired by simple and composable patterns. [docs](https://reutil.netlify.app/)

## Installation

```bash
npm install reutil
```

Here are some examples of how to use the components:

#### LazyLoad

```tsx
import { LazyLoad } from "reutil";

export default function App() {
  return (
    <LazyLoad
      importFn={() => import("./MyComponent")}
      fallback={<div>Loading...</div>}
    >
      <MyComponent />
    </LazyLoad>
  );
}
```

#### Repeat

```tsx
import { Repeat } from "reutil";

export default function App() {
  return (
    <Repeat times={3}>
      {(index) => <div key={index}>Item {index + 1}</div>}
    </Repeat>
  );
}
```

#### TryCatch

```tsx
import { TryCatch } from "reutil";

export default function App() {
  const ErrorComponent = () => {
    throw new Error("This is a simulated error");
    return <div>This won't be rendered</div>;
  };

  <TryCatch>
    <ErrorComponent />
  </TryCatch>;
}
```

### Support

If you like the project, please consider supporting us by giving a ⭐️ on Github.

### Bugs

If you find a bug, please file an issue on our issue tracker on GitHub

## Contributing

If you'd like to contribute, please follow our [contribution](https://reutil.netlify.app/contributing) guidelines.

### License

reutil is open-source software licensed under the [MIT license](https://github.com/broisnischal/reutil/blob/main/LICENSE).
