import React from 'react';

interface SomeProps<T> {
    items: T[];
    condition: (item: T) => boolean;
    children: React.ReactNode;
}
/**
 * Some is a utility component that renders its children if the condition is true.
 * @param items - The array of items to check.
 * @param condition - The condition to check.
 * @param children - The children to render if the condition is true.
 * @returns The children if the condition is true, otherwise null.
 */
declare function Some<T>({ items, condition, children }: SomeProps<T>): React.JSX.Element | null;

interface IAnyProps<T> {
    items: T[];
    condition: (item: T) => boolean;
    children: (item: T, index: number) => React.ReactNode;
}
declare function Any<T>({ items, condition, children }: IAnyProps<T>): React.JSX.Element;

interface IncludeProps<T> {
    items: T[];
    values: T[];
    children: (item: T, index: number) => React.ReactNode;
}
declare function Include<T>({ items, values, children, }: IncludeProps<T>): React.JSX.Element;

declare const _default: {
    Some: typeof Some;
    Any: typeof Any;
    Include: typeof Include;
};

export { _default as default };
