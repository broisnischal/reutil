import React from 'react';

interface SomeProps<T> {
    items: T[];
    condition: (item: T) => boolean;
    children: React.ReactNode;
}
declare function Some<T>({ items, condition, children }: SomeProps<T>): React.JSX.Element | null;

declare const _default: {
    Some: typeof Some;
};

export { _default as default };
