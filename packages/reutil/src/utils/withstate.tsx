import React from "react";

interface IWithStateProps<T> {
  initialState: T;
  children: (
    state: T,
    setState: React.Dispatch<React.SetStateAction<T>>
  ) => React.ReactNode;
}

export const WithState = <T,>({
  initialState,
  children,
}: IWithStateProps<T>) => {
  const [state, setState] = React.useState<T>(initialState);
  return <>{children(state, setState)}</>;
};
