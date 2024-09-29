---
title: "React Utilities"
description: "A comprehensive guide to essential React patterns and utility components, including Show, Fetch, Loading, Switch, and more. Explore practical implementations and best practices for building efficient React applications."
---

# React Utils

[![npm version](https://img.shields.io/npm/v/reutil.svg)](https://www.npmjs.com/package/reutil) [![npm downloads](https://img.shields.io/npm/dm/reutil.svg)](https://www.npmjs.com/package/reutil) [![GitHub stars](https://img.shields.io/github/stars/broisnischal/reutil.svg?style=social)](https://github.com/broisnischal/reutil) [![License](https://img.shields.io/npm/l/reutil.svg)](https://github.com/broisnischal/reutil/blob/main/LICENSE)

Welcome to React Utils, a comprehensive collection of essential React **patterns** and _utility_ components designed to streamline your React development process.

React Utils provides a set of powerful, reusable components and patterns that solve common challenges in React development. By using these utilities, you can:

- Simplify code & productivity
- Improve performance & Enhance readability
- Easy copy and paste
- Reduce boilerplate
- Focus on core application logic
- Utilize optimized components
- Use declarative patterns

## Installation

To start using reutil in your project, you can install it via [npm](https://www.npmjs.com/package/reutil) or [yarn](https://yarnpkg.com/package/reutil):

```bash
npm install reutil
```

## Usage

To use a utility in your project, you need to import it from the `reutil` package.

```tsx
import { Show } from "reutil";

export default function MyComponent() {
  return <Show condition={true}>Hello, world!</Show>;
}
```

## Utilities

- [Show](/utils/show)
- [For](/utils/for)
- [Some](/utils/some)
- [Any](/utils/any)
- [Fetch](/utils/fetch)
- [Loading](/utils/loading)
- [Switch](/utils/switch)
- [Toggle](/utils/toggle)
