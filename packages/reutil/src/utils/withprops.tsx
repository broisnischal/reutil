import React, { useContext } from "react";

const PropsContext = React.createContext<any>(null);

interface IWithPropsProps<T> {
  children: (props: T) => React.ReactNode;
  props: T;
}

function useProps<T>(): T {
  const props = useContext(PropsContext);
  if (props === null) {
    throw new Error("useProps must be used within a WithProps component");
  }
  return props as T;
}

export const WithProps = <T,>({ children, ...props }: IWithPropsProps<T>) => {
  return (
    <PropsContext.Provider value={props}>
      {children(useProps())}
    </PropsContext.Provider>
  );
};
