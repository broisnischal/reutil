import React, { ComponentType } from 'react';

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

declare function useDebounce<T>(value: T, delay: number): T;

declare function useThrottle<T>(value: T, limit: number): () => T | undefined;

interface IWithPropsProps<T> {
    children: (props: T) => React.ReactNode;
    props: T;
}
declare const WithProps: <T>({ children, ...props }: IWithPropsProps<T>) => React.JSX.Element;

interface IChooseProps {
    children: React.ReactNode;
}
interface IWhenProps {
    condition: boolean;
    children: React.ReactNode;
}
declare function Choose({ children }: IChooseProps): string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null;
declare function When({ condition, children }: IWhenProps): React.JSX.Element | null;

interface DeferProps {
    wait?: number;
    children: React.ReactNode;
}
declare const Defer: React.FC<DeferProps>;

interface FallbackProps {
    primary: React.ReactNode;
    fallback: React.ReactNode;
}
declare const Fallback: React.FC<FallbackProps>;

interface FetchProps<T> {
    url: string;
    children: (data: T) => React.ReactNode;
    fallback: React.ReactNode;
    errorFallback: React.ReactNode;
}
declare function Fetch<T>({ url, children, fallback, errorFallback, }: FetchProps<T>): React.JSX.Element;

interface IForProps<T> {
    each: T[];
    children: (item: T, index: number) => React.ReactNode;
}
declare function For<T>({ each: items, children }: IForProps<T>): React.JSX.Element;

interface LazyLoadProps {
    importFn: () => Promise<{
        default: ComponentType<any>;
    }>;
    fallback: React.ReactNode;
}
declare function LazyLoad({ importFn, fallback }: LazyLoadProps): React.JSX.Element;

interface ILoadingProps {
    isLoading: boolean;
    children: React.ReactNode;
    fallback: React.ReactNode;
}
declare function Loading({ isLoading, children, fallback }: ILoadingProps): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;

interface IMaybeProps<T> {
    of: T | null | undefined;
    children: (value: T) => React.ReactNode;
}
declare function Maybe<T>({ of: value, children }: IMaybeProps<T>): React.JSX.Element | null;

interface IRepeatProps {
    times: number;
    children: (index: number) => React.ReactNode;
}
declare function Repeat({ times, children }: IRepeatProps): React.JSX.Element;

interface IShowProps {
    when: boolean;
    children: React.ReactNode;
}
declare function Show({ when, children }: IShowProps): React.JSX.Element | null;

interface ISwitchProps<T> {
    value: T;
    children: React.ReactNode;
}
declare function Switch<T>({ value, children }: ISwitchProps<T>): string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null;

interface IToggleProps<T> {
    value: T;
    children: React.ReactNode;
}
declare function Toggle<T>({ value, children }: IToggleProps<T>): string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | undefined;

interface ITryCatchProps {
    children: React.ReactNode;
}
declare const TryCatch: React.FC<ITryCatchProps>;

interface IUnlessProps {
    when: boolean;
    children: React.ReactNode;
}
declare function Unless({ when, children }: IUnlessProps): React.JSX.Element | null;

interface IWithProps<T> {
    value: T;
    children: (value: T) => React.ReactNode;
}
declare function With<T>({ value, children }: IWithProps<T>): React.JSX.Element;

interface IWithStateProps<T> {
    initialState: T;
    children: (state: T, setState: React.Dispatch<React.SetStateAction<T>>) => React.ReactNode;
}
declare const WithState: <T>({ initialState, children, }: IWithStateProps<T>) => React.JSX.Element;

export { Any, Choose, Defer, Fallback, Fetch, For, Include, LazyLoad, Loading, Maybe, Repeat, Show, Some, Switch, Toggle, TryCatch, Unless, When, With, WithProps, WithState, useDebounce, useThrottle };
